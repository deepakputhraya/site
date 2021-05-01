import DefaultLayout from '~/layouts/Default.vue'
import "tailwindcss/tailwind.css"
import "~/assets/main.css"

export default function (Vue, { router, head, isClient }) {
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Merriweather+Sans:300,400,700&display=swap'
  })
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Open+Sans&display=swap'
  })
  Vue.component('Layout', DefaultLayout)
}
