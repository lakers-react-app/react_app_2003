import { useRequest } from 'umi';
import services from '@/services';
//! 这个hooks的作用就是用于判断咋们的token是否合法有效
export default function useAuth() {
  const { loading, data } = useRequest(services.checkToken);
  if (loading) {
    return 'loading';
  }
  return data;
}
