<template>
  <div class="main-wrap">
    <div class="reminder-info">
      <p>温馨提示</p>
      <p>温馨提示</p>
      <p>温馨提示</p>
    </div>

    <div class="tip-img">

    </div>

    <div class="confirm-btn" :class="{ 'iphoneX': isIphoneX && isWXBrowser }">
      <van-button color="linear-gradient(to right, #2CB6FF, #2EDBFD)" round block type="info" >
        确认
      </van-button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'index',

  data () {
    return {

    }
  },

  computed: {
    ...mapState('publicStore', ['isIphoneX', 'isWXBrowser']),
  },

  created () {

  }

}
</script>

<style scoped lang="less">
  @import '../../assets/less/lib/var';

  .main-wrap {
    background: #fff;
    padding: 20px;
    .reminder-info{

      p{
        margin-top: 4px;
        font-size: 16px;
        color: #666666;
      }
    }
    .confirm-btn{
      width: 100%;
      height: 80px;
      position: fixed;
      bottom: 0;
      left: 0;
      background: #fff;
      padding: 20px;
      border: 1px solid red;
      text-align: center;
      box-sizing: border-box;

      a{
        display: block;
        width: 100%;
        height: 40px;
        line-height: 40px;
        font-size: 16px;
        color: #fff;
        text-align: center;
        border-radius: 4px;
        background-image: linear-gradient(to right, #2CB6FF , #2EDBFD);
      }
    }
    .iphoneX{
      bottom: 17px;
    }
  }

</style>
