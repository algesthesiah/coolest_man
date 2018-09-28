<template>
  <div class="container">
    <div class="balanceBox">
      <p>当前余额(元)</p>
      <div class="leftMoney"> 0.00</div>
    </div>
    <ul class="myList">
      <li>
        <div class="icon">
          <em class="iconfont icon icon-chongzhi chongzhi"></em>
        </div>
        <div class="leftCont">
          <span>充值</span>
          <a href="" class="iconfont icon-xiayibu"></a>
        </div>
      </li>
      <li>
        <div class="icon">
          <em class="iconfont icon icon-duihuan duihuan"></em>
        </div>
        <div class="leftCont">
          <span>兑换</span>
          <a href="" class="iconfont icon-xiayibu"></a>
        </div>
      </li>
      <li>
        <div class="icon">
          <em class="iconfont icon icon-tixian1 tixian"></em>
        </div>
        <div class="leftCont">
          <span>提现</span>
          <a href="" class="iconfont icon-xiayibu"></a>
        </div>
      </li>
    </ul>
    <div class="space"></div>
    <ul class="myList">
      <li>
        <div class="icon">
          <em class="iconfont icon icon-tixian tixianjilu"></em>
        </div>
        <div class="leftCont">
          <span>提现申请记录</span>
          <a href="" class="iconfont icon-xiayibu"></a>
        </div>
      </li>
    </ul>
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
.container {
  background: #fafafa;
  height: 100%;
}

.container .balanceBox {
  padding-top: 180px;
  padding-bottom: 75px;
  width: 100%;
  background: #bf0008;
  color: #fff;
  text-align: center;
}

.container .balanceBox p {
  font-size: 24px;
  margin-bottom: 70px;
}

.container .balanceBox .leftMoney {
  font-size: 50px;
  text-align: center;
  font-weight: bold;
  width: 100%;
}

.container .myList {
  background: #fff;
  margin-bottom: 30px;
}

.container .myList li:last-child .leftCont {
  border-bottom: 0;
}

.container .myList li .icon {
  width: 100px;
  height: 95px;
  text-align: center;
  line-height: 95px;
  display: inline-block;
  vertical-align: top;
  float: left;
}

.container .myList li .icon em {
  font-size: 40px;
  color: #2f9681;
}

.container .myList li .icon em.duihuan {
  color: #5c7b98;
}

.container .myList li .icon em.tixian {
  color: #9e3225;
}

.container .myList li .icon em.tixianjilu {
  color: #267063;
}

.container .myList li .leftCont {
  display: block;
  height: 95px;
  line-height: 95px;
  border-bottom: 1px solid #e2e2e2;
  position: relative;
}

.container .myList li .leftCont span {
  font-size: 30px;
  color: #333;
}

.container .myList li .leftCont a {
  text-align: center;
  font-size: 50px;
  display: inline-block;
  position: absolute;
  width: 100px;
  height: 95px;
  right: 0;
  color: #999;
}

.container .space {
  width: 100%;
  height: 30px;
  background: #fafafa;
}
</style>
