
//const port = process.env.port || process.env.npm_config_port || 8088 
module.exports = {
    configureWebpack:{
        devtool: 'source-map'
    },
    devServer:{
        port: 80,
        // host: '10.10.14.125',
        hot: true,
        disableHostCheck: true,
    }
}