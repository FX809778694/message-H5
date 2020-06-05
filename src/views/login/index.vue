<template>
  <div class="login-wrap">

    <div class="form-wrap">

      <van-form validate-first @failed="onFailed">
        <van-field
          v-model="userName"
          name="222"
          :rules="userNameRule"
          label="身份证号" />

        <van-field
          v-model="password"
          name="222"
          :rules="passwordNameRule"
          label="密码" />

<!--        <van-field-->
<!--          v-model="password"-->
<!--          type="password"-->
<!--          name="密码"-->
<!--          label="密码"-->
<!--          :rules="[{ required: true, message: '请填写密码' }]"-->
<!--        />-->

<!--        <div class="form-btn">-->
<!--          <van-button color="linear-gradient(to right, #2CB6FF, #2EDBFD)" round block type="info" native-type="submit">-->
<!--            提交-->
<!--          </van-button>-->
<!--        </div>-->
      </van-form>

    </div>

  </div>
</template>

<script>
import {test} from '../../api'

export default {
  name: 'Login',

  data () {

    const validator1 =  (val) => {
      return /(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(val);
    };

    const validator2 =  (val) => {
      return /(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(val);
    };

    return {
      userName: '',
      password: '',

      userNameRule: [{ validator: validator1, message: '请输入正确内容' }],
      passwordNameRule: [{ validator: validator2, message: '请输入正确内容' }]
    }
  },

  created () {
  },

  methods: {

    async testApi () {
      const res = await this.$get(test);
      console.log(res)
    },

    onFailed (errorInfo) {
      console.log('failed', errorInfo);
    },
  }


}
</script>

<style scoped lang="less">
  @import '../../assets/less/lib/var';

  .login-wrap{
    height: 100%;
    width: 100%;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .form-wrap{

    }
    .form-btn{
      margin-top: 20px;
    }
  }
</style>
