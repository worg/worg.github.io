const withStylus = require('@zeit/next-stylus');
const poststylus = require('poststylus');

module.exports = withStylus({
  cssModules: true,
  stylusLoaderOptions: {
    use: [
      poststylus([
        require('autoprefixer')(),
        require('css-mqpacker')(),
      ]),
    ],
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 1000,
          publicPath: '/_next/static',
          outputPath: `${!!options.isServer ? '../' : ''}static/`,
        },
      },
    });

    return config;
  },
});
