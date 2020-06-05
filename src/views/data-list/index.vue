<template>
  <div class="list-wrap">
    <van-nav-bar
      title="信息查询"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="con-wrap">
      <h3>您的个人不动产信息查询结果如下</h3>
      <div class="main">
        <van-list
          v-model="loading"
          :finished="finished"
          :finished-text="finishedText"
          class="data-wrap"
          @load="getListData">
          <div
            v-for="(item, index) in listData"
            :key="index"
            class="con-card">
            <div class="card-item">
              <p>权利人姓名：</p>
              <p>{{item.name}}</p>
            </div>
            <div class="card-item">
              <p>描述：</p>
              <p>{{item.text}}</p>
            </div>
            <div class="card-item">
              <p>编号：</p>
              <p>{{item.number}}</p>
            </div>
            <div class="card-item">
              <p>使用方式：</p>
              <p>{{item.use}}</p>
            </div>
            <div class="card-item">
              <p>地址：</p>
              <p>{{item.address}}</p>
            </div>
          </div>
        </van-list>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'DataList',

  data () {
    return {
      loading: false,
      finished: false,
      finishedText: '没有更多了',
      listData: []
    }
  },

  computed: {
    ...mapState('publicStore', ['isIphoneX', 'isWXBrowser']),
  },

  created () {
    this.getListData();
  },

  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },

    getListData () {
      this.listData = [{
        name: '周晓丽',
        text: '我是一个粉刷匠。粉刷本领强！',
        number: 11123456786543456543456545,
        use: '住宅',
        address: '北京市昌平区天通西苑三区21号楼7单元888（无敌寂寞帅呆苦逼天上人间大大大大奥多多公司）'
      }, {
        name: '周晓丽',
        text: '我是一个粉刷匠。粉刷本领强！',
        number: 11123456786543456543456545,
        use: '住宅',
        address: '北京市昌平区天通西苑三区21号楼7单元888（无敌寂寞帅呆苦逼天上人间大大大大奥多多公司）'
      }, {
        name: '周晓丽',
        text: '我是一个粉刷匠。粉刷本领强！',
        number: 11123456786543456543456545,
        use: '住宅',
        address: '北京市昌平区天通西苑三区21号楼7单元888（无敌寂寞帅呆苦逼天上人间大大大大奥多多公司）'
      }, {
        name: '周晓丽',
        text: '我是一个粉刷匠。粉刷本领强！',
        number: 11123456786543456543456545,
        use: '住宅',
        address: '北京市昌平区天通西苑三区21号楼7单元888（无敌寂寞帅呆苦逼天上人间大大大大奥多多公司）'
      }]

      this.finished = true;
    }
  }

}
</script>

<style scoped lang="less">
  @import '../../assets/less/lib/var';

  .list-wrap{
    height: 100%;
    overflow: hidden;
  }
  .con-wrap{
    height: calc(100% - 46px);
    overflow: hidden;

    h3{
      padding: 10px 0;
      font-size: 15px;
      text-align: center;
    }
  }

  .data-wrap{
    padding-bottom: 20px;
  }
  .main {
    height: calc(100% - 41px);
    overflow-y: auto;
    background-color: @background-color;
    padding: 15px 15px 0;
  }
  .con-card{
    border: 1px solid #c8c9cc;
    min-height: 60px;
    border-radius: 4px;
    margin-top: 10px;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
  }
  .card-item{
    padding: 10px;
    font-size: 14px;
    display: flex;
    justify-content: flex-start;
    p:first-child{
      width: 100px;
      text-align: right;
    }
    p:last-child{
      width: calc(100% - 100px);
    }
  }

</style>
