// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const tailwind = require('tailwindcss')
const postcss = require('postcss')

const postcssPlugins = [
  tailwind(),
]

if (process.env.NODE_ENV === 'production') postcssPlugins.push(postcss(require('./postcss.config.js')))

module.exports = {
  siteName: 'Deepak Puthraya',
  metadata: {
    author : {
      github: 'https://github.com/deepakputhraya',
      twitter: 'https://twitter.com/deepakputhraya',
      linkedin: 'https://www.linkedin.com/in/deepakputhraya'
    }
  },
  plugins: [
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: (process.env.GA_ID ? process.env.GA_ID : 'XX-999999999-9')
      }
    },

    {
      use: '@gridsome/plugin-sitemap',
      options: {
      }
    }
  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  },
}
