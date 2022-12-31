const c1 = () => import(/* webpackChunkName: "page--src--templates--tag-vue" */ "/Users/dionysios/Documents/DionWeb_Portfolio/src/templates/Tag.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--thank-you-vue" */ "/Users/dionysios/Documents/DionWeb_Portfolio/src/pages/ThankYou.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--test-vue" */ "/Users/dionysios/Documents/DionWeb_Portfolio/src/pages/Test.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/Users/dionysios/Documents/DionWeb_Portfolio/src/pages/404.vue")
const c5 = () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/dionysios/Documents/DionWeb_Portfolio/src/templates/Post.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/dionysios/Documents/DionWeb_Portfolio/src/pages/Index.vue")

export default [
  {
    path: "/tag/:id/",
    component: c1
  },
  {
    path: "/thank-you/",
    component: c2
  },
  {
    path: "/test/",
    component: c3
  },
  {
    name: "404",
    path: "/404/",
    component: c4
  },
  {
    path: "/:title/",
    component: c5
  },
  {
    name: "home",
    path: "/",
    component: c6
  },
  {
    name: "*",
    path: "*",
    component: c4
  }
]
