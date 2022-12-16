const webpack = require('webpack');
const isLocal = process.env.NODE_ENV === 'local';
const dotenv = require('dotenv');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const smp = new SpeedMeasurePlugin();

dotenv.config({ path: path.join(__dirname, '../.env') });

module.exports = smp.wrap(
  merge(common, {
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',
    cache: {
      type: 'filesystem',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/i,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            cacheCompression: false,
            cacheDirectory: true,
            presets: [
              '@babel/preset-env',
              ['@babel/preset-react', { runtime: 'automatic' }],
              '@babel/preset-typescript',
            ],
            plugins: [
              [
                '@emotion',
                {
                  sourceMap: true,
                  autoLabel: 'dev-only',
                  labelFormat: '[local]',
                  cssPropOptimization: false,
                },
              ],
            ],
          },
        },
      ],
    },
  }),
);
