// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);

  Vue.filter('local-link', function (val){
    var newPath = val.replace('https://2frugaldudes.com', '');
    newPath = newPath.substring(0, newPath.length - 1); 

    return newPath;
  })
}
