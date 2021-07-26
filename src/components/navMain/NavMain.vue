<template>
  <div>
    <div v-for="(item, index) in list" :key="index">
      <div class="item">
        <input type="checkbox" v-model="item.complete" />
        {{ item.name }}
        <button class="del">删除</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavMain",
  data() {
    return {
      list: [
        {
          name: "吃饭",
          complete: false,
        },
        {
          name: "睡觉",
          complete: false,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
// .item {
//   height: 35px;
//   line-height: 35px;
//   position: relative;
//   width: 200px;
//   cursor: pointer;
//   z-index: 99;
//   button {
//     position: absolute;
//     right: 20px;
//     top: 6px;
//     display: none;
//   }
//   &:hover {
//     background: #ddd;
//     button {
//       display: block;
//     }
//   }
// }
</style>