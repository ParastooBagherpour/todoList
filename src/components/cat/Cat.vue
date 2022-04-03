<template>
  <img src="../../assets/cat.png" class="cat" />
</template>

<script>
// @ is an alias to /src
//import HeadFingers from "./HeadFingers.vue";

export default {
  name: "Cat",
  components: {},
};
</script>
<style>
.cat {
  height: 220px;
  width: 280px;
  z-index: 2;
}
@media only screen and (max-width: 550px) {
  .cat {
    width: 230px;
    height: 190px;
  }
}
</style>
