<template>
  <div class="view">
    <div class="container">
      <div class="header">
        <div class="operate clearfix">
          <div class="f_right quit">
            <van-icon name="setting" size='18px' class="more set" />
          </div>
        </div>
        <div class="userInfo clearfix">
          <div class="f_left">
            <div class="photo"></div>
            <div class="otherInfo">
              <div class="name">里成绩</div>
              <div class="level">普通用户</div>
            </div>
          </div>
          <div class="f_right invent">
            邀请好友 >
          </div>
        </div>
        <div class="moneyOp">
          <div class="recharge" @click="go('save')">
            <div class="icon"><i class="iconfont icon-chongzhi"></i></div>
            <div class="name">充值</div>
          </div>
          <div class="duihuan" @click="go('exchange')">
            <div class="icon"><i class="iconfont icon-duihuanqingkuang"></i></div>
            <div class="name">兑换</div>
          </div>
          <div class="tixian"@click="go('reflect')" >
            <div class="icon"><i class="iconfont icon-tixian"></i></div>
            <div class="name">提现</div>
          </div>
        </div>
      </div>
      <div>
        <div class="functional">
          <div @click="go('integral')">
            <div class="icon jf"><i class="iconfont icon-wodejifen"></i></div>
            <div class="name">我的积分</div>
          </div>
          <div @click="go('learning_finance')">
            <div class="icon buy"><i class="iconfont icon-zuanshi-01"></i></div>
            <div class="name">购买VIP</div>
          </div>
          <div @click="go('learning_finance')" >
            <div class="icon learn"><i class="iconfont icon-meiyuan_icon"></i></div>
            <div class="name">学习类理财</div>
          </div>
          <div  @click="go('myorder')">
            <div class="icon order"><i class="iconfont icon-ziyuan"></i></div>
            <div class="name">我的订单</div>
          </div>
        </div>

        <div class="account">
          <div class="lines" @click="('banlance')">
            <i class="iconfont icon-jine"></i>
            <div class="item">余额 <span class="f_right">0.00 <i class=""> ></i></span></div>
          </div>
          <div class="nolines" @click="go('promotion')">
            <i class="iconfont icon-huodongtuiguang"></i>
            <div class="item">推广 <span class="f_right"><i> ></i></span></div>
          </div>
        </div>
        <div class="account">
          <div class="lines ">
            <i class="iconfont icon-guanzhu"></i>
            <div class="item">关注的课程 <span class="f_right">0.00 <i class=""> ></i></span></div>
          </div>
          <div class="nolines">
            <i class="iconfont icon-goumai"></i>
            <div class="item">已购课程 <span class="f_right"><i> ></i></span></div>
          </div>
        </div>
        <div class="account">
          <div class="nolines">
            <i class="iconfont icon-xiaoxi"></i>
            <div class="item">系统消息 <span class="f_right">0.00 <i class=""> ></i></span></div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import '../../styles/common.css';
  import {

    Toast,

  } from 'vant'
  export default {
    name: 'user',
    data() {
      return {
        active: 0
      }
    },
    methods: {
      handleClick() {
        Toast('不错哟~')
      },
      go(a){
        this.$router.push({
          name:a
        })
      }
    }
  }

</script>

<style scoped lang='less'>
.view{
  color: white !important;
}
.header {
  height: 376px;
  background: #bf0b14;
  position: relative;
}

.header .operate {
  line-height: 70px;
}

.header .operate .quit {
  font-size: 60px;
  padding: 20px;
}

.header .userInfo {
  padding-left: 40px;
  height: 30px;
}

.header .userInfo .f_left {
  width: 480px;
  float: left;
}

.header .userInfo .f_left .photo {
  height: 110px;
  width: 110px;
  display: inline-block;
  border-radius: 50%;
  background: #fff;
  margin-right: 30px;
}

.header .userInfo .f_left .otherInfo {
  display: inline-block;
  vertical-align: top;
}

.header .userInfo .f_left .otherInfo .name {
  font-size: 32px;
  padding-top: 15px;
}

.header .userInfo .f_left .otherInfo .level {
  height: 36px;
  margin-top: 10px;
  line-height: 36px;
  font-size: 24px;
  padding: 0 15px;
  border-radius: 18px;
  background: #db1c24;
}

.header .userInfo .invent {
  background: #e3101f;
  font-size: 28px;
  border-radius: 26px 0 0 26px;
  line-height: 52px;
  padding-left: 28px;
  margin-top: 10px;
  width: 170px;
}

.header .moneyOp {
  height: 140px;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding-top: 20px;
  box-sizing: border-box;
}

.header .moneyOp > div {
  width: 33.33%;
  height: 120px;
  float: left;
  text-align: center;
}

.header .moneyOp > div i {
  font-size: 40px;
}

.header .moneyOp > div .name {
  font-size: 32px;
  padding: 15px;
}

.header .moneyOp .recharge {
  position: relative;
}

.header .moneyOp .recharge::before {
  content: '';
  position: absolute;
  right: 0;
  height: 70px;
  width: 2px;
  background: #fff;
  top: 20px;
}

.header .moneyOp .duihuan {
  position: relative;
}

.header .moneyOp .duihuan::before {
  content: '';
  position: absolute;
  right: 0;
  height: 70px;
  width: 2px;
  background: #fff;
  top: 20px;
}

.functional {
  height: 188px;
  background: #fff;
}

.functional > div {
  width: 25%;
  height: 100%;
  box-sizing: border-box;
  padding-top: 30px;
  float: left;
}

.functional > div .name {
  text-align: center;
  line-height: 70px;
  font-size: 26px;
  color: #333;
}

.functional > div .icon {
  width: 80px;
  height: 80px;
  margin: 0 auto;
  border-radius: 50%;
}

.functional > div .icon i {
  font-size: 80px;
  fill: currentColor;
  overflow: hidden;
}

.functional > div .icon.jf {
  color: #a2caaf;
}

.functional > div .icon.buy {
  color: #f4cd42;
}

.functional > div .icon.learn {
  color: #76a3cd;
}

.functional > div .icon.order {
  color: #d77a75;
}

.account {
  margin-top: 30px;
  color: #333;
  font-size: 28px;
  vertical-align: top;
}

.account > div {
  background: #fff;
  line-height: 88px;
  position: relative;
}

.account > div .iconfont {
  float: left;
  font-size: 48px;
  margin-left: 45px;
}

.account > div .iconfont.icon-jine {
  color: red;
}

.account > div .iconfont.icon-huodongtuiguang {
  color: #1d5748;
}

.account > div .iconfont.icon-guanzhu {
  color: #3c9c81;
}

.account > div .iconfont.icon-goumai {
  color: #3c9c81;
}

.account > div .iconfont.icon-xiaoxi {
  color: #527521;
}

.account > div .item {
  margin-left: 110px;
  margin-right: 20px;
  border-bottom: 2px solid #e1e1e1;
}

.account .nolines .item {
  border-bottom: none;
}
</style>
