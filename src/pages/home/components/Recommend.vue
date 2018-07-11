<template>
  <div>
    <div class="title">热门推荐</div>
    <ul>
      <li class="list-item border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-btn">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommend",
    data () {
      return {
        recommendList: [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1707/bf/bfd58bb85da6dde3a3.water.jpg_200x200_54a9d1b6.jpg',
          title: '深圳必游TOP10',
          desc: '来到深圳，你需要来这里签到',
        }, {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1807/99/992c99c98928c509a3.water.jpg_200x200_fc4df6ea.jpg',
          title: '深圳欢乐谷',
          desc: '来到深圳，你需要来这里签到',
        }, {
          id: '0003',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/201307/18/f25ac054eec3804dc8d65eac.jpg_200x200_a008b6ca.jpg',
          title: '海洋奇梦馆',
          desc: '来到深圳，你需要来这里签到',
        }, {
          id: '0004',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1507/64/34362835b4a219af8b36803d31a6380f.water.jpg_200x200_bc5c0452.jpg',
          title: '深圳小梅沙海洋世界',
          desc: '来到深圳，你需要来这里签到',
        }]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .list-item
    display: flex
    .item-img
      padding: .2rem
      height: 1.7rem
      width: 1.7rem
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
      .item-btn
        line-height: .44rem
        margin-top: .4rem
        margin-right: .2rem
        background: #ff9300
        padding: 0 .2rem
        border-radius: .06rem
        color: #fff
        float: right

</style>