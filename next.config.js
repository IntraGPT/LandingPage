module.exports = {
  webpack(config) {
    config.module.rules.push(
      {
        test: /\.svg$/,
        use: [`@svgr/webpack`],
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'static/images/',
              publicPath: '_next/static/images/',
            },
          },
        ],
      },
    );

    return config;
  },
};
