import React from 'react'
import useAuth from '@/hooks/useAuth'
import { Redirect } from 'umi'
function index() {
    const isLogin = useAuth()
    console.log('isLogin',isLogin)
    if ( isLogin) {
        // 表示token已存在，并且是合法的，name直接进入页面
        return <div>
            进入首页
        </div>
    } else {
        return <Redirect to="/login" />
    }
    
}


export default index
