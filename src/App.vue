<template>
  <h1 class="text-center">Ciao</h1>
  <ul>
    <li v-for="project in projects" :key="project.id">{{ project.title }}
      <img :src="store.imgBasePath + project.image" :alt="project.title">
    </li>
  </ul>

  <!-- <button @click="getAllProjects()" class="btn btn-primary"> next Page</button> -->
</template>

<script>
//importo lo store
import {store} from './store';
//importo axios 
import axios from 'axios'; 
  export default {
    name: 'App',
    data(){
      return {
        store,
        projects:[], //array dove inserire i dati
        //nextPage:1, //qui perchè dinamico
        //currentPage: 1
      }
    },
    methods:{
      getAllProjects(){
        //this.nextPage = this.currentPage + 1;
        axios.get(this.store.apiBaseUrl + '/projects').then((res) => {
          //console.log(res.data);
          this.projects = res.data.results;

              //per la paginazione
              //, (params: (page:this.nextPage)) -->dentro axios.get
              // this.projects = res.data.results.data;
              // this.currentPage = res.data.results.current_page
        });
      }
    },
    mounted(){
      //chiamo i progetti
      this.getAllProjects();
    }
  }
</script>

<style lang="scss" scoped>

</style>