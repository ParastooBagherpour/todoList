<template>
  <div class="todo-list d-flex flex-column align-items-center p-0">
    <Todo></Todo>
  </div>
</template>

<script>
// @ is an alias to /src
import Todo from "./SingleTodo.vue";
export default {
  name: "TodoList",
  components: {
    Todo,
  },
};
</script>
<style>
.todo-list {
  width: 85%;
  height: 170px;
  border: 2px solid black;
  border-radius: 4px;
  box-shadow: 0px 0px 8px;
  overflow-y: scroll;
  overflow-x: hidden;
  background: #f5f6fa;
}
.todo-list::-webkit-scrollbar {
  width: 10px;
}
.todo-list::-webkit-scrollbar-track {
  box-shadow: inset 0px 0px 12px black;
}
.todo-list::-webkit-scrollbar-thumb {
  background: rgba(47, 54, 64, 0.5);
}
@media only screen and (max-width: 550px) {
  .todo-list {
    height: 200px;
  }
}
</style>
