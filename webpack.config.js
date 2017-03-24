
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ENTRY_FILE = path.resolve(__dirname, 'client', 'index.js');
const BUILD_DIR = path.resolve(__dirname, 'dist');
const OUTPUT_FILE = path.resolve(__dirname, 'dist');
const CLIENT_BASE_DIR = path.resolve(__dirname, 'client');

const config = {
	entry: [
		'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
  		'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
  		'react-hot-loader/patch', // RHL patch
		ENTRY_FILE
	],
	output: {
		path: BUILD_DIR,
		filename: 'build.js'
	},
	module: {
		loaders: [
			{ test: /\.js?/, include: CLIENT_BASE_DIR, loaders: ['react-hot-loader/webpack', 'babel-loader'] },
			{ test: /\.html?/, include: CLIENT_BASE_DIR, loaders: ['react-hot-loader/webpack', 'html-loader'] },
			{ test: /\.png$/, include: CLIENT_BASE_DIR, loader: 'file-loader?name=/images/[name].[ext]' },
			{ test: /\.css$/, loaders: [ 'react-hot-loader/webpack',  "style-loader" , "css-loader" ] },
			{ test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?name=/fonts/[name].[ext]&limit=10000&mimetype=application/font-woff' }, //
      		{ test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?name=/fonts/[name].[ext]&limit=10000&mimetype=application/octet-stream' },
      		{ test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?name=/fonts/[name].[ext]' }, //
      		{ test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?name=/fonts/[name].[ext]&limit=10000&mimetype=image/svg+xml'}//
		] 
	},
	plugins: [
		new HtmlWebpackPlugin({
			inject: true,
			template: path.resolve(CLIENT_BASE_DIR, 'index.html')
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.ProvidePlugin({
	      $: 'jquery',
	      jQuery: 'jquery',
	      'window.jQuery': 'jquery'
	    })
	],
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 8080,
		hot: true
	}
};

module.exports = config;