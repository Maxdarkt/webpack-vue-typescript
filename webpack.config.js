const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

let config = {
    mode: 'production',
    entry: './src/main.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'main.js'
    },
    resolve: {
        extensions: [ '.js', '.ts', '.vue']
    },
    devServer: {
        client: {
            overlay: true,
          },
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                    options: {
                        appendTsSuffixTo: [/\.vue$/]
                    }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.html$/,
                loader: 'vue-template-loader',
                // We don't want to pass `src/index.html` file to this loader.
                exclude: /index.html/,
                options: {
                    transformToRequire: {
                      img: 'src'
                    }
                }
            }
        ]
    },
    plugins : [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: "index.html"
        }),
    ]
}

module.exports = (env) => {
    if(env.development){ // si mode dev
        config.mode = 'development'
        config.devtool = 'eval-source-map'
    
    } else { // si mode prod
    }
    console.log(config.mode)
    return config
}
