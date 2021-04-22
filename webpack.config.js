const webpack = require('webpack');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

const nodeEnv = (process.env.NODE_ENV !== 'production') ? 'development' : 'production';

module.exports = function(_env, argv) {
	const isProduction = argv.mode === "production" ? true : false;

	return {
		entry: [
			'./resources/js/pta.js',
		],

		output: {
			chunkFilename: 'static/js/[chunkhash].js',
			filename: 'static/js/pta.js',
			path: path.resolve(__dirname, 'public'),
			publicPath: '/',
		},

		plugins: [
			// Gives access to `process`.env.
			new webpack.ProvidePlugin({
				process: 'process/browser',
			}),

			// Google Workbox Manifest Injection into the service worker.
			new InjectManifest({
				compileSrc: true,
				swDest: 'serviceWorker.js',
				swSrc: './resources/js/serviceWorker.js',
				maximumFileSizeToCacheInBytes: 5 * 1048576,
				additionalManifestEntries: [
					// Adds the root page to be precached.
					{
						url: '/',
						revision: null,
					},
				],
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
							options: {
								cacheDirectory: true,
								cacheCompression: false,
							}
						}
					]
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
										]
									]
								}
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