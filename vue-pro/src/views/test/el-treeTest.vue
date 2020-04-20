<!--  -->
<template>
  <div class="app-container">
    <el-tree
      :data="treedata"
      show-checkbox
      node-key="id"
      :default-expanded-keys="[2, 3]"
      :default-checked-keys="defaultChecked"
      :props="defaultProps"
      ref="tree"
      @node-click="handclicknode"
    ></el-tree>
     <el-button @click="getNode">获取node</el-button>
    <el-button @click="setCheckedNodes">通过 node 设置</el-button>
    <el-button @click="setCheckedKeys">通过 key 设置</el-button>
    <div class="colorTest"> 

    </div>
  </div>
</template>

<script>
//import { log } from 'util';
export default {
  components: {},
  data() {
    return {
      treedata: [
        {
          id: 1,
          label: "Level one 1",
          checked: false,
          children: [
            {
              id: 4,
              checked: false,
              label: "Level two 1-1",
              children: [
                {
                  id: 9,
                  checked: true,
                  label: "Level three 1-1-1"
                },
                {
                  id: 10,
                  checked: false,
                  label: "Level three 1-1-2"
                }
              ]
            }
          ]
        },
        {
          id: 2,
          label: "Level one 2",
          children: [
            {
              id: 5,
              checked: true,
              label: "Level two 2-1"
            },
            {
              id: 6,
              checked: false,
              label: "Level two 2-2"
            }
          ]
        },
        {
          id: 3,
          label: "Level one 3",
          children: [
            {
              id: 7,
              label: "Level two 3-1"
            },
            {
              id: 8,
              label: "Level two 3-2"
            }
          ]
        }
      ],
      defaultChecked: ["5"],
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  },
  created() {},
  mounted() {
    // this.$nextTick(() => {
    //   this.$refs.tree.setCheckedNodes(this.treedata);
    // })
  },
  computed: {},
  methods: {
    handclicknode(node, data){
      console.log(node, data);
    },
    getNode(){
      let nodes = this.$refs.tree.getCheckedNodes()
      console.log(nodes);
      
    },
    setCheckedKeys() {
      this.$refs.tree.setCheckedKeys([3]);

      let newarr = [];

      console.log(this.treedata instanceof Array)
      // this.treedata.forEach(item => {
      //   if(item instanceof Array && item.length > 0){
      //     item.forEach(cItem => {
      //       console.log(cItem);
      //     })
      //   }else{
      //     newarr.push(item)
      //   }
      // })
      // let treemap = new Set(this.treedata);
      // console.log(treemap);
      // for(let item of treemap){
      //   console.log(item); 
      // }
    },
    setCheckedNodes() {
      this.$refs.tree.setCheckedNodes(this.treedata);
      
    }
  }
};
</script>
<style lang='scss' scoped>
.colorTest{
  width: 100px;
  height: 50px;
  background: #CADEB9
}
</style>