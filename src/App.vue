<template>
  <div class="d-flex justify-content-center align-items-center h-100">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>
<style>
* {
  margin: 0px;
  padding: 0px;
  border: 0px;
}
html {
  height: 100%;
}
body {
  font-family: "Karla", sans-serif, tahoma;
  background-image: linear-gradient(#273c75, #8e44ad);
  overflow: hidden;
  height: 100%;
}
</style>
