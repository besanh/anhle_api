import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/anhle_api/__docusaurus/debug',
    component: ComponentCreator('/anhle_api/__docusaurus/debug', 'b02'),
    exact: true
  },
  {
    path: '/anhle_api/__docusaurus/debug/config',
    component: ComponentCreator('/anhle_api/__docusaurus/debug/config', '33a'),
    exact: true
  },
  {
    path: '/anhle_api/__docusaurus/debug/content',
    component: ComponentCreator('/anhle_api/__docusaurus/debug/content', 'ceb'),
    exact: true
  },
  {
    path: '/anhle_api/__docusaurus/debug/globalData',
    component: ComponentCreator('/anhle_api/__docusaurus/debug/globalData', 'd33'),
    exact: true
  },
  {
    path: '/anhle_api/__docusaurus/debug/metadata',
    component: ComponentCreator('/anhle_api/__docusaurus/debug/metadata', '982'),
    exact: true
  },
  {
    path: '/anhle_api/__docusaurus/debug/registry',
    component: ComponentCreator('/anhle_api/__docusaurus/debug/registry', 'b59'),
    exact: true
  },
  {
    path: '/anhle_api/__docusaurus/debug/routes',
    component: ComponentCreator('/anhle_api/__docusaurus/debug/routes', '7a6'),
    exact: true
  },
  {
    path: '/anhle_api/blog',
    component: ComponentCreator('/anhle_api/blog', 'f96'),
    exact: true
  },
  {
    path: '/anhle_api/blog/archive',
    component: ComponentCreator('/anhle_api/blog/archive', 'd71'),
    exact: true
  },
  {
    path: '/anhle_api/blog/mie-tie',
    component: ComponentCreator('/anhle_api/blog/mie-tie', '2d7'),
    exact: true
  },
  {
    path: '/anhle_api/blog/tags',
    component: ComponentCreator('/anhle_api/blog/tags', 'd49'),
    exact: true
  },
  {
    path: '/anhle_api/blog/tags/anhle',
    component: ComponentCreator('/anhle_api/blog/tags/anhle', '478'),
    exact: true
  },
  {
    path: '/anhle_api/blog/tags/docusaurus',
    component: ComponentCreator('/anhle_api/blog/tags/docusaurus', '077'),
    exact: true
  },
  {
    path: '/anhle_api/blog/tags/facebook',
    component: ComponentCreator('/anhle_api/blog/tags/facebook', '4ba'),
    exact: true
  },
  {
    path: '/anhle_api/blog/tags/hello',
    component: ComponentCreator('/anhle_api/blog/tags/hello', 'b35'),
    exact: true
  },
  {
    path: '/anhle_api/blog/tags/mie-tie',
    component: ComponentCreator('/anhle_api/blog/tags/mie-tie', 'db6'),
    exact: true
  },
  {
    path: '/anhle_api/blog/welcome',
    component: ComponentCreator('/anhle_api/blog/welcome', 'c7f'),
    exact: true
  },
  {
    path: '/anhle_api/markdown-features-head-metadata',
    component: ComponentCreator('/anhle_api/markdown-features-head-metadata', 'a9b'),
    exact: true
  },
  {
    path: '/anhle_api/markdown-page',
    component: ComponentCreator('/anhle_api/markdown-page', '9c4'),
    exact: true
  },
  {
    path: '/anhle_api/search',
    component: ComponentCreator('/anhle_api/search', '4d1'),
    exact: true
  },
  {
    path: '/anhle_api/docs',
    component: ComponentCreator('/anhle_api/docs', 'a54'),
    routes: [
      {
        path: '/anhle_api/docs/category/tutorial---extras',
        component: ComponentCreator('/anhle_api/docs/category/tutorial---extras', '571'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/anhle_api/docs/category/tutorial---open-weather-api',
        component: ComponentCreator('/anhle_api/docs/category/tutorial---open-weather-api', 'e74'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/anhle_api/docs/intro',
        component: ComponentCreator('/anhle_api/docs/intro', '4ed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/anhle_api/docs/tutorial-basics/api-get-current-weather',
        component: ComponentCreator('/anhle_api/docs/tutorial-basics/api-get-current-weather', '41e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/anhle_api/docs/tutorial-basics/api-get-historical-weather',
        component: ComponentCreator('/anhle_api/docs/tutorial-basics/api-get-historical-weather', '544'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/anhle_api/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/anhle_api/docs/tutorial-extras/manage-docs-versions', 'dfc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/anhle_api/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/anhle_api/docs/tutorial-extras/translate-your-site', '1e5'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/anhle_api/',
    component: ComponentCreator('/anhle_api/', '7fa'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
