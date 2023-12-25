<template>
  <div class="wrap-router theme-blue">
    <div class="game-container router-view">
      <div class="list-container">
        <div class="router-view">
          <div
            class="lay-sticky-container game_taste fsc"
            style="padding-bottom: 140px"
          >
            <div class="scroll-part">
              <div class="sticky-placeholder" style="height: 0px"></div>
              <div class="taste_play_zone">
                <div class="taste_play_balance">
                  <div>
                    <span>0</span>
                  </div>
                </div>
                <div
                  class="taste_play_countdown"
                  v-if="game_result.drawStatus == 0"
                >
                  <div
                    :class="[
                      'v_circle fsc v_circle_show',
                      { v_circle_red: isColorRed },
                    ]"
                    style="transform: scale(1.00317)"
                  >
                    <div class="mask full">
                      <div
                        class="fill fix_l"
                        v-if="timeLeftRotate > 0"
                        :style="{ transform: `rotate(${timeLeftRotate}deg)` }"
                      ></div>
                    </div>
                    <div class="mask half">
                      <div
                        class="fill fix"
                        :style="{ transform: `rotate(${timeRightRotate}deg)` }"
                      ></div>
                    </div>
                    <div flex="main:center cross:center" class="pv">
                      <span :class="['progress', { beat: isColorRed }]">
                        {{ timestamp }}
                      </span>
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
                        <canvas width="750" height="470" class="fsx_canvas_die">
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
                      :class="{ active: game_result.betStatus == 1 }"
                      :style="{
                        'background-image': `url(${imgStopbet})`,
                      }"
                    ></div>
                    <div
                      class="taste_lottery_tip start"
                      :class="{ active: game_result.betStatus == 2 }"
                      :style="{
                        'background-image': `url(${imgStartbet})`,
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
                        :key="'animal' + index"
                        :class="['item', item > 0 ? `item_${item}` : 0]"
                      ></div>
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
                        <div
                          class="swiper-slide"
                          v-for="item in gameBaseInfo"
                          :key="item.type"
                        >
                          <div class="plays_item plays_scroll">
                            <div>
                              <div class="taste_unit">
                                <div class="taste_unit_list fsc">
                                  <div
                                    flex="main:center box:mean"
                                    class="row"
                                    :style="{'height': item.height }"
                                    v-for="(i, index) in item.data"
                                    :key="index"
                                  >
                                    <div
                                      flex="main:center cross:center dir:top"
                                      class="taste_unit_item"
                                      :class="{
                                        'animate_flash': getNumberFlash(j),
                                      }"
                                      v-for="j in i"
                                      :key="j.name"
                                    >
                                      <div
                                        v-if="item.type == 'index1'"
                                        :class="filterClass(j)"
                                      >
                                        {{ !j.class ? j.name : "" }}
                                      </div>

                                      <div
                                        v-if="item.type == 'index2'"
                                        class="taste_unit_img fsc vi RX"
                                        :class="'taste_unit_img_' + j.name"
                                      ></div>

                                      <div v-if="item.type == 'index3'" flex="">
                                        <div
                                          class="taste_unit_img taste_unit_imgs fsc vi"
                                          :class="'taste_unit_img_' + j.name[0]"
                                        ></div>
                                        <div
                                          class="taste_unit_img taste_unit_imgs fsc vi"
                                          :class="'taste_unit_img_' + j.name[2]"
                                        ></div>
                                      </div>

                                      <div v-if="item.type == 'index4'" flex="">
                                        <div
                                          class="taste_unit_img taste_unit_imgs fsc vi"
                                          :class="'taste_unit_img_' + j.name[0]"
                                        ></div>
                                        <div
                                          class="taste_unit_img taste_unit_imgs fsc vi"
                                          :class="'taste_unit_img_' + j.name[2]"
                                        ></div>
                                      </div>

                                      <div
                                        v-if="item.type == 'index5'"
                                        class="taste_unit_img fsc vi WS"
                                        :class="'taste_unit_img_' + j.name[2]"
                                      ></div>
                                      <div v-if="item.type == 'index5'" class="taste_unit_more">
                                        <div
                                          class="taste_unit_more_item"
                                          :class="
                                            'taste_unit_more_item_' + j.name[0]
                                          "
                                        ></div>
                                        <div
                                          class="taste_unit_more_item"
                                          :class="
                                            'taste_unit_more_item_' + j.name[0]
                                          "
                                        ></div>
                                        <div
                                          class="taste_unit_more_item"
                                          :class="
                                            'taste_unit_more_item_' + j.name[0]
                                          "
                                        ></div>
                                      </div>

                                      <div
                                        class="taste_unit_odds"
                                        :class="{'left_top': item.type != 'index1'}"
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
                        <div class="swiper-slide">
                          <div class="plays_item game_xyx_half">
                            <div>
                              <div
                                class="taste_unit game_xyx_half_item"
                                style="height: 110px"
                                v-for="(i, index) in list6"
                                :key="index"
                              >
                                <div
                                  class="taste_unit_list fsc taste_unit_half"
                                >
                                  <div
                                    flex="main:center cross:center"
                                    class="taste_unit_name"
                                  >
                                    <div>
                                      {{ i.title }}
                                    </div>
                                  </div>
                                  <div
                                    flex="main:center box:mean"
                                    class="row"
                                    v-if="index < 3"
                                  >
                                    <div
                                      flex="main:center cross:center dir:top"
                                      class="taste_unit_item"
                                      v-for="j in i.list"
                                      :key="j.name"
                                    >
                                      <div
                                        class="taste_unit_img fsc vi XS"
                                        :class="'taste_unit_img_' + j.name"
                                      ></div>
                                      <!---->
                                      <div class="taste_unit_odds">
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
                                          class="taste_unit_bets_img taste_unit_bets_img_0 chips_ASS1_RED"
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
                                  <div flex="main:center box:mean" class="row" v-if="index == 3">
                                    <div
                                      flex="main:center cross:center dir:top"
                                      class="taste_unit_item"
                                      
                                    >
                                      <div flex="">
                                        <div
                                          class="taste_unit_img taste_unit_imgs taste_unit_img_RED fsc vi"
                                          :class="'taste_unit_img_' + j.name"
                                          v-for="j in i.list"
                                          :key="j.name"
                                        ></div>
                                      </div>
                                      <!---->
                                      <div
                                        class="taste_unit_odds"
                                      >
                                        {{ i.list[0].lv }}
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
                                          class="taste_unit_bets_img taste_unit_bets_img_0 chips_ASSALL_CH3"
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
      <!-- 底部 -->
      <div class="bet-input-panel bet_panel_taste" style="height: 140px">
        <div class="bet-info bet_taste fsc">
          <div flex="main:center cross:top" class="plays_item_dots">

            <div
              class="plays_item_dot"
              v-for="(item, index) in dotLen"
              :key="index"
              :class="{'active': index == slideIndex }"
            ></div>
          </div>
          <div
            class="bet_taste_chips"
            flex="main:justify box:justify cross:center"
          >
            <div flex="main:right cross:center" class="taste_chips_prev" @click="handleChipClick('prev')">
              <div class="icon_prev"></div>
            </div>
            <div flex="box:last cross:center">
              <div class="taste_chips_swiper_box" ref="chips_container">
                <div class="taste_chips_swiper">
                  <div
                    :ref="'chips_swiper' + index"
                    class="taste_chips_swiper_item taste_chip_active"
                    :class="{ 'taste_chip_active': chipIndex == index }"
                    v-for="(i, index) in betNumberList"
                    :key="i.name"
                    :style="{ 'left': index * chipEm + 'em' }"
                  >
                    <div flex="main:center cross:center" class="taste_chip">
                      <div
                        flex="main:center cross:center"
                        class="taste_chip_base"
                        :class="'taste_chip_' + i.name"
                      >
                        <div class="item_chip_num">
                          <span>{{ i.name }}K</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    id="canvas_xodi_chip"
                    class="canvas_svga"
                    :style="{
                      'width': chipEm - 0.2 + 'em',
                      'height': chipEm - 0.2 + 'em',
                      'position': 'absolute',
                      'top': '0.1em',
                      'left': 0.1 + chipEm * chipIndex + 'em',
                      'text-align': 'left'
                    }"
                  >
                    <canvas
                      style="
                        background-color: transparent;
                        transform: matrix(
                          0.386364,
                          0,
                          0,
                          0.386364,
                          -40.5,
                          -40.5
                        );
                      "
                    ></canvas>
                  </div>
                </div>
              </div>
              <div
                class="taste_chips_swiper_item taste_chips_swiper_item_setting"
              >
                <div flex="main:center cross:center" class="taste_chip">
                  <div class="taste_chip_base taste_chip_setting"></div>
                </div>
              </div>
            </div>
            <div flex="main:left cross:center" class="taste_chips_next" @click="handleChipClick('next')">
              <div class="icon_next"></div>
            </div>
          </div>
          <div
            class="bet_taste_info"
            flex="main:justify box:justify cross:center"
          >
            <button class="bet_taste_reset">Cài lại</button>
            <div class="bet_taste_text">
              <div flex="main:center cross:center" class="bet_taste_num vi">
                <span class="bet_taste_text__common">Đã chọn</span
                ><span class="bet_taste_text__protrude">0</span
                ><span class="bet_taste_text__common">Lô</span>
              </div>
              <div flex="cross:center" class="bet_taste_money">
                <span flex-box="0" class="bet_taste_text__protrude"
                  >Số tiền</span
                >
                <div flex-box="0" class="bet_taste_line"></div>
                <div flex-box="8" class="bet_taste_money_bet">0</div>
              </div>
            </div>
            <button class="bet_taste_submit">Đặt cược</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>
<script>
import GameFooter from "@/components/game/GameFooter.vue";

import Swiper from "swiper";
import "swiper/swiper-bundle.css";

import imgStopbet from "@/assets/images/img-stopbet.png";
import imgStartbet from "@/assets/images/img-startbet.png";

import CanvasXodiWan from "@/assets/images/xodi_wan.png";
import CanvasXodiDie from "@/assets/images/xodi_die.png";


import CanvasXodiChip from "@/assets/images/canvas_xodi_chip.png";

import dataInfo from './data'

export default {
  components: {
    GameFooter
  },
  data() {
    return {
      imgStopbet,
      imgStartbet,
      mySwiper: null,
      ...dataInfo,
      // 定时
      timer: null,
      timestamp: 50,
      maxTime: 50,
      timeLeftRotate: 180,
      timeRightRotate: 180,
      // 结果
      game_result: {
        betStatus: 0,
        drawStatus: 0,
        animal: [0, 0, 0],
        number: [0, 0, 0],
      },
      // swiper
      swiperObj: null,
      slideIndex: 0,
      // chips
      chipEm: 3.93,
      chipIndex: 0
    };
  },
  computed: {
    isColorRed() {
      return this.timestamp < 5;
    },
    dotLen() {
      return [].concat(this.gameBaseInfo).concat([this.list6]).length
    }
  },
  created() {},
  mounted() {
    this.initSwiper();
    this.loopTimerOut();

    // this.renderCanvasImageDie()
    // this.renderCanvasImageWan()

    this.renderCanvasOffect()

    this.renderCanvasChipRun()
  },
  methods: {
    handleChipClick(type) {
      if (type == 'prev') {
        if (this.chipIndex > 0) {
          this.chipIndex--
        }
      }
      if (type == 'next') {
        if (this.chipIndex < this.betNumberList.length - 1) {
          this.chipIndex++
        }
      }

      // console.dir(this.$refs.chips_container)
      // console.dir(this.$refs['chips_swiper' + this.chipIndex])
      const scrollWidth = this.$refs.chips_container.scrollWidth
      const chipsSwiperItem = this.$refs['chips_swiper' + this.chipIndex][0]
      
      const itemLeft = chipsSwiperItem.offsetLeft
      const itemWidth = chipsSwiperItem.offsetLeft
      if (type == 'prev') {
        this.$refs.chips_container.scrollLeft = itemLeft
      } else {
        if (itemLeft + itemWidth >= scrollWidth) {
          this.$refs.chips_container.scrollLeft = itemLeft
        }
      }
    },
    renderCanvasChipRun() {
      // 获取 Canvas 对象和上下文
      var canvas_body = document.querySelector('#canvas_xodi_chip')

      var canvas = document.querySelector('#canvas_xodi_chip canvas');
      var ctx = canvas.getContext('2d');

      // 加载图片
      var img = new Image();
      img.src = CanvasXodiChip;

      const img_width = canvas_body.offsetWidth
      const img_height = canvas_body.offsetHeight
      canvas.width = img_width
      canvas.height = img_width

      // 定义图片的初始位置和旋转角度
      var imgX = img_width / 2;
      var imgY = img_height / 2;
      var rotationAngle = 0; // 初始角度为 0
      var clockwise = true; // 初始方向为顺时针

      // 绘制图片的函数
      function drawImage() {
        // 清空画布
        ctx.clearRect(0, 0, img_width, img_height);

        // 保存画布状态
        ctx.save();

        // 将绘制原点移动到图片的中心点
        ctx.translate(imgX, imgY);

        // 根据方向确定旋转角度
        if (clockwise) {
          rotationAngle += 1; // 顺时针旋转
        } else {
          rotationAngle -= 1; // 逆时针旋转
        }

        // 旋转画布
        ctx.rotate(rotationAngle * Math.PI / 180);

        // 绘制图片
        ctx.drawImage(img, -img_width / 2, -img_height / 2, img_width, img_height);

        // 恢复画布状态
        ctx.restore();
      }
      // 开始绘制动画
      function draw() {
        // 改变旋转方向
        if (rotationAngle % 360 === 0) {
          clockwise = !clockwise; // 到达每360度时改变方向
        }
        
        // 绘制图片
        drawImage();

        // 循环绘制动画效果
        requestAnimationFrame(draw);
      }

      // 加载图片后开始绘制
      img.onload = function() {
        draw();
      };
    },
    renderCanvasOffect() {
      const canvasEle = document.querySelector('#canvas_fsc_die canvas')
      const canvasEle2 = document.querySelector('#canvas_fsc_wan canvas')
      const ctx = canvasEle.getContext('2d')
      const ctx2 = canvasEle2.getContext('2d')

      var frame = 0
      var offset = 0

      var image = new Image();
      var image2 = new Image();
      image.src = CanvasXodiDie;
      image2.src = CanvasXodiWan;

      function draw() {
        // 清空画布
        ctx.clearRect(0, 0, canvasEle.width, canvasEle.height);
        ctx2.clearRect(0, 0, canvasEle2.width, canvasEle2.height);

        // 循环绘制动画效果
        // requestAnimationFrame(draw);

        // 更新变量
        // var offsetx = Math.sin(Date.now() * swaySpeed) * swayAmount;
        // const offsetx = Math.sin(frame * speedX) * 10;
        // const offsety = 1;
        // 计算左右摇晃的偏移量
        offset = Math.sin(frame * 1) * 10;
        
        // // 绘制图片，并应用偏移量
        // ctx.translate((canvasEle.width - image.width) / 2, (canvasEle.height - image.height) / 2)
        ctx.drawImage(image, offset, 0, image.width, image.height)

        // // ctx2.translate(((canvasEle2.width - image2.width) / 2), ((canvasEle2.height - image2.height) / 2))
        // // ctx2.drawImage(image2, 0, 0, img_width - 40, img_height + 10)
        ctx2.drawImage(image2, offset, 0, image2.width, image2.height)

        // // 增加当前帧数
        frame++;

        requestAnimationFrame(draw);
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
      const canvasEle = document.querySelector("#canvas_fsc_die canvas");
      const ctx = canvasEle.getContext("2d");

      const myImg = new Image();
      myImg.src = CanvasXodiDie;

      const img_width = 300;
      const img_height = 220;
      myImg.onload = () => {
        ctx.translate(
          (canvasEle.width - img_width) / 2,
          (canvasEle.height - img_height) / 2 + 30
        );
        ctx.drawImage(myImg, 0, 0, img_width, img_height);
      };
    },
    renderCanvasImageWan() {
      const canvasEle = document.querySelector("#canvas_fsc_wan canvas");
      const ctx = canvasEle.getContext("2d");

      const myImg = new Image();
      myImg.src = CanvasXodiWan;

      const img_width = 200;
      const img_height = 200;

      // 开的位置还是收的位置
      const siwtch_flag = 1;

      myImg.onload = () => {
        // 开
        if (siwtch_flag == 1) {
          ctx.translate(canvasEle.width - img_width - 80, img_height / 4);
          ctx.drawImage(myImg, 0, 0, img_width, img_height);
        } else {
          ctx.translate(
            (canvasEle.width - img_width) / 2 - 30,
            (canvasEle.height - img_height) / 2 - 30
          );
          ctx.drawImage(myImg, 0, 0, 300 - 40, 220 + 10);
        }
      };
    },
    resetAction() {
      this.timestamp = 50;
      this.timeLeftRotate = 180;
      this.timeRightRotate = 180;
      // 结果
      this.game_result = {
        betStatus: 0,
        drawStatus: 0,
        animal: [0, 0, 0],
        number: [0, 0, 0],
      };
      this.loopTimerOut();
    },
    loopTimerOut() {
      this.timer = setInterval(() => {
        this.timestamp--;
        const rotate_num = 180 / (this.maxTime / 2);
        if (this.timestamp >= this.maxTime / 2) {
          this.timeLeftRotate -= rotate_num;
        } else {
          this.timeRightRotate -= rotate_num;
        }
        if (this.timestamp == 0) {
          clearInterval(this.timer);
          this.getGameResult();
        }
      }, 1000);
    },
    getGameResult() {
      for (let i = 0; i < 3; i++) {
        setTimeout(() => {
          const num = this.getRandomInt(1, 6);
          this.$set(this.game_result.animal, i, num);
        }, 500 * i);
      }
      this.game_result.drawStatus = 1;
      this.game_result.number = this.getArrayRandom(3, 4, 11);

      // 暂时的动画
      this.game_result.betStatus = 1;
      setTimeout(() => {
        this.game_result.betStatus = 0;
      }, 2000);
      setTimeout(() => {
        this.game_result.betStatus = 2;
        setTimeout(() => {
          this.game_result.betStatus = 0;
        }, 2000);
      }, 5000);
      console.log(this.game_result, "this.game_result--");

      setTimeout(() => {
        this.resetAction();
      }, 10000);
    },
    // 获取多组随机数
    getArrayRandom(len, min, max) {
      const result = [];
      for (let i = 0; i < len; i++) {
        const num = this.getRandomInt(min, max);
        result.push(num);
      }
      return result;
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
      return this.game_result.number.some((ele) => ele == j.name);
    },
    filterClass(item) {
      let className = "";
      if (item.class) {
        return (className += `taste_unit_img fsc vi HZ taste_unit_img_${item.class}`);
      } else {
        return (className = "taste_unit_text");
      }
    },
    initSwiper() {
      const _this = this
      this.mySwiper = new Swiper(".swiper-container", {
        // slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        on: {
          slideChangeTransitionStart: function() {
            console.log(this.activeIndex, 'index---')
            _this.slideIndex = this.activeIndex
          }
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
@import url("@/assets/less/baucua.less");
</style>
