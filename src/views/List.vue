<template>
  <div
    class="main-container d-flex flex-column justify-content-center align-items-center"
  >
    <Cat></Cat>
    <TodoListContainer></TodoListContainer>
  </div>
</template>

<script>
// @ is an alias to /src
import Cat from "@/components/cat/Cat.vue";
import TodoListContainer from "@/components/todolistContainer/TodoListContainer.vue";

export default {
  name: "List",
  components: {
    TodoListContainer,
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
