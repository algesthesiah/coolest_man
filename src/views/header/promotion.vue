<template>
  <div class="container">
    <div class="header clearfix">
      <div class="tdfs">
        <div class="title">今日粉丝</div>
        <div class="num">0</div>
        <div class="ljnum">累计粉丝数：0</div>
      </div>
      <div class="tdjl">
        <div class="title">今日奖励AFCC</div>
        <div class="num">0</div>
        <div class="ljnum">累计推广AFCC：0</div>
      </div>
    </div>
    <div class="tgrecord">
      <div class="title"><i class="iconfont icon-iconfontzhizuobiaozhun023141"></i>推广记录</div>
      <div class="record">
        <table>
          <tr class="head">
            <td class="xh">序号</td>
            <td class="id">ID</td>
            <td class="rz">认证状态</td>
            <td class="gx">更新时间</td>
          </tr>
          <tr class="content">
            <td class="xh">10</td>
            <td class="id">20000</td>
            <td class="rz">已认证</td>
            <td class="gx">2018-10-11</td>
          </tr>
        </table>
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
  box-sizing: border-box;
  padding: 30px 0;
  background: #fff;
}

.header > div {
  width: 50%;
  text-align: center;
  float: left;
}

.header > div .title {
  color: #333333;
  font-size: 36px;
}

.header > div .num {
  color: red;
  font-size: 40px;
  font-weight: border;
  padding-top: 20px;
}

.header > div .ljnum {
  color: #787878;
  font-size: 30px;
  padding-top: 20px;
}

.header .tdfs {
  position: relative;
}

.header .tdfs::before {
  content: '';
  position: absolute;
  height: 190px;
  width: 2px;
  background: #e2e2e2;
  right: 0;
}

.tgrecord {
  background: #fff;
  margin-top: 30px;
}

.tgrecord .title {
  padding-left: 40px;
  height: 90px;
  border-bottom: 2px solid #e2e2e2;
  font-size: 36px;
  color: #333;
  line-height: 90px;
}

.tgrecord .title .iconfont {
  color: #f1c387;
  font-size: 40px;
  margin-right: 10px;
}

.tgrecord .record {
  padding: 0 35px;
}

.tgrecord .record table {
  width: 680px;
}

.tgrecord .record table tr {
  line-height: 80px;
  text-align: center;
  font-size: 28px;
  color: #000;
}

.tgrecord .record table tr .xh {
  width: 15%;
}

.tgrecord .record table tr .id {
  width: 25%;
}

.tgrecord .record table tr .rz {
  width: 30%;
}

.tgrecord .record table tr .gx {
  width: 30%;
}

.tgrecord .record table .head {
  border-bottom: 2px solid #e2e2e2;
}
</style>
