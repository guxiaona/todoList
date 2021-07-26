<template>
  <div>
    <div>已完成{{ isComplete }}/全部{{ all }}</div>
    <div v-if="isComplete > 0"><button>清除已完成</button></div>
  </div>
</template>

<script>
export default {
  name: "NavFooter",
  data() {
    return {
      isComplete: 1,
      all: 3,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>