const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, "template/index.html"),
    filename: "./index.html"
});
module.exports = {
//     entry: path.join(__dirname, "./src/index.js"),
//     output: {
//         path: path.join(__dirname, "./dist"),
//         filename: "bundle.js"
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.(js|jsx)$/,
//                 exclude: /node_modules/,
//                 use: {
//                   loader: "babel-loader",
//                   options: {
//                     presets: ['babel-preset-env']
//                   }
//                 }
//             },
//             {
//                 test: /\.css$/,
//                 use: ["style-loader", "css-loader"]
//             }
//         ]
//     },
//     plugins: [htmlWebpackPlugin],
//     resolve: {
//         extensions: [".js", ".jsx"]
//     },
//     devServer: {
//         port: 3001
//     }
// };
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
    publicPath: '/dist'
  },
  devServer: {
    compress: true,
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}
