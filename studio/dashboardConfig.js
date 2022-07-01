export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '62befb7752fa9e6dcfd729d9',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-szes863a',
                  apiId: '793057e6-529e-4509-940c-639a0b73b567'
                },
                {
                  buildHookId: '62befb7852fa9e6da3d72fd3',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-brwc5sj4',
                  apiId: 'a3cc5973-79c0-46aa-908c-0127396ea0df'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/eddilols/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-brwc5sj4.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
