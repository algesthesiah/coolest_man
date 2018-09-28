<template>
  <div class="">
    <div>
      <van-tabs v-model="active" class="tab">
        <van-tab title="A套餐">
          <div class="course_box">
            <div class="img">
              <div class="y">
                <span class="big">A套餐</span>
                <span>-学习类理财</span>
              </div>
              <div class="r">学费:3000.00元</div>
              <div class="s">学期:两年</div>
            </div>
            <ul>
              <li>1、 享受两年内在平台上无限制观看并学习平台所有更新课程的权限</li>
              <li>2、 终身享受预科学员身份和推广新用户权益</li>
              <li>2、 根据推广总金额为业绩排名，对前三名给予丰厚奖励</li>
            </ul>
          </div>
        </van-tab>
        <van-tab title="B套餐">
          <div class="course_box">

          </div>
        </van-tab>
        <van-tab title="C套餐">
          <div class="course_box">

          </div>
        </van-tab>
      </van-tabs>
      <van-button class="btn" type="danger" @click="go">立即购买</van-button>
    </div>
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
      },go(){
        this.$router.push({
          name:'pay'
        })
      }

    }
  }

</script>

<style scoped lang='less'>
  .course_box {
    padding: 30px;
    color: white;

    .y {
      padding: 30px;

      .big {
        font-size: 40px;
      }
    }

    .r {
      padding: 24px;
      font-size: 24px;
      padding-bottom: 12px;
    }

    .s {
      padding: 30px;
      padding-top: 12px;
      font-size: 24px;
    }

    .img {
      background: url('../../../static/img/6F8C046A-69D6-419C-BB82-9320245F70D5.png') no-repeat center center;
      height: 280px;
      margin-top: 24px;
      margin-bottom: 48px;
    }
  }

  .btn {
    position: fixed;
    bottom: 60px;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 90px;
  }

  ul {
    margin-top: 30px;
    color: #333;
    font-size: 24px;
  }

</style>
