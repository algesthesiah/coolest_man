<template>
  <div class="container">
    <div class="balance">当前余额:<em>0.00元</em></div>
    <div class="rechagre">
      <ul class="choseUl">
        <li>
          <div class="saveBox">
            <em class="iconfont icon-BAI-fuxuankuang chose icon-BAI-fuxuankuangs"></em>
            微信充值
          </div>
          <div class="wechat">
            <em class="iconfont icon-qunfengzhifuchenggong"></em>
            <div class="saveDes">
              <span> 微信支付</span>
              <p>微信安全支付</p>
            </div>
          </div>

        </li>
        <li>
          <div class="saveBox">
            <em class="iconfont icon-BAI-fuxuankuang"></em>
            支付宝充值
          </div>
          <div class="wechat">
            <em class="iconfont icon-zhifubao zhifubao"></em>
            <div class="saveDes">
              <span> 支付宝支付</span>
              <p>支付宝安全支付</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="money">
      <input type="text" placeholder="请输入您要充值的金额（>=1.00元）">
      <div class="saveButton"><button>确认充值</button></div>
    </div>
    <div class="saveList">
      <div class="listLittle">充值记录</div>
      <ul>
        <li>
          <span>充值时间</span>
          <span>充值金额</span>
          <span>充值方式</span>
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
    },
    mounted () {
              $(document).ready(function () {
            $(".saveBox em").click(function () {
                if ($(this).hasClass("chose")) {
                    $(this).removeClass("chose icon-BAI-fuxuankuangs");
                } else {
                    console.log($(this).parents("li"));
                    $(this).parents("li").siblings().find(".saveBox em").removeClass("chose icon-BAI-fuxuankuangs");
                    $(this).addClass("chose icon-BAI-fuxuankuangs");
                }
            })
        })
    }
  }

</script>

<style scoped lang='less'>
.container {
  background: #f7f7f7;
}
.container .balance {
  padding-left: 30px;
  padding-top: 25px;
  padding-bottom: 25px;
  font-size: 24px;
  color: #333;
}
.container .balance em {
  font-style: normal;
  color: #bf0008;
  display: inline-block;
  margin-left: 35px;
}
.container .rechagre {
  padding: 25px 30px 30px;
  background: #fff;
  margin-bottom: 30px;
}
.container .rechagre ul li {
  display: inline-block;
  width: 330px;
  margin-right: 15px;
}
.container .rechagre ul li:last-child {
  margin-right: 0;
}
.container .rechagre ul li .saveBox {
  color: #333;
  font-size: 30px;
  position: relative;
  padding-left: 50px;
  margin-bottom: 35px;
}
.container .rechagre ul li .saveBox em {
  position: absolute;
  font-size: 45px;
  color: #979797;
  top: -5px;
  left: 0;
}
.container .rechagre ul li .saveBox em.chose {
  color: #bf0008;
}
.container .rechagre ul li .wechat {
  background: #f8f8f8;
  width: 330px;
  position: relative;
  padding: 60px 30px;
  color: #333;
  box-sizing: border-box;
}
.container .rechagre ul li .wechat em {
  position: absolute;
  font-size: 80px;
  color: #00c901;
  left: 30px;
  top: 60px;
}
.container .rechagre ul li .wechat em.zhifubao {
  color: #2b81f8;
}
.container .rechagre ul li .wechat .saveDes {
  margin-left: 100px;
}
.container .rechagre ul li .wechat .saveDes span {
  font-size: 28px;
}
.container .rechagre ul li .wechat .saveDes p {
  margin-top: 18px;
  color: #707070;
  font-size: 24px;
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
