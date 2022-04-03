<template>
  <div
    v-for="(item, index) in list"
    :key="index"
    class="todo d-flex align-items-center justify-content-between flex-wrap flex-row-reverse"
  >
    <p
      dir="rtl"
      :id="index"
      class="m-0 d-flex justify-content-start title-text"
    >
      <b class="ps-1">{{ index }})</b>
      <span>{{ item.title }} </span>
    </p>
    <div class="date-container d-flex justify-content-center">
      <em class="m-0">{{ item.date }}</em>
    </div>
    <div class="d-flex icons justify-content-between px-1 align-items-center">
      <input
        v-model="item.checked"
        @click="check(index)"
        type="checkbox"
        :id="'check' + index"
        class="checkbox"
      />
      <span class="cbox"></span>
      <svg
        @click="deleteTodo(index)"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        class="bi bi-trash"
        viewBox="0 0 16 16"
      >
        <path
          d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
        />
        <path
          fill-rule="evenodd"
          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
        />
      </svg>
      <router-link :to="'/edit?id=' + index">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="20"
          height="20"
          viewBox="0 0 172 172"
          style="fill: #000000"
        >
          <defs>
            <linearGradient
              x1="109.56736"
              y1="142.02631"
              x2="109.56736"
              y2="79.50028"
              gradientUnits="userSpaceOnUse"
              id="color-1_LYxuAJx02Ige_gr1"
            >
              <stop offset="0.322" stop-color="#7dabfb"></stop>
              <stop offset="0.466" stop-color="#a692ff"></stop>
              <stop offset="0.752" stop-color="#a692ff"></stop>
              <stop offset="0.898" stop-color="#a692ff"></stop>
            </linearGradient>
            <linearGradient
              x1="28058.88882"
              y1="55316.73035"
              x2="28058.88882"
              y2="30979.16047"
              gradientUnits="userSpaceOnUse"
              id="color-2_LYxuAJx02Ige_gr2"
            >
              <stop offset="0.322" stop-color="#7dabfb"></stop>
              <stop offset="0.466" stop-color="#a692ff"></stop>
              <stop offset="0.752" stop-color="#a692ff"></stop>
              <stop offset="0.898" stop-color="#a692ff"></stop>
            </linearGradient>
          </defs>
          <g
            fill="none"
            fill-rule="nonzero"
            stroke="none"
            stroke-width="1"
            stroke-linecap="butt"
            stroke-linejoin="miter"
            stroke-miterlimit="10"
            stroke-dasharray=""
            stroke-dashoffset="0"
            font-family="none"
            font-weight="none"
            font-size="none"
            text-anchor="none"
            style="mix-blend-mode: normal"
          >
            <path d="M0,172v-172h172v172z" fill="none"></path>
            <g>
              <path
                d="M146.08847,7.27977c-0.78714,-0.78709 -2.06329,-0.78709 -2.85043,0l-81.05601,81.05668c-0.00907,0.00907 -0.01478,0.01982 -0.02352,0.02889l-0.48509,0.82741l-7.76687,26.39898c-0.20808,0.70761 -0.01306,1.47237 0.50849,1.99391c0.52154,0.52154 1.2863,0.71657 1.99391,0.50849l26.39898,-7.76688c0.04569,-0.01377 0.08869,-0.03359 0.13438,-0.04905l0.69438,-0.43672c0.00907,-0.00873 0.01982,-0.01445 0.02889,-0.02352l81.05466,-81.05601c0.78709,-0.78714 0.78709,-2.06329 0,-2.85043zM133.01378,23.20488l2.87294,2.87294l-66.55661,66.55695l-2.87294,-2.87294zM138.73748,28.92859l4.33359,4.33359l-66.55627,66.55728l-4.33359,-4.33359zM58.81795,113.18373l1.49627,-5.08576l3.58916,3.58949zM68.30886,110.39141l-6.69859,-6.69826l2.97338,-10.10567l13.83055,13.83055zM82.2375,105.54283l-2.87294,-2.87294l66.55762,-66.55661l2.87294,2.87294zM151.64555,36.13545l-15.781,-15.781l8.79854,-8.7982l15.78066,15.78066z"
                fill="url(#color-1_LYxuAJx02Ige_gr1)"
              ></path>
              <path
                d="M133.41825,161.27923h-122.69748v-122.69748h81.06172v-4.03125h-83.07734c-1.1132,0 -2.01562,0.90243 -2.01562,2.01563v126.72873c0,1.1132 0.90243,2.01563 2.01563,2.01563h126.72873c1.1132,0 2.01563,-0.90243 2.01563,-2.01562v-83.07734h-4.03125z"
                fill="url(#color-2_LYxuAJx02Ige_gr2)"
              ></path>
            </g>
          </g>
        </svg>
      </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  name: "SingleTodo",
  components: {},
  setup() {
    const store = useStore();
    const list = computed(() => store.state.todoList);
    function deleteTodo(index) {
      store.commit("deleteTodo", index);
    }
    function check(index) {
      store.commit("checkTodo", index);
    }
    return {
      list,
      deleteTodo,
      check,
    };
  },
};
</script>
<style scoped>
.icons {
  width: 22%;
}
.todo {
  width: 100%;
  padding: 5px 7px;
  border-bottom: 2px solid black;
  font-size: 14px;
}
.todo .title-text {
  width: 50%;
  font-family: tahoma;
}
svg {
  color: #9c4cbe9d;
  font-size: 16px;
  font-weight: 700;
  margin-left: 5px;
  cursor: pointer;
}
svg:hover {
  color: #9c4cbe;
}
.date-container {
  width: 80px;
}
em {
  font-size: 13px;
  color: #273c75;
  font-weight: bold;
}
.todo input {
  margin-right: -30px;
  z-index: 1;
  width: 28px;
  height: 28px;
  opacity: 0;
  cursor: pointer;
}
.cbox {
  width: 28px;
  height: 28px;
  box-shadow: inset 0px 0px 24px rgba(232, 65, 24, 0.5);
  border-radius: 50%;
  transition: ease-in-out 1s;
}
.cbox:after {
  display: inline-block;
  font-style: solid;
  font-variant: normal;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  content: "\f1b0";
  width: 28px;
  height: 28px;
  text-align: center;
  color: rgba(68, 189, 50, 1);
  opacity: 0;
  transition: ease-in-out 1s;
  margin-top: 3px;
}
.todo input:checked ~ .cbox:after {
  opacity: 1;
}
.todo input:checked ~ .cbox {
  box-shadow: inset 0px 0px 24px rgba(68, 189, 50, 0.5);
}

@keyframes movetail {
  0% {
    transform: translate(-140%, -40%) rotate(-50deg);
  }
  50% {
    transform: translate(-80%, -30%) rotate(25deg);
  }
  100% {
    transform: translate(-140%, -40%) rotate(-50deg);
  }
}
@media only screen and (max-width: 550px) {
  .todo .title-text {
    width: 100%;
    font-family: tahoma;
  }
  .icons {
    width: 30%;
    margin-left: 5px;
  }
}
</style>
