<template>
  <div class="login-wrap">
    <van-nav-bar
      title="登录"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="form-wrap">

      <van-form validate-first @submit="onSubmit">
        <van-field
          v-model="userName"
          name="userName"
          label="姓名："
          :rules="[{ required: true, message: '请填写姓名' }]"
        />

        <van-field
          v-model="IDNumber"
          name="222"
          :rules="IDNumberRule"
          label="身份证号：" />

        <div class="form-btn">
          <van-button
            color="linear-gradient(to right, #2CB6FF, #2EDBFD)"
            block
            type="info"
            native-type="submit">
            登录
          </van-button>
        </div>

        <van-field class="check-wrap" name="checkbox">
          <template #input>
            <van-checkbox v-model="checkbox" shape="round" />
            <p class="agreement-wrap">我已认真阅读并同意<span @click="agreementModal = true">认证授权</span>办理业务</p>
          </template>
        </van-field>
      </van-form>

    </div>

    <van-dialog v-model="agreementModal" confirmButtonText="我知道了" title="认证协议">
      <div class="agreement-con">
        <p>重要提示：</p>
        <p>重要提示：</p>
        <p>重要提示：</p>
        <p>重要提示：</p>
        <p>重要提示：</p>
        <p>重要提示：</p>
        <p>重要提示：</p>
        <p>重要提示：</p>
        <p>重要提示：</p>
        <p>重要提示：</p>
        <p>重要提示：</p>
        <p>重要提示：</p>
        <p>重要提示：</p>
        <p>重要提示：</p>
        <p>重要提示：</p>
        <p>重要提示：</p>
        <p>重要提示：</p>
        <p>重要提示：</p>
        <p>重要提示：</p>
        <p>重要提示：</p>
        <p>重要提示：</p>
        <p>重要提示：</p>
        <p>重要提示：</p>
        <p>重要提示：</p>
        <p>重要提示：</p>
        <p>重要提示：</p>
        <p>重要提示：</p>
        <p>重要提示：</p>
      </div>
    </van-dialog>

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

    return {
      userName: '',
      IDNumber: '',
      checkbox: false,
      IDNumberRule: [{ validator: validator1, message: '请输入正确的身份证号' }],

      agreementModal: false
    }
  },

  created () {
  },

  methods: {

    onClickLeft () {
      this.$router.go(-1)
    },

    async onSubmit () {
      // const res = await this.$get(test);
      // console.log(res)
      this.$router.push('/list');
    },

    onFailed (errorInfo) {
      console.log('failed', errorInfo);
    },
  }


}
</script>

<style lang="less">
  @import '../../assets/less/lib/var';

  .login-wrap{
    height: 100%;
    width: 100%;
    background: #fff;
    padding: 10px;

    .van-form{
      width: 100%;
    }
    .form-wrap{
      width: 100%;
      height: calc(100% - 46px);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    .form-btn{
      margin-top: 30px;
    }

    .check-wrap{
      margin-top: 20px;
      .van-field__control{
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .agreement-wrap{
      font-size: 12px;
      margin-left: 16px;
      span{
        color: #2CB6FF;
        margin: 0 2px;
      }
    }
    .agreement-con{
      height: 300px;
      overflow: scroll;
      padding: 20px;
      margin: 20px 0;
    }
  }
</style>
