new Vue({
    el:'#vue-demo-app',
    data:{
        health:100,
        ended:false
    },
    methods:{
        punch(){
            this.health -= 10;
            console.log(this.health);
            if (this.health <= 0){
                this.ended = true;
            }
        },
        restart(){
            this.health = 100;
            this.ended = false;
        }
    },
    computed:{

    }
});