<template>
  <Header :style="{ padding: '0 400px', margin: '20px 0' }">
    <Menu mode="horizontal" theme="dark" active-name="1">
      <div class="layout-name">ToDoList</div>
      <div class="layout-nav">
        <MenuItem name="1">
          <Input
            v-model="inputValue"
            placeholder="添加ToDo"
            clearable
            autofocus
            style="width: 400px"
            @keyup.enter.native="addData(inputValue)"
          />
        </MenuItem>
      </div>
    </Menu>
  </Header>
</template>

<script>
export default {
  name: "NavHeader",
  data() {
    return {
      inputValue: "",
    };
  },
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
  methods: {
    addData(inputValue) {
      if (this.inputValue === "") {
        alert("内容为空，请输入内容");
      } else {
        this.inputValue = "";
        this.$emit("addTodo", inputValue);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.layout-name {
  width: 20%;
  float: left;
  position: relative;
  color: #fff;
  font-size: 25px;
}
.layout-nav {
  width: 40%;
  margin: 0 auto;
  margin-right: 20%;
}
</style>