

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ENTRY_FILE = path.resolve(__dirname, 'client', 'index.js');
const BUILD_DIR = path.resolve(__dirname);
const OUTPUT_FILE = path.resolve(__dirname, 'dist');
const CLIENT_BASE_DIR = path.resolve(__dirname, 'client');

const config = {
	entry: ENTRY_FILE,
	output: {
		path: BUILD_DIR,
		filename: OUTPUT_FILE
	},
	module: {
		loaders: [
			{ test: /\.jsx?/, exclude: 'node_modules', loader: 'babel' },
			{ test: /\.js?/, exclude: 'node_modules', loader: 'babel' },
			{ test: /\.html?/, include: CLIENT_BASE_DIR, loader: 'html-loader' }
		] 
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: path.resolve(CLIENT_BASE_DIR, 'index.html')
		}),
		new webpack.HotModuleReplacementPlugin()
	]
};

module.exports = config;