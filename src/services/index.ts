//! 提前将数据请求写好
import {request} from 'umi'

export default {
    //! token 校验
    checkToken () {
        return request('/api/checkToken',{
            params: {
                authToken: 'fdaskljflasjdl;'
            }
        })
    }
}