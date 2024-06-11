import{reactive} from 'vue';
export const store = reactive({
    apiBaseUrl: 'http://127.0.0.1:8000/api', //base dell'api
    imgBasePath: 'http://127.0.0.1:8000/storage' //percorso dove si trovano le mie immagini

})