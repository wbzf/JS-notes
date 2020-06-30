// .sync
// 场景描述
// 爸爸给儿子钱 儿子要花钱怎么办 demo1
// 儿子打电话(触发事件)向爸爸要钱
// Vue规则: 组件不能修改props外部数据
// Vue规则: this.$emit可以触发事件 并传参
// Vue规则: $event可以获取$emit的参数

// 由于这种场景很常见
// 所以Vue发明了 .sync
// :money.sync="total" 等价于
// :money="total" v-on:update:money="total = $event"
