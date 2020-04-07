module.exports = {
    title: 'Grand Central Apartments - Rules and Manual',
    tagline: 'Last updated 05/04/2020',
    url: 'https://batmanian.github.io/GrandDocs',
    baseUrl: '',
    favicon: 'img/favicon.ico',
    organizationName: 'Batmanian', // Usually your GitHub org/user name.
    projectName: 'GrandDocs', // Usually your repo name.
    themeConfig: {
        navbar: {
            title: 'Grand Central Apartments',
            logo: {
                alt: 'My Site Logo',
                src: 'img/motif.png',
            },
            links: [{
                    to: '/docs/definitions',
                    activeBasePath: 'docs',
                    label: 'Rules',
                    position: 'left',
                },
                {
                    to: '/docs/doc1',
                    activeBasePath: 'manual',
                    label: 'Manual',
                    position: 'left'
                },
                //{
                //    href: 'https://batmanian.github.io/GrandDocs/',
                //    label: 'GitHub',
                //    position: 'right',
                //},
            ],
        },
        footer: {
            style: 'dark',
            links: [{
                    title: 'About',
                    items: [{
                            label: '33-71C Spencer Street, Melbourne Plan of Subdivision PS331362S Owners Corporation',
                            //to: 'docs/doc1',
                        },
                        {
                            label: 'These documents are maintained by the Owners\' Corporation ',
                            //to: 'docs/doc2',
                        },
                    ],
                },
                //{
                //    title: 'Community',
                //    items: [{
                //            label: 'Stack Overflow',
                //            href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                //       },
                //        {
                //            label: 'Discord',
                //            href: 'https://discordapp.com/invite/docusaurus',
                //        },
                //    ],
                //},
                //{
                //    title: 'Social',
                //    items: [{
                //            label: 'Blog',
                //            to: 'blog',
                //        },
                //        {
                //            label: 'GitHub',
                //            href: 'https://github.com/facebook/docusaurus',
                //        },
                //        {
                //            label: 'Twitter',
                //            href: 'https://twitter.com/docusaurus',
                //        },
                //    ],
                //},
            ],
            copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: 'https://github.com/facebook/docusaurus/blob/master/website/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};