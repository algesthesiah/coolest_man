<template>
  <div class="container">
    <div class="header">
      <div class="cardops">
        <div class="cardList">
          <div class="item"></div>
          <div class="item"></div>
        </div>
        <div class="addCard">+提现到其他银行卡</div>
      </div>
      <div class="withdraw">
        <div class="money">
          <input placeholder="输入您要提现的金额（≥100元的正整数）" type="text">
                </div>
          <div class="tips">提现手续费，提现金额的1%</div>
        </div>
      </div>
      <div class="verification">
        <div class="phone">135****8888</div>
        <div class="smsCode clearfix">
          <div class="f_left">
            <input placeholder="请输入收到的验证码" type="text">
                </div>
            <div class="btn f_right">获取验证码</div>
          </div>
          <div class="noKnow"></div>
          <div class="sureBtn">确定</div>
        </div>
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
    },

  }

</script>

<style scoped lang='less'>
.header {
  background: #fff;
  padding: 30px 30px 0 30px;
}
.cardops {
  padding-bottom: 30px;
  border-bottom: 1px solid #ccc;
}
.cardops .cardList .item {
  height: 190px;
  border-radius: 10px;
  background: rgba(199, 150, 58, 0.8);
  margin-bottom: 30px;
}
.cardops .addCard {
  width: 430px;
  height: 70px;
  border: 1px solid #ccc;
  margin: 0 auto;
  line-height: 70px;
  text-align: center;
  font-size: 26px;
  color: #333;
}
.withdraw .money {
  height: 108px;
  border-bottom: 1px solid #ccc;
}
.withdraw .money > input {
  width: 690px;
  height: 108px;
  line-height: normal;
  font-size: 32px;
}
.withdraw .tips {
  line-height: 108px;
  font-size: 32px;
  color: #333;
}
.verification {
  margin-top: 30px;
  background: #fff;
  padding: 0 30px;
}
.verification .phone {
  line-height: 108px;
  font-size: 36px;
  color: #b3b3b3;
  border-bottom: 1px solid #ccc;
}
.verification .smsCode {
  height: 108px;
  border-bottom: 1px solid #ccc;
}
.verification .smsCode .left {
  width: 450px;
}
.verification .smsCode .left input {
  width: 690px;
  height: 108px;
  line-height: normal;
  font-size: 32px;
}
.verification .smsCode .btn {
  height: 76px;
  width: 204px;
  display: inline-block;
  border-radius: 8px;
  line-height: 76px;
  text-align: center;
  background: #bf0008;
  color: #fff;
  font-size: 32px;
  margin-top: 16px;
}
.verification .noKnow {
  height: 108px;
  border-bottom: 1px solid #ccc;
}
.verification .sureBtn {
  margin-top: 50px;
  width: 650px;
  height: 100px;
  line-height: 100px;
  border-radius: 10px;
  background: #999999;
  color: #fff;
  text-align: center;
  font-weight: 800;
  font-size: 40px;
}
</style>
