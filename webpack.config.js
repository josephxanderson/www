const webpack = require('webpack');
const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

const nodeEnv = (process.env.NODE_ENV !== 'production') ? 'development' : 'production';

module.exports = function(_env, argv) {
	const isProduction = argv.mode === "production" ? true : false;

	return {
		entry: [
			'./resources/js/jxa.tsx',
		],

		output: {
			chunkFilename: 'static/js/[chunkhash].js',
			filename: 'static/js/jxa.js',
			path: path.resolve(__dirname, 'public'),
			publicPath: '/',
		},

		plugins: [
			// Gives access to `process`.env.
			new webpack.ProvidePlugin({
				process: 'process/browser',
			}),

			// Include other static assets in our build process.
			// That will include them in our manifest.
			new CopyPlugin({
				patterns: [
					{ from: 'resources/fonts', to: 'static/fonts' },
					{ from: 'resources/images', to: 'static/images' },
				],
			}),
		],

		module: {
			rules: [
				// JS / JSX files
				{
					test: /\.js$|jsx/,
					exclude: /node_modules/,
					use: [
						{
							loader: "babel-loader",
						},
					],
				},

				{
					test: /\.tsx?$/,
					exclude: /node_modules/,
					use: [
						{
							loader: 'babel-loader',
						},
						{
							loader: 'ts-loader',
						},
					],
				},

				// CSS / SASS / SCSS files
				{
					test: /\.(css|sass|scss)$/,
					use: [
						{
							loader: 'style-loader',
						},

						{
							loader: 'css-loader',
							options: {
								importLoaders: 2,
								sourceMap: true,
							},
						},

						{
							loader: 'postcss-loader',
							options: {
								postcssOptions: {
									plugins: [
										[
											require('autoprefixer'),
										],
									],
								},
							},
						},

						{
							loader: 'sass-loader',
							options: {
								sourceMap: true,
							},
						},
					],
				},
			],
		},
	};
}