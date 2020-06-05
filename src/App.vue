<template>
  <div id="app">
    <router-view/>
    <van-tabbar route safe-area-inset-bottom>
      <van-tabbar-item
        replace
        to="/index"
        icon="home-o">
        首页
      </van-tabbar-item>
      <van-tabbar-item
        replace
        to="/subjectList"
        icon="friends-o">
        受试者
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
