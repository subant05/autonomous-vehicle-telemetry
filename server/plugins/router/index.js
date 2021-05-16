module.exports = ()=>{
    const methods = {
        get: new Map(),
        post: new Map(),
        put: new Map(),
        delete: new Map(),
        head: new Map(),
        options: new Map(),
        trace: new Map(),
        patch: new Map(),
    }
    const paths = {...methods}
    const redirects = {...methods};

    function processRoute(url, req, res, next){
        paths[req.method.toLowerCase()].get(url).call(this,req, res,this)
    }

    function executeRoute(req, res, next){
        const method = req.method.toLowerCase()

        if(!(method in paths)){
            return;
        }
            
        if(paths[method].has(req.url) )
            processRoute.call(this, req.url, req, res,this)

        else if(redirects[method].has(req.url) || redirects[method].has("*"))
            processRoute.call(this, redirects[method].get(req.url) || redirects[method].get("*"), req, res,this)

        else{
            req.status = 404
            req.body="404 Error"
        }

        next()
            
    }

    return {
        add(method,path,cb){
            const lowerCaseMethod = method.toLowerCase()
            if(!(lowerCaseMethod in paths))
                throw Error(`${method} is not suppoted routes`)
                
            paths[lowerCaseMethod].set(path,cb)
            return this
        },
        redirect(method,redirectTo, path){
            if(!(method.toLowerCase() in paths))
                throw Error(`${method} is not suppoted for redirects`)

            redirects[method.toLowerCase()].set(redirectTo,path)
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