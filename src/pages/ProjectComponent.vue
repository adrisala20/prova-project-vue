<template>
    <div v-if="Project">
        <h1>{{ project.title }}</h1>
        <img :src="store.imgBasePath + project.image" :alt="project.title">
        <p>{{ projects.content }}</p>
        <span>{{ project.category }}</span>
    </div>
    
</template>

<script>
import { store} from '../store';
import axios from 'axios';
    export default {
        name:'ProjectComponent',
        data(){
            return{
                store,
                project:null
            }
        },
        methods:{
            getProject(){
                //per recuperare la chiamata dal parametro 
                axios.get(`${this.store.apiBaseUrl}/projects/${this.$route.params.slug}`).then((res)=>{
                    console.log(res.data.results)
                    this.project =res.data.results;
                }).catch((error)=>{
                    //console.log(error)
                    //console.log(error.data.results)
                    this.$router.push({name:'not-found'})
            }).finally()
            }
        },
        mounted(){
            this.getProject();
        },
        created(){
            this.$watch
        }
    }
</script>

<style lang="sass" scoped>

</style>