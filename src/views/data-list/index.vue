<template>
  <div class="list-wrap">
    <van-nav-bar
      title="信息查询"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="con-wrap">
      <h3>查询如下</h3>
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
            hahahahaahah
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
      // if (this.page <= this.pages) {
      //   const { data } = await this.$get(subjectlist, {page: this.page, size: 10, appSearch: this.searchKey});
      //   const data = [];
      //   if (data && data.list) {
      //     this.listData = [...this.listData, ...data.list];
      //     this.page = this.page + 1;
      //     this.pages = data.pages;
      //     this.listLoading = false;
      //   }
      // }
      // this.finished = this.page > this.pages

      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.listData.push(this.listData.length + 1);
        }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.listData.length >= 40) {
          this.finished = true;
        }
      }, 1000);
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
      font-size: 16px;
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
  }

</style>
