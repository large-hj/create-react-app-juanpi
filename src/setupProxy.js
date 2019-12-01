const proxy = require("http-proxy-middleware");
module.exports  = (app)=>{
    app.use("/ajax",proxy({
        target:"https://webservice.juanpi.com",
        changeOrigin:true,
        pathRewrite:{
            "^/ajax":""
        }
    }))
}