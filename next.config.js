module.exports = {
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(svg)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100,
          publicPath: '/_next/static',
          outputPath: `${!!options.isServer ? '../' : ''}static/`,
          esModule: false,
        },
      },
    });

    return config;
  },
};
