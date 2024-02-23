const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    css: {
        extract: false,
    },
    configureWebpack: {
        optimization: {
            splitChunks: false,
        },
        output: {
            filename: 'js/[name].js',
        }
    },
    transpileDependencies: true,
    devServer: {
        proxy:"http://rtgoods-revert-portal-new.beta1.fn/",
        allowedHosts: [
            "local.beta1.fn"
        ],
        client: {
            overlay: false
        }

    },
    publicPath: process.env.NODE_ENV === 'production'
        ? '/static/db/'
        : '/'
})
