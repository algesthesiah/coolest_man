<template>
  <div class="">
    <div class="content">
      <van-cell-group>
        <van-cell title="1、如何下载亚财商学院APP" is-link  />
        <van-cell title="2、如何注册" is-link  />
        <van-cell title="3、如何登录" is-link  />
        <van-cell title="4、如何绑定、变更手机" is-link  />
        <van-cell title="5、如何设置个人信息" is-link  />
        <van-cell title="6、如何实名认证" is-link  />
        <van-cell title="7、如何设置、修改交易密码" is-link  />
        <van-cell title="8、如何绑定银行卡号" is-link  />
        <van-cell title="9、如何成为亚财商学院的正式会员" is-link  />
        <van-cell title="10、如何查看个人积分的数量及积分说明" is-link  />
        <van-cell title="11、如何邀请其他用户" is-link  />
        <van-cell title="12、如何查看已邀请学员" is-link  />
        <van-cell title="13、如何购买课程" is-link  />
        <van-cell title="14、如何将积分兑换成余额" is-link  />
        <van-cell title="15、如何查看交易记录" is-link  />
        <van-cell title="16、如何邀请好友" is-link  />
        <van-cell title="17、如何查看已购买课程" is-link  />
      </van-cell-group>
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
</style>
