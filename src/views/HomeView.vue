<template>
	<div>
		<h1>Home</h1>
		<a href="javascript:;" @click="logout">退出登录</a>
	</div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router"
import { userStorage } from "./hooks/user"

const { removeStorage } = userStorage()
const router = useRouter()

const logout = () => {
	removeStorage()
    router.push('/login')
}
</script>

<style></style>
