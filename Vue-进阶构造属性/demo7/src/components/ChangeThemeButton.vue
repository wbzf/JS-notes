<template>
  <div>
    <button @click="nihui">当前主题色:{{ themeName }} 换肤</button>
    <button @click="changeFontSize('big')">大</button>
    <button @click="changeFontSize('small')">小</button>
    <button @click="changeFontSize('normal')">正常</button>
  </div>
</template>

<script>
export default {
  inject: ["themeName", "changeTheme", "changeFontSize"],
  methods: {
    nihui() {
      this.changeTheme();
    },
  },
};
</script>
>
