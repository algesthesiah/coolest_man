<template>
  <div  class="" >
    <div class="">
      <h1><span> shop</span></h1>
    </div>
    <div class="content">
    </div>
  </div>
</template>

<script>
  import {
    Button,
    Toast,
    Tabbar,
    TabbarItem
  } from 'vant'
  export default {
    name: 'shop',
    components: {
      [Button.name]: Button
    },
    data() {
      return {
        active: 0
      }
    },
    methods: {
      handleClick() {
        Toast('不错哟~')
      }
    }
  }

</script>

<style scoped lang='less'>
</style>
