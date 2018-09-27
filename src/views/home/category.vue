<template>
  <div class="view">
    <div class="swiper">
      <van-swipe :autoplay="3000">
        <van-swipe-item>
          <img src="../../../static/img/6F8C046A-69D6-419C-BB82-9320245F70D5.png" alt="">
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../../static/img/6F8C046A-69D6-419C-BB82-9320245F70D5.png" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>
    <header>
      <van-icon name="search" size='24px' class="search" @click="handleClick" />
    </header>
    <div class="content">
      <div class="util_box">
        <div>
          <van-icon name="receive-gift" size='24px' class="search" @click="handleClick" />
          <div>尼玛</div>
        </div>
        <div>
          <van-icon name="receive-gift" size='24px' class="search" @click="handleClick" />
          <div>尼玛</div>
        </div>
        <div>
          <van-icon name="receive-gift" size='24px' class="search" @click="handleClick" />
          <div>尼玛</div>
        </div>
        <div>
          <van-icon name="receive-gift" size='24px' class="search" @click="handleClick" />
          <div>尼玛</div>
        </div>
      </div>
      <div class="row_box">
        <div class="box_til">
          <van-icon name="receive-gift" size='20px' class="search" />
          <span>主推系列课程</span>
          <span class="more">查看更多</span>
        </div>
        <div class="row_list">

          <div class="row_item">
            <img src="../../../static/img/6F8C046A-69D6-419C-BB82-9320245F70D5.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    Toast,
  } from 'vant'
  export default {
    name: 'category',

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
img{
  width: 100%;

}
  .swiper {
    height: 475px;

    .van-swipe {
      height: 100%;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }

  header {
    height: 100px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: red;
    opacity: 0.5;

    .search {
      position: absolute;
      right: 30px;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  .util_box {
    margin-bottom: 24px;
    background-color: white;
    display: flex;
    color: #999;
    padding: 24px;

    &>div {
      flex: 1;
    }

  }

  .row_box {
    background-color: white;
    padding: 24px;

    .row_list {
      width: 100%;
      overflow-x: auto;
      display: flex;

      .row_item {
        width: 400px;
        height: 450px;
        padding: 24px;
      }
    }

  }

  .box_til {
    width: 100%;
    font-size: 32px;
    text-align: start;
    vertical-align: middle;
    display: inline-block;

    i {
      vertical-align: middle;
      margin-top: -6px;
    }

    .more {
      color: #999;
      font-size: 28px;
      float: right;
    }
  }

</style>
