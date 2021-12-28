/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const siteConfig = {
  title: 'sofa',
  tagline:
    'Create a fully RESTful and configurable API gateway from a GraphQL API',
  url: 'https://sofa-api.com',
  baseUrl: '/',

  // Used for publishing and more
  projectName: 'sofa',
  organizationName: 'Urigo',

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { doc: 'index', label: 'Documentation' },
    {
      href: 'https://github.com/urigo/sofa',
      label: 'Github',
    },
  ],

  headerIcon: 'img/sofa-dark.svg',
  footerIcon: 'img/sofa-gray.svg',
  favicon: 'img/favicon/favicon.png',

  colors: {
    primaryColor: '#e535ab',
    secondaryColor: '#B23D32',
  },

  copyright: `Copyright © ${new Date().getFullYear()} The Guild`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Stats
  // gaTrackingId: 'UA-125180910-2',

  // Open Graph and Twitter card images.
  ogImage: 'img/og-image.jpg',
  twitterImage: 'img/og-image.jpg',

  // Show documentation's last contributor's name.
  enableUpdateBy: true,

  // Show documentation's last update time.
  enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: 'https://github.com/Urigo/sofa',
  scripts: [
    {
      src:
        'https://the-guild.dev/static/crisp.js',
      async: true,
    },
  ],
};

module.exports = siteConfig;
