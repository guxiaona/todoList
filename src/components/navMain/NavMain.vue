<template>
  <Content :style="{ padding: '0 400px', margin: '20px 0' }">
    <Card>
      <div style="min-height: 200px">
        <!-- 正在进行 -->
        <h1>
          正在进行<span class="todocount">{{ list.length }}</span>
        </h1>
        <ul>
          <li v-for="(item, index) in list" :key="item.name" class="item">
            <Checkbox
              v-model="item.complete"
              size="large"
              @on-change="move2Done(item, index), delTodo(item, index)"
            >
              {{ item.name }}
            </Checkbox>
            <Button
              shape="circle"
              style="float: right"
              @click="delTodo(item, index)"
            >
              delete
            </Button>
          </li>
        </ul>
        <!-- 已经完成 -->
        <h1>
          已经完成<span class="todocount">{{ donelist.length }}</span>
        </h1>
        <ul>
          <li v-for="(item, index) in donelist" :key="item.name" class="item">
            <Checkbox
              v-model="item.complete"
              size="large"
              @on-change="move2Todo(item, index), delDone(item, index)"
            >
              {{ item.name }}
            </Checkbox>
            <Button
              shape="circle"
              style="float: right"
              @click="delDone(item, index)"
            >
              delete
            </Button>
          </li>
        </ul>
      </div>
    </Card>
  </Content>
</template>

<script>
export default {
  name: "NavMain",
  props: {
    list: {
      type: Array,
      required: true,
    },
    donelist: {
      type: Array,
      required: true,
    },
  },
  methods: {
    delTodo(item, index) {
      this.$emit("delTodo", index);
    },
    delDone(item, index) {
      this.$emit("delDone", index);
    },
    move2Done(item, index) {
      this.$emit("move2Done", item);
    },
    move2Todo(item, index) {
      this.$emit("move2Todo", item);
    },
  },
};
</script>

<style lang="scss" scoped>
.item {
  height: 50px;
  line-height: 50px;
}
.todocount {
  float: right;
  width: 25px;
  height: 25px;
  line-height: 25px;
  margin-top: 5px;
  border-radius: 50%;
  background-color: #e6e6fa;
  font-size: 20px;
  text-align: center;
  color: #666666;
}
</style>