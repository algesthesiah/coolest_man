<template>
  <div class="">
    <div class="img_list">
      <img src="../../../static/img/6F8C046A-69D6-419C-BB82-9320245F70D5.png" alt="">
    </div>
    <div class="content">
      <van-collapse v-model="activeNames">
        <van-collapse-item title="有赞微商城" name="1">
          提供多样店铺模板，快速搭建网上商城
        </van-collapse-item>
        <van-collapse-item title="有赞零售" name="2">
          网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失
        </van-collapse-item>
        <van-collapse-item title="有赞美业" name="3">
          线上拓客，随时预约，贴心顺手的开单收银
        </van-collapse-item>
      </van-collapse>
    </div>
      <van-button class="btn" type="danger" @click="go">下一步</van-button>
  </div>
</template>

<script>
  import {
    Toast,
  } from 'vant'
  export default {
    name: 'find',
    data() {
      return {
        active: 0,
        activeNames: ['1']
      }
    },
    methods: {
      handleClick() {
        Toast('不错哟~')
      }
      ,go(){
        this.$router.push({
          name:'buy_finance'
        })
      }
    }
  }

</script>

<style scoped lang='less'>
  .img_list {
    img {
      width: 100%;
      height: 800px;
    }

  }
.btn{
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 90px;
}
</style>
