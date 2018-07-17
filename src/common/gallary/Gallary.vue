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
    props: {
      imgs: Array
    },
    data () {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          paginationType: 'fraction',
          observeParents: true,
          observer: true
        }
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