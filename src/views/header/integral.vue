<template>
  <div class="container">
        <div class="header clearfix">
            <div>
                <div class="item dhjf">
                    <div class="num">10</div>
                    <div class="name">兑换积分</div>
                </div>
            </div>
            <div>
                <div class="item syjf">
                    <div class="num">10</div>
                    <div class="name">消收益积分</div>
                </div>
            </div>
            <div>
                <div class="item xfjf">
                    <div class="num">10</div>
                    <div class="name">消费积分</div>
                </div>
            </div>
        </div>
        <div class="tgrecord">
            <div class="title"><i class="iconfont icon-jifen"></i>积分记录</div>
            <div class="record">
                <div class="box">
                    <div class="f_left">
                        <div class="name">世界杯的积分</div>
                        <div class="time">2018-08-11 08:00:00</div>
                    </div>
                    <div class="f_right fenshu">200</div>
                </div>
            </div>
            <div class="record">
                <div class="box">
                    <div class="f_left">
                        <div class="name">世界杯的积分</div>
                        <div class="time">2018-08-11 08:00:00</div>
                    </div>
                    <div class="f_right fenshu">200</div>
                </div>
            </div>
            <div class="record">
                <div class="box">
                    <div class="f_left">
                        <div class="name">世界杯的积分</div>
                        <div class="time">2018-08-11 08:00:00</div>
                    </div>
                    <div class="f_right fenshu">200</div>
                </div>
            </div>
            <div class="record">
                <div class="box">
                    <div class="f_left">
                        <div class="name">世界杯的积分</div>
                        <div class="time">2018-08-11 08:00:00</div>
                    </div>
                    <div class="f_right fenshu">200</div>
                </div>
            </div>
            <div class="record">
                <div class="box">
                    <div class="f_left">
                        <div class="name">世界杯的积分</div>
                        <div class="time">2018-08-11 08:00:00</div>
                    </div>
                    <div class="f_right fenshu">200</div>
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
   .header {
            height: 250px;
        }
        .header>div {
            width: 33.33%;
            height: 250px;
            box-sizing: border-box;
            padding-top: 50px;
            text-align: center;
            color: #fff;
            float: left;
        }

        .header>div .item {
            width: 200px;
            height: 150px;
            border-radius: 10px;
            background: #68aade;
            margin: 0 auto;
        }

        .header>div .item .num {
            font-size: 40px;
            font-weight: bolder;
            padding-top: 20px;
        }

        .header>div .item .name {
            font-size: 28px;
        }

        .tgrecord .iconfont {
            font-size: 40px;
            color: #f1c387;
        }

        .tgrecord .title {
            padding-left: 40px;
            height: 90px;
            position: relative;
            font-size: 36px;
            color: #333;
            line-height: 90px;
        }

        .tgrecord .title .icon-jifen {
            color: red;
            font-size: 40px;
        }

        .tgrecord .record {
            padding: 0 35px;
        }

        .tgrecord .record .box {
            height: 120px;
            box-sizing: border-box;
            padding-top: 15px;
            border-bottom: 1px solid #ccc;
        }

        .tgrecord .record .box .name {
            padding-top: 10px;
            font-size: 32px;
            line-height: 50px;
            color: #000;
            width: 200px;
            font-weight: 600;
        }

        .tgrecord .record .box .time {
            font-size: 24px;
            line-height: 40px;
            color: #ccc;
        }

        .tgrecord .record .box .fenshu {
            font-size: 28px;
            line-height: 100px;
            color: #000;
        }
</style>
