<template>
  <div
    class="main-container d-flex flex-column justify-content-center align-items-center"
  >
    <Cat></Cat>
    <EditTodo></EditTodo>
  </div>
</template>

<script>
// @ is an alias to /src
import Cat from "@/components/cat/Cat.vue";
import EditTodo from "@/components/editTodo/EditTodo.vue";
export default {
  name: "Edit",
  components: {
    EditTodo,
    Cat,
  },
};
</script>
<style>
.main-container {
  width: 500px;
  height: auto;
}
@media only screen and (max-width: 550px) {
  .main-container {
    width: 350px;
  }
}
</style>
