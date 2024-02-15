const withMDX = require('@next/mdx')({
  extension: /\.mdx$/,
});

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // Other Next.js config options
});
