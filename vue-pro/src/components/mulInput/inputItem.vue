<!--  -->
<template>
  <div class="input-item" @dblclick="editMes">
    <input
      type="text"
      ref="inputitem"
      v-if="writeable"
      v-model="value"
      @keyup.enter="pushMes()"
      @blur="(e)=>{pushMes()}"
    />
    <span v-else>{{value}}</span>
    <i class="el-icon-close" @click="deleteMsg()"></i>
  </div>
</template>

<script>
export default {
  prop:{
    
  },
  components: {},
  data() {
    return {
      value: "aaa",
      writeable: false
    };
  },
  created() {},
  mounted() {},
  computed: {},
  methods: {
    pushMes() {
      this.writeable = false;
    },
    deleteMsg() {
      //this.$parent.deleteMsg()
    },
    editMes() {
      //this.value = "";
      this.writeable = true;
      this.$nextTick(() => {
        this.$refs.inputitem.focus();
        console.log(this.$refs.inputitem);
      });
    }
  }
};
</script>
<style lang='scss' scoped>
.input-item {
  position: relative;
  min-width: 70px;
  height: 24px;
  //padding: 0 8px;
  background: #f0f2f5;
  border-color: transparent;
  line-height: 22px;
  text-align: center;
  border-radius: 4px;
  span {
    margin-left: 5px;
    height: 24px;
    line-height: 24px;
  }
  i {
    height: 16px;
    width: 16px;
    margin: 0 5px;
    line-height: 16px;
    text-align: center;
    background: #c0c4cc;
    color: #fff;
    cursor: pointer;
    border-radius: 50%;
    transform: scale(0.8);
  }
  input {
    padding-left: 8px;
    width: 100px;
    height: 22px;
    border: none;
  }
  input[type="text"]:focus {
    border-bottom: 1px solid #eee;
    outline: none;
  }
}
</style>