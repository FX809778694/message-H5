<template>
  <span
    class="bio-font"
    :title="title"
    :style="{color: color, fontSize: size}"
    :class="iconName"
    :disabled="disabled"
    @click="onClick">
  </span>
</template>

<script>
export default {
  name: 'BioIcon',

  props: {
    name: {
      type: String,
      required: true
    },

    size: {
      type: String
    },

    color: {
      type: String
    },

    disabled: {
      type: Boolean,
      default: false
    },

    title: {
      type: String
    }
  },

  computed: {
    iconName () {
      return `bio-icon__${this.name}`
    }
  },

  methods: {
    onClick (e) {
      if (this.disabled) {
        if (e && e.preventDefault) {
          e.preventDefault()// 非IE浏览器
        } else { window.event.returnValue = false; } // IE浏览器
      } else {
        this.$emit('click')
      }
    }
  }
}
</script>
<style scoped lang="less">
  @import 'font/iconfont.css';

  .bio-font {
    font-size: inherit;
  }

  .bio-font[disabled = 'disabled'] {
    color: #999 !important;
    cursor: not-allowed !important;
    &:hover {
      color: #999 !important;
      cursor: not-allowed !important;
    }
  }

  .bio-icon__delete {
    &:hover {
      color: #F56C6C !important;
    }
  }
</style>
