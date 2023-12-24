<template>
  <div class="wrap-router theme-blue">
    <div class="game-container router-view">
      <div class="list-container">
        <div class="router-view">
          <div
            class="lay-sticky-container game_taste fsc"
            style="
              padding-bottom: 140px;
            "
          >
            <div class="scroll-part">
              <div class="sticky-placeholder" style="height: 0px"></div>
              <div class="taste_play_zone">
                <div class="taste_play_balance">
                  <div>
                    <span>0</span>
                  </div>
                </div>
                <div class="taste_play_countdown" v-if="game_result.drawStatus == 0">
                  <div
                    :class="['v_circle fsc v_circle_show', { 'v_circle_red': isColorRed }]"
                    style="transform: scale(1.00317);"
                  >
                    <div class="mask full">
                      <div
                        class="fill fix_l"
                        v-if="timeLeftRotate > 0"
                        :style="{'transform': `rotate(${timeLeftRotate}deg)`}"
                      ></div>
                    </div>
                    <div class="mask half">
                      <div
                        class="fill fix"
                        :style="{'transform': `rotate(${timeRightRotate}deg)`}"
                      ></div>
                    </div>
                    <div flex="main:center cross:center" class="pv">
                      <span :class="['progress', { 'beat': isColorRed }]"> {{ timestamp }} </span>
                    </div>
                  </div>
                </div>
              </div>
              <div flex="box:mean" class="taste_lottery">
                <div
                  data-v-2717be28=""
                  flex="dir:top box:last"
                  class="taste_lottery_fsc"
                  data-v-3a594b52=""
                >
                  <div class="svga_box">
                    <div class="xodi_die">
                      <div
                        id="canvas_fsc_die"
                        class="canvas_svga"
                        style="
                          height: 95%;
                          width: 100%;
                          position: absolute;
                          top: 50%;
                          transform: translateY(-35%);
                          text-align: left;
                        "
                      >
                        <canvas
                          width="750"
                          height="470"
                          class="fsx_canvas_die"
                        >
                        </canvas>
                      </div>
                    </div>
                    <div class="xodi_wan">
                      <div
                        id="canvas_fsc_wan"
                        class="canvas_svga"
                        style="
                          height: 95%;
                          width: 100%;
                          position: absolute;
                          top: 50%;
                          transform: translateY(-35%);
                          text-align: left;
                        "
                      >
                        <canvas
                          class="fsx_canvas_wan"
                          width="750"
                          height="470"
                        ></canvas>
                      </div>
                    </div>
                    <div
                      class="animation_shaizi"
                      style="
                        opacity: 1;
                        transform: translate3d(-50%, -50%, 0px) scale(1);
                      "
                    >
                      <div
                        class="item item_6"
                        style="left: 3.9em; top: 20%"
                      ></div>
                      <div
                        class="item item_1"
                        style="left: 5.6em; top: -2%"
                      ></div>
                      <div
                        class="item item_6"
                        style="left: 6.5em; top: 30%"
                      ></div>
                    </div>
                    <div
                      class="taste_lottery_tip stop"
                      :class="{'active': game_result.betStatus == 1 }"
                      :style="{
                        'background-image': `url(${imgStopbet})`
                      }"
                    ></div>
                    <div
                      class="taste_lottery_tip start"
                      :class="{'active': game_result.betStatus == 2 }"
                      :style="{
                        'background-image': `url(${imgStartbet})`
                      }"
                    ></div>
                  </div>
                  <div
                    flex="dir:top main:center cross:center"
                    class="before_num"
                  >
                    <div>12/12/2023-0948</div>
                    <div flex="" class="list_num">
                      <div
                        v-for="(item, index) in game_result.animal"
                        :key="'animal'+ index"
                        :class="['item', item > 0 ?  `item_${item}` : 0 ]"
                      ></div>
                      <!-- <div class="item item_6"></div>
                      <div class="item item_1"></div>
                      <div class="item item_6"></div> -->
                    </div>
                  </div>
                </div>
                <div class="taste_luzhu">
                  <div class="taste_luzhu_round"></div>
                  <div class="taste_luzhu_round"></div>
                  <div class="taste_luzhu_round"></div>
                </div>
              </div>
              <div class="taste_plays">
                <div class="taste_plays_fsc">
                  <div class="taste_plays_swiper">
                    <div class="swiper-container taste_tab_container">
                      <div class="swiper-wrapper">
                        <div class="swiper-slide">
                          <div class="plays_item plays_scroll">
                            <div>
                              <div class="taste_unit">
                                <div class="taste_unit_list fsc">
                                  <div
                                    flex="main:center box:mean"
                                    class="row"
                                    style="height: 74px"
                                    v-for="(i,index) in list" :key="index"
                                  >
                                    <div
                                      flex="main:center cross:center dir:top"
                                      class="taste_unit_item"
                                      :class="{ 'animate_flash': getNumberFlash(j) }"
                                      v-for="j in i" :key="j.name"
                                    >
                                      <div
                                        :class="filterClass(j)"
                                      >
                                        {{!j.class ? j.name : ''}}
                                      </div>
                                      <div
                                        class="taste_unit_odds"
                                      >
                                        {{ j.lv }}
                                      </div>
                                      <div
                                        class="taste_unit_bets"
                                        style="opacity: 0"
                                      >
                                        <div
                                          flex="cross:center main:center"
                                          class="taste_unit_bets_num"
                                        >
                                          0
                                        </div>
                                        <div
                                          class="taste_unit_bets_img taste_unit_bets_img_0 chips_HJ_DA"
                                        ></div>
                                      </div>
                                      <div
                                        class="taste_unit_bets taste_unit_bets_multiple"
                                        style="display: none"
                                      >
                                        <div
                                          flex="cross:center main:center"
                                          class="taste_unit_bets_num"
                                        >
                                          0
                                        </div>
                                        <div
                                          class="taste_unit_bets_img taste_unit_bets_img_multiple"
                                        ></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="swiper-slide">Slide 2</div>
                        <div class="swiper-slide">Slide 3</div>
                      </div>
                      <div class="swiper-pagination"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="page-container">
        baucua -- 先做这个
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">Slide 1</div>
                <div class="swiper-slide">Slide 2</div>
                <div class="swiper-slide">Slide 3</div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
        <div class="page-footer">
            <GameFooter />
        </div>
    </div> -->
</template>
<script>
import GameFooter from "@/components/game/GameFooter.vue";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";


import imgStopbet from '@/assets/images/img-stopbet.png'
import imgStartbet from '@/assets/images/img-startbet.png'

import CanvasXodiWan from '@/assets/images/xodi_wan.png'
import CanvasXodiDie from '@/assets/images/xodi_die.png'

export default {
  components: {
    GameFooter,
  },
  data() {
    return {
      imgStopbet,
      imgStartbet,
      mySwiper: null,
      list: [
        [
          {
            class: "DA",
            name: "DA",
            lv: 1.995
          },
          {
            class: "XIAO",
            name: "XIAO",
            lv: 1.995
          },
          {
            class: "DAN",
            name: "DAN",
            lv: 1.995
          },
          {
            class: "SHUANG",
            name: "SHUANG",
            lv: 1.995
          }
        ],
        [
          {
            name: "4",
            lv: 60
          },
          {
            name: "5",
            lv: 30
          },
          {
            name: "6",
            lv: 17
          },
          {
            name: "7",
            lv: 12
          }
        ],
        [
          {
            name: "8",
            lv: 8
          },
          {
            name: "9",
            lv: 1.995
          },
          {
            name: "10",
            lv: 6
          },
          {
            name: "11",
            lv: 6
          }
        ],
        [
          {
            name: "12",
            lv: 6
          },
          {
            name: "13",
            lv: 8
          },
          {
            name: "14",
            lv: 12
          },
          {
            name: "15",
            lv: 17
          }
        ],
        [
          {
            name: "16",
            lv: 30
          },
          {
            name: "17",
            lv: 60
          }
        ],
      ],
      // 定时
      timer: null,
      timestamp: 10,
      maxTime: 10,
      timeLeftRotate: 180,
      timeRightRotate: 180,
      // 结果
      game_result: {
        betStatus: 0,
        drawStatus: 0,
        animal: [0, 0, 0],
        number: [0, 0, 0]
      },
    };
  },
  computed: {
    isColorRed() {
      return this.timestamp < 5
    }
  },
  created() {},
  mounted() {
    this.initSwiper();
    this.loopTimerOut()

    this.renderCanvasImageDie()
    this.renderCanvasImageWan()

    // this.renderCanvasOffect()
  },
  methods: {
    renderCanvasOffect() {
      const canvasEle = document.querySelector('#canvas_fsc_die canvas')
      const canvasEle2 = document.querySelector('#canvas_fsc_wan canvas')
      const ctx = canvasEle.getContext('2d')
      const ctx2 = canvasEle2.getContext('2d')

      var frame = 0
      // 定义碗的初始位置和摇晃参数
      var bowlX = canvasEle.width / 2;
      var bowlY = canvasEle.height / 2;
      var shakeAmount = 10; // 摇晃幅度
      var shakeSpeed = 0.1; // 摇晃速度

      var image = new Image();
      var image2 = new Image();
      image.src = CanvasXodiDie;
      image2.src = CanvasXodiWan;

      // 绘制碗的函数
      function drawBowl(x, y, angle, bowlImg) {
        // 保存画布状态
        ctx.save();

        // 移到碗的中心点
        ctx.translate(x, y);

        // 旋转画布
        ctx.rotate(angle);

        // 绘制碗
        ctx.drawImage(bowlImg, -bowlImg.width / 2, -bowlImg.height / 2);

        // 恢复画布状态
        ctx.restore();
      }

      function draw() {
        // 清空画布
        ctx.clearRect(0, 0, canvasEle.width, canvasEle.height);
        ctx2.clearRect(0, 0, canvasEle2.width, canvasEle2.height);
        
        // 计算碗的摇晃角度和偏移量
        var shakeAngle = Math.sin(Date.now() * shakeSpeed * frame) * shakeAmount;
        var shakeOffsetX = Math.cos(Date.now() * shakeSpeed * frame) * shakeAmount / 2;
        var shakeOffsetY = Math.sin(Date.now() * shakeSpeed * frame) * shakeAmount / 2;

        // 绘制碗，加上摇晃角度和偏移量
        drawBowl(bowlX + shakeOffsetX, bowlY + shakeOffsetY, shakeAngle, image);

        // 循环绘制动画效果
        requestAnimationFrame(draw);

        // // 清空 Canvas
        // ctx.clearRect(0, 0, canvasEle.width, canvasEle.height);
        // ctx2.clearRect(0, 0, canvasEle2.width, canvasEle2.height);

        // // 更新变量
        // // var offsetx = Math.sin(Date.now() * swaySpeed) * swayAmount;
        // // const offsetx = Math.sin(frame * speedX) * 10;
        // // const offsety = 1;
        // // 计算左右摇晃的偏移量
        // var offsetx = Math.sin(frame * 1.5) * 10;
        // var offsety = 1;
        
        // // 绘制图片，并应用偏移量
        // // ctx.translate((canvasEle.width - image.width) / 2, (canvasEle.height - image.height) / 2)
        // ctx.drawImage(image, offsetx, offsety, image.width, image.height)

        // // ctx2.translate(((canvasEle2.width - image2.width) / 2), ((canvasEle2.height - image2.height) / 2))
        // // ctx2.drawImage(image2, 0, 0, img_width - 40, img_height + 10)
        // ctx2.drawImage(image2, offsetx, offsety, image2.width, image2.height)

        // // 增加当前帧数
        frame++;
      }

      // 在图片加载完成后调用动画循环函数开始动画
      image.onload = function() {
        draw()
        // setInterval(() => {
        //   animate();
        // }, 50)
      };
      // image2.onload = function() {
      //   animate();
      // };
    },
    renderCanvasImageDie() {
      const canvasEle = document.querySelector('#canvas_fsc_die canvas')
      const ctx = canvasEle.getContext('2d')

      const myImg = new Image()
      myImg.src = CanvasXodiDie

      const img_width = 300
      const img_height = 220
      myImg.onload = () => {
        ctx.translate((canvasEle.width - img_width) / 2, (canvasEle.height - img_height) / 2 + 30)
        ctx.drawImage(myImg, 0, 0, img_width, img_height)
      }
    },
    renderCanvasImageWan() {
      const canvasEle = document.querySelector('#canvas_fsc_wan canvas')
      const ctx = canvasEle.getContext('2d')

      const myImg = new Image()
      myImg.src = CanvasXodiWan

      const img_width = 200
      const img_height = 200

      // 开的位置还是收的位置
      const siwtch_flag = 0

      myImg.onload = () => {
        // 开
        if (siwtch_flag == 1) {
          ctx.translate((canvasEle.width - img_width) - 80, img_height / 4)
          ctx.drawImage(myImg, 0, 0, img_width, img_height)
        } else {
          ctx.translate(((canvasEle.width - img_width) / 2) - 30, ((canvasEle.height - img_height) / 2) - 30)
          ctx.drawImage(myImg, 0, 0, 300 - 40, 220 + 10)
        }
      }
    },
    resetAction() {
      this.timestamp = 10
      this.timeLeftRotate = 180
      this.timeRightRotate = 180
      // 结果
      this.game_result = {
        betStatus: 0,
        drawStatus: 0,
        animal: [0, 0, 0],
        number: [0, 0, 0]
      }
      this.loopTimerOut()
    },
    loopTimerOut() {
      this.timer = setInterval(() => {
        this.timestamp--
        const rotate_num = 180 / (this.maxTime / 2)
        if (this.timestamp >= this.maxTime / 2) {
          this.timeLeftRotate -= rotate_num
        } else {
          this.timeRightRotate -= rotate_num
        }
        if (this.timestamp == 0) {
          clearInterval(this.timer)
          this.getGameResult()
        }
      }, 1000);
    },
    getGameResult() {
      for (let i = 0; i < 3; i++) {
        setTimeout(() => {
          const num = this.getRandomInt(1, 6)
          this.$set(this.game_result.animal, i, num)
        }, 500 * i)
      }
      this.game_result.drawStatus = 1
      this.game_result.number = this.getArrayRandom(3, 4, 11)

      // 暂时的动画
      this.game_result.betStatus = 1
      setTimeout(() => {
        this.game_result.betStatus = 0
      }, 2000)
      setTimeout(() => {
        this.game_result.betStatus = 2
        setTimeout(() => {
          this.game_result.betStatus = 0
        }, 2000)
      }, 5000)
      console.log(this.game_result, 'this.game_result--')

      setTimeout(() => {
        this.resetAction()
      }, 10000)
    },
    // 获取多组随机数
    getArrayRandom(len, min, max) {
      const result = []
      for (let i = 0; i < len; i++) {
        const num = this.getRandomInt(min, max)
        result.push(num)
      }
      return result
    },
    // 获取随机数
    getRandomInt(min, max) {
      // 生成随机小数
      var randomFloat = Math.random();
      // 根据最大值、最小值和随机小数计算随机整数
      var randomInt = Math.floor(min + (max - min) * randomFloat);
      return randomInt;
    },
    // 高亮数字
    getNumberFlash(j) {
      return this.game_result.number.some(ele => ele == j.name)
    },
    filterClass(item) {
      let className = "";
      if(item.class) {
        return className+= `taste_unit_img fsc vi HZ taste_unit_img_${item.class}`;
      } else {
        return className = "taste_unit_text";
      }
    },
    initSwiper() {
      this.mySwiper = new Swiper(".swiper-container", {
        // slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    },
  },
};
</script>

<style lang="less" scoped>
@import url("@/assets/less/baucua.less");
</style>
