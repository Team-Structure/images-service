const path = require('path')

module.exports = {
  entry: __dirname + '/client/src/index.jsx',
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.(jpg|jpeg|png)$/,
        use: {
          loader: 'file-loader'
        }
      }
    ]
  },
  output: {
    filename: 'bundle-images-service.js',
    path: __dirname + '/client/dist'
  },
  resolve: {
    modules: [
      path.join(__dirname, "src"), "node_modules"
    ],
    extensions: ['.js', '.jsx']
  }
};