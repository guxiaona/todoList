<template>
  <div class="home">
    <div class="layout">
      <Layout>
        <nav-header :list="list" @addTodo="add"></nav-header>
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
  computed: {
    list() {
      return this.$store.state.list;
    },
    donelist() {
      return this.$store.state.donelist;
    },
  },
  methods: {
    add(inputValue) {
      this.$store.commit("addTodo", {
        name: inputValue,
        complete: false,
      });
    },
    delTodo(index) {
      this.$store.commit("delTodo", index);
    },
    delDone(index) {
      this.$store.commit("delDone", index);
    },
    clear(index) {
      this.$store.commit("clear", index);
    },
    move2Done(item, index) {
      this.$store.commit("move2Done", {
        name: item.name,
        complete: true,
      });
    },
    move2Todo(item, index) {
      this.$store.commit("move2Todo", {
        name: item.name,
        complete: false,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
</style>
