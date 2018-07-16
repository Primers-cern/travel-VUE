<template>
  <div>
    <div class="search">
      <input
        type="text"
        class="search-input"
        placeholder="输入城市名或拼音"
        v-model="keyword"
      />
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li class="search-item border-bottom" v-for="item of list" :key="item.id" @click="handleCityClick(item.name)">{{item.name}}</li>
        <li class="search-item" v-show="hasNoData">没有匹配数据哦！</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Bscroll from 'better-scroll'
  import { mapMutations } from 'vuex'

  export default {
    name: "CitySearch",
    props: {
      cities: Object
    },
    data () {
      return {
        keyword: '',
        list: [],
        timer: null
      }
    },
    computed: {
      hasNoData () {
        return !this.list.length
      }
    },
    watch: {
      keyword () {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        if (!this.keyword) {
          this.list = []
          return
        }
        this.timer = setTimeout(() => {
          const result = []
          for (let i in this.cities) {
            this.cities[i].forEach((value) => {
              if (value.spell.indexOf(this.keyword) > -1 || 
                  value.name.indexOf(this.keyword) > -1) {
                result.push(value)
              }
            })
          }
          this.list = result
        }, 100)
      }
    },
    methods: {
      handleCityClick (city) {
        this.changeCity(city)
        this.$router.push('/')
      },
      ...mapMutations(['changeCity'])
    },
    mounted () {
      this.scroll = new Bscroll(this.$refs.search)
    }
  }

</script>

<style lang="stylus" scoped>
  .search
    height: .72rem
    background-color: #00bcd4
    padding: 0 .1rem
    .search-input
      box-sizing: border-box
      width: 100%
      height: .62rem
      line-height: .62rem
      color: #666
      padding: 0 .1rem
      text-align: center
      border-radius: .06rem
  .search-content
    overflow: hidden
    position: absolute
    z-index: 1
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    background-color: #fff
    .search-item
      line-height: .62rem
      padding-left: .28rem
      color: #666
      
</style>