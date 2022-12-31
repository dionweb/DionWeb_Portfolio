// Import main css
import "~/assets/styles/index.scss";

// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";

export default function (Vue, { router, head, isClient }) {
  /*   router.beforeEach((to, from, next) => {
      // Do stuff before next page load
      window.scrollTo(0, 0);
      next();
  
    }) */
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
}


