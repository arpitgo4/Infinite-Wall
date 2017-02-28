
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
		ENTRY_FILE
	],
	output: {
		path: BUILD_DIR,
		filename: 'build.js'
	},
	module: {
		loaders: [
			{ test: /\.js?/, loaders: ['babel-loader'], include: path.join(__dirname, 'client') },
			{ test: /\.html?/, include: CLIENT_BASE_DIR, loaders: ['html-loader'] }
		] 
	},
	plugins: [
		new HtmlWebpackPlugin({
			inject: true,
			template: path.resolve(CLIENT_BASE_DIR, 'index.html')
		}),
		new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 3000,
		hot: true
	}
};

module.exports = config;