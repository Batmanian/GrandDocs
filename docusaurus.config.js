module.exports = {
    title: 'Grand Central Apartments - Rules and Manual',
    tagline: 'Last updated 05/04/2020',
    url: 'https://batmanian.github.io/',
    baseUrl: '/',
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
                    to: 'docs/definitions',
                    activeBasePath: 'rules',
                    label: 'Rules',
                    position: 'left',
                },
                {
                    to: 'manual/manual',
                    activeBasePath: 'manual',
                    label: 'Manual',
                    position: 'left'
                },
                {
                    to: 'rules/definitions',
                    activeBasePath: 'docs',
                    label: 'Rules2',
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
                //    title: 'Rules',
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
                    editUrl: 'https://github.com/Batmanian/GrandDocs/blob/master/GrandDocs/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};