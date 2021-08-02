<template>
  <div class="home">
    <div class="layout">
      <Layout>
        <nav-header :list="list" @addTodo="addTodo"></nav-header>
        <nav-main
          :list="list"
          :donelist="donelist"
          @delTodo="delTodo"
          @delDone="delDone"
          @move2Done="move2Done"
          @move2Todo="move2Todo"
        ></nav-main>
        <nav-footer @clear="clear"></nav-footer>
      </Layout>
    </div>
  </div>
</template>

<script>
import NavHeader from "@components/navHeader/NavHeader";
import NavMain from "@components/navMain/NavMain";
import NavFooter from "@components/navFooter/NavFooter";

import { createNamespacedHelpers } from "vuex";

const { mapGetters: step0Getters, mapActions: step0Actions } =
  createNamespacedHelpers("foo");

export default {
  name: "Home",
  components: {
    NavHeader,
    NavMain,
    NavFooter,
  },
  computed: {
    ...step0Getters(["list", "donelist"]),
  },
  methods: {
    ...step0Actions([
      "addTodo",
      "delTodo",
      "delDone",
      "clear",
      "move2Done",
      "move2Todo",
    ]),
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.layout {
  width: 1536px;
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
</style>
