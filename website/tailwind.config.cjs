const { content, ...config } = require('@theguild/tailwind-config');

module.exports = {
  ...config,
  content: [
    ...content,
    './node_modules/@theguild/components/dist/**/*.{js,mjs}',
  ],
};
