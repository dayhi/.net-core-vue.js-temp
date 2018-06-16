const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;
const bundleOutputDir = './wwwroot/dist';
const {
    VueLoaderPlugin
} = require('vue-loader');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = (env) => {

    return [{
        mode: 'production',
        stats: {
            modules: false
        },
        context: __dirname,
        resolve: {
            extensions: ['.js', '.ts'],
        },
        entry: {
            'main': './ClientApp/boot.ts'
        },
        devtool: 'cheap-module-source-map',
        externals: {
            jquery: 'jQuery',
            'vue': 'Vue',
            'vue-router': 'VueRouter',
            'vuex': 'Vuex',
            'bootstrap.css': 'bootstrap.css',
            'bootstrap': 'bootstrap',
        },
        module: {
            rules: [{
                    test: /\.vue\.html$/,
                    include: /ClientApp/,
                    loader: 'vue-loader',
                    options: {
                        loaders: {
                            js: 'awesome-typescript-loader?silent=true'
                        }
                    }
                },
                {
                    test: /\.ts$/,
                    include: /ClientApp/,
                    use: 'awesome-typescript-loader?silent=true'
                },
                {
                    test: /\.css$/,
                    use: [MiniCssExtractPlugin.loader, 'css-loader']
                },
                {
                    test: /\.(png|jpg|jpeg|gif|svg)$/,
                    use: 'url-loader?limit=25000'
                }
            ]
        },
        output: {
            path: path.join(__dirname, bundleOutputDir),
            filename: '[name].js',//[name].[chunkHash:8].js
            publicPath: 'dist/'
        },
        plugins: [
            new VueLoaderPlugin(),
            new CheckerPlugin(),
            new webpack.DefinePlugin({
                'process.env': {
                    'process.env.NODE_ENV': JSON.stringify('production'),
                }
            }),
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
                'window.$': 'jquery'
            }),
            new webpack.DllReferencePlugin({
                context: __dirname,
                manifest: require('./wwwroot/dist/vendor-manifest.json')
            }),
            new MiniCssExtractPlugin({
                filename: '[name].css',
                chunkFilename: "[id].css"
            }),
        ],
        optimization: {
            minimizer: [
                new UglifyJsPlugin({
                    cache: true,
                    parallel: true,
                    sourceMap: false
                }),
                new OptimizeCSSAssetsPlugin({})
            ],
            splitChunks: {
                chunks: 'all'
            }
        },
    }];
};