<!--  -->
<template>
  <div>
    <h1>水印测试 2020/03/12 Jinyang</h1>
    <!-- <img :src="imageUrl" /> -->
   
    <canvas id="canvasCat" width="20" height="20" ref="canvasCat"></canvas>

    <canvas id="canvasCatText" width="20" height="20" ref="canvasCatText"></canvas>
    <canvas id="canvasCatPto" width="20" height="20" ref="canvasCatPto"></canvas>
    <canvas id="canvasCatAdd" width="20" height="20" ref="canvasCatAdd"></canvas>
  </div>
</template>

<script>
import { watermark } from "../../api/watermark";
import Base64 from "crypto-js/enc-base64";
import CryptoJS from "crypto-js";

export default {
  components: {},
  data() {
    return {
      imageUrl: require("../../assets/cat.png"),
      imageUrlAdd: require("../../assets/pto.png")
    };
  },
  created() {
    watermark({
      watermark_txt: `测试水印,${new Date().Format(
        "yyyy-MM-dd hh:mm:ss.S"
      )},测试水印,jinyang`,
      watermark_alpha: "0.1"
    });
  },
  mounted() {
   
    this.addWaterMark();
    this.doDraw();
  },
  computed: {},
  methods: {
    getImgRgbaData(url) {
      //提取图片RGBA
      const ctx = document.getElementById("canvasCat").getContext("2d");
      return new Promise(function(resolve, reject) {
        let img = new Image();
        let originalData, imgData;
        img.src = url;
        img.onload = () => {
          ctx.drawImage(img, 0, 0);
          originalData = ctx.getImageData(
            0,
            0,
            ctx.canvas.width,
            ctx.canvas.height
          );
          console.log('originalData', originalData)
          resolve(originalData);
        };
      });
    },
    getTextRgbaData() {
      return new Promise(function(resolve, reject) {
        const ctxAdd = document.getElementById("canvasCatText").getContext("2d");
        let textData; // offset的作用是找到alpha通道值，这里需要大家自己动动脑筋
        ctxAdd.font = "10px Microsoft Yahei";
        ctxAdd.fillText("A", 10, 10);
        textData = ctxAdd.getImageData(
          0,
          0,
          ctxAdd.canvas.width,
          ctxAdd.canvas.height
        ).data;
        console.log('textData', textData)
        resolve(textData);
      });
    },
    async addWaterMark(color) {
      let originalData = await this.getImgRgbaData(this.imageUrl);
      let imgData = originalData.data
      let textData = await this.getTextRgbaData();
      let bit, offset;
      switch (color) {
        case "R":
          bit = 0;
          offset = 0;
          break;
        case "G":
          bit = 1;
          offset = 2;
          break;
        case "B":
          bit = 2;
          offset = 1;
          break;
      }
      // imgData = await originalData.data
      for (let i = 0; i < imgData.length; i++) {
        if (i % 4 == bit) {
          if (textData[i + offset] === 0 && imgData[i] % 2 === 1) {
            if (imgData[i] === 255) {
              imgData[i]--;
            } else {
              imgData[i]++;
            }
          } else if (textData[i + offset] !== 0 && imgData[i] % 2 === 0) {
            if (imgData[i] === 255) {
              imgData[i]--;
            } else {
              imgData[i]++;
            }
          }
        }
      }
      // console.log('add',originalData.data)
      // console.log('imgData',imgData)
      const ctx = document.getElementById("canvasCatPto").getContext("2d");
      setTimeout(() => {
        ctx.putImageData(originalData, 0, 0);
      },3000)
     
      
    },

    async doDraw() {
      //let url = "../../assets/catAdd.png"
      let originalData = await this.getImgRgbaData(this.imageUrlAdd);
      let data = originalData.data
      const ctx = document.getElementById("canvasCatAdd").getContext("2d");
        for (let i = 0; i < data.length; i++) {
          if (i % 4 == 0) {
            if (data[i] % 2 == 0) {
              data[i] = 0;
            } else {
              data[i] = 255;
            }
          } else if (i % 4 == 3) {
            continue;
          } else {
            data[i] = 0;
          }
        }
        ctx.putImageData(originalData, 0, 0);
      
    },

    // getBase64(word) {
    //   var str = CryptoJS.enc.Utf8.parse(word);
    //   var base64 = CryptoJS.enc.Base64.stringify(str);
    //   return base64;
    // }
  }
};
</script>
<style lang='scss' scoped>
</style>
