<template>
  <div class="">
    <div class="course_list">
      <div class="course_item">
        <img class="center" src="../../../static/img/6F8C046A-69D6-419C-BB82-9320245F70D5.png" alt="">
        <div class="txt">
          <div class="t">
            <span>A套餐</span>

          </div>
          <div class="b">
            <span class="s">￥3000</span>
            <span class="e">x1</span>
          </div>
        </div>
      </div>
      <div class="num">
        小计: <span class="r"> ￥123</span>
      </div>
    </div>
    <div class="radio_box">
      <van-radio-group v-model="radio">
        <van-radio name="1">A余额支付
          <span class="balance">(当前可用余额余额0)</span>
        </van-radio>
        <van-radio name="2">A余额支付
          <span class="balance">(当前可用余额余额0)</span>
        </van-radio>
      </van-radio-group>
      <div class="buy">
        应付金额: <span class="r"> 123元</span>
      </div>
      <van-button class="btn" type="danger" @click="go">确认购买</van-button>
    </div>
  </div>
</template>

<script>
  import {
    Toast,
  } from 'vant'
  export default {
    name: 'pay',
    data() {
      return {
        search_value: null,
        active: 0,
        radio: '1'
      }
    },
    methods: {
      handleClick() {
        Toast('不错哟~')
      },
      onSearch() {
        Toast('不错哟~')
      },
      onCancel() {
        Toast('不错哟~')
      },
    }
  }

</script>


<style scoped lang='less'>
  .radio_box {
    margin-top: 24px;
    background-color: white;
    padding: 24px;
    border-bottom: 1px solid #ccc;

    .balance {
      font-size: 24px;
      color: #ccc;
    }

  }

  .buy {
    padding: 24px 0;
    text-align: end;

    .r {
      color: rgb(236, 19, 19);
    }
  }

  .course_list {
    background-color: white;

    .num {
      height: 90px;
      line-height: 90px;
      text-align: end;
      padding-right: 24px;

      .r {
        color: rgb(236, 19, 19);
      }
    }

    .course_item {
      padding: 20px;
      position: relative;
      padding-left: 45%;
      border-bottom: 1px solid #ccc;

      img {
        left: 20px;
        width: 35%;
        height: 160px;
      }

      .txt {
        .t {
          min-height: 120px;
        }

        .b {
          font-size: 24px;

          .s {
            margin-top: 40px;
            color: rgb(236, 19, 19);
          }

          .e {
            float: right;
            color: #333;
          }
        }
      }
    }
  }
.btn{
  position: fixed;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 90px;
}
</style>
