<script lang="jsx" setup>
</script>

<template>
    <div class="cartItem-div">
      <p v-if="item">Name: {{ item.name }}</p>
      <p v-if="item">Price: {{ item.price }}$</p>
    </div>
</template>

<script lang="jsx">
export default {
    props: ["item"]
}
</script>

<style lang="scss" scoped>
.cartItem-div{
  padding: 0.5em;
  border: 1px solid black;
  border-radius: 0.5em;
  display: flex;
  flex-direction: row;
  gap: 0.5em;
}
</style>