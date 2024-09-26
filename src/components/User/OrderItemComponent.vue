<script lang="jsx" setup>
</script>

<template>
    <div>
      <p v-if="item">{{ item.name }}</p>
    </div>
</template>

<script lang="jsx">
export default {
    props: ["item"]
}
</script>

<style lang="scss" scoped>
</style>