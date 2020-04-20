<!--  -->
<template>
  <div class="app-container">
    <!-- <input id="upload" type="file" accept="image/*;" capture="camera" /> -->
    <!--身份证主页-->
    <div class="mui-card">
      <div class="mui-card-content">
        <img class="camerabox" id="newImage" ref="newImage" src="../../assets/IDcar_up.png" />
        <span>请拍摄身份证正面照</span>
        <input
          class="fileInpBtn"
          type="file"
          @change="showPicture($event)"
          accept="image/*"
          capture="camera"
          multiple
          placeholder
        />
      </div>
      <!--身份证副页-->

      <!-- <div class="mui-card">
        <div class="mui-card-content">
          <img class="camerabox" id="newImage2" src="statics/images/udy_images/idcard_vice.png" />
          <input
            class="fileInpBtn"
            id="fileInpBtn2"
            type="file"
            onchange="showPicture2(this)"
            accept="image/*"
            multiple
          />
        </div>
      </div>-->
    </div>
    <div>
      <video ref="video" class="video-box"></video>
      <el-button @click="connectCamera">打开摄像头</el-button>
      <el-button @click="closeCamera">关闭摄像头</el-button>
    </div>
  </div>
</template>

<script>
//import Axios from "axios";
export default {
  components: {},
  data() {
    return {
      file: {},
      cameraState: true,
      stream: {}
    };
  },
  computed: {},
  methods: {
    showPicture(e) {
      let file = e.target.files[0];
      this.file = file;
      console.log(file);
      // console.log("url地址：" + window.URL.createObjectURL(imgFile.files[0]));
      // /*获取上传文件的路径，并赋给img标签*/
      this.$nextTick(() => {
        console.log(this.$refs.newImage);
        this.$refs.newImage.src = window.URL.createObjectURL(e.target.files[0]);
      });
    },
    sendImg() {
      let formData = new FormData();
      formData.append("fileStream", this.file);
      //Axios.post(formdata);
    },

    connectCamera() {
      navigator.getMedia =
        navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMeddia ||
        navigator.msGetUserMedia;
      const constraints = {
        audio: true,
        video: true //{ width: { min: 720 }, height: { min: 720 } }
      };
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices
          .getUserMedia(constraints)
          .then(stream => {
            console.log(stream);
            this.stream = stream;
            let video = this.$refs.video; //document.querySelector("video");
            // video.src = (window.URL || window.webkitURL).createObjectURL(
            //   stream
            // );
            video.srcObject = stream;
            video.onloadedmetadata = e => {
              video.play();
            };
          })
          .catch(error => {
            let mes = `${error.name} : ${error.message}`;
            console.log(mes);
            alert(mes);
          });
      }
      // 老浏览器使用
      else if (navigator.getMedia) {
        navigator.getMedia(
          {
            video: true
          },
          function(stream) {
            let video = this.$refs.video;
            video.srcObject = stream;
            video.onloadedmetadata = e => {
              video.play();
            };
          },
          function(err) {
            console.log(err);
          }
        );
      }
    },
    closeCamera() {
      // this.cameraState = false;
      // this.stream && this.stream.stop();
      //this.$refs.video
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang='scss' scoped>
.app-container{
  width: 400px;
}
.mui-card {
  position: relative;
  border: #c8c7cc 1px dotted;
  padding: 8px;
  -webkit-box-shadow: none;
  box-shadow: none;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  text-align: center;
  .camerabox {
    width: 100%;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    opacity: 0.6;
  }
  .fileInpBtn {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    opacity: 0;
    border: 1px solid orange;
  }
}
.video-box {
  width: 100%;
  height: 160px;
  border: 1px solid #999;
}
</style>