<template>
  <div  class="view" >
    <div class="heading">
      <h1><span> user</span></h1>
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
    name: 'user',
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
