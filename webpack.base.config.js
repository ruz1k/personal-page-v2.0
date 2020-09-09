const path = require("path");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const PATHS = {
  src: path.join(__dirname, "./src"),
  dist: path.join(__dirname, "./dist"),
  assets: "assets/",
};

module.exports = {
  externals: {
    paths: PATHS,
  },

  entry: {
    app: PATHS.src,
  },
  output: {
    filename: `${PATHS.assets}js/[name].js`,
    path: PATHS.dist,
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: "/node_modules/",
      },
      {
        test: /\.(jpg|jpeg|gif|svg|png)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
        },
      },
      {
        test: /\.sass$/,
        use: [
          "style-loader",
          miniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {sourceMap: true},
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              plugins: [
                require("autoprefixer"),
                require("css-mqpacker"),
                require("cssnano")({
                  preser: [
                    "default",
                    {
                      discrdComments: {
                        removeall: true,
                      },
                    },
                  ],
                }),
              ],
            },
          },
          {
            loader: "sass-loader",
            options: {sourceMap: true},
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          miniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {sourceMap: true},
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              plugins: [
                require("autoprefixer"),
                require("css-mqpacker"),
                require("cssnano")({
                  preser: [
                    "default",
                    {
                      discrdComments: {
                        removeall: true,
                      },
                    },
                  ],
                }),
              ],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new miniCssExtractPlugin({
      filename: `${PATHS.assets}css/[name].css`,
    }),
    new HtmlWebpackPlugin({
      hash: false,
      template: `${PATHS.src}/index.html`,
      filename: "./index.html",
    }),
  ],
}