var path = require('path');

module.exports = {
  entry: './src/entry.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: { presets: ['react', 'es2015', 'stage-1'] }
        }]
      },
    ]
  },
  devServer: {
    host: 'localhost',
    port: 5000,
    historyApiFallback: true,
    contentBase: './dist',
    open: true,
    openPage: '', // <== Add this
  },
};
