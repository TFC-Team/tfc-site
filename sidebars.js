/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
module.exports = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      items: ['install', 'getting-started', 'configuration'],
    },
    {
      type: 'category',
      label: 'How-To',
      items: ['howto-loadorder', 'howto-server', 'howto-troubleshooting'],
    },
    {
      type: 'category',
      label: 'Reference',
      items: ['faq', 'changelog', 'credits'],
    },
    {
      type: 'category',
      label: 'Showcase',
      items: [
        'showcase/armour',
        'showcase/air',
        'showcase/weapons',
        'showcase/gear',
      ],
    },
  ],
};
