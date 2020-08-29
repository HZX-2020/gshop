<template>
  <div class="footer_guide">
    <div class="guide_item" @click="goTo('/msite')" :class="{on:'/msite' === $route.path}">
      <span class="item_icon">
        <i class="iconfont icon-_waimai"></i>
      </span>
      <span>外卖</span>
    </div>
    <div class="guide_item" @click="goTo('/search')" :class="{on:'/search' === $route.path}">
      <span class="item_icon">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span>搜索</span>
    </div>
    <div class="guide_item" @click="goTo('/order')" :class="{on:'/order' === $route.path}">
      <span class="item_icon">
        <i class="iconfont icon-ziyuan"></i>
      </span>
      <span>订单</span>
    </div>
    <div class="guide_item" @click="goTo('/profile')" :class="{on:'/profile' === $route.path}">
      <span class="item_icon">
        <i class="iconfont icon-geren"></i>
      </span>
      <span>我的</span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goTo(path) {
      this.$router.replace(path);
    }
  },
};
</script>

<style lang="less">
  @import "./index.less";
</style>
 