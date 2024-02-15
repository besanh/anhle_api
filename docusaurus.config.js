// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AnhLe API',
  tagline: 'Tik Tac Toe',
  favicon: 'img/upload/logo-4la.png',

  // Set the production url of your site here
  url: 'https://besanh.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/anhle_api/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Besanh', // Usually your GitHub org/user name.
  projectName: 'anhle_api', // Usually your repo name.
  deploymentBranch: "publish",

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'vn'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
        calendar: 'gregory',
        path: 'en',
      },
      vn: {
        label: 'Vietnamese',
        direction: 'ltr',
        htmlLang: 'vi-VN',
        calendar: 'gregory',
        path: 'vn',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/theme-search-algolia').ThemeConfig} */
    ({
      metadata: [
        { name: 'keywords', content: 'api, open api, free api, personal blog' },
      ],
      headTags: [
        // Declare a <link> preconnect tag
        {
          tagName: 'link',
          attributes: {
            rel: 'preconnect',
            href: 'https://besanh.github.io/anhle_api',
          },
        },
        // Declare some json-ld structured data
        {
          tagName: 'script',
          attributes: {
            type: 'application/ld+json',
          },
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org/',
            '@type': 'Organization',
            name: 'AnhLe API',
            url: 'https://besanh.github.io/anhle_api/',
            logo: 'https://besanh.github.io/anhle_api/img/upload/logo-4la.png',
          }),
        },
      ],
      algolia: {
        // The application ID provided by Algolia
        appId: '3FE8TP66NL',

        // Public API key: it is safe to commit it
        apiKey: 'e201a989d5b8c4d77acc75bfd80dc17a',

        indexName: 'anhle-api',

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.com',

        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        replaceSearchResultPathname: {
          from: '/docs/', // or as RegExp: /\/docs\//
          to: '/',
        },

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',

        //... other Algolia params
      },
      // Replace with your project's social card
      image: 'img/logo-4la.png',
      navbar: {
        title: 'Home',
        logo: {
          alt: 'Home Logo',
          src: 'img/upload/logo-4la.png',
        },
        items: [
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/Besanh/open_api',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Besanh',
              },
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/in/anh-le-425055124/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/anhle32',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/channel/UCpft3wCbY_RegsPYaZeBdWA',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} AnhLe.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
