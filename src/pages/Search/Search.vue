<template>
  <div>
    <section class="search">
      <HeaderTop title="搜索"></HeaderTop>
      <form action="#" class="search_form">
        <input type="search" class="search_input" name="search" placeholder="请输入商家或美食">
        <input type="submit" class="search_submit" name="submit">
      </form>
    </section>
  </div>
</template>

<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop"
export default {
  components:{
    HeaderTop
  }
}
</script>

<style lang="less">
   @import "./index.less";
</style>