module.exports = {

  entry: "./src/app.js",
  output: {
    filename: "public/bundle.js"
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: /src/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },

  devtool: "eval-source-map"
};
