<template>
	<div>
		<h1>登录</h1>
		<p>
			<input type="text" placeholder="请输入登录名称" v-model="username" />
		</p>
        <p>
            <input type="password" placeholder="请输入密码" v-model="password" />
        </p>
		<button @click="signIn">登录</button>
         <router-link to='/register' >去注册</router-link>
	</div>
</template>

<script setup lang="ts">
import { userLogin, userStorage } from "./hooks/user"
import errorHandler from "@/config/errorHandle"
import { useRouter } from 'vue-router'

const { username, password, submitUserInfo, checkUserInfo } = userLogin()

const { setUserStorage, removeStorage } = userStorage()

const router = useRouter()

const signIn = async () => {
	if (!checkUserInfo(username, 6)) {
		alert("用户名字长度少于六位")
	}

	if (!checkUserInfo(password, 6)) {
		alert("密码长度少于六位")
	}

	try {
		const { err_code, data } = await submitUserInfo()
        console.log(new Date() ,'登录结束')

		if (err_code) {
			alert(errorHandler[err_code])
            return 
		}

           setUserStorage(data.access_token , data.level)

        router.push('/')
	} catch (error) {
		alert('登陆失败')
	}
}
</script>

<style></style>
