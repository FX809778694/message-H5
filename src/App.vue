<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import {isIphoneBangs} from './common/utils'
import { mapMutations } from 'vuex';

export default {
  name: 'App',

  data () {
    return {

    }
  },

  created () {
    this.updateIsIphoneX(isIphoneBangs());
    this.updateIsWXBrowser(/MicroMessenger/i.test(navigator.userAgent))
  },

  methods: {
    ...mapMutations('publicStore', ['updateIsIphoneX', 'updateIsWXBrowser']),
  }

}

</script>
