const { throws } = require("assert");
const http = require("http");
const WebSocket = require("ws");
const fs = require('fs')

class GreatRedSpot {
  constructor({ port = 8080 } = {}) {
    this.wsInbound = [];
    this.wsOutbound = [];
    this.restful = [];
    this.port = port;
    this.sockets=[]

    this.server = http.createServer(this.restfulHandler.bind(this));
    const WebSocketServer = new WebSocket.Server({ server: this.server });
    WebSocketServer.on("connection", (socket) => {
      this.sockets.push(socket);
      socket.on("message", this.wsInboundHandler.bind(this));
      socket.on("open", this.openHandler.bind(this));
      socket.on("close", this.closeHandler.bind(this, socket));
    });
  }

  openHandler() {
    console.log("connected");
    this.send(Date.now());
  }

  closeHandler(socket) {
    return function cb(){
        console.log("disconnected");
        this.sockets.splice(this.sockets.findIndex(s=>s===socket), 1)
    }
  }

  wsInboundHandler(message) {
    this.executePlugins(this.wsInbound, message);
  }

  restfulHandler(req, res) {
      this.executePlugins(this.restful, {req, res}, () => {
            if(!res.stream)
                res.end(res.body);
      });
  }

  send(data) {
    this.executePlugins(this.wsOutbound, data, () => this.sockets.forEach(socket=>socket.send(JSON.stringify(data))));
  }

  run(port) {
    this.server.listen(port || this.port);
  }

  use(plugins) {
    if (plugins.restful) this.restful.push(plugins.restful);
    if (plugins.wsInbound) this.wsInbound.push(plugins.wsInbound);
    if (plugins.wsOutbound) this.wsOutbound.unshift(plugins.wsOutbound);
  }

  renderHTML(req, res, file, cb=()=>{}) {
    res.stream = true
    fs.createReadStream(`${__dirname}/../../app/${file}`)
        .on('open', function () {
            res.status = 200
            this.pipe(res);
        })
        .on('error', function(err) {
            res.end(err);
        })
        .on("finish", function(){
            res.end()
        })
    cb()

  }

  executePlugins(plugins, data, final) {
    const iterator = (index) => {
      if (index === plugins.length) return final && final(data);

      plugins[index].call(this, data, (err, update) => {
        if (err) console.error(err);

        if (update) data = update;

        iterator.call(this, ++index);
      });
    };
    iterator(0);
  }
}

module.exports = function () {
  return new GreatRedSpot(...arguments);
};
