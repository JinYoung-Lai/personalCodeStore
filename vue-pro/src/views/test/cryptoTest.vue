<template>
  <div class="search-input">
    <el-tabs type="border-card" v-model="activeName2" @tab-click="handleClick">
      <!-- 姓名 -->
      <el-tab-pane label="按姓名" name="xingming">
        <div class="person-inquire-item">
          <div class="input-wrap">
            <div class="input-box fl" @click="getFocus('xmFocus')">
              <ul class="xm_ul">
                <li
                  v-for="(name,index) in sbxx[0].mesArr"
                  :key="name.text"
                  @dblclick="editMes(index,sbxx[0].mesArr)"
                >
                  <span v-if="!name.flag">{{name.text}}</span>
                  <input
                    class="xm-input edit-input"
                    v-if="name.flag"
                    v-model="name.key"
                    @keyup.enter="editMes_OK(index,sbxx[0].mesArr)"
                    @blur="editMes_OK(index,sbxx[0].mesArr)"
                    @click.stop="stopBubbling($event)"
                  />
                  <i class="el-icon-close" @click="delMes(sbxx[0].mesArr,index)"></i>
                </li>
                <li style="boukrder:none">
                  <input
                    v-model.trim="sbxx[0].add"
                    @keyup.enter="addMes(sbxx[0].add,sbxx[0].mesArr,0)"
                    @blur="(e)=>{addMes(sbxx[0].add,sbxx[0].mesArr,0,e)}"
                    @keydown="delLastMes($event,sbxx[0])"
                    placeholder="请输入姓名(最多可输8个)"
                    ref="xmFocus"
                    v-if="sbxx[0].mesArr.length<8"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
    <span class="search-btn">
      <el-button type="primary" @click="seachEmit">查询</el-button>
      <el-button @click="resetForm">重置</el-button>
    </span>
    <!-- person-inquire-box -->
  </div>
</template>
<script>
export default {
  name: "searchInput",
  props: {
    options: {
      type: Array,
      default: function() {
        return [
          { value: "1", label: "护照" },
          { value: "2", label: "通行证" },
          { value: "3", label: "回乡证" },
          { value: "4", label: "台胞证" },
          { value: "5", label: "旅行证" },
          { value: "6", label: "居民身份证" },
          { value: "7", label: "军官证" },
          { value: "8", label: "学籍证" },
          { value: "9", label: "其他" },
          { value: "A", label: "外国人永久居留证" },
          { value: "B", label: "港澳台身份证" }
        ];
      }
    },
    tableData: Array,
    pageTurnFlag: Boolean
  },
  data() {
    return {
      activeName2: "xingming",
      flag: "xingming", //默认标志为企业登录
      tcbool: true, //默认切换标志
      xmFlag: false,
      sfzmFlag: false,
      sbhFlag: false,
      xmInput: "",
      sfzhm: "",
      sfzmDm: "6", //身份证明类型默认值
      //社保信息
      sbxx: [
        {
          add: "",
          mesArr: []
        },
        {
          add: "",
          mesArr: []
        },
        {
          add: "",
          mesArr: []
        }
      ],
      emitMes: {
        sfzmlbDm: "6", //默认值
        xm: [],
        sfzmhm: [],
        sbh: []
      },
      clickTimer: null
    };
  },
  computed: {},
  mounted() {},
  watch: {
    tableData: {
      handler(curVal, oldVal) {
        if (!this.pageTurnFlag) {
          // console.log(curVal, oldVal);
          let xmList = this.sbxx[0].mesArr;
          let sfzmList = this.sbxx[1].mesArr;
          let sbhList = this.sbxx[2].mesArr;
          let backXm = [];
          let backSfzm = [];
          let backSbh = [];
          let backSfzmlbDm = "";
          if (curVal.length > 0) {
            function isInArray(arr, value) {
              for (var i = 0; i < arr.length; i++) {
                if (value === arr[i]) {
                  return true;
                }
              }
              return false;
            }
            for (let x = 0; x < curVal.length; x++) {
              backXm.push(curVal[x].xm);
              backSfzm.push(curVal[x].sfzmhm);
              backSfzmlbDm = curVal[0].sfzmlbDm;
              // backSfzmlbDm.push(curVal[x].sfzmlbDm)
              backSbh.push(curVal[x].grsbh);
            }
            if (xmList.length > 0) {
              let xmLi = document.querySelectorAll(".xm_ul li");
              let iArr = document.querySelectorAll(".xm_ul li i");
              for (let i = 0; i < xmList.length; i++) {
                if (!isInArray(backXm, xmList[i].text)) {
                  xmLi[i].style.color = "red";
                  iArr[i].style.color = "red";
                } else {
                  xmLi[i].style.color = "#000";
                  iArr[i].style.color = "#000";
                }
              }
            }
            if (sfzmList.length > 0) {
              let sfzmLi = document.querySelectorAll(".sfzm_ul li");
              let iArr = document.querySelectorAll(".sfzm_ul li i");
              for (let i = 0; i < sfzmList.length; i++) {
                if (
                  !isInArray(backSfzm, sfzmList[i].text) ||
                  backSfzmlbDm != this.sfzmDm
                ) {
                  sfzmLi[i].style.color = "red";
                  iArr[i].style.color = "red";
                } else {
                  sfzmLi[i].style.color = "#000";
                  iArr[i].style.color = "#000";
                }
              }
            }
            if (sbhList.length > 0) {
              let sbhLi = document.querySelectorAll(".sbh_ul li");
              let iArr = document.querySelectorAll(".sbh_ul li i");
              for (let i = 0; i < sbhList.length; i++) {
                if (!isInArray(backSbh, sbhList[i].text)) {
                  sbhLi[i].style.color = "red";
                  iArr[i].style.color = "red";
                } else {
                  sbhLi[i].style.color = "#000";
                  iArr[i].style.color = "#000";
                }
              }
            }
          } else {
            if (xmList.length > 0) {
              let xmLi = document.querySelectorAll(".xm_ul li");
              let iArr = document.querySelectorAll(".xm_ul li i");
              for (let i = 0; i < xmList.length; i++) {
                xmLi[i].style.color = "red";
                iArr[i].style.color = "red";
              }
            }
            if (sfzmList.length > 0) {
              let sfzmLi = document.querySelectorAll(".sfzm_ul li");
              let iArr = document.querySelectorAll(".sfzm_ul li i");
              for (let i = 0; i < sfzmList.length; i++) {
                sfzmLi[i].style.color = "red";
                iArr[i].style.color = "red";
              }
            }
            if (sbhList.length > 0) {
              let sbhLi = document.querySelectorAll(".sbh_ul li");
              let iArr = document.querySelectorAll(".sbh_ul li i");
              for (let i = 0; i < sbhList.length; i++) {
                sbhLi[i].style.color = "red";
                iArr[i].style.color = "red";
              }
            }
          }
        }
      },
      deep: true
    }
    // pageTurnFlag:{}
  },
  methods: {
    handleClick(tab, event) {
      this.flag = tab.name;
    },
    getFocus(data) {
      if (this.clickTimer) {
        window.clearTimeout(this.clickTimer);
        this.clickTimer = null;
      }
      this.clickTimer = window.setTimeout(() => {
        // your click process code here
        if (data == "xmFocus") {
          this.$refs.xmFocus.focus();
        }
        if (data == "sfzmFocus") {
          this.$refs.sfzmFocus.focus();
        }
        if (data == "sbhFocus") {
          this.$refs.sbhFocus.focus();
        }
      }, 300);
    },
    //事件触发
    addMes(ele, arr, number, event) {
      if (
        (this.sbxx[0].mesArr.length == 8 && this.flag === "xingming") ||
        (this.sbxx[1].mesArr.length == 6 && this.flag === "shenfenzheng") ||
        (this.sbxx[2].mesArr.length == 6 && this.flag === "shebaohao")
      ) {
        this.$notify({
          title: "警告",
          message: "当前查询数量达到最大限制，请不要继续输入",
          type: "warning"
        });
        return;
      }
      ele =  ele.replace(/\s*/g,"")
      let obj = {
        flag: false,
        key: "",
        text: ele
      };
      if (ele.length > 0) {
        arr.push(obj);
      }
      this.sbxx[number].add = "";
      if (event && event.type == "blur") {
        if (
          (this.sbxx[0].mesArr.length == 8 && this.flag === "xingming") ||
          (this.sbxx[1].mesArr.length == 6 && this.flag === "shenfenzheng")|| 
          (this.sbxx[2].mesArr.length == 6 && this.flag === "shebaohao")
        ) {
          this.$notify({
            title: "警告",
            message: "当前查询数量达到最大限制，请不要继续输入",
            type: "warning"
          });
          return;
        }
      }
    },
    //删除关键字
    delMes(arr, n) {
      if (n == -2) {
        arr = [];
      } else {
        arr.splice(n, 1);
      }
    },
    //backspace删除
    delLastMes(ev, obj) {
      if (ev.keyCode === 8) {
        if (obj.add.length < 1) {
          obj.mesArr.splice(obj.mesArr.length - 1, 1);
        }
      }
    },
    //双击修改
    editMes(index, arr) {
      if (this.clickTimer) {
        window.clearTimeout(this.clickTimer);
        this.clickTimer = null;
      }
      arr[index].flag = true;
      arr[index].key = arr[index].text;
      this.$nextTick(e => {
        let xminput = document.querySelector(".xm-input");
        xminput.focus();
      });
    },
    stopBubbling(e) {
      console.log(e.target);
    },
    editMes_OK(index, arr) {
      arr[index].flag = false;
      arr[index].text = arr[index].key;
    },
    //身份证明类型修改
    changeSfzmlx() {
      this.sbxx[1].mesArr = [];
    },
    //提交出去的数据
    exportData() {
      let xmData = this.sbxx[0].mesArr;
      let sfzmData = this.sbxx[1].mesArr;
      let sbhData = this.sbxx[2].mesArr;
      this.emitMes.sfzmlbDm = this.sfzmDm;
      for (let m = 0; m < xmData.length; m++) {
        this.emitMes.xm.push(xmData[m].text);
      }
      for (let n = 0; n < sfzmData.length; n++) {
        this.emitMes.sfzmhm.push(sfzmData[n].text);
      }
      for (let k = 0; k < sbhData.length; k++) {
        this.emitMes.sbh.push(sbhData[k].text);
      }
    },
    seachEmit() {
      this.emitMes.xm = [];
      this.emitMes.sfzmhm = [];
      this.emitMes.sbh = [];
      this.exportData();
      //console.log(this.emitMes);
      this.$emit("searchMes", this.emitMes);
      //this.$emit('sfzh',this.inputController[1].inputs);
    },
    // 重置
    resetForm() {
      console.log("resetForm()");
      this.sbxx[0].mesArr = [];
      this.sbxx[1].mesArr = [];
      this.sbxx[2].mesArr = [];
      this.sfzmDm = "6";
    }
  }
};
</script>

<style>
.search-input .el-tabs--border-card {
  background: #fff;
  border: 1px solid #dcdfe6;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
}
</style>

<style scoped lang="scss">
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
.search-input {
  position: relative;
}
.search-btn {
  position: absolute;
  top: 60px;
  left: 84%;
  min-width: 128px;
}
.person-inquire-item {
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  .input-wrap {
    width: 93%;
    height: 40px;
    line-height: 40px;
    .person-inquire-title {
      display: inline-block;
      width: 14%;
      height: 40px;
      margin-right: 6px;
      margin-top: 2px;
      line-height: 40px;
      text-align: right;
    }
    .input-box {
      width: 90%;
      display: inline-block;
      border: 1px solid rgba(228, 228, 228, 1);
      border-radius: 4px;
      margin-top: 5px;
      ul {
        width: 100%;
        height: 30px;
        margin-top: 2px;
        li {
          position: relative;
          float: left;
          min-width: 70px;
          height: 24px;
          margin: 2px 0 2px 6px;
          padding: 0 8px;
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
            height: 24px;
            line-height: 24px;
          }
          i {
            height: 16px;
            width: 16px;
            margin-left: 5px;
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
      input {
        // width: 100%;
        width: 216px;
        height: 23px;
        margin-left: -10px;
        border: none;
      }
      .edit-input {
        text-align: center;
        box-shadow: 0px 1px 1px 0 rgb(212, 212, 212);
      }
      .xm-input {
        width: 80px;
      }
    }
  }
}

.inquire-btn-box {
  button {
    display: block;
    width: 120px;
    height: 40px;
    margin: 20px auto;
    &:nth-child(2) {
      margin-top: 30px;
    }
  }
}
.active {
  background-color: red;
}
</style>
