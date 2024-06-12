import {createRouter, createWebHistory} from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [ 
  {
    path: '/', 
    name:'home', 
    component: AppHome, 
  }  
  {
    path: '/', 
    name:'projects', 
    component: ProjectList, 
  },
  {
    path:"/projects/:slug",
    name:"single-project",
    component: ProjectComponent,
  },
  {
    path:"/:path((.*)*",
    name:"not-found",
    component: NotFound
  }
],

});
export {router}; 
