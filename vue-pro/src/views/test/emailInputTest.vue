<!-- mock pages -->
<template>
  <div class="app-container">
    <div class="container">
      <email-input v-model="searchMsg" ></email-input>
    </div>
    
  </div>
</template>

<script>
import axios from "axios";
import emailInput from "../../components/mulInput/emailInput"
export default {
  components: {
    emailInput
  },
  data() {
    return {
      searchMsg:"",
      seaechArr:[]
    };
  },
  created() {},
  mounted() {
    this.getData();
  },
  computed: {},
  methods: {
    getData() {
      let listParams = {
        pageIndex: 0,
        pageSize: 10
      };
      axios.post("http://localhost:8080/api/list", listParams).then(res => {
        console.log(res.data);
      });
    }
  }
};
</script>
<style lang='scss' scoped>
.container{
  width: 80%;
  margin: 100px auto;
}
</style>