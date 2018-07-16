<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <ul class="button-list">
          <li class="button-wrapper">
            <div class="button">{{this.currentCity}}</div>
          </li>
        </ul>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <ul class="button-list">
          <li
            class="button-wrapper"
            v-for="item of hot"
            :key="item.id"
            @click="handleCityClick(item.name)"
          >
            <div class="button">{{item.name}}</div>
          </li>
        </ul>
      </div>
      <div class="area">
        <div
          v-for="(item, key) of cities"
          :key="key"
          :ref="key"
        >
          <div class="title border-topbottom">{{key}}</div>
          <ul class="item-list">
            <li class="item border-bottom" v-for="city of item" :key="city.id" @click="handleCityClick(city.name)">{{city.name}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Bscroll from 'better-scroll'
  import { mapState, mapMutations } from 'vuex'

  export default {
    name: "CityList",
    props: {
      hot: Array,
      cities: Object,
      letter: String
    },
    computed: {
      ...mapState({
        currentCity: 'city'
      })
    },
    methods: {
      handleCityClick (city) {
        this.changeCity(city)
        this.$router.push('/')
      },
      ...mapMutations(['changeCity'])
    },
    watch: {
      letter () {
        if (this.letter) {
          const element = this.$refs[this.letter][0]
          this.scroll.scrollToElement(element)
        }
      }
    },
    mounted () {
      this.scroll = new Bscroll(this.$refs.wrapper)
    }
  }
</script>

<style lang="stylus" scoped>
  .border-topbottom
    &:before
      border-color: #ddd
    &:after
      border-color: #ddd
  .border-topbottom
    &:before
      border-color: #ddd
  .list
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    .title
      color: #666
      height: .54rem
      line-height: .54rem
      font-size: .28rem
      padding-left: .1rem
      background: #f4f4f4
    .button-list
      overflow: hidden
      padding: .1rem .6rem .1rem .1rem
      .button-wrapper
        float: left
        width: 33.33%
        .button
          border: .02rem solid #ccc
          text-align: center
          margin: .1rem
          line-height: .44rem
          border-radius: .06rem
    .item-list
      .item
        line-height: .76rem
        padding-left: .2rem
</style>