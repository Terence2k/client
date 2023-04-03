import { Storage } from "@/libs/utils"
import { loginService, registerService } from "@/services/User"
import { Ref, reactive, toRefs } from "vue"

function checkUserInfo (field:Ref , num: number){
    return field.value.length >= num
}

export function userLogin() {
	const state = reactive({
		username: "",
		password: "",
	})

    const submitUserInfo = async()=>{
        return await loginService({
            username: state.username,
            password: state.password
        })
    }

	return { 
        ...toRefs(state) ,
        checkUserInfo,
        submitUserInfo
    }
}

export function userStorage() {
    const setUserStorage = (accessToken : string , level : string) =>{
        Storage.set('access_token' , accessToken)
        Storage.set('user_level' , level)
    }

    const removeStorage = ()=> {
        Storage.remove('access_token' )
        Storage.remove('user_level' )
    }

    return {
        setUserStorage,
        removeStorage
    }
}

export function useRegister() {
    const state = reactive({
       username:'',
       password:'',
       rePassword:''
    })

    const submit = async ()=>{
        return await registerService({
            username: state.username,
            password: state.password
        })
    }

    const comparePawword = ()=>{
        return state.password === state.rePassword
    }

    return {
        ...toRefs(state),
        checkUserInfo,
        submit,
        comparePawword

    }
}