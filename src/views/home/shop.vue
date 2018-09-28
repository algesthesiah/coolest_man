<template>
  <div class="zz">
    <div class="center">
      <van-loading type="spinner" size='50px' color="white" />
      <div>等待开放</div>
    </div>

  </div>
</template>

<script>
  import {
    Toast,
  } from 'vant'
  export default {
    name: 'shop',
    data() {
      return {
        active: 0,
        show: true
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
.zz {
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100vh;
  position: relative;
}
.center {
  left: 50%;
  transform: translate(-50%, -50%);
  margin-top: -60px;
  div {
    color: white;
    text-align: center;
    margin-top: 60px;
  }
}
</style>
