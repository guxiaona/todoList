<template>
  <div class="layout">
    <Layout>
      <Header :style="{ position: 'fixed', width: '100%' }">
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-nav">
            <MenuItem name="1">
              <h1>ToDoList</h1>
            </MenuItem>
            <MenuItem name="2">
              <Input
                v-model="inputValue"
                placeholder="添加ToDo"
                clearable
                style="width: 400px"
                @keyup.enter.native="addData"
              />
            </MenuItem>
          </div>
        </Menu>
      </Header>
    </Layout>
  </div>
</template>

<script>
export default {
  name: "NavHeader",
  data() {
    // inputValue: "";
    return {
      inputValue: "",
    };
  },
  methods: {
    addData() {
      if (this.inputValue === "") {
        alert("内容为空，请输入内容");
      } else {
        // let obj = {};
        // obj.name = this.inputValue;
        // obj.isCheck = false;
        console.log(this.inputValue);
        // this.list.push(obj);
        // this.inputValue = "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.layout {
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-nav {
  height: 50px;
  width: 1000px;
  margin: 0 auto;
}
</style>