<template>
  <div class="login-wrap">

    <div class="form-wrap">

      <van-form validate-first @failed="onFailed">
        <van-field
          v-model="userName"
          type="password"
          name="pattern"
          :rules="[{ pattern, message: '请输入正确内容', trigger: 'onBlur' }]"
          label="身份证号" />

        <div style="margin: 16px;">
          <van-button color="linear-gradient(to right, #2CB6FF, #2EDBFD)" round block type="info" native-type="submit">
            提交
          </van-button>
        </div>
      </van-form>

    </div>

  </div>
</template>

<script>
import {test} from '../../api'
import {IDReg} from '../../common/const'

export default {
  name: 'Login',

  data () {
    return {
      userName: '',
      password: '',
      pattern: ''
    }
  },

  created () {
    // this.testApi();
    this.pattern = IDReg;
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
  }
</style>
