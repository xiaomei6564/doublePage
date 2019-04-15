import axios from 'axios';        //引入axios请求
let axiosPackage = function (url, params, callback) {
    axios({
        method: 'post',
        url: url,
        data: params,
        transformRequest: [function (data) {
            // Do whatever you want to transform the data
            let ret = ''
            for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            }
            return ret
        }],
        // headers: {
        //   'Content-Type': 'application/x-www-form-urlencoded'
        // }
    }).then((response_member) => {
        callback(response_member.data);
    }).catch((response) => {

        callback(response.data);
        // this.$store.state.pointerNone=false;
    })
};

export { axiosPackage };
