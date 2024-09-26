<script lang="jsx" setup>
import axios from 'axios'
import { auth } from '@/store.js'
</script>

<template>
    <div class="register-div">
        <p class="registerHeader-p">Register</p>
        <div>
            <p>Email:</p>
            <input v-model="RegisterObject.email"/>
        </div>
        <div>
            <p>Password:</p>
            <input v-model="RegisterObject.password" type="password"/>
        </div>
        <div>
            <p>Confirm Password:</p>
            <input v-model="RegisterObject.confirmPassword" type="password"/>
        </div>
        <div>
            <p>First Name:</p>
            <input v-model="RegisterObject.firstName"/>
        </div>
        <div>
            <p>Last Name:</p>
            <input v-model="RegisterObject.lastName"/>
        </div>
        <div>
            <p>Phone Number:</p>
            <input v-model="RegisterObject.phoneNumber"/>
        </div>
        <div class="btnContainer-div">
            <button @click="emitter.emit('Cancel')">Cancel</button>
            <button @click="Register()">Register</button>
        </div>
    </div>

</template>

<script lang="jsx">
export default {
    data(){
        return{
            RegisterObject: {
                email: "",
                password: "",
                confirmPassword: "",
                firstName: "",
                lastName: "",
                phoneNumber: "",
            },
            loginObject: {
                email: "",
                password: ""
            }
        }
    },
    methods: {
        async Register(){
            console.log(this.loginObject)
            console.log(this.RegisterObject)
            await axios.post(`https://booksmartapi.azurewebsites.net/api/Auth/Register`, this.RegisterObject)
                .then(async response => {
                    this.loginObject.email = this.RegisterObject.email
                    this.loginObject.password = this.RegisterObject.password
                    await axios.post(`https://booksmartapi.azurewebsites.net/api/Auth/Login`, this.loginObject)
                        .then(async response => {
                            auth.IsAuthenticated = true;
                            console.log(response.data)
                            this.$router.push("/")
                        }
                    ).catch(async response => {

                    })
                }
            ).catch(async response => {
                
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.register-div{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 0.5em;
}
.btnContainer-div{
    display: flex;
    flex-direction: row;
    gap: 1em;
}

.registerHeader-p{
 font-size: 3ch;
 font-weight: bold;
}
</style>