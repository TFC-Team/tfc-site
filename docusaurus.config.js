const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

module.exports = {
  title: 'Task Force Canada (TFC)',
  tagline: 'Canadian Armed Forces realism & conceptual assets for Arma 3',
  favicon: 'img/tfc-logo.png',

  // Update for final deployment:
  url: 'https://taskforcecanada.ca',
  baseUrl: '/',

  organizationName: 'TFC-Team',
  projectName: 'tfc-site',

  markdown: {
    hooks: {
      onBrokenMarkdownImages: 'warn',
      onBrokenMarkdownLinks: 'warn',
    }
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: 'docs',
          editUrl: 'https://github.com/TFC-Team/tfc-site/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/TFC-Team/tfc-site/tree/main/',
          blogTitle: 'News',
          blogDescription: 'Announcements, patch notes, and project updates for Task Force Canada (TFC).',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig: ({
    navbar: {
      title: 'TFC',
      logo: {
        alt: 'Task Force Canada Logo',
        src: 'img/tfc-logo.png',
      },
      items: [
        { to: '/', label: 'Home', position: 'left' },
        { to: '/showcase', label: 'Showcase', position: 'left' },
        { to: '/docs/intro', label: 'Docs', position: 'left' },
        { to: '/blog', label: 'News', position: 'left' },
        { to: '/community', label: 'Community', position: 'left' },
        { to: '/about', label: 'About', position: 'left' },
        { href: 'https://discord.gg/tz9p95qA', label: 'Discord', position: 'right' },
        { href: 'https://github.com/TFC-Team', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'Install', to: '/docs/install' },
            { label: 'Getting Started', to: '/docs/getting-started' },
            { label: 'FAQ', to: '/docs/faq' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'Discord', href: 'https://discord.gg/tz9p95qA' },
            { label: 'GitHub', href: 'https://github.com/TFC-Team' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'News', to: '/blog' },
            { label: 'About', to: '/about' },
          ],
        },
      ],
      copyright:
        `Copyright © ${new Date().getFullYear()} Task Force Canada (TFC). Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
  }),
};
