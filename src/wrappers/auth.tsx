import React from 'react';
import useAuth from '@/hooks/useAuth';
import { Redirect } from 'umi';
function index() {
  const isLogin = useAuth();

  if (isLogin == 'loading') {
    return <div> 加载中 </div>;
  }
  if (isLogin.status == 1) {
    return <div> 进入首页 </div>;
  }

  return <Redirect to="/login" />;
}

export default index;
