
# Input 输入框控件

## 基础用法

:::demo

```vue
<template>
  <div class="demo-input">
   <MInput v-model="value" />
  </div>
</template>
<script setup>
  import { ref } from 'vue'
  const value = ref('1234')
</script>
```

:::

## 禁用状态

:::demo 通过 `disabled` 属性指定是否禁用 input 组件

```vue
<template>
  <div class="demo-input">
   <MInput v-model="value1" disabled />
  </div>
</template>
<script setup>
  import { ref } from 'vue'
  const value1 = ref('')
</script>
```

:::

## 可清空

:::demo 使用clearable属性即可得到一个可清空的输入框

```vue
<template>
  <div class="demo-input">
   <MInput v-model="value" clearable />
  </div>
</template>
<script setup>
  import { ref } from 'vue'
  const value = ref('')
</script>
```

:::

## 密码框

:::demo 使用show-password属性即可得到一个可切换显示隐藏的密码框

```vue
<template>
  <div class="demo-input">
   <MInput v-model="value" show-password placeholder="请输入密码" />
  </div>
</template>
<script setup>
  import { ref } from 'vue'
  const value = ref('')
</script>
```

:::

## 带图标的输入框

:::demo 带有图标标记输入类型

```vue
<template>
  <div class="demo-input">
   <MInput v-model="value" placeholder="请输入">
      <template #suffix>
        <svg t="1657527414432" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5384" width="32" height="32"><path d="M384 256h256V213.333333h85.333333v42.666667h128v554.666667H170.666667V256h128V213.333333h85.333333v42.666667z m384 85.333333H256v384h512V341.333333z m-341.333333 85.333334v85.333333H341.333333v-85.333333h85.333334z m128 0v85.333333h-85.333334v-85.333333h85.333334z m128 0v85.333333h-85.333334v-85.333333h85.333334z m-256 128v85.333333H341.333333v-85.333333h85.333334z m128 0v85.333333h-85.333334v-85.333333h85.333334z m128 0v85.333333h-85.333334v-85.333333h85.333334z" fill="#444444" p-id="5385"></path></svg>
      </template>
   </MInput>
   <MInput v-model="value" placeholder="请输入">
      <template #prefix>
        <svg t="1657528278543" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6306" width="25" height="25"><path d="M469.333333 768c-166.4 0-298.666667-132.266667-298.666666-298.666667s132.266667-298.666667 298.666666-298.666666 298.666667 132.266667 298.666667 298.666666-132.266667 298.666667-298.666667 298.666667z m0-85.333333c119.466667 0 213.333333-93.866667 213.333334-213.333334s-93.866667-213.333333-213.333334-213.333333-213.333333 93.866667-213.333333 213.333333 93.866667 213.333333 213.333333 213.333334z m251.733334 0l119.466666 119.466666-59.733333 59.733334-119.466667-119.466667 59.733334-59.733333z" fill="#444444" p-id="6307"></path></svg>
      </template>
   </MInput>
  </div>
</template>
<script setup>
  import { ref } from 'vue'
  const value = ref('')
</script>
```

:::

## Input 属性

| 参数            | 说明                 | 类型            | 可选值                                                                                                                                | 默认值 |
| --------------- | -------------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| type            | 类型                 | string          | text，textarea 和其他 [原生 input 的 type 值](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types) | text   |
| value / v-model | 绑定值               | string / number | —                                                                                                                                     | —      |
| placeholder     | 输入框占位文本       | string          | —                                                                                                                                     | —      |
| clearable       | 是否可清空           | boolean         | —                                                                                                                                     | false  |
| show-password   | 是否显示切换密码图标 | boolean         | —                                                                                                                                     | false  |
| disabled        | 禁用                 | boolean         | —                                                                                                                                     | false  |

## Input 插槽

| name   | 说明                                    |
| ------ | --------------------------------------- |
| prefix | 输入框头部内容，只对 `type="text"` 有效 |
| suffix | 输入框尾部内容，只对 `type="text"` 有效 |
