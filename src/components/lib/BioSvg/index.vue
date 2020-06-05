<template>
  <span @click="onClick" :disabled="disabled" class="svg-p" :style="{color: color, fontSize: size}">
    <svg :class="svgClass" aria-hidden="true">
      <use :xlink:href="iconName"/>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'BioSvg',

  props: {
    name: {
      type: String,
      required: true,
    },

    className: {
      type: String,
      default: '',
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
    }
  },

  computed: {
    iconName () {
      return `#icon-${this.name}`
    },

    svgClass () {
      if (this.className) {
        return 'svg-icon ' + this.className
      } else {
        return 'svg-icon'
      }
    },
  },

  methods: {
    onClick (e) {
      if (this.disabled) {
        if (e && e.preventDefault) {
          e.preventDefault() // 非IE浏览器
        } else { window.event.returnValue = false; } // IE浏览器
      } else {
        this.$emit('click')
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .svg-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }

  .svg-p[disabled = 'disabled'] {
    color: #999 !important;
    cursor: not-allowed !important;
    &:hover {
      color: #999 !important;
      cursor: not-allowed !important;
    }
  }
</style>
