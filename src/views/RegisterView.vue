<template>
	<div>
        <h1>注册</h1>
        <p>
            <input type="text" placeholder='请输入登录名称' v-model='username'>
        </p>
        <p>
            <input type="password" placeholder='请输入密码' v-model="password">
        </p>
        <p>
            <input type="password" placeholder='确认密码' v-model="rePassword">
        </p>
        <button @click="register">注册</button>
        <router-link to='/login' >去登陆</router-link>
    </div>
</template>

<script setup lang='ts'>
import errorHandle from '@/config/errorHandle'
import { useRegister } from './hooks/user'
import { useRouter } from 'vue-router'
const {
    username ,
    password ,
    rePassword,
    submit , 
    comparePawword,
    checkUserInfo
 } = useRegister()

 const router = useRouter()

const register = async()=>{

    if(!checkUserInfo(username , 6)){
        alert ('用户名最低6位数')
       return 
    }

    if(!checkUserInfo(password , 6)){
         alert ('密码最低6位数')
      return 
    }

    if(!checkUserInfo(rePassword , 6)){
        alert ('密码最低6位数')
      return  
    }
    console.log(comparePawword())
    if(comparePawword()){
        try {
           const {err_code , data}   =  await submit()

            if(err_code){
                alert(errorHandle[err_code])
                return 
            }

            router.push('/')
        } catch (error) {

            alert(error)
        }

    }
}
</script>

<style></style>
