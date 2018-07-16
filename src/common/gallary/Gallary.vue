<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) in imgs" :key="index">
          <img class="swiper-img" :src="item">
        </swiper-slide>
      </swiper>
      <div class="swiper-pagination" slot="pagination"></div>
    </div>
  </div>
</template>

<script>
  

  export default {
    name: "CommonGallary",
    data () {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          paginationType: 'fraction',
          observeParents: true,
          observer: true
        },
        imgs: [
          '//img1.qunarzz.com/sight/p0/201301/16/6a16218e8b39640093835fbb.jpg_r_800x800_e2ff7015.jpg',
          '//img1.qunarzz.com/sight/p0/201405/30/d9d37ae540531d96e1bd69c4f2bc9caf.jpg_r_800x800_16ce38dd.jpg'
        ]
      }
    },
    methods: {
      handleGallaryClick () {
        this.$emit('close')
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .container
    display: flex
    flex-direction: column
    justify-content: center
    z-index: 99
    position: fixed
    top: 0
    bottom: 0
    left: 0
    right: 0
    background-color: #000
    .wrapper
      overflow: hidden
      width: 100%
      .swiper-img
        width: 100%
      .swiper-pagination
        color: #ccc
</style>