
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        token: '',//token
        visitTime: '', // 访问时间,
        user: '',       // 用户信息
        defPage: '',
        authPageEditStr: '',
        authPartition: '',
        authPartitionEdit: '',
        pointerNone: false,  //鼠标事件禁止
        activeItemBtn: 0,    //编辑配置页选择的页面
        pageType: '',
        ZCZJShow: false,
        ZCZJAddShow: false,
        isOpenedit: false,
        editShow: false
    },
    mutations: {
        "SET_TOKEN": function (state, token) {
            state.token = token
            console.log('保存', state.token)
            localStorage.setItem('token', token);
        },
        "DEL_TOKEN": function (state, token) {
            state.token = '';
            console.log('删除', state.token)
            localStorage.removeItem('token')
        }
    },
    getters: {
        "GET_TOKEN": function (token) {
            console.log('获取', state.token)
            return state.token
        }
    },
    actions: {
        "SET_TOKEN": function (state, token) {
            console.log('保存', state.token)
            store.commit("SET_TOKEN", token)
        },
        "DEL_TOKEN": function (state, token) {
            console.log('删除', state.token)
            store.commit("DEL_TOKEN", token)
        }

    }
})

//store使用   this.$store.getters.GET_TOKEN
//store赋值   this.$store.dispatch('SET_TOKEN',赋值);
export default store