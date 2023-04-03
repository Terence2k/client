<template>
	<div>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { Storage } from '@/libs/utils'
import { checkLoginService } from './services/User'
import { userStorage } from './views/hooks/user'

const router = useRouter()

const { removeStorage } = userStorage()

router.beforeEach(async (to, from)=>{
   const accessToken = Storage.get('access_token')

   if(accessToken){

    const { err_code } = await checkLoginService()
    console.log(err_code , accessToken , new Date() ,'结束')
    if(err_code && to.name == 'home'){
      removeStorage()
      return {
        name : 'login'
      }
    }

    if(!err_code &&( to.name === 'login' || to.name === 'register') ){
       return {
        name : 'home'
      }
    }

     if(err_code && to.name == 'register'){
       removeStorage()
     }



   }else{
    alert('请登录')
      if(to.name !== 'login' && to.name!== 'register'){
        return {
          name: 'login'
        }
      }
   }
})
</script>

<style></style>
