const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const smp = new SpeedMeasurePlugin();

module.exports = smp.wrap(
  merge(common, {
    mode: 'production',
    devtool: false,
    target: ['web', 'es5'],
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/i,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  useBuiltIns: 'usage',
                  corejs: {
                    version: 3,
                  },
                },
              ],
              [
                '@babel/preset-react',
                { runtime: 'automatic', importSource: '@emotion/react' },
              ],
              '@babel/preset-typescript',
            ],
            plugins: [
              [
                '@emotion',
                {
                  cssPropOptimization: true,
                },
              ],
            ],
          },
        },
      ],
    },
    plugins: [new ForkTsCheckerWebpackPlugin()],
  }),
);
