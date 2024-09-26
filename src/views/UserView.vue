<script lang="jsx" setup>
import ActionBar from '@/components/Nav/ActionBar.vue';
import { auth } from '@/store.js';
import axios from 'axios';
</script>

<template lang="">
    <div class="userMain-div" v-if="auth.IsAuthenticated">
        <ActionBar>
            <font-awesome-icon :icon="['fas', 'arrow-left']" @click="$router.go(-1)"/>
        </ActionBar>
        <div>{{ Orders }}</div>
    </div>
</template>

<script lang="jsx">
export default {
    data(){
        return{
            Orders: []
        }
    },
    async created(){
        await axios.get('https://booksmartapi.azurewebsites.net/api/Order/GetOwn', {
                headers: { Authorization: `Bearer ${this.$cookies.get('token')}` }
            }).then(async response => {
                this.Orders = response.data
            })
    },
}
</script>

<style lang="scss" scoped>
.userMain-div{
    width: 100%;
}
svg{
    width: 2rem;
    height: 2rem;
}
</style>