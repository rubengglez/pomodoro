const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	output: {
		path: path.resolve(__dirname, 'dist/')
	},
	entry: {
		main: './src/index.jsx'
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	devtool: 'inline-source-map',
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'src/index.html',
			hash: true
		}),
		new MiniCSSExtractPlugin()
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react']
					}
				}
			},
			{
				test: /\.scss$/,
				loader: [MiniCSSExtractPlugin.loader, 'css-loader', 'sass-loader']
			}
		]
	},
	devServer: {
		port: 9000,
		contentBase: path.join(__dirname, 'dist'),
		host: '0.0.0.0'
	}
}
