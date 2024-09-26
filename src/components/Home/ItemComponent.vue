<script lang="jsx" setup>
</script>

<template>
    <div class="item-div" @click="$router.push(`/Product/${item.barcode}`)">
      <p>{{ item.name }}</p>
    </div>
</template>

<script lang="jsx">
export default {
    props: ["item"]
}
</script>

<style lang="scss" scoped>
.item-div{
  width: calc(20% - 2em);
  background-color: rgb(35, 128, 209);
  height: 15rem;
  display: flex;
  align-items: flex-end;
  
  p {
    font-size: 3ch;
    font-weight: bold;
    padding: 0.5em;
  }
}
</style>