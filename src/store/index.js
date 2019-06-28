import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

// 要设置的全局访问的state对象
const state = {
    showFooter: true,
    changableNum: 3123,
    //要设置的初始属性值
    list: [
        {num:1,title:"我是试题标题1卢卡斯解放拉萨客户发给拉伸"},
        {num:2,title:"我是试题标题1卢卡斯解放拉萨客户发给拉伸"},
        {num:3,title:"我是试题标题1卢卡斯解放拉萨客户发给拉伸"},
        {num:4,title:"我是试题标题1卢卡斯解放拉萨客户发给拉伸"},
        {num:5,title:"我是试题标题1卢卡斯解放拉萨客户发给拉伸"},
        {num:6,title:"我是试题标题1卢卡斯解放拉萨客户发给拉伸"},
        {num:7,title:"我是试题标题1卢卡斯解放拉萨客户发给拉伸"},
        {num:8,title:"我是试题标题1卢卡斯解放拉萨客户发给拉伸"},
        {num:9,title:"我是试题标题1卢卡斯解放拉萨客户发给拉伸"},
        {num:10,title:"我是试题标题1卢卡斯解放拉萨客户发给拉伸"},
    ],
    // css的list
    list2: [
        {num:1,title:"ccccccccccccccc放拉萨客户发给拉伸"},
        {num:2,title:"cssssssssssss1卢卡斯解放拉萨客户发给拉伸"},
        {num:3,title:"cssssssssssss1卢卡斯解放拉萨客户发给拉伸"},
        {num:4,title:"cssssssssssss1卢卡斯解放拉萨客户发给拉伸"},
        {num:5,title:"cssssssssssss1卢卡斯解放拉萨客户发给拉伸"},
        {num:6,title:"我是试题标题1卢卡斯解放拉萨客户发给拉伸"},
        {num:7,title:"我是试题标题1卢卡斯解放拉萨客户发给拉伸"},
        {num:8,title:"我是试题标题1卢卡斯解放拉萨客户发给拉伸"},
        {num:9,title:"我是试题标题1卢卡斯解放拉萨客户发给拉伸"},
        {num:10,title:"我是试题标题1卢卡斯解放拉萨客户发给拉伸"},
    ],
}

const getters = {   //实时监听state值的变化(最新状态)
    isShow(state) {  //方法名随意,主要是来承载变化的showFooter的值
        return state.showFooter
    },
    getChangedNum(state) {  //方法名随意,主要是用来承载变化的changableNum的值
        return 1234;
    },
    list(state){
        return state.list
    }
};

const mutations = {
    show(state) {   //自定义改变state初始值的方法，这里面的参数除了state之外还可以再传额外的参数(变量或对象);
        state.showFooter = true;
    },
    hide(state) {  //同上
        state.showFooter = false;
    },
    newNum(state,sum){ //同上，这里面的参数除了state之外还传了需要增加的值sum
       state.changableNum+=sum;
    },
    list(state){
        state.list = state.list2;
    }
};
const actions = {
    hideFooter(context) {  //自定义触发mutations里函数的方法，context与store 实例具有相同方法和属性
        context.commit('hide');
    },
    showFooter(context) {  //同上注释
        context.commit('show');
    },
    getNewNum(context,num){   //同上注释，num为要变化的形参
        context.commit('newNum',num)
     },
    //  切换小类
     changeList(context){
        context.commit('list')
     }
};


const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});



export default store;