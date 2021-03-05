import qs from 'qs'
import axios from 'axios'
import api from './api'

let isRefreshingToken = false
let requests = []
// Add a response interceptor
axios.interceptors.response.use(response=>{
    if ( response.data.code === 1004 ){
        const config = response.config
        if ( !isRefreshingToken ){
            isRefreshingToken = true
            return refreshToken().then(res=>{
                const token = res.data.token
                setToken(token)
                config.headers.Authorization = token
                requests.forEach(cb => cb(token))
                return axios(config)
            }).catch(err=>{
                console.log('Refreshing token encounter an error => ', err)
            }).finally(()=>{
                isRefreshingToken = false
                requests = []
            })
        }else{
            return new Promise((resolve)=>{
                requests.push((token)=>{
                    config.headers.Authorization = token
                    resolve(axios(config))
                })
            })
        }
    }
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, error=>{
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

export const axiosRq = async ( url, data = {}, config = {}, type = 'GET' ) => {
    let result = null
    type = type.toUpperCase()

    if ( type === 'GET' ){
        await axios.get(url, Object.assign(config, { params: data }))
            .then((res)=>{
                result = res.data
            })
            .catch((err)=>console.log(err))
    }else if ( type === 'POST' ){
        await axios.post(url, qs.stringify(data))
            .then((res)=>{
                result = res.data
            })
            .catch((err)=>console.log(err))
    }

    return result
}

export const refreshToken = () => {
    return axios.get(api.refresh_token, { 
        params: {
            oldToken: getToken()
        }
    }).then(res=>res.data)
}

export const setToken = token => localStorage.token = token
export const getToken = () => localStorage.token
