import axios  from 'axios';
import { useCookies } from 'vue3-cookies';
const URL= "http://tasks.local/api/";
const cookie = useCookies({expire:'7d'}).cookies;
export default {
    authHeader() {
        const token = cookie.get('access_token')
        const headers = {
            Accept: 'application/json'
        };
        if (token) {
            headers.Authorization = 'Bearer ' + token;
        }
        return headers;
    },
    callApi(data){
        if(data.method !== undefined && data.url !== undefined){
            let method = data.method.toLowerCase();
            let url    = data.url.toLowerCase();
            let param  = data.param;

            switch(method){
                case 'get':
                    return this.get(url, param).then((response) => response);
                case 'delete':
                    return this.delete(url, param).then((response) => response);
                case 'post':
                    return this.post(url, param).then((response) => response);
                case 'put':
                    return this.put(url, param).then((response) => response);
                case 'upload':
                    return this.upload(url, param).then((response) => response);
                default:
                    return {status: 0, message:'method not support', data:null};
            }
        }else{
            return {status: 0, message:'call api fail', data:null};
        }
    },

    get(api, param) {
        api = this.joinParamToUrl(api, param);
        return axios.get(URL + api, {
            headers: this.authHeader()
        })
        .then(res => {
            return res.data;
        })
        .catch(err => {
            return {status: 0, message:err.message, data:null};
        });
    },

    delete(api, param) {
        api = this.joinParamToUrl(api, param);
        return axios.delete(URL + api, {
            headers: this.authHeader()
        })
            .then(res => {
                return res.data;
            })
            .catch(err => {
                return {status: 0, message:err.message, data:null};
            });
    },

    post(api, data) {
        return axios.post(URL + api, data, {
            headers: this.authHeader()
        })
            .then(res => {
                return res.data;
            })
            .catch(err => {
                return {status: 0, message:err.message, data:null};
            });
    },

    put(api, data) {
        return axios.put(URL + api, data, {
            headers: this.authHeader()
        })
            .then(res => {
                return res.data;
            })
            .catch(err => {
                return {status: 0, message:err.message, data:null};
            });
    },

    upload(api, data) {
        return axios.post(URL + api, data, {
            headers: Object.assign(this.authHeader(), {
                'Content-Type': 'multipart/form-data'
            }),
        })
        .then(res => {
            return res.data;
        })
        .catch(err => {
            return {status: 0, message:err.message, data:null};
        });
    },

    joinParamToUrl(api, params) {
        let string = api;
        let i = 0;
        if(params !== undefined){
            for(let index in params){
                string += (i > 0)?'&':'?' + index + '=' + params[index];

                i++;
            }
        }
        return string;
    }
}
