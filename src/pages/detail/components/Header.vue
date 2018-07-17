<template>
  <div>
    <router-link tag="div" to="/" class="back-btn">
      <div class="iconfont back-icon">&#xe697;</div>
    </router-link>
    <div
      class="header-fixed"
      :style="opacityStyle"
    >
      景点详情
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailHeader",
    data () {
      return {
        opacityStyle: {
          opacity: 0
        }
      }
    },
    methods: {
      handleScroll () {
        const top = document.documentElement.scrollTop
        if (top > 0) {
          let opacity = top / 160
          opacity = opacity > 1 ? 1 : opacity
          this.opacityStyle = { opacity }
        } else {
          this.opacityStyle.opacity = 0
        }
      }
    },
    activated () {
      window.addEventListener('scroll', this.handleScroll)
    },
    deactivated () {
      window.removeEventListener('scroll', this.handleScroll)
    }
  }
</script>

<style lang="stylus" scoped>
  .back-btn
    z-index: 10
    position: fixed
    top: 0
    left: 0
    margin: .14rem
    padding: .06rem
    border-radius: 1rem
    color: #fff
    background-color: #00bcd4
    .back-icon
      font-size: .4rem
  .header-fixed
    position: fixed
    top: 0
    left: 0
    right: 0
    background-color: #00bcd4
    text-align: center
    color: #fff
    height: .8rem
    line-height: .8rem
    font-size: .28rem
    
</style>