<template>
  <div id="app">
    <GameHeader />
    <router-view/>
  </div>
</template>
<script>
import GameHeader from "@/components/game/GameHeader.vue";
export default {
  data() {

  },
  components: {
    GameHeader
  },
}
</script>
<style lang="less">
</style>
