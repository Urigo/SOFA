module.exports = {
  target: 'node',
  mode: 'production',
  devtool: 'inline-source-map',
  entry: './example/index.ts',
  output: {
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.js', '.mjs'],
  },
  module: {
    rules: [
      { test: /\.ts?$/, loader: 'ts-loader' },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      },
    ],
  },
};
