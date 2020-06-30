// 指令
// 什么是指令
// <div v-text="x"></div>
// <div v-html="x"></div>
// 以v-开头的东西就是指令

// 语法
// v-指令名:参数=值 如 v-on:click=add
// 如果值里没有特殊字符 则可以不加引号
// 有些指令没有参数和值 如 v-pre
// 有些指令没有值 如v-on:click.prevent

// 修饰符
// 有些指令支持修饰符
// @click.stop="add" 表示阻止事件传播/冒泡
// @click.prevent="add" 表示阻止默认动作
// @click.stop.prevent="add" 同时表示两种意思

// 一共有多少修饰符
// v-on支持的有.{keycode|keyAlias} .stop .prevent .capture .self .once
// .passive .native
// 快捷键相关 .ctrl .alt .shift .meta .exact
// 鼠标相关 .left .right .middle
// v-bind 支持的有 .prop .camel .sync
// v-model 支持的有 .lazy .number .trim
// demo1
