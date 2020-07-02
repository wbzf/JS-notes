<template>
  <div :class="`app theme-${themeName} fontSize-${fontSizeName}`">
    <Child1 />
    <button>x</button>
    <Child2 />
    <button>x</button>
    <Child3 />
    <button>x</button>
    <Child4 />
    <button>x</button>
    <Child5 />
    <button>x</button>
  </div>
</template>

<script>
import Child1 from "./components/Child1.vue";
import Child2 from "./components/Child2.vue";
import Child3 from "./components/Child3.vue";
import Child4 from "./components/Child4.vue";
import Child5 from "./components/Child5.vue";
export default {
  name: "App",
  provide() {
    return {
      themeName: this.themeName,
      changeTheme: this.changeTheme,
      changeFontSize: this.changeFontSize,
    };
  },
  data() {
    return {
      // themeName: { value: "blue" }, 引用 不推荐使用
      themeName: "blue", // 'red'
      fontSizeName: "normal", // 'big' | 'small'
    };
  },
  methods: {
    changeTheme() {
      if (this.themeName === "blue") {
        this.themeName = "red";
      } else {
        this.themeName = "blue";
      }
    },
    changeFontSize(name) {
      if (["normal", "big", "small"].indexOf(name) >= 0) {
        this.fontSizeName = name;
      }
    },
  },
  components: {
    Child1,
    Child2,
    Child3,
    Child4,
    Child5,
  },
};
</script>

<style>
.app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.app.theme-blue button {
  background: blue;
  color: white;
}
.app.theme-blue {
  color: darkblue;
}

.app.theme-red button {
  background: red;
  color: white;
}
.app.theme-red {
  color: darkred;
}
.app.fontSize-normal {
  font-size: 16px;
}
.app button {
  font-size: inherit;
}
.app.fontSize-big {
  font-size: 20px;
}
.app.fontSize-small {
  font-size: 12px;
}
</style>
