import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import path from 'path';
import url from 'url';
import { createRequire } from 'module';

const {
  container: { ModuleFederationPlugin },
} = webpack;
const require = createRequire(import.meta.url);
const { dependencies: deps } = require('./package.json');
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export default {
  entry: path.resolve(__dirname, 'src/index.ts'),
  resolve: {
    alias: { '@': path.resolve(__dirname, 'src/') },
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      { test: /\.tsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'rootApp',
      filename: 'remoteEntry.js',
      shared: {
        ...deps,
        react: { singleton: true, eager: true, requiredVersion: deps['react'] },
        'react-dom': {
          singleton: true,
          eager: true,
          requiredVersion: deps['react-dom'],
        },
      },
    }),
    new ForkTsCheckerWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  devServer: {
    host: 'localhost',
    historyApiFallback: true,
    open: true,
    hot: true,
  },
};
