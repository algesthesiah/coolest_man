<template>
  <div class="">
    <van-search class="main_hed_sarch_box" v-model="search_value" placeholder="请输入搜索关键词" show-action @search="onSearch" @cancel="onCancel" />
    <div class="content">
      <!-- <div class="no_content">
        <div>热门搜索</div>
        <ul>
          <li>尼玛</li>
          <li>尼玛</li>
        </ul>
      </div> -->
      <div class="has_content">
        <van-tabs v-model="active" class="tab">
          <van-tab title="课程">
            <div class="course_box">
              <div class="course_hed">
                <span class="o">共60课程</span>
                <span class="r">
                  <span>筛选:</span>
                  <span class="a">全部</span>
                  <van-icon name="down" size='12px' class="a" />
                </span>
                <span class="t">
                  <span>排序:</span>
                  <span class="a">最新</span>
                  <van-icon name="down" size='12px' class="a" />
                </span>

              </div>
              <div class="course_list">
                <div class="course_item">
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
                <div class="course_item">
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
                <div class="course_item">
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
                <div class="course_item">
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
                <div class="course_item">
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
                <div class="course_item">
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
                <div class="course_item">
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
          </van-tab>
          <van-tab title="讲师">
            <div class="teacher_item">
              <img class="center" src="../../../static/img/6F8C046A-69D6-419C-BB82-9320245F70D5.png" alt="">
              <div class="t">
                <span>尼玛</span>

              </div>
              <div class="b out_txt">
                123123213123221322213121
              </div>
            </div>
          </van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    Toast,
  } from 'vant'
  export default {
    name: 'search',
    data() {
      return {
        search_value: null,
        active:0
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
.no_content {
  padding: 24px;
  div {
    font-size: 24px;
    color: #333;
    margin-bottom: 24px;
  }
  ul {
    li {
      border: 2px solid #999;
      display: inline-block;
      font-size: 24px;
      border-radius: 8px;
      padding: 6px 12px;
      margin-right: 24px;
      margin-bottom: 24px;
    }
  }
}
.teacher_item {
  position: relative;
  border-bottom: 1px solid #ccc;
  padding: 20px;
  padding-left: 170px;
  img {
    left: 24px;
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }
  .t {
  }
  .b {
    font-size: 24px;
    height: 80px;
    margin-top: 12px;
  }
}
.course_box {
  position: relative;
  .course_hed {
    background-color: white;
    z-index: 10;
    font-size: 24px;
    position: fixed;
    border-bottom: 1px solid #ccc;
    padding: 8px 24px;
    width: 100%;
    height: 66px;
    span {
      vertical-align: middle;
    }
    .t {
      float: right;
      border-right: 1px solid #ccc;
      padding-right: 14px;
      span {
      }
      .a {
        color: #333;
      }
    }
    .r {
      padding-left: 14px;
      float: right;
      span {
      }
      .a {
        color: #333;
      }
    }
  }
  .course_list {
    padding-top: 66px;
    .course_item {
      padding: 20px;
      position: relative;
      padding-left: 50%;
      border-bottom: 1px solid #ccc;
      img {
        left: 20px;
        width: 44%;
        height:180px;
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
}
</style>
<style  lang='less'>
.main_hed_sarch_box {
  height: 92px;
  background-color: rgb(226, 49, 49) !important;
  padding-left: 24px;
  font-size: 24px;
  .van-field {
    height: 50px !important;
    border-radius: 8px;
    background-color: rgb(146, 5, 5);
    .van-cell__value {
      line-height: 50px;
      color: white;
    }
    input {
      color: white;
    }
    input::-webkit-input-placeholder {
      color: white;
    }
    input:-ms-input-placeholder {
      // IE10+
      color: white;
    }
    input:-moz-placeholder {
      // Firefox4-18
      color: white;
    }
    input::-moz-placeholder {
      // Firefox19+
      color: white;
    }
    .van-cell__left-icon {
      line-height: 50px;
      margin-top: -1px;
      color: white;
    }
  }
  .van-search__action {
    div {
      color: white !important;
    }
  }
}

.has_content {
  .van-tabs__content {
    height: calc(100vh - 180px);
    overflow-y: auto;
  }

  .tab {
    height: 92px;
    .van-tabs--line {
      height: 92px;
    }
  }
}
</style>
