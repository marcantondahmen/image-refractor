const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const pkg = require('./package.json');

const configCommon = {
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: ['ts-loader'],
				exclude: /node_modules/,
			},
			{
				test: /\.(less|css)$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
			},
			{
				test: /\.(woff2?|png)$/i,
				type: 'asset/resource',
				generator: {
					filename: (pathData) => {
						const name = path.basename(
							pathData.module.resourceResolveData.relativePath,
						);

						return `./assets/${name
							.replace('.var', '-var')
							.toLowerCase()}`;
					},
				},
			},
		],
	},
	optimization: {
		minimizer: [
			new TerserPlugin({
				extractComments: false,
			}),
		],
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
};

const configMain = (env, argv) => {
	const isDevMode = argv.mode === 'development';

	const config = Object.assign({}, configCommon, {
		entry: { 'image-refractor': './src/index.ts' },
		output: {
			filename: '[name].js',
			path: path.resolve(__dirname, 'dist'),
		},
		plugins: [
			new webpack.BannerPlugin({
				banner: () => {
					const year = new Date().getFullYear();

					return `Image Refractor ${pkg.version}, (c) ${year} ${pkg.author}, ${pkg.license} license`;
				},
				raw: false,
			}),
		],
	});

	if (isDevMode) {
		console.log('Development Mode');

		return Object.assign({}, config, {
			devServer: {
				static: './dist',
			},
			devtool: 'inline-source-map',
		});
	}

	console.log('Production Mode');

	return config;
};

const configDemo = (env, argv) => {
	const isDevMode = argv.mode === 'development';

	const config = Object.assign({}, configCommon, {
		entry: { demo: './demo/index.ts' },
		output: {
			filename: isDevMode ? '[name].[hash].js' : '[name].js',
			path: path.resolve(__dirname, 'dist'),
		},
		plugins: [
			new MiniCssExtractPlugin({
				filename: '[name].css',
			}),
			new HtmlWebpackPlugin({
				hash: true,
				template: 'demo/index.html',
				scriptLoading: 'defer',
				inject: 'head',
				minify: false,
				favicon: 'assets/favicon.svg',
			}),
			new CopyPlugin({
				patterns: [{ from: './assets/*.png', to: './' }],
			}),
		],
		resolve: {
			extensions: ['.ts', '.js'],
		},
	});

	return config;
};

module.exports = [configMain, configDemo];
