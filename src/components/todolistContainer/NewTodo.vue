<template>
  <div
    class="container d-flex justify-content-around align-items-center mt-2 p-0 flex-wrap flex-row-reverse"
  >
    <input
      type="text"
      maxlength="18"
      id="todo"
      class="p-2"
      v-model.lazy.trim="newTodoText"
    />
    <DatePicker v-model="state.date" id="date" />
    <button id="add" @click="add"><i class="fas fa-plus"> </i></button>
  </div>
</template>

<script>
// @ is an alias to /src
import DatePicker from "../DatePicker/DatePicker.vue";
import { reactive, ref } from "vue";
import { useStore } from "vuex";
export default {
  name: "NewTodo",
  components: { DatePicker },
  setup() {
    const store = useStore();
    let state = reactive({
      date: "",
    });
    let today = new Date().toLocaleDateString("fa-IR");
    today = today.replace(/([۰-۹])/g, (token) =>
      String.fromCharCode(token.charCodeAt(0) - 1728)
    );
    state.date = today;
    let newTodoText = ref("");
    function add() {
      if (newTodoText.value != "" && newTodoText.value != null) {
        store.commit("addNewTodo", {
          title: newTodoText.value,
          date: state.date,
          checked: false,
        });
      }
      else{
        document.getElementById("todo").style.border = '4px solid red';
      }
    }
    return {
      state,
      newTodoText,
      add,
    };
  },
};
</script>
<style scoped>
#todo {
  width: 60%;
  height: 40px;
  font-size: 0.9rem;
  border-radius: 24px;
  border: 2px solid black;
  box-shadow: 0px 0px 4px;
  text-align: right;
}
#add {
  color: white;
  width: 40px;
  height: 40px;
  background: black;
  border-radius: 50%;
  border: 2px solid black;
}
.container {
  width: 85%;
}
@media only screen and (max-width: 550px) {
  .container {
    justify-content: flex-start !important;
  }
  #todo {
    width: 90%;
    margin-bottom: 8px;
  }
  #date {
    width: 100px;
    margin-left: 8px;
  }
}
</style>
