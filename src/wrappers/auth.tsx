import React from 'react'
import  { Redirect } from 'umi'
import useAuth from '../hooks/useAuth'
export default (props) => {
  const isLogin = useAuth();
  console.log('isLogin',isLogin)
  if (isLogin) {
    return <div>{ props.children }</div>;
  } else {
    return <div> 去登录 </div>;
  }
}