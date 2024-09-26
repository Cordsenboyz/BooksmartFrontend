<script lang="jsx" setup>
import { auth, userName } from '@/store.js'
</script>

<template lang="">
    <div class="navMain-div">
        <div class="nav20 flexstart">
            <p @click="$router.push('/')">Booksmart</p>
        </div>
        <div class="nav60"></div>
        <div class="nav20 flexend">
            <p v-if="auth.IsAuthenticated">{{ userName.value }}</p>
            <p v-else @click="$router.push('/login')">Login</p>
        </div>
    </div>
</template>

<script lang="jsx">
export default {
    
}
</script>

<style lang="scss" scoped>
    .navMain-div{
        width: 100%;
        background-color: var(--primary-color);
        color: var(--primary-text-color);
        height: 4rem;
        display: flex;
        flex-direction: row;
    }
    .nav20{
        width: 20%;
    }
    .nav60{
        width: 60%;
    }
    .flexstart{
        padding-left: 0.5em;
        display: flex;
        align-items: center;
    }
    .flexend{
        display: flex;
        justify-content: flex-end;
        padding-right: 0.5em;
        align-items: center;
    }
    p{
        font-size: 3ch;
    }
</style>