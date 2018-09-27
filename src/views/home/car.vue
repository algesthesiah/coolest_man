<template>
  <div  class="view" >
    123231
    <div class="heading">
      <h1><span> car</span></h1>
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
    name: 'car',
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
