<template>
  <div class="">
    <div class="content">
      <div class="course_list">
        <div @click="goInfo" class="course_item">
          <img class="center" src="../../../static/img/6F8C046A-69D6-419C-BB82-9320245F70D5.png" alt="">
          <div class="txt">
            <div class="t">
              <van-icon name="idcard" size='12px' class="search" />
              <span>最新课程</span>

            </div>
            <div class="b">
              <span class="s">免费</span>
              <span class="e">更新完毕</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import {
    Toast,
  } from 'vant'
  export default {
    name: 'source_info',
    data() {
      return {
        search_value: null,
        active: 0
      }
    },
    methods: {
      goInfo() {
        this.$router.push({
          name: 'video'
        });
      },
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
  .course_list {
    // padding-top: 66px;

    .course_item {
      padding: 20px;
      position: relative;
      padding-left: 50%;
      border-bottom: 1px solid #ccc;

      img {
        left: 20px;
        width: 44%;
        height: 180px;
      }

      .txt {
        .t {
          min-height: 160px;
        }

        .b {
          font-size: 24px;

          .s {
            margin-top: 40px;
            color: rgb(236, 19, 19);
          }

          .e {
            float: right;
            color: #ccc;
          }
        }
      }
    }
  }

</style>
