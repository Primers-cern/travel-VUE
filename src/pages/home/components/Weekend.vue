<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="list-item border-bottom" v-for="item of weekendList" :key="item.id">
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
    data () {
      return {
        weekendList: [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1707/bf/bfd58bb85da6dde3a3.water.jpg_200x200_54a9d1b6.jpg',
          title: '深圳必游TOP10',
          desc: '来到深圳，你需要来这里签到',
        }, {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1602/88/bf120edeaea383.jpg_r_640x214_f8591f7b.jpg',
          title: '欢乐长隆',
          desc: '世界欢乐汇聚长隆',
        }, {
          id: '0003',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1507/d9/2ddc7652fdba16.jpg_r_640x214_5e62f1a3.jpg',
          title: '当地人游深圳',
          desc: '当地人带你发现不一样的深圳',
        }, {
          id: '0004',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/eb/e4b181a6957c36.jpg_r_640x214_4abbdbc0.jpg',
          title: '情侣好去处',
          desc: '手牵手，一起走到老',
        }]
      }
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