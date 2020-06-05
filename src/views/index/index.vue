<template>
  <div class="main-wrap">
    <div class="reminder-info">
      <p>1、不动产登记资料查询结果可以用来买卖、抵押、诉讼等用途。</p>
      <p>2、您需要进行人脸识别验证。</p>
      <p>3、本功能查询您名下所有不动产的基本信息。</p>
      <p>4、您需要选择其中一套不动产，获取查询结果。</p>
      <p>5、本结果提供下载功能，您可以下载结果的PDF文件，文件上已经加盖了不动产登记资料查询电子印章。</p>
      <p>6、最终效果如下示例</p>
    </div>

    <div class="tip-img">
      <img src="../../assets/img/tipImg1.png">
      <img src="../../assets/img/tipImg2.png">
      <img src="../../assets/img/tipImg3.png">
    </div>

    <div class="confirm-btn" :class="{ 'iphoneX': isIphoneX && isWXBrowser }">
      <van-button
        color="linear-gradient(to right, #2CB6FF, #2EDBFD)"
        block
        @click="enterLogin"
        type="info">
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

  },

  methods: {
    enterLogin () {
      this.$router.push('/login')
    }
  }

}
</script>

<style scoped lang="less">
  @import '../../assets/less/lib/var';

  .main-wrap {
    background: #fff;
    padding: 10px;
    .reminder-info{

      p{
        margin-top: 4px;
        font-size: 16px;
        color: #666666;
      }
    }
    .tip-img{
      img{
        display: block;
        width: 100%;
        height: auto;
        border: 1px solid #000;
        margin-top: 10px;
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
