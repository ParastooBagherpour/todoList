<template>
  <div
    class="form d-flex flex-column justify-content-center align-items-center"
  >
    <TodoTitr></TodoTitr>
    <TodoList></TodoList>
    <NewTodo></NewTodo>
    <ClearCompletedTasks></ClearCompletedTasks>
  </div>
</template>

<script>
// @ is an alias to /src
import TodoTitr from "./TodoTitr.vue";
import TodoList from "./TodoList.vue";
import NewTodo from "./NewTodo.vue";
import ClearCompletedTasks from "./ClearCompletedTasks.vue";
import { reactive } from "vue";
export default {
  name: "TodoListContainer",
  components: {
    TodoTitr,
    TodoList,
    NewTodo,
    ClearCompletedTasks,
  },
  setup() {
    const state = reactive({
      date: "",
    });

    return {
      state,
    };
  },
};
</script>
<style>
.form {
  position: relative;
  top: -28px;
  width: 100%;
  background: #636e72;
  border: 4px solid black;
  border-radius: 24px;
}
</style>
