'use strict';

var webpack = require("webpack");
var path = require('path');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
// PostCss dependencies
var autoprefixer = require('autoprefixer');
var precss       = require('precss');
var cssnano      = require('cssnano');
var extractCSS   = new ExtractTextPlugin('styles/[name].css');

// Webpack Plugins
var HtmlWebpackPlugin  = require('html-webpack-plugin');
var CopyWebpackPlugin  = require('copy-webpack-plugin');

module.exports = {

	devtool: 'source-map',
	debug: true,

  entry: {
  	vendor: path.resolve(__dirname, 'app/src/vendor.js'),
  	main: path.resolve(__dirname, 'app/src/index.js')
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].bundle.js',
  	sourceMapFilename: '[file].map'
  },

	resolve: {
    modulesDirectories: ['node_modules', 'app'],
		extensions: ['', '.js']
	},

	module: {
		loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.js$/, 
        loader: "eslint-loader", 
        exclude: /(node_modules)/,
        configFile: '.eslintrc'
      },
      {
        test:   /\.css$/,
        loader:  extractCSS.extract('style-loader', 'css-loader!postcss-loader?sourceMap')
      },
      // Loaders for Bootstrap fonts
      { test: /.(woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/, loader: 'url-loader?limit=100000' },
      // Image optimization
      { test: /\.(jpe?g|png|gif|svg)$/i, loader: 'url?limit=10000!img?progressive=true' }
    ]
	},

  postcss: function () {
    return {
      defaults: [autoprefixer, precss, cssnano]
    };
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({minimize: true}),
  	// generating html
  	new HtmlWebpackPlugin({ template: 'app/index.html', inject: false }),
    new CopyWebpackPlugin([ 
      //{ from: 'src/assets', to: 'assets' },
      { from: 'app/fixtures', to: 'fixtures'}
    ]),
    extractCSS
  ]
};