const {createApp}= Vue ;
createApp({
    data(){
       return{
        lista:[]
       }
    },
    methods:{

    },
    mounted(){
        console.log('ci sono');
        axios.get("../server.php").then(results=>{
            
            this.lista=results.data;
            console.log(lista)
        })
    }

}).mount(('#app'));