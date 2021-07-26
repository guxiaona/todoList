<template>
  <div class="home">
    <nav-header></nav-header>
    <!-- <nav-main></nav-main> -->
    <!-- <nav-footer></nav-footer> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

import NavHeader from "@/components/navHeader/NavHeader";
import NavMain from "@/components/navMain/NavMain";
import NavFooter from "@/components/navFooter/NavFooter";

export default {
  name: "Home",
  props: {},
  components: {
    NavHeader,
    NavMain,
    NavFooter,
  },
};
</script>

<style lang="scss" scoped>
</style>
