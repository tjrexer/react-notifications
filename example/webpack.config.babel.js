import webpack from 'webpack';
import path from 'path';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import pkg from '../package.json';

const ENV = process.env.NODE_ENV || 'development';
const DEV = ENV === 'development';
const PROD = ENV === 'production';
const HOT = process.argv.indexOf('--hot') !== -1;
const SOURCE_DIR = 'src';
const DEST_DIR = 'dist';
const PUBLIC_PATH = '/';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const sassLoader = {
  loader: 'sass-loader',
  options: {
    includePaths: [
      path.join(__dirname, 'node_modules')
    ],
    outputStyle: PROD ? 'compressed' : 'expanded'
  }
};

const hmr = HOT ? ['webpack-hot-middleware/client?reload=true'] : [];

const webpackConfig = {
  mode: 'development',
  entry: {
    app: hmr.concat([path.join(__dirname, SOURCE_DIR, 'app.js')])
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  output: {
    path: path.join(__dirname, DEST_DIR),
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    publicPath: (PROD ? `/${pkg.name}` : '') + PUBLIC_PATH
  },
  resolve: {
    modules: [path.join(__dirname, SOURCE_DIR), 'node_modules'],
    alias: {
      [`${pkg.name}$`]: path.join(__dirname, '../src/index.js'),
      [`${pkg.name}/src`]: path.join(__dirname, '../src')
    },
    extensions: ['.jsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'eslint-loader',
          options: {
            configFile: path.join(__dirname, '../.eslintrc'),
            failOnError: PROD,
            emitError: PROD
          }
        },
        enforce: 'pre'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['react-hot-loader/webpack', 'babel-loader']
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', sassLoader],
      },
      {
        test: /\.(png|jpg|gif|swf)$/,
        use: 'file-loader'
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\S+)?$/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin([DEST_DIR], {
      verbose: false
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(ENV)
      }
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.html')
    }),
    new webpack.LoaderOptionsPlugin({
      debug: DEV
    })
  ],
  node: {
    net: 'mock',
    dns: 'mock'
  },
  devtool: DEV ? '#cheap-eval-source-map' : false,
  stats: {
    children: false
  }
};

if (HOT) {
  webpackConfig.plugins = webpackConfig.plugins.concat([
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]);
}

if (!HOT) {
  webpackConfig.plugins = webpackConfig.plugins.concat([
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ]);
}

export default webpackConfig;
