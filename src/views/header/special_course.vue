<template>
  <div class="">
    <div class="content">
      <img src="../../../static/img/6F8C046A-69D6-419C-BB82-9320245F70D5.png" alt="" @click="goInfo">
      <img src="../../../static/img/6F8C046A-69D6-419C-BB82-9320245F70D5.png" alt="">
    </div>
  </div>
</template>

<script>
  import {
    Toast,
  } from 'vant'
  export default {
    name: 'find',
    data() {
      return {
        active: 0
      }
    },
    methods: {
      goInfo() {
        this.$router.push({
          name: 'source_info'
        });
      },
      handleClick() {
        Toast('不错哟~')
      }
    }
  }

</script>

<style scoped lang='less'>
  .content {
    font-size: 0;

    img {
      height: 240px;
      width: 100%;
      margin-top: 20px;
      display: inline-block;
    }
  }

</style>
