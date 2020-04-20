<template>
  <div class="demo">
    <div class="design-print-tem">
      <h2>模板设计</h2>
      <el-button type="primary" @click="createPrintPage">进入模板设计</el-button>
      <el-button type="primary" @click="previewPrintPage">预览模板设计</el-button>
      <!-- <a href="javascript:;" onclick="javascript:createPrintPage();LODOP.PRINT_DESIGN();">模板设计</a>
      <br />
      <br />进入
      <a href="javascript:;" onclick="javascript:createPrintPage();LODOP.PREVIEW();">模板的打印预览</a>-->
    </div>
    <el-button @click="printPdf">打印</el-button>
    <el-form id="form1" v-show="isshow" label-width="100px">
      <el-form-item label="编号">
        <el-input v-model="form.number"></el-input>
      </el-form-item>
      <el-form-item label="填表时间-年">
        <el-input v-model="form.year"></el-input>
      </el-form-item>
      <el-form-item label="填表时间-月">
        <el-input v-model="form.month"></el-input>
      </el-form-item>
      <el-form-item label="填表时间-日">
        <el-input v-model="form.day"></el-input>
      </el-form-item>
      <el-form-item label="驾驶员">
        <el-input v-model="form.driver"></el-input>
      </el-form-item>
      <el-form-item label="部门">
        <el-input v-model="form.department"></el-input>
      </el-form-item>
      <el-form-item label="车号">
        <el-input v-model="form.carNum"></el-input>
      </el-form-item>
      <el-form-item label="车型">
        <el-input v-model="form.car"></el-input>
      </el-form-item>
      <el-form-item label="项目">
        <el-input v-model="form.project"></el-input>
      </el-form-item>
      <el-form-item label="张数">
        <el-input v-model="form.pageNum"></el-input>
      </el-form-item>
      <el-form-item label="金额">
        <el-input v-model="form.money"></el-input>
      </el-form-item>
      <el-form-item label="合计金额">
        <el-input v-model="form.count"></el-input>
      </el-form-item>
      <el-form-item label="财务审批">
        <el-input v-model="form.accounting"></el-input>
      </el-form-item>
      <el-form-item label="财务复核">
        <el-input v-model="form.reAccounting"></el-input>
      </el-form-item>
      <el-form-item label="部门主管审批">
        <el-input v-model="form.depManager"></el-input>
      </el-form-item>
      <el-form-item label="部门经理审批">
        <el-input v-model="form.manager"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
 
<script>
import { getLodop } from "../../api/lodop";

export default {
  data() {
    return {
      isshow: true,
      form: {
        number: '100916088',
        year: '2020',
        month: '4',
        day: "10",
        driver: "金哲",
        department: "销售部",
        carNum: "K0D88",
        car: "JAC",
        project: "油费报销 ",
        pageNum: "1",
        money: "220",
        count: "220",
        accounting: "黎xx",
        manager: "孙xx",
        depManager:"张xx ",
        reAccounting:"李xx"
      }
    };
  },
  methods: {
    createPrintPage() {
      const LODOP = getLodop();
      LODOP.PRINT_INIT("套打模板");
      LODOP.PRINT_DESIGN();
    },
    previewPrintPage() {
      const LODOP = getLodop();
      LODOP.PRINT_INIT("套打模板");
      LODOP.PREVIEW();
    },
    // ● 	PRINT_INIT(strPrintTaskName)打印初始化
    // ● 	SET_PRINT_PAGESIZE(intOrient,intPageWidth,intPageHeight,strPageName)设定纸张大小
    // ● 	ADD_PRINT_HTM(intTop,intLeft,intWidth,intHeight,strHtml)增加超文本项
    // ● 	ADD_PRINT_TEXT(intTop,intLeft,intWidth,intHeight,strContent)增加纯文本项
    // ● 	ADD_PRINT_TABLE(intTop,intLeft,intWidth,intHeight,strHtml)增加表格项
    // ● 	ADD_PRINT_SHAPE(intShapeType,intTop,intLeft,intWidth,intHeight,intLineStyle,intLineWidth,intColor)画图形
    // ● 	SET_PRINT_STYLE(strStyleName, varStyleValue)设置对象风格
    // ● 	PREVIEW打印预览
    // ● 	PRINT直接打印
    // ● 	PRINT_SETUP打印维护
    // ● 	PRINT_DESIGN打印设计
    // 查询数据
    printPdf() {
      //this.refreshData()
      let LODOP = getLodop();
      LODOP.PRINT_INIT("套打模板");
      // LODOP.ADD_PRINT_SETUP_BKIMG(
      //   "E:\\desktop\\timg.jpg"
      // );
      LODOP.SET_SHOW_MODE("BKIMG_WIDTH", "184.41mm");
      LODOP.SET_SHOW_MODE("BKIMG_HEIGHT", "104.78mm");
      LODOP.SET_SHOW_MODE("BKIMG_IN_PREVIEW", true);
      LODOP.SET_SHOW_MODE("BKIMG_PRINT", true);
      LODOP.ADD_PRINT_TEXT(66, 60, 131, 22, this.form.number);
      LODOP.ADD_PRINT_TEXT(68, 512, 40, 20, this.form.year);
      LODOP.ADD_PRINT_TEXT(68, 575, 25, 20, this.form.month);
      LODOP.ADD_PRINT_TEXT(68, 620, 27, 20, this.form.day);
      LODOP.ADD_PRINT_TEXT(354, 467, 100, 20, "经办人签名");
      LODOP.ADD_PRINT_TEXT(355, 577, 100, 20, "报销人签名");
      LODOP.ADD_PRINT_TEXT(283, 356, 65, 20, this.form.count);
      LODOP.ADD_PRINT_TEXT(353, 354, 100, 20, this.form.manager);
      LODOP.ADD_PRINT_TEXT(354, 240, 100, 20, this.form.reAccounting);
      LODOP.ADD_PRINT_TEXT(354, 132, 100, 20, this.form.depManager);
      LODOP.ADD_PRINT_TEXT(354, 26, 100, 20, this.form.accounting);
      LODOP.ADD_PRINT_TEXT(210, 167, 58, 20, this.form.money);
      LODOP.ADD_PRINT_TEXT(210, 97, 54, 20, this.form.pageNum);
      LODOP.ADD_PRINT_TEXT(209, 26, 59, 20, this.form.project);
      LODOP.ADD_PRINT_TEXT(134, 598, 69, 20, this.form.car);
      LODOP.ADD_PRINT_TEXT(96, 596, 74, 20, this.form.carNum);
      LODOP.ADD_PRINT_TEXT(94, 379, 100, 20, this.form.department);
      LODOP.ADD_PRINT_TEXT(96, 103, 100, 20, this.form.driver);

      // LODOP.ADD_PRINT_HTM(
      //   88,
      //   200,
      //   350,
      //   600,
      //   document.getElementById("form1").innerHTML
      // );
      LODOP.PREVIEW();
    }
  }
};
</script>
<style type="text/css" scoped>
.design-print-tem {
  margin-bottom: 20px;
}
.form-all {
  width: 100%;
  border: 1px solid #333;
  padding: 10px;
  color: #606266;
}
.form-top {
  margin: 0 auto;
  width: 90%;
}
.title {
  height: 45px;
  line-height: 45px;
  text-align: center;
}

li {
  display: inline-block;
  list-style: none;
}

.table {
  margin: 0 auto;
  width: 90%;
  height: 300px;
  border: 1px solid #999;
}
</style>