import webpack from 'webpack';
import path from 'path';

export default {
  devtool: 'source-map',
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true,
      noInfo: false
    }),
    // minify JS
    new webpack.optimize.UglifyJsPlugin(),
    // Eliminate duplicate packages when generating bundle
    new webpack.optimize.DedupePlugin()
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader']},
      {test: /\.css$/, loaders: ['style-loader', 'css-loader']}
    ]
  }
}
