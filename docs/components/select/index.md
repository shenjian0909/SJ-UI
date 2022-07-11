
# Select 选择器控件

基础的选择器结构展示。

:::demo

```vue
<template>
  <div class="demo-button">
   <MSelect v-model="value">
    <MOption
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </MOption>
   </MSelect>
  </div>
</template>
<script setup>
  import { ref } from 'vue'
  const value = ref('')
  const options = [{
    value: '选项1',
    label: '黄金糕'
  }, {
    value: '选项2',
    label: '双皮奶'
  }, {
    value: '选项3',
    label: '蚵仔煎'
  }]
</script>
```

:::
