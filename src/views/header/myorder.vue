<template>
  <div class="container">
    <van-tabs v-model="active" class="tab">
      <van-tab title="全部">
        <div class="orderList">
          <div class="item">
            <div class="time">下单时间：2018-7-8</div>
            <div class="clearfix">
              <div class="baseInfo f_left clearfix">
                <img class="f_left" src="http://oss.weidai.com.cn/micro_mood_home_pic_20180327183930393.jpg" alt="">
                <div class="f_right">
                  <div class="title">100W的电视机</div>
                  <div class="content">独立思考积分跨境电商李菲离开家</div>
                </div>
              </div>
              <div class="money right">¥：100</div>
            </div>
            <div>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="交易成功">
        <div class="teacher_item">
          <img class="center" src="../../../static/img/6F8C046A-69D6-419C-BB82-9320245F70D5.png" alt="">
          <div class="t">
            <span>尼玛</span>

          </div>
          <div class="b out_txt">
            123123213123221322213121
          </div>
        </div>
      </van-tab>
      <van-tab title="待支付">
        <div class="teacher_item">
          <img class="center" src="../../../static/img/6F8C046A-69D6-419C-BB82-9320245F70D5.png" alt="">
          <div class="t">
            <span>尼玛</span>

          </div>
          <div class="b out_txt">
            123123213123221322213121
          </div>
        </div>
      </van-tab>
      <van-tab title="已关闭">
        <div class="teacher_item">
          <img class="center" src="../../../static/img/6F8C046A-69D6-419C-BB82-9320245F70D5.png" alt="">
          <div class="t">
            <span>尼玛</span>

          </div>
          <div class="b out_txt">
            123123213123221322213121
          </div>
        </div>
      </van-tab>
    </van-tabs>

  </div>
</template>

<script>
import '../../styles/common.css';
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
      handleClick() {
        Toast('不错哟~')
      }
    }
  }

</script>

<style scoped lang='less'>
.swiper-container {
  height: 116px;
}

.swiper-container .swiper-slide {
  height: 110px;
  text-align: center;
  line-height: 110px;
  color: #333;
  font-size: 30px;
  border-bottom: 6px solid #ccc;
}

.swiper-container .active {
  color: #ff6634;
}

.swiper-container .active::before {
  position: absolute;
  content: '';
  width: 100%;
  height: 6px;
  background: #ff6634;
  bottom: -6px;
  left: 0;
}

.orderList {
  font-size: 30px;
  color: #333;
}

.orderList .item {
  height: 250px;
  padding-left: 10px;
  border-bottom: 2px solid #ccc;
}

.orderList .item .baseInfo {
  margin-top: 10px;
}

.orderList .item .baseInfo img {
  width: 110px;
  height: 110px;
  margin-right: 20px;
}
</style>
