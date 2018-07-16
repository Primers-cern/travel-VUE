<template>
  <div>
    <div class="banner" @click="handleBannerShow">
      <img class="banner-img" src="//img1.qunarzz.com/sight/p0/201301/16/6a16218e8b39640093835fbb.jpg_600x330_d28b9b73.jpg">
      <div class="banner-info">
        <div class="banner-title">
          深圳深蓝秘境欢乐水秀
        </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe60e;</span>
          3
        </div>
      </div>
    </div>
    <common-gallary v-show="showGallary" @close="handleBannerClose"></common-gallary>
  </div>
</template>

<script>
  import CommonGallary from 'common/gallary/Gallary'

  export default {
    name: "DetailBanner",
    components: {
      CommonGallary
    },
    data () {
      return {
        showGallary: false
      }
    },
    methods: {
      handleBannerShow () {
        this.showGallary = true
      },
      handleBannerClose () {
        this.showGallary = false
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      item-align: center
      position: absolute
      left: 0
      right: 0
      bottom: 0
      color: #fff
      padding: .2rem .24rem
      background-image: linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0, .8))
      .banner-title
        flex: 1
        font-size: .36rem
        line-height: .4rem
      .banner-number
        font-size: .28rem
        line-height: .4rem
        .banner-icon
          font-size: .28rem
          margin-right: .04rem
</style>