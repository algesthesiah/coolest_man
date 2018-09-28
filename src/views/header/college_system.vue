<template>
  <div class="content">
    <div class="item" @click="go">
      <img src="../../../static/img/6F8C046A-69D6-419C-BB82-9320245F70D5.png" alt="">
      <span>新手上路</span>
    </div>
    <div class="item" @click="go">
      <img src="../../../static/img/6F8C046A-69D6-419C-BB82-9320245F70D5.png" alt="">
      <span>新手上路</span>
    </div>
    <div class="item" @click="go">
      <img src="../../../static/img/6F8C046A-69D6-419C-BB82-9320245F70D5.png" alt="">
      <span>新手上路</span>
    </div>
    <div class="item" @click="go">
      <img src="../../../static/img/6F8C046A-69D6-419C-BB82-9320245F70D5.png" alt="">
      <span>新手上路</span>
    </div>


  </div>
</template>

<script>
  import {
    Toast,
  } from 'vant'
  export default {
    name: 'college_system',
    data() {
      return {
        active: 0
      }
    },
    methods: {
      handleClick() {
        Toast('不错哟~')
      },
      go() {
        this.$router.push({
          name: 'noob'
        })
      }
    }
  }

</script>

<style scoped lang='less'>
  .content {
    font-size: 0;
    background-color: white;
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    .item {
      padding: 24px 40px;
      max-width: 33%;
      min-width: 33%;
      width: 33%;
      text-align: center;
      flex: 1;

      img {
        width: 100%;
        height: 120px;
        margin-bottom: 16px;
      }

      span {
        font-size: 28px;
      }
    }
  }

</style>
