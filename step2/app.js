Vue.component("greeting",{
    //组件可以用来解决公共问题，one和two里面都能用
    template: `
    <p>
        {{name}}：大家好，给大家介绍一下我的女朋友@关晓彤
        <button v-on:click='changeName'>改名</button>
    </p>`,
    data:function(){
        //把data写成方法，否则不可
        return {
            name:'鹿晗'
        }
    },
    methods:{
        changeName:function(){
            this.name = "Corey";
        }
    }
})

let one = new Vue({
    el:"#step2-app-one",
    data:{
        title:"app one content"
    },
    methods:{
        changeTitle:function(){
            two.title = "已经改名了2！";
        }
    },
    computed:{
        greet:function(){
            return "Hello app one!"
        }
    }
});

let two = new Vue({
    el:"#step2-app-two",
    data:{
        title:"app two content"
    },
    computed:{
        greet:function(){
            return "Hello app two!"
        }
    }
});