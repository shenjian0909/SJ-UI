
# Input 输入框控件

基础用法。

:::demo

```vue
<template>
  <div class="demo-input">
   <MInput v-model="value" /><br/>
   <MInput type="password" v-model="pwd" />
  </div>
</template>
<script setup>
  import { ref } from 'vue'
  const value = ref('1234')
  const pwd = ref('')
</script>
```

:::

禁用状态。

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
