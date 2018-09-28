<template>
  <div class="container">
    <div class="exchangeTitle">兑换积分</div>
    <div class="integralBox">
      <div class="colorBg">
        <div class="integralCont">
          <p>0</p>
          <span>当前积分</span>
        </div>
        <div class="middleCont">
          积分:人民币=1:1
        </div>
        <div class="integralCont">
          <p>0</p>
          <span>当前积分</span>
        </div>
      </div>
    </div>
    <div class="space"></div>
    <div class="money">
      <input type="text" class="numbers" placeholder="请输入兑换的兑换积分个数（请输入正整数）">
      <input type="text" placeholder="可兑换金额（元）">
      <div class="saveButton"><button>确认充值</button></div>
    </div>
    <div class="saveList">
      <div class="listLittle">兑换记录</div>
      <ul>
        <li>
          <span>兑换时间</span>
          <span>兑换金额</span>
          <span>兑换方式</span>
        </li>
        <li>
          <span>12:00</span>
          <span>100</span>
          <span>微信支付</span>
        </li>
      </ul>
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
    }
  }

</script>

<style scoped lang='less'>
.container {
  background: #f7f7f7;
}
.container .exchangeTitle {
  padding: 25px;
  color: #333;
  font-size: 30px;
  background: #fff;
}
.container .integralBox {
  background: #fff;
  padding: 30px;
}
.container .integralBox .colorBg {
  width: 660px;
  border-radius: 5px;
  background: #68aade;
  padding: 40px 0;
  margin: 0 auto 20px;
}
.container .integralBox .colorBg .integralCont {
  width: 220px;
  display: inline-block;
  text-align: center;
}
.container .integralBox .colorBg .integralCont p {
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 30px;
}
.container .integralBox .colorBg .integralCont span {
  font-size: 26px;
}
.container .integralBox .colorBg .middleCont {
  width: 200px;
  display: inline-block;
  font-size: 24px;
  line-height: 100px;
  vertical-align: top;
}
.container .space {
  width: 100%;
  height: 30px;
  background: #fafafa;
}
.container .money {
  background: #fff;
  padding: 30px 10px;
  text-align: center;
}
.container .money input {
  border-bottom: 1px solid #858585;
  width: 660px;
  font-size: 30px;
  height: 100px;
  line-height: 100px;
}
.container .money input.numbers {
  border-bottom: 0;
  padding-left: 25px;
  background: #eeeeee;
}
.container .money .saveButton {
  margin-top: 50px;
}
.container .money .saveButton button {
  width: 660px;
  font-size: 35px;
  height: 100px;
  line-height: 100px;
  color: #fff;
  border-radius: 10px;
  background: #9a9a9a;
  font-weight: bold;
}
.container .saveList {
  margin-top: 30px;
  width: 100%;
  background: #fff;
  box-sizing: border-box;
}
.container .saveList .listLittle {
  padding-left: 25px;
  font-size: 30px;
  color: #333;
  padding-top: 25px;
  padding-bottom: 25px;
}
.container .saveList ul li {
  border-bottom: 1px solid #eee;
}
.container .saveList ul li span {
  color: #333;
  font-size: 24px;
  display: inline-block;
  width: 32%;
  text-align: center;
  font-size: 28px;
  padding: 10px 0;
}
.container .saveList ul li:last-child {
  border-bottom: 0;
}
</style>
