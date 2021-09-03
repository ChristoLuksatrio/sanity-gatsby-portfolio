export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '613225bcfece252f57f7838f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-2ayhu6rs',
                  apiId: '6b2ba91f-9b9e-49b7-98d7-78561477caac'
                },
                {
                  buildHookId: '613225bd41a3854954fc2b29',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-kpoadvpm',
                  apiId: '1883468d-b735-425d-a180-8c5d31e4116b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ChristoLuksatrio/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-kpoadvpm.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
