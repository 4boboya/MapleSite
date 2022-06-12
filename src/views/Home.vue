<template>
  <div class="home">
    <div class="pole">
      <div class="board-outside">
        <div class="board board-right board-one">最新消息</div>
      </div>
      <div class="board-outside">
        <div class="board board-left board-two" @click="toPage('/raiders')">楓葉攻略</div>
      </div>
      <div class="board-outside">
        <div class="board board-right board-three">楓葉工具</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/styles/_common.scss';
@mixin board-style($rotate, $top) {
  transform: rotate($rotate);
  top: $top;
}
@include phone {
  .pole {
    right: 50% !important;
  }
}
@keyframes hover-board {
  0% {
    transform: rotateZ(0deg);
  }
  30% {
    transform: rotateZ(1deg);
  }
  70% {
    transform: rotateZ(-1deg);
  }
  100% {
    transform: rotateZ(0deg);
  }
}
.home {
  position: relative;
  width: 100%;
  height: 100vh;
}
.pole {
  position: absolute;
  height: 60vh;
  width: 25px;
  background-image: url("../assets/pole.png");
  background-size:100% 100%;
  margin-inline: auto;
  bottom: 0;
  right: 25%;
  transition: all 0.2s linear;
  box-shadow: 3px 0px 2px #00000050;
}
.board-outside {
  filter: drop-shadow(-1px 6px 3px #00000050);

  &:hover {
    filter: drop-shadow(-1px 6px 3px #00000080);
    text-shadow: 0 0 5px #000;
    animation: hover-board 0.5s linear;
  }
}
.board {
  position: absolute;
  width: 210px;
  height: 50px;
  background-image: url("../assets/board.png");
  color: #dde3e4;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    width: 12px;
    height: 12px;
    border-radius: 12px;
    box-shadow: 15px 12px 0 #fff, 15px -12px 0 #fff;
    background-color: transparent;
  }
}
.board-right {
  clip-path: polygon(85% 0, 100% 50%, 85% 100%, 0 100%, 0 0);
  left: -25px;
  &::after {
    left: 10px;
  }
}
.board-left {
  clip-path: polygon(0 50%, 15% 0, 100% 0, 100% 100%, 15% 100%);
  right: -25px;
  &::after {
    right: 45px;
  }
}
.board-one {
  @include board-style(-5deg, 20px);
}
.board-two {
  @include board-style(8deg, 95px);
}
.board-three {
  @include board-style(4deg, 170px);
}
</style>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const router = useRouter()

    const toPage = (link: string) => {
      router.push(link)
    }
    
    return { toPage }
  },
})
</script>
