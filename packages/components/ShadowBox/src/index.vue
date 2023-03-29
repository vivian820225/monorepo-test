<template>
  <div class="shadow-box">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'ShadowBox'
  }
</script>

<style lang="scss" scoped>
  .shadow-box {
    background-color: #FFF;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);
  }
</style>
