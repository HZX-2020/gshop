<template>
  <div id="app">
    
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>
<script>
import FooterGuide from "./components/FooterGuide/FooterGuide.vue";
export default {
  components:{
    FooterGuide
  }
}
</script>
<style>
*{
  margin: 0;
  padding:0;
  list-style: none;
}
#app {
  width:100%;
  height:100%;
  background:#f5f5f5;
  position: relative;
}
#app a{
  text-decoration: none;
  color: #000;
}
</style>
