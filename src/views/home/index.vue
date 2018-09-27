<template>
  <main>
    <div class="heading">
      <h1><span> Mobile</span></h1>
      <p>一个基于Vue的移动端UI组件库，丰富、灵活、实用，快速搭建优质的金融类产品，让复杂的金融场景变简单。</p>
    </div>
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
        console.log(a);
        t.$router.push({
          name: 'car'
        });
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
