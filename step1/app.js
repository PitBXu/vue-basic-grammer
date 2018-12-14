// 实例化 vue 对象
new Vue({
    el:'#vue-app',
    data:{
        name: 'Corey',
        job: '执行总裁',
        age:22,
        website: 'https://www.baidu.com',
        websiteTag: '<a href="https://www.baidu.com">百度一下，你就知道</a>',
        x:0,
        y:0,
        a:0,
        b:0,
        changeColor:false,
        changeLength:false,
        error:false,
        success:false,
        characters:["Corey","Jasmine","Miki","Della"],
        users:[
            {name:"Bruce",age:32},
            {name:"Anne",age:23},
            {name:"Katherine",age:21}
        ]
    },
    methods:{
        greet(param){//ES6语法
            return `Good ${param}, ${this.name} !`;
        },
        add(param){
            this.age+=param;
        },
        subtract(param){
            this.age-=param;
        },
        updateXY: function(event){
            //console.log(event);
            this.x = event.offsetX;
            this.y = event.offsetY;
        }
        // stopMoving: function(event){
        //     event.stopPropagation();
        // }
        ,alert:function(){
            window.alert("不跳转");
        },
        logName:function(){
            console.log("你正在输入名字！");
        },
        logAge:function(){
            console.log("你正在输入年龄！");
        },
        showName:function(){
            this.name = this.$refs.name11.value;
        },
        showAge:function(){
            this.age = this.$refs.age22.value;
        }
        // addToA:function(){
        //     console.log("add to A");
        //     会都执行
        //     return this.a + this.age;
        // },
        // addToB:function(){
        //     console.log("add to B");
        //     return this.b + this.age;
        // }
    },
    computed:{//>Computed 计算属性，应用在耗时和大量搜素时使用
        addToA:function(){
            console.log("add to A");
            return this.a + this.age;
        },
        addToB:function(){
            console.log("add to B");
            return this.b + this.age;
        },
        compClasses:function(){
            return {
                changeColor: this.changeColor,
                changeLength: this.changeLength
            }
        }
    }
});

/**
 * el : element need to get, root containter in html(需要获取的元素，是html的根容器 vue-app )
 * data : storge of data(用于数据的存储)
 * methods: use for storge methods (用于存储各种方法)
 * data-binding: bind value to property (给属性绑定值)
 */