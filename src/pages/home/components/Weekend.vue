<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="list-item border-bottom" v-for="item of list" :key="item.id">
        <div class="item-img">
          <img :src="item.imgUrl">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "HomeWeekend",
    props: {
      list: Array
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    line-height: .8rem
    background: #eee
    text-indent: .2rem
    margin-top: .2rem
  .list-item
    margin-bottom: .1rem 
    .item-img
      overflow: hidden
      height: 0
      padding-bottom: 37.09%
      img
        width: 100%
    .item-info
      flex: 1
      padding: .2rem
      min-width: 0
      .item-title
        line-height: .6rem
        font-size: .3rem
      .item-desc
        line-height: .4rem
        color: #ccc

</style>