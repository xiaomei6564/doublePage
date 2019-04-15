// 定义全局默认配置：
axios.defaults.headers.common['SY-TOKEN'] = localStorage.getItem('token');

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    console.log("config-axiosJs.js:添加请求拦截器");
    //判断是否存在token，如果存在将每个页面header都添加token

    if (localStorage.getItem('token') != undefined && localStorage.getItem('token') != 'undefined' && localStorage.getItem('token') != null && localStorage.getItem('token') != '') {
        config.headers['SY-TOKEN'] = localStorage.getItem('token');
    }
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    console.log("config-axiosJs.js:添加响应拦截器");

    let nowTime = new Date().getTime();

    // 超过两个小时未操作或者localStorage清空 跳转登录页
    if (((nowTime - localStorage.getItem('visitTime') > 7200000) && response.data == '') || (localStorage.getItem('user') != '' && (localStorage.getItem('token') == null || localStorage.getItem('token') == undefined || localStorage.getItem('token') == ''))) {
        localStorage.removeItem('token')
        store.state.token = '';
        location.href = 'index.html';//跳转登录
        if (localStorage.getItem('login_guoqi') != '登录过期，请重新登录') {
            alert('登录过期，请重新登录');
            localStorage.setItem('login_guoqi', '登录过期，请重新登录')
        }
    }
    localStorage.setItem('visitTime', new Date().getTime());
    // Token过期重新请求
    if (response.data == '' && (localStorage.getItem('token') != null && localStorage.getItem('token') != undefined && localStorage.getItem('token') != '') && (localStorage.getItem('visitTime') != null && localStorage.getItem('visitTime') != undefined && localStorage.getItem('visitTime') != '')) {
        $.ajax({
            type: 'post',
            url: '/budget-bus-web/restful/login/enter',
            data: {
                user: localStorage.getItem('user')
            },
            async: false,
            dataType: 'json',
            success: function (data) {
                let token = data.data.token;
                store.state.token = token;
                localStorage.setItem('token', token);
                localStorage.setItem('visitTime', new Date().getTime());
                localStorage.setItem('memberName', data.data.memberName);
                store.state.visitTime = new Date().getTime();
                // response=getResponse(response.config.url,response.config.data);
                let para = '';
                if (response.config.data != undefined) {
                    para = response.config.data;
                }
                $.ajax({
                    type: 'post',
                    url: response.config.url,
                    async: false,
                    data: para,
                    dataType: 'json',
                    beforeSend: function (xhr) {
                        xhr.setRequestHeader("SY-TOKEN", localStorage.getItem('token'));
                    },
                    success: function (data2) {
                        response.data = data2;
                    },
                    error: function (err) {
                        console.log(err);
                    }
                })
            }


        })
    }
    if (response.data.code == 50) {
        location.href = "index.html";
        alert('无权访问此页，跳转回登录页！！');
        return false;
    }
    return response
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error)
});