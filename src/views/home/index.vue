<template>
  <main>
    <router-view class="wrap"></router-view>
    <van-tabbar v-model="active" class="tarbar" @change='barChange'>
      <van-tabbar-item icon="pending-payment" to='/category'>课程</van-tabbar-item>
      <van-tabbar-item icon="shop" to='/shop'>商城</van-tabbar-item>
      <van-tabbar-item icon="password-view" to='/find'>发现</van-tabbar-item>
      <van-tabbar-item icon="contact" to='/user'>我的</van-tabbar-item>
    </van-tabbar>
  </main>
</template>

<script>
  import {
    Button,
    Toast,
    Tabbar,
    TabbarItem
  } from 'vant'
  export default {
    name: 'home',
    components: {
      [Button.name]: Button
    },
    data() {
      return {
        active: 0
      }
    },
    methods: {
      barChange(a) {
        var t = this;
      },
      handleClick() {
        Toast('不错哟~')
      }
    }
  }

</script>

<style scoped lang='less'>
  .tarbar {
    height: 92px;
  }

</style>
