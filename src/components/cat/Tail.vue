<template>
  <div class="tail" id="cattail">
    <svg viewBox="0 0 200 200">
      <path
        fill="#212121"
        stroke="black"
        stroke-width="4px"
        d="M 10 200
         C 10 200,180 110,100 20,
         C 100 20,80 0, 80 30,
         C 80 30, 110 80, 70 120,
         C 70 120, 40 150, 20 160,
         C 20 160, 10 180, 10 200"
      />
    </svg>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Tail",
  components: {},
};
</script>
<style scoped>
.tail {
  position: absolute;
  top: 25%;
  left: 100%;
  transform: translate(-50%, -50%);
  width: 250px;
  animation: movetail ease-in-out 3s infinite;
  animation-play-state: paused;
}
</style>
