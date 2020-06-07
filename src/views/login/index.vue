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
          name="IDNumber"
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
        <p>1、根据广东省不动产登记办理相关规定，市民需在办理不动产登记预申请业务时提供真实有效的手机号码、个人身份资料，在实名认证后，便于办理不动产业务以及获取个人业务办理情况等信息。</p>
        <p>2、对于您提供的个人信息，广东省不动产登记外网预申请系统将在后台核实，请确保您注册认证时提交的资料真实有效。如因提供虚假资料，您将承担相关的法律责任。</p>
        <p>3、您在注册时提供的所有个人信息，广东省不动产登记外网预申请系统将严格保密。</p>
        <p>实名认证用户须知：</p>
        <p>1、为进一步提升广东省不动产登记外网预申请系统服务水平，配合广东省不动产登记外网预申请系统网上办理的民生服务。广东省不动产登记外网预申请系统微信公众号推出实名认证业务，用户通过实名认证后，可更方便、快捷地办理业务。您在实名认证时提供的视频等资料，广东省不动产登记外网预申请系统将严格保密，仅用于本次实名认证，不另作他用。</p>
        <p>2、您在接受服务过程中，需要调用您的手机摄像头，并且根据业务场景的不同，需要读取您的身份证个人信息，包括姓名、公民身份号码、本人相片、证件的有效期和签发机关等身份证信息，或者截取您的脸部图像和认证视频，从而实现身份比对。如您使用不成功，请确保您已经按照要求正确使用本服务，或者向为您办理业务的机构咨询其他办理渠道。</p>
      </div>
    </van-dialog>

  </div>
</template>

<script>
import {test} from '../../api'
import { Toast } from 'vant';

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

    async onSubmit (values) {
      if (!values.checkbox) {
        Toast.fail('请您勾选确认认证授权');
        return;
      }
      // console.log(values)
      const res = await this.$post(test, {
        ID: values.IDNumber
      });
      console.log(res)
      Toast({
        type: 'success',
        message: '登录成功',
        duration: 600,
        onOpened: () => {
          this.$setLocalStorage('IDNumber', values.IDNumber)
          this.$router.push('/list');
        }
      })

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
