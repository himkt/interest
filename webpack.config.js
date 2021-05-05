const path = require('path');


module.exports = {
  entry: './src/index.tsx',
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.js', '.tsx']
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  optimization: {
    minimize: false,
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
              ]
            }
          },
          {
            loader: 'ts-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.png$/,
        use: ['url-loader']
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: {
      index: 'index.html'
    },
    port: '3000'
  }
}
