<template>
  <div class="py-5 form d-flex flex-column align-items-center px-5">
    <div class="d-flex align-items-center w-100 justify-content-center">
      <input type="text" class="field p-2" v-model.lazy.trim="item.title" />
      <p class="m-0" dir="rtl">عنوان:</p>
    </div>
    <div class="width-attr align-self-start d-flex justify-content-center">
      <em dir="rtl" class="pt-1">{{ error }}</em>
    </div>
    <div class="d-flex align-items-center w-100 justify-content-center mt-3">
      <DatePicker class="width-attr" v-model="item.date" id="edit-date" />
      <p class="m-0" dir="rtl">زمان اتمام:</p>
    </div>
    <div class="d-flex w-100 justify-content-center mt-3">
      <textarea
        v-model.lazy.trim="item.description"
        name=""
        id=""
        cols="30"
        rows="10"
        class="field p-2"
      ></textarea>
      <p class="m-0 pt-1" dir="rtl">توضیحات:</p>
    </div>
    <div class="d-flex align-items-center w-100 justify-content-start mt-3">
      <button class="save me-2" @click="save(item, index)">ذخیره</button>
      <button class="cancel" @click="back(index)">انصراف</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import DatePicker from "../DatePicker/DatePicker.vue";
import { reactive, ref } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
export default {
  name: "EditTodo",
  components: { DatePicker },
  setup() {
    let task = reactive({
      title: "",
      date: "",
      checked: false,
      description: "",
    });
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    let error = ref("");
    const item = store.state.todoList[route.query.id];
    let state = reactive({
      date: "",
    });
    let today = new Date().toLocaleDateString("fa-IR");
    today = today.replace(/([۰-۹])/g, (token) =>
      String.fromCharCode(token.charCodeAt(0) - 1728)
    );
    state.date = today;
    task.title = item.title;
    task.date = item.date;
    task.checked = item.checked;
    task.description = item.description;
    let i = route.query.id;
    function save(editedTodo) {
      if (editedTodo.title != "" && editedTodo.title != null) {
        store.commit("editTodo", {
          editedTodo,
          i,
        });
        router.push({
          name: "List",
        });
      } else {
        error.value = "این فیلد نباید خالی باشد";
      }
    }
    function back() {
      save(task);
      // const task = item;
      // console.log("5555555");
      // store.commit("editTodo", {
      //     task,
      //     i,
      //   });
      // store.commit("editTodo", {
      //   task,
      //   index,
      // });
    }
    return {
      state,
      item,
      back,
      save,
      error,
      task,
    };
  },
};
</script>
<style scoped>
.form {
  position: relative;
  top: -28px;
  width: 100%;
  background: #636e72;
  border: 4px solid black;
  border-radius: 24px;
}
p {
  width: 25%;
  font-weight: bold;
}
.width-attr {
  width: 75%;
}
.field {
  width: 75%;
  border-radius: 24px;
  padding: 0.5rem;
  border: 2px solid black;
  box-shadow: 0px 0px 4px;
  font-size: 0.8rem;
  text-align: center;
}
textarea {
  height: 120px;
  resize: none;
}
input {
  height: 38px;
}
em {
  font-size: 12px;
  color: rgb(129, 0, 0);
  font-weight: bold;
}
button {
  width: 75px;
  height: 35px;
  border-radius: 24px;
  font-family: tahoma;
}
.cancel {
  box-shadow: inset 0px 0px 40px rgba(232, 65, 24, 0.7);
}
.cancel:hover {
  border: 2px solid rgb(232, 65, 24);
}
.save {
  box-shadow: inset 0px 0px 40px rgba(68, 189, 50, 0.7);
}
.save:hover {
  border: 2px solid rgb(68, 189, 50);
}
@media only screen and (max-width: 550px) {
  textarea {
    height: 140px;
  }
}
</style>
