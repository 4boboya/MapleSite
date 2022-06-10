<template>
  <header>
    <div class="pole">
      <div class="board board-right board-one">最新消息</div>
      <div class="board board-left board-two">楓之攻略</div>
      <div class="board board-right board-three">楓之工具</div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@mixin board-style($rotate, $top) {
  transform: rotate($rotate);
  top: $top;
}
header {
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url(https://i.imgur.com/jdePJ9j.gif);
  background-size: cover;
  background-position: bottom right;
}
.pole {
  position: absolute;
  height: 80vh;
  width: 25px;
  background-color: #bb5c10;
  margin-inline: auto;
  bottom: 0;
  right: 25%;
}
.board {
  position: absolute;
  width: 210px;
  height: 50px;
  background-color: #bb5c10;
  color: #dde3e4;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;

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