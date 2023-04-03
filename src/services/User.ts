import { IResponse, IUserInfo } from '@/types/user'
import http from '../libs/http'
/***
 * 
 * http://localhost:8000/api/user/login
 * http://localhost:8000/api/user/check_login
 * http://localhost:8000/api/user/register
 */
export async function loginService( userInfo:IUserInfo ) {
    
    return await http.post<unknown ,IResponse>('api/user/login', userInfo)
}

export async function registerService(userInfo : IUserInfo) {
    return await http.post<unknown ,IResponse>('api/user/register', userInfo)
}

export async function checkLoginService() {
    return await http.post<unknown, IResponse>('api/user/check_login' )
}

export async function getUserService() {
    return await http.get<unknown, IResponse>('api/user/get_user_list')
}
