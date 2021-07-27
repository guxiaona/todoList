<template>
  <Header :style="{ padding: '0 400px', margin: '20px 0' }">
    <Menu mode="horizontal" theme="dark" active-name="1">
      <div class="layout-logo">ToDoList</div>
      <div class="layout-nav">
        <MenuItem name="1">
          <Input
            v-model="inputValue"
            placeholder="添加ToDo"
            clearable
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
.layout-logo {
  width: 100px;
  height: 30px;
  line-height: 30px;
  // background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  color: #fff;
  font-size: 25px;
  top: 15px;
  left: 20px;
}
.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
</style>