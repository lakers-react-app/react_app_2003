import React,{useEffect} from 'react'
import {request} from 'umi'

export default function Login() {
    useEffect(() => {
        request('/api/user/login',{
           data: {
               name: '兵哥'
           },
           method: 'POST'
        }).then(res => {
            console.log('res',res)
        }).catch(error => Promise.reject(error))
    },[])
    return (
        <div>
            登录
        </div>
    )
}
