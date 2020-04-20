<!--  -->
<template>
  <div class="app-container">
    <div class="title" ref="vnode">
      <h1>父子组件</h1>
    </div>
    <single compName="child"></single>
    <el-button @click="updatedNum += 1">更新 {{updatedNum}}</el-button>
    <el-button @click="handleDestory">销毁组件complex</el-button>
  </div>
</template>

<script>
import single from './lifeCycleSingle'
const COMPONENT_NAME = 'complex'
export default {
  data() {
    return {
      updatedNum: 0
    };
  },
  components:{
      single
  },
  methods: {
    showcreated() {
      console.log("  created--method初始化完了--");
    },
    handleDestory() {
      this.$destroy();
    }
  },
  beforeCreate() {
    console.log(`  beforeCreate--data未初始化--`);
  },
  created() {
    console.log(`  created--${COMPONENT_NAME}--`);
    this.showcreated();
  },
  beforeMount() {
    console.log(`  beforeMount--${COMPONENT_NAME}--`);
  },
  mounted() {
    console.log(`  mounted--${COMPONENT_NAME}--`);
     console.log(`  mounted--vnode ${this.$refs.vnode} `);
  },
  beforeUpdate() {
    console.log(`  beforeUpdate--${COMPONENT_NAME}--`);
  },
  updated() {
    console.log(`  updated--${COMPONENT_NAME}--`);
  },
  beforeDestroy() {
    console.log(`  beforeDestroy--${COMPONENT_NAME}--`);
  },
  destroyed() {
    console.log(`  destroyed--${COMPONENT_NAME}--`);
  }
};
</script>
<style lang='scss' scoped>
</style>