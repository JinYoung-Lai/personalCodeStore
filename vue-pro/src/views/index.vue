<!--  -->
<template>
  <div class="menu-wrapper">
    <div v-for="link in routers" :key="link.path">
      <div
        class="menu"
        :class="{'clickable': !link.children}"
        @click="gotoRouter(link)"
      >{{link.descr}}</div>
      <div
        class="sub-menu clickable"
        v-for="(subLink, index) in link.children"
        :key="index"
        @click="gotoRouter(subLink)"
      >{{index + 1}}、{{subLink.descr}}</div>
    </div>
  </div>
</template>

<script>
import { routerMap } from "../router/index.js";
export default {
  data() {
    return {
      routers: routerMap.filter(e => e.name !== "index")
    };
  },
  components: {},
  computed: {},
  mounted() {},
  methods: {
    gotoRouter(link) {    
      if (link.children) return;
      this.$router.push(link.path);
    }
  }
};
</script>
<style lang='scss' scoped>
.menu-wrapper {
  margin: 20px;
  max-width: 300px;
  font: menu;
}
.menu {
  font-size: 18px;
  line-height: 40px;
}
.sub-menu {
  font-size: 14px;
  line-height: 40px;
  padding-left: 20px;
}
.clickable {
  cursor: pointer;
}
.clickable:hover {
  color: #fff;
  background-color: #409eff;
}
</style>