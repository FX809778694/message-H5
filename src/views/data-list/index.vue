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
              <p>证件号码：</p>
              <p>{{item.ID}}</p>
            </div>
            <div class="card-item">
              <p>不动产坐落：</p>
              <p>{{item.locate}}</p>
            </div>
            <div class="card-item">
              <p>不动产单元号：</p>
              <p>{{item.estate_num}}</p>
            </div>
            <div class="card-item">
              <p>不动产权证号：</p>
              <p>{{item.estate_card}}</p>
            </div>
            <div class="card-item">
              <p>共有方式：</p>
              <p>{{item.type}}</p>
            </div>
            <div class="card-item">
              <p>面积：</p>
              <p>{{item.area}}</p>
            </div>
            <div class="card-item">
              <p>用途：</p>
              <p>{{item.use}}</p>
            </div>
            <div class="card-item">
              <p>登记状态：</p>
              <p>{{item.status}}</p>
            </div>
          </div>
        </van-list>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import {test} from "../../api";

export default {
  name: 'DataList',

  data () {
    return {
      loading: false,
      finished: false,
      finishedText: '没有更多了',
      listData: [],
      isNullData: false
    }
  },

  computed: {
    ...mapState('publicStore', ['isIphoneX', 'isWXBrowser']),
  },

  created () {
    // this.getListData();
  },

  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },

    async getListData () {

      const res = await this.$post(test, {
        ID: this.$getLocalStorage('IDNumber')
      });
      this.listData = res.data;
      this.isNullData = res.data <= 0;
      if (this.isNullData) this.finishedText = "暂时未查询到属于您的数据";

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
