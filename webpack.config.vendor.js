const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');

module.exports = (env) => {
    return [{
        mode: 'development', //? development   production
        stats: {
            modules: false
        },
        resolve: {
            extensions: ['.js'],
        },
        entry: {
            vendor: [
                'event-source-polyfill',
                'isomorphic-fetch',
            ],
        },
        externals: {
            jquery: 'jQuery',
            'vue': 'Vue',
            'vue-router': 'VueRouter',
            'bootstrap.css': 'bootstrap.css',
            'bootstrap': 'bootstrap',
        },
        devtool: 'source-map', //? cheap-module-source-map   source-map
        module: {
            rules: [{
                test: /\.(png|woff|woff2|eot|ttf|svg)(\?|$)/,
                use: 'url-loader?limit=100000'
            }]
        },
        output: {
            path: path.join(__dirname, 'wwwroot', 'dist'),
            publicPath: 'dist/',
            filename: '[name].js',
            library: '[name]_[hash]'
        },
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery'
            }), // Maps these identifiers to the jQuery package (because Bootstrap expects it to be a global variable)
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('development'),
            }),
            new webpack.DllPlugin({
                path: path.join(__dirname, 'wwwroot', 'dist', '[name]-manifest.json'),
                name: '[name]_[hash]'
            }),
            new WebpackParallelUglifyPlugin({
                uglifyJS: {
                    output: {
                        beautify: true, //不需要格式化
                        comments: false //不保留注释
                    },
                    compress: {
                        warnings: false, // 在UglifyJs删除没有用到的代码时不输出警告
                        drop_console: false, // 不删除所有的 `console` 语句，可以兼容ie浏览器
                        collapse_vars: true, // 内嵌定义了但是只用到一次的变量
                        reduce_vars: true // 提取出出现多次但是没有定义成变量去引用的静态值
                    }
                }
            })
        ]
    }];
};