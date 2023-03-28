<template>
  <button class="common-btn">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'Button'
  }
</script>

<style lang="scss" scoped>
  .common-btn {
    padding: 0.5rem 1.5rem;
    border-radius: 0.25rem;
    font-size: 1rem;
    color: #FFF;
    background-color: rgb(130, 57, 255);
  }
</style>
