<template>
  <header class="nav nav_taste v-transfer-dom">
    <div
      flex="main:justify box:justify"
      class="nav_list k3"
      style="height: 79px"
    >
      <div class="nav-item">
        <div class="back">
          <div class="back_icon"></div>
        </div>
      </div>
      <div class="nav_taste">23/12/2023-0238</div>
      <div class="nav-item">
        <div flex="main:right" class="right_solt">
          <div class="right_icon_chat"></div>
          <div class="right_icon" @click="changeRightNav"></div>
        </div>
        <div class="nav_menu_box" :class="{'active': showRightNav}" :style="{'top': (showRightNav ? 49 : 0) + 'px'}">
          <div class="nav_menu">
            <div class="nav_menu_list" flex="dir:top box:mean">
              <div
                flex="main:center cross:center dir:top"
                class="nav_menu_item"
                v-for="i in rightNavList"
                :key="i.icon"
              >
                <div :class="i.icon"></div>
                <span class="vi">{{ i.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="nav_list_bg vi"></div>
    </div>
    <div></div>
  </header>
</template>
<script>
export default {
  data() {
    return {
        rightNavList:[ 
            {
                name: 'Quy tắc',
                icon: 'menu_rule',
            },{
                name: 'Cược',
                icon: 'menu_history1',
            },
            {
                name: 'Chưa',
                icon: 'menu_shop',
            },{
                name: 'Lịch sử',
                icon: 'menu_history2',
            },{
                name: 'Âm nhạc',
                icon: 'menu_music',
            },
        ],
        showRightNav: false,
    };
  },
  props: {},
  methods: {
      changeRightNav() {
          this.showRightNav = !this.showRightNav
      }
  },
  created: {},
  mounted() {},
};
</script>

<style lang="less" scoped>
</style>