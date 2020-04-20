<!--  -->
<template>
  <div class="app-container">
    <div class="title" ref="vnode">
      <h1>单组件</h1>
    </div>
    <el-button @click="updatedNum += 1">更新 {{updatedNum}}</el-button>
    <el-button @click="handleDestory">销毁组件{{compName}}</el-button>
  </div>
</template>

<script>
export default {
  props: {
    compName: {
      type: String,
      default: "single"
    }
  },
  data() {
    return {
      ready: "data初始化完了",
      updatedNum: 0
    };
  },
  computed: {},
  methods: {
    showcreated() {
      console.log("  created--method初始化完了--singe");
    },
    handleDestory() {
      this.$destroy();
    }
  },
  beforeCreate() {
    console.log(`  beforeCreate--data未初始化--singe`);
  },
  created() {
    console.log(`  created--${this.compName}, ${this.ready}--singe`);
    this.showcreated();
  },
  beforeMount() {
    console.log(`  beforeMount--${this.compName}--`);
    console.log(`  beforeMount--vnode ${this.$refs.vnode}--singe `);
  },
  mounted() {
    // console.log(`  mounted--${this.compName}--`);
    console.log(`  mounted--vnode ${this.compName}-- ${this.$refs.vnode} `);
  },
  beforeUpdate() {
    console.log(`  beforeUpdate--${this.compName}--`);
  },
  updated() {
    console.log(`  updated--${this.compName}--`);
  },
  beforeDestroy() {
    console.log(`  beforeDestroy--${this.compName}--`);
  },
  destroyed() {
    console.log(`  destroyed--${this.compName}--`);
  }
};
</script>
<style lang='scss' scoped>
</style>