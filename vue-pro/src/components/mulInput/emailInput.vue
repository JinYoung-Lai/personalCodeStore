<!-- 用vue仿邮箱地址的输入框 -->
<template>
  <div class="search-box">
    <ul class="search-wrap clearfix" @click="getFocus">
      <li
        ref="inputli"
        v-for="(item, index) in msgArr"
        :key="index"
        @dblclick="editMes(item, index)"
      >
        <input
          class="input-item"
          ref="inputitem"
          v-if="item.writeable"
          type="text"
          v-model="item.value"
          @keyup.enter="item.writeable = false"
          @blur="editItemMes(item, index)"
        />
        <span v-else>{{item.value}}</span>
        <i class="el-icon-close" @click="deleteMsg(index)"></i>
      </li>
      <li>
        <input
          type="text"
          class="input-new"
          ref="inputnew"
          v-model="addMsg"
          @input="autoWidth($event)"
          @keydown="backspaceDelMsg($event)"
          @keyup.enter="pushMes()"
        />
      </li>
    </ul>
    <div class="search-btn">
      <button class="primary">查询</button>
      <button class="danger" @click="clear">重置</button>
    </div>
  </div>
</template>

<script>
import inputItem from "./inputItem";
export default {
  components: {
    inputItem
  },
  data() {
    return {
      addMsg: "",
      msgArr: [],
      // inputWidth: "",
      inputNewWidth: 0
    };
  },
  created() {},
  mounted() {},
  computed: {},
  methods: {
    pushMes() {
      if (this.addMsg.length === 0) {
        return;
      }
      let obj = {
        value: this.addMsg,
        writeable: false
      };
      this.msgArr.push(obj);
      this.addMsg = "";
      // 充值输入框的宽度为10
      this.inputNewWidth = 0;
      this.$refs.inputnew.style.width = 10 + "px";
    },
    deleteMsg(i) {
      this.msgArr.splice(i, 1);
    },
    backspaceDelMsg(e){
      if (e.keyCode === 8) {
        if (this.addMsg.length === 0) {
          this.deleteMsg(this.msgArr.length - 1)
        }
      }
    },
    editMes(item, index) {
      item.writeable = true;
      this.$nextTick(() => {
        // 双击修改设置输入框宽度，获取光标
        this.$refs.inputitem[0].style.width = item.value.length * 16 + "px";
        this.$refs.inputitem[0].focus();
      });
    },
    //双击修改，确认输入为空时，删除该项！
    editItemMes(item, index) {
      if (item.value.length === 0) {
         this.deleteMsg(index);
      }
      item.writeable = false;
    },
    clear() {
      this.msgArr = [];
    },
    getFocus() {
      this.$nextTick(() => {
        // 点击搜索栏获取光标
        this.$refs.inputnew.focus();
      });
    },
    autoWidth(e) {
      // 设置输入框自动宽度，随着输入字数展开。
      this.inputNewWidth += 12;
      e.target.style.width = this.inputNewWidth + "px";
    }
  }
};
</script>
<style lang='scss' scoped>
.search-box {
  width: 100%;
  height: 42px;
  position: relative;
  // border: 1px solid red;
  .search-wrap {
    width: calc(100% - 160px);
    // height: 40px;
    line-height: 40px;
    border: 1px solid rgba(228, 228, 228, 1);
    border-radius: 4px;

    li {
      position: relative;
      float: left;
      //min-width: 70px;
      height: 25px;
      margin: 5px;
      // padding: 0 8px;
      background: #f0f2f5;
      border-color: transparent;
      line-height: 22px;
      text-align: center;
      border-radius: 4px;
      &:last-child {
        border: none;
        background: none;
      }
      span {
        margin-left: 5px;
        height: 24px;
        line-height: 24px;
      }
      input[type="text"] {
        max-width: 200px;
        //width: 10px;
        height: 22px;
        border: none;
      }
      input[type="text"]:focus {
        //border-bottom: 1px solid #eee;
        outline: none;
      }
      .input-item:focus {
        padding-left: 8px;
        border-bottom: 1px solid #eee;
      }
      .input-new {
        width: 10px;
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
    }
    .active {
      color: red;
    }
  }
  .search-btn {
    width: 160px;
    position: absolute;
    top: 0;
    right: 0;
    button {
      height: 37px;
      width: 70px;
      margin: 0 5px;
      color: #fff;
      border-radius: 5px;
      cursor: pointer;
      &.primary {
        background: #53acf3;
        border: #53acf3;
      }
      &.primary:hover {
        background: #1f84d6;
        border: #1f84d6;
      }
      &.danger {
        background: #f77148;
        border: #f77148;
      }
      &.danger:hover {
        background: #fa460f;
        border: #fa460f;
      }
    }
  }
}

.clearfix:after {
  clear: both;
  display: block;
  height: 0;
  content: "";
}
.clearfix {
  zoom: 1;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
</style>