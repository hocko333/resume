const { resolve } = require('path')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const svgoConfig = require('./svgo.config')

const config = {
  entry: {
    main: './src/index.tsx',
  },
  output: {
    filename: 'js/[name].js',

    path: resolve(process.cwd(), 'dist'),

    // publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: [{ loader: '@svgr/webpack', options: { icon: true } }],
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'html-loader',
          },
          {
            loader: 'markdown-loader',
          },
        ],
      },
      {
        test: /\.(jpg|png|gif|bmp|jpeg)$/,
        use: {
          loader: "url-loader",
          options: {
            name: '[name][hash:9].[ext]', // 对打包之后的图片名称进行加密
            esModule: false,
            limit: 8 * 1024, // 将小于8kb的图片用based64处理
          }
        },
        type: 'javascript/auto' //转换 json 为 js
      },
      {
        test: /\.(htm|html)$/,
        loader: 'html-withimg-loader'
      }
    ],
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

  node: {
    // process: true,
  },

  plugins: [new ForkTsCheckerWebpackPlugin()],
}

module.exports = config
