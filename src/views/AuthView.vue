<script lang="jsx" setup>
import axios from 'axios'
import Login from '@/components/Auth/Login.vue'
import Register from '@/components/Auth/Register.vue'
import ActionBar from '@/components/Nav/ActionBar.vue';
</script>

<template>
    <div class="authMain-div">
        <ActionBar>
            <font-awesome-icon :icon="['fas', 'arrow-left']" @click="$router.go(-1)"/>
        </ActionBar>
        <div class="authContainer-div">
            <div class="authItem-div">
                <login v-if="loginMode"/>
                <Register v-else/>
            </div>
        </div>
    </div>
</template>

<script lang="jsx">
export default {
    data(){
        return{
            loginMode: true
        }
    },
    mounted(){
        this.emitter.on("Cancel", () => {
            this.loginMode = true;
        })

        this.emitter.on("Register", () => {
            this.loginMode = false;
        })
    }
}
</script>

<style lang="scss" scoped>
.authMain-div{
    display: flex;
    flex-direction: column;
    width: 100%;
}

.authItem-div{
    height: 50%;
    width: 30%;
    background-color: var(--secondary-color);
    border-radius: 0.5em;
}
.authContainer-div{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
svg{
    width: 2rem;
    height: 2rem;
  }
</style>