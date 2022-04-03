import { createStore } from "vuex";

export default createStore({
  state: {
    todoList: [
      {
        title: "خواندن انگلیسی",
        date: "1400/12/12",
        checked: true,
        description: "",
      },
      {
        title: "تکمیل رزومه",
        date: "1400/12/13",
        checked: false,
        description: "",
      },
      {
        title: " مطالعه داکیومنت های ویو",
        date: "1400/12/14",
        checked: false,
        description: "",
      },
      {
        title: "خرید لباس عید",
        date: "1400/12/16",
        checked: true,
        description: "",
      },
      {
        title: "خانه تکانی",
        date: "1400/12/19",
        checked: false,
        description: "",
      },
      {
        title: " تمرین رایتینگ",
        date: "1400/12/21",
        checked: true,
        description: "",
      },
    ],
  },
  getters: {},
  mutations: {
    addNewTodo(state, todo) {
      state.todoList.push(todo);
    },
    deleteTodo(state, index) {
      state.todoList.splice(index, 1);
    },
    checkTodo(state, index) {
      state.todoList[index].checked = !state.todoList[index].checked;
    },
    editTodo(state, obj){
      state.todoList[obj.i] = obj.editedTodo
    }
  },
  actions: {},
  modules: {},
});
