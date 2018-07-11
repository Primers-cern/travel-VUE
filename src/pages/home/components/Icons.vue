<template>
  <swiper class="wrapper" :options="swiperOption">
    <swiper-slide v-for="(page, index) of pages" :key="index">
      <div class="icons" v-for="item of page" :key="item.id">
        <div class="icon">
          <img class="icons-img" :src="item.imgUrl">
        </div>
        <p class="icons-text">{{item.desc}}</p>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
  export default {
    name: 'HomeIcons',
    props: {
      list: Array
    },
    data () {
      return {
        swiperOption: {}
      }
    },
    computed: {
      pages () {
        const pages = []
        this.list.forEach((item, index) => {
          const page = Math.floor(index / 8)
          if (!pages[page]) {
            pages[page] = []
          }
          pages[page].push(item)
        })
        return pages
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .wrapper >>> .swiper-container
    height: 0
    padding-bottom: 50%
  .wrapper
    margin-top: .1rem
    .icons
      overflow: hidden
      position: relative
      float: left
      width: 25%
      height: 0
      padding-bottom: 25%
      .icon
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: .44rem
        box-sizing: border-box
        padding: .1rem
        .icons-img
          display: block
          height: 100%
          margin: 0 auto
      .icons-text
        position: absolute
        left: 0
        right: 0
        bottom: 0
        line-height: .44rem
        text-align: center
        color: $mainText
        ellipsis()
    
</style>