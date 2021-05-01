const c1 = () => import(/* webpackChunkName: "page--src-pages-about-vue" */ "C:\\Users\\Deepak Puthraya\\Projects\\site\\src\\pages\\About.vue")
const c2 = () => import(/* webpackChunkName: "page--src-pages-404-vue" */ "C:\\Users\\Deepak Puthraya\\Projects\\site\\src\\pages\\404.vue")
const c3 = () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "C:\\Users\\Deepak Puthraya\\Projects\\site\\src\\pages\\Index.vue")

export default [
  {
    path: "/about/",
    component: c1
  },
  {
    name: "404",
    path: "/404/",
    component: c2
  },
  {
    name: "home",
    path: "/",
    component: c3
  },
  {
    name: "*",
    path: "*",
    component: c2
  }
]
