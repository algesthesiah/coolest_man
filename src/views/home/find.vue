<template>
  <div class="">
    <div class="">
      <h1 @click="handleClick"><span> find</span></h1>
    </div>
    <div class="content">
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
       var t=this;
      console.log(1);
      // t.$http.get('/api/captcha').then((res)=>{
      //   console.log(res);
      // })
      t.$http.get('/api/sms',{phone:18980621880,phone_zone:86,type:1}).then((res)=>{
        console.log(res);
      })
      }
    },
  }

</script>

<style scoped lang='less'>
</style>
