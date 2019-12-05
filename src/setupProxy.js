const proxy = require("http-proxy-middleware");
module.exports  = (app)=>{
    
    app.use("/ajax",proxy({
        target:"https://webservice.juanpi.com",
        changeOrigin:true,
        pathRewrite:{
            "^/ajax":""
        }
    }))
    app.use("/api",proxy({
        target:"http://localhost:3000",
        changeOrigin:true,
        pathRewrite:{
            "^/api":""
        }
    }))
}