module.exports = {
    assetsDir: 'static',
    parallel: false,
    publicPath: './',
    lintOnSave: false,
    devServer: {
        hot: true, //自动保存
        open: true, //自动启动
        port: 8088, //默认端口号
        host: '0.0.0.0'
    }
}
