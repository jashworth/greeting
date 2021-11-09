import { Configuration } from "webpack";

const config: Configuration = {
  resolve: {
    extensions: [".ts", ".js"],
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: "babel-loader",
          options: {
            babelrc: false,
            plugins: ["istanbul"],
            presets: ["@babel/preset-typescript"],
          },
        },
      },
    ],
  },
};

module.exports = config;
