<template>
  <div class="search-container">
    <i class="iconfont icon-sousuo search-icon"></i>
    <input 
      class="search-input" 
      v-model="content" 
      placeholder="请随便搜点什么" 
    />
    <button class="search-btn" @click="search">搜索</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      content: '',
    }
  },
  methods: {
    search(){
      this.$emit('search', this.content)
    },
  },
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/variables.styl'

.search-container 
  display: flex
  align-items: center
  position: relative
  font-size: 13px
  .search-icon
    position: absolute
    top: 50%
    transform: translate(50%, -50%)
  .search-input
    flex: 1
    height: 30px  
    padding-left: 28px
    border-radius: 30px
    border: none
    background: $backgroundGrey
  .search-btn
    height: 25px
    width: 60px
    line-height: 25px
    margin-left: 5px
    border: none
    border-radius: 25px
    background: $activeGreen
    color: #fff
    
</style>