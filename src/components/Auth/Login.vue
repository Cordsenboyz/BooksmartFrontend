<script lang="jsx" setup>
import axios from 'axios'
import { auth, userName } from '@/store.js'
</script>

<template>
    <div class="login-div">
        <p class="loginHeader-p">Login</p>
        <div>
            <p>Email:</p>
            <input v-model="loginObject.email"/>
        </div>
        <div>
            <p>Password</p>
            <input v-model="loginObject.password" type="password"/>
        </div>
        <div class="btnContainer-div">
            <a @click="emitter.emit('Register')">Register</a>
            <button @click="Login()">Login</button>
        </div>
    </div>
</template>

<script lang="jsx">
export default {
    data(){
        return{
            loginObject: {
                email: "",
                password: ""
            }
        }
    },
    methods: {
        async Login(){
            console.log(this.loginObject)
            await axios.post(`https://booksmartapi.azurewebsites.net/api/Auth/Login`, this.loginObject)
                .then(async response => {
                    console.log(response.data)
                    auth.IsAuthenticated = true;
                    var base64Url = response.data.token.value.split('.')[1];
                    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
                    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
                        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
                    }).join(''));
                    console.log(JSON.parse(jsonPayload))
                    this.$router.push("/")
                    this.$cookies.set('token', response.data.token.value, response.data.token.expiration)

                    var tokenValues = JSON.parse(jsonPayload)
                    userName.value = tokenValues.name
                }
            ).catch(async response => {

            })
        }
    }
}
</script>

<style lang="scss" scoped>
.login-div{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1em;
}
.btnContainer-div{
    display: flex;
    flex-direction: row;
    gap: 1em;
}

.loginHeader-p{
 font-size: 3ch;
 font-weight: bold;
}
</style>