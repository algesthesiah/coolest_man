<template>
  <div class="view">
    <div class="hed">
      <van-icon name="arrow-left" class="l_icon" @click="back" />
      <span class="til center">{{$route.meta.name}}</span>
    </div>
    <router-view class="wrap"></router-view>
  </div>
</template>

<script>
  import {
    Toast,
  } from 'vant'
  export default {
    name: 'home_header',
    data() {
      return {
        active: 0
      }
    },
    methods: {
      handleClick() {
        Toast('不错哟~')
      },
      back() {
        this.$router.go(-1);
      }
    },

  }

</script>

<style scoped lang='less'>
  .til {
    color: white;
    font-size: 28px;
    left: 50%;
    transform: translate(-50%,-50%);
  }

  .hed {
    z-index: 9999;
    position: fixed;
    width: 100%;
    height: 88px;
    line-height: 88px;
    padding-left: 24px;
    background-color: #e23131;

    i {
      color: white;
      vertical-align: middle;
    }
  }

  .wrap {
    padding-top: 88px;
  }

</style>
