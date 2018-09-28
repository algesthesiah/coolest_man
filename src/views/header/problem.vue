<template>
  <div class="">
    <div class="content" @click="go('help')">
      <div class="y">注册篇</div>
      <div class="e"></div>
      <div class="s">Helptext</div>
    </div>
    <div class="content" @click="go('problem')">
      <div class="y">常见问题</div>
      <div class="e"></div>
      <div class="s">FAQ</div>
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
      },
      go(a) {
        this.$router.push({
          name: a
        })
      }
    }
  }

</script>

<style scoped lang='less'>
  .content {
    margin-top: 16px;
    background-color: rgba(15, 14, 14, 0.5);
    color: white;
    font-size: 30px;
    text-align: center;
    padding-top: 40px;
    padding-bottom: 40px;

    .y {}

    .e {
      display: inline-block;
      width: 60px;
      height: 10px;
      border-top: 1px solid white;
    }

    .s {}
  }

</style>
