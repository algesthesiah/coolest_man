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
      <van-icon name="search" size='24px' class="search" @click="goSearch" />
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
          <span>最新课程</span>
          <span class="more">查看更多</span>
        </div>
        <div class="row_list">
          <div class="row_item">
            <img src="../../../static/img/6F8C046A-69D6-419C-BB82-9320245F70D5.png" alt="">
            <div class="item_txt">
              <div class="t">
                <van-icon name="receive-gift" size='20px' class="search" />
                <span>粒子理财进阶课</span>
              </div>
              <div class="b">￥99</div>
            </div>
          </div>
          <div class="row_item">
            <img src="../../../static/img/6F8C046A-69D6-419C-BB82-9320245F70D5.png" alt="">
            <div class="item_txt">
              <div class="t">
                <van-icon name="receive-gift" size='20px' class="search" />
                <span>粒子理财进阶课</span>
              </div>
              <div class="b">￥99</div>
            </div>
          </div>
          <div class="row_item">
            <img src="../../../static/img/6F8C046A-69D6-419C-BB82-9320245F70D5.png" alt="">
            <div class="item_txt">
              <div class="t">
                <van-icon name="receive-gift" size='20px' class="search" />
                <span>粒子理财进阶课</span>
              </div>
              <div class="b">￥99</div>
            </div>
          </div>
          <div class="row_item">
            <img src="../../../static/img/6F8C046A-69D6-419C-BB82-9320245F70D5.png" alt="">
            <div class="item_txt">
              <div class="t">
                <van-icon name="receive-gift" size='20px' class="search" />
                <span>粒子理财进阶课</span>
              </div>
              <div class="b">￥99</div>
            </div>
          </div>
        </div>
      </div>
      <div class="column_box">
        <div class="box_til">
          <van-icon name="receive-gift" size='20px' class="search" />
          <span>最新课程</span>

          <span class="more gd center">更多</span>
          <div class="more center sx"></div>
          <van-icon name="setting" size='14px' class="more set center" />

        </div>
        <div class="column_list">
          <div class="column_item">
            <img src="../../../static/img/6F8C046A-69D6-419C-BB82-9320245F70D5.png" alt="">
            <div class="item_txt">
              <div class="t">
                <van-icon name="receive-gift" size='20px' class="search" />
                <span>粒子理财进阶课</span>
              </div>
              <div class="b">
                <span>￥99</span>
                <span class="gx">更新中</span>
              </div>
            </div>
          </div>
          <div class="column_item">
            <img src="../../../static/img/6F8C046A-69D6-419C-BB82-9320245F70D5.png" alt="">
            <div class="item_txt">
              <div class="t">
                <van-icon name="receive-gift" size='20px' class="search" />
                <span>粒子理财进阶课</span>
              </div>
              <div class="b">
                <span>￥99</span>
                <span class="gx">更新中</span>
              </div>
            </div>
          </div>
          <div class="column_item">
            <img src="../../../static/img/6F8C046A-69D6-419C-BB82-9320245F70D5.png" alt="">
            <div class="item_txt">
              <div class="t">
                <van-icon name="receive-gift" size='20px' class="search" />
                <span>粒子理财进阶课</span>
              </div>
              <div class="b">
                <span>￥99</span>
                <span class="gx">更新中</span>
              </div>
            </div>
          </div>
          <div class="column_item">
            <img src="../../../static/img/6F8C046A-69D6-419C-BB82-9320245F70D5.png" alt="">
            <div class="item_txt">
              <div class="t">
                <van-icon name="receive-gift" size='20px' class="search" />
                <span>粒子理财进阶课</span>
              </div>
              <div class="b">
                <span>￥99</span>
                <span class="gx">更新中</span>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div class="pro_box">
        <img src="../../../static/img/6F8C046A-69D6-419C-BB82-9320245F70D5.png" alt="">
        <div>你可能遇到的问题</div>
      </div>
      <div class="special_box">
        <div class="box_til">
          <van-icon name="receive-gift" size='20px' class="search" />
          <span>最新课程</span>

          <span class="more gd center">更多</span>
        </div>
        <div class="img_list">
          <img src="../../../static/img/6F8C046A-69D6-419C-BB82-9320245F70D5.png" alt="">
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
      },
      goSearch(){
        this.$router.push({
          name:'search'
        })
      }
    }
  }

</script>

<style scoped lang='less'>
.view {
  padding-bottom: 116px;
}
img {
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
  height: 96px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgb(200, 0, 0);
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

  & > div {
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
      min-width: 400px;
      // height: 450px;
      padding: 24px;
      .item_txt {
        text-align: start;
        .t {
          text-align: start;
          i {
            vertical-align: middle;
            margin-top: -6px;
          }
        }
        .b {
          color: rgb(200, 0, 0);
        }
      }
    }
  }
}
.column_box {
  margin-top: 24px;
  background-color: white;
  padding: 24px;
  .column_list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .column_item {
      width: 50%;
      max-width: 50%;
      // height: 450px;
      padding: 24px;
      .item_txt {
        text-align: start;
        .t {
          text-align: start;
          i {
            vertical-align: middle;
            margin-top: -6px;
          }
        }
        .b {
          color: rgb(200, 0, 0);
          .gx {
            float: right;
            font-size: 24px;
            color: #999;
          }
        }
      }
    }
  }
}
.box_til {
  width: 100%;
  font-size: 32px;
  text-align: start;
  vertical-align: middle;
  display: inline-block;
  position: relative;
  i {
    vertical-align: middle;
    margin-top: -6px;
  }

  .more {
    color: #999;
    font-size: 28px;
    float: right;
  }
  .set {
    right: 86px;
    margin-top: 0;
    color: rgb(200, 0, 0);
  }
  .sx {
    right: 68px;
    height: 40px;
    border-right: 2px solid #333;
  }
  .gd {
    right: 0;
  }
}
.pro_box {
  margin: 0 24px;
  margin-top: 24px;
  position: relative;
  background-color: white;
  overflow: hidden;
  img {
    height: 160px;
  }
  div {
    position: absolute;
    bottom: 0;
    font-size: 28px;
    opacity: 0.5;
    background-color: #333;
    width: 100%;
    text-align: center;
    color: white;
  }
}
.special_box {
  padding: 24px;
  background-color: white;
  .img_list {
    img {
      height: 160px;
      margin-top: 24px;
    }
  }
}
</style>
