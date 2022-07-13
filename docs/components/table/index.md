
# Table 表格控件

这是一个表格组件

## 基础用法

:::demo

```vue
<template>
  <div class="demo-table">
   <MTable :data="tableData" :columns="columns"></MTable>
  </div>
</template>
<script setup>
  import { ref } from 'vue'
  const columns = [
    {label: '编号', prop: 'id', width: '180px'},
    {label: '姓名', prop: 'name', width: '180px'}
  ]
  const tableData = ref([
    {id: '1', name: 'sj'},
    {id: '2', name: 'cy'}
  ])
</script>
```

:::
