<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont header-icon">&#xe697;</div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "CityHeader"
  }
</script>

<style lang="stylus" scoped>
  .header
    position: relative
    overflow: hidden
    height: .86rem
    line-height: .86rem
    text-align: center
    color: #fff
    background-color: #00bcd4
    font-size: .32rem
    .header-icon
      position: absolute
      top: 0
      left: 0
      width: .64rem
      font-size: .4rem
      text-align: center
      color: #fff

</style>