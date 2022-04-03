<template>
  <button id="clear" class="my-3" @click="deleteCompletedTasks()">
    <i class="fas fa-paw"></i>
    حذف تمام تسک های انجام شده
  </button>
</template>

<script>
// @ is an alias to /src
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  name: "ClearCompletedTasks",
  components: {},
  setup() {
    const store = useStore();
    const list = computed(() => store.state.todoList);
    function deleteCompletedTasks() {
      let len = list.value.length;
      for (let i = 0; i < len; i++) {
        if (list.value[i].checked === true) {
          store.commit("deleteTodo", i);
        }
      }
    }
    return {
      deleteCompletedTasks,
    };
  },
};
</script>
<style>
#clear {
  white-space: nowrap;
  height: 35px;
  width: 60%;
  background: #44bd32;
  border-radius: 24px;
  border: 1px solid #44bd32;
  box-shadow: 0px 0px 12px #44bd32;
  font-size: 16px;
  font-weight: 700;
  text-shadow: 0px 0px 12px #4cd137;
}
@media only screen and (max-width: 550px) {
  #clear {
    width: 80%;
  }
}
</style>
