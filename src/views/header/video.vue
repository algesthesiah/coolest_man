<template>
  <div class="">
    <div class="content fs0">
      <img class="video" src="../../../static/img/6F8C046A-69D6-419C-BB82-9320245F70D5.png" alt="">
    </div>
    <van-tabs v-model="active" class="tab">
      <van-tab title="章节">
        <div class="course_box">
          <div class="course_item">
            <div class="item_til">第一张</div>
            <div class="item_b">
              <van-icon name="down" size='12px' class="a" />区块链投资</div>
          </div>
        </div>
      </van-tab>
      <van-tab title="详情">
        <div class="course_box">
          <div class="course_item">
            <div class="item_til">第一张</div>
            <div class="item_til_s">
              100观看</div>
            <div class="item_til_b">
              免费</div>
            <div class="source_til">课程简介</div>
            <div>
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
          </div>
        </div>
      </van-tab>
    </van-tabs>
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
    }
  }

</script>

<style scoped lang='less'>
  .video {
    height: 500px;
    width: 100%;
  }

  .course_box {
    padding: 24px;
    background-color: white;

    .item_til {
      font-size: 32px;
      padding-bottom: 24px;
      color: #000;

    }

    .item_til_s {
      font-size: 24px;
      color: #ccc;
      padding-bottom: 24px;

    }

    .item_til_b {
      color: rgb(236, 29, 29);
      border-bottom: 1px solid rgb(228, 226, 226);
      padding-bottom: 24px;
    }

    .item_b {
      color: rgb(200, 0, 0);

    }

    .source_til {
      font-size: 30px;
      color: #111;
      padding-top: 24px;
      padding-bottom: 24px;
    }
  }

</style>
