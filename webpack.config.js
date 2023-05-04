const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  entry: [
    path.resolve(__dirname, 'src', 'index.js'), // this is the entry point for all our js
    path.resolve(__dirname, 'src', 'index.scss')    // this is the entry point for all our scss
  ],
  output: {
    path: path.join(__dirname, 'dist'), // bundled file in dist/
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/, // applies to js files
        use: ['babel-loader'], // transpiles your js
        exclude: /node_modules/, // don't transpile node modules
      },
      {
        test: /\.s?[ac]ss$/, // applies to css/scss/sass files
        use: [
          MiniCssExtractPlugin.loader, // create bundled css file
          {
            loader: 'css-loader', // resolves @import statements
            options: { url: false } // don't resolve url() statements
          },
          'sass-loader', // compiles sass to css
        ]
      }
    ]
  },
  plugins: [new MiniCssExtractPlugin()]     // this is to reference the plug-ins we loaded in
};

module.exports = (env, argv) => {       // these help us set up if we are in development mode or production mode
  if (argv.mode === 'production') {
    config.devtool = 'source-map';
  } else {
    config.devtool = 'eval-source-map';
  }

  return config;
}