import {createRouter, createWebHistory} from 'vue-router';

const router = createRouter({//è un metodo che ha un oggetto
    history: createWebHistory(), //è in metodo 
    routes: [ // è un array do oggetti, che hanno una chiave; tutte le rotte(ORDINATE)
  {
    path: '/', //un percorso
    name:'home', //un nome
    component: AppHome, // che gestisce la rotta
  }  
  {
    path: '/', //un percorso
    name:'projects', //un nome
    component: ProjectList, // da creare
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
