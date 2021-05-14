module.export = ({unauthorizedRedirect="/"}={})=>{

    return {



        restful({req, res},next){
            if(!req.headers.cookie){
                /**
                 * res.statusCode=302
                 * res.setHeader('Location', `${unauthorizedRedirect}`)
                 */
                return next() // not cookies yet
            }

            // Will use to authenticate & update .... logic added later
            const cookieObject = {}
            req
            .headers
            .cookie
            .split(';')
            .forEach(function( cookie ) {
                const keyValues = cookie.split('=');
                cookieObject[keyValues[0].trim()] = decodeURI(keyValues[1]);
            });     
            

            // Object.keys(cookieObject).forEach(key=>res.cookie(`${key}`,`${cookieObject[key]}`,{ maxAge: 900000, httpOnly: false }))
            next(null, res)
        }
    }
}