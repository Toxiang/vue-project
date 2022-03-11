<template>
  <div class="tags">
    <el-tag size="small" v-for="(tag,index) in tags" :key="tag.name"
    :closable="tag.name !== 'home'" :effect="$route.name===tag.name ? 'dark' : 'plain'"
    @click="changeMenu(tag)" @close="handleClose(tag,index)"> {{tag.label}}
    </el-tag>
  </div>
</template>

<script>
import {mapState,mapMutations} from "vuex";

export default {
  name: "CommonTag",
  data() {
    return{
      tagName:this.$router.currentRoute.name
    }
  },
  computed: {
    ...mapState({
      tags: state => state.tab.tabsList
    })
  },
  methods: {
    ...mapMutations({
      close: 'closeTag'
    }),
    changeMenu(item){
      this.$router.push({name: item.name})
      this.tagName = this.$router.currentRoute.name
      console.log(item.name)
      console.log(this.tagName)
    },
    handleClose(tag,index){
      const l = this.tags.length - 1
      this.close(tag)
      if (tag.name !== this.$route.name){
        return
      }
      if (index === l){
        this.$router.push({
          name: this.tags[index-1].name
        })
      }else {
        this.$router.push({
          name: this.tags[index].name
        })
      }
    }
  }

}
</script>

<style lang="less" scoped>
  .tags {
    padding: 20px;
    .el-tag{
      margin-right: 15px;
      cursor: pointer;
    }
  }
</style>