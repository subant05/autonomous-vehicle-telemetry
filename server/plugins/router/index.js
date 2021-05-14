module.exports = ()=>{
    const paths = new Map()
    const redirects = new Map();

    function processRoute(url, req, res, next){
        paths.get(url).call(this,req, res,this)
    }

    function executeRoute(req, res, next){
        if(paths.has(req.url) )
            processRoute.call(this, req.url, req, res,this)

        else if(redirects.has(req.url) || redirects.has("*"))
            processRoute.call(this, redirects.get(req.url) || redirects.get("*"), req, res,this)

        else{
            req.status = 404
            req.body="404 Error"
        }

        next()
            
    }

    return {
        add(path,cb){
            paths.set(path,cb)
            return this
        },
        redirect(redirectTo, path){
            redirects.set(redirectTo,path)
            return this
        },
        restful({req,res}, next){
            if (req.url.endsWith("favicon.ico")) {
                res.status = 204;
            } else
                executeRoute.call(this, req, res, next)
        }
    }
}