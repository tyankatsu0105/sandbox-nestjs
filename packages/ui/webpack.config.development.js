/* eslint-disable @typescript-eslint/no-var-requires */

const { merge } = require("webpack-merge");
const config = require("./webpack.config.base");

/* eslint-enable @typescript-eslint/no-var-requires */

/** @type import('webpack').Configuration */
module.exports = {
  ...merge(config, {
    // For Sentry
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },
        {
          test: /\.tsx?$/,
          loader: "ts-loader",
          exclude: /node_modules/,
          options: {
            configFile: "tsconfig.development.json",
          },
        },
      ],
    },
  }),
};
