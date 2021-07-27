<template>
  <Footer class="layout-footer-center">
    Copyright &copy; todolist.cn
    <Button type="text" @click="clear">Clear</Button>
  </Footer>
</template>

<script>
export default {
  name: "NavFooter",
  methods: {
    clear(index) {
      this.$emit("clear", index);
    },
  },
};
</script>

<style lang="scss" scoped>
.layout-footer-center {
  text-align: center;
}
</style>