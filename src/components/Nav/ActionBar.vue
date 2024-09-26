<script lang="jsx" setup>
import { auth } from '@/store.js';
</script>

<template lang="">
    <div class="actionMain-div">
        <slot></slot>
        <div class="iconContainer-div">
            <font-awesome-icon :icon="['fas', 'user']" @click="this.$router.push('/user')" v-if="auth.IsAuthenticated"/>
            <font-awesome-icon :icon="['fas', 'cart-shopping']" @click="this.$router.push('/cart')"/>
        </div>
    </div>
</template>
<script lang="jsx">
export default {
    
}
</script>
<style lang="scss" scoped>
.actionMain-div{
    border-bottom: 1px solid var(--border-color);
    height: 5vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 0.5em;
}
.iconContainer-div{
  margin-left: auto;
  width: 10%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 0.5em;

  svg{
    width: 2rem;
    height: 2rem;
  }
}
</style>