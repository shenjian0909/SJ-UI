# Tree 树形控件

用清晰的层级结构展示信息，可展开或折叠。

## 基础用法

基础的树形结构展示。

:::demo

```vue
<template>
  <div class="demo-button">
   <MTree :data="data" />
  </div>
</template>
<script setup>
  const data = [
      {
        id: '1', 
        label: 'js',
        expanded: true,
        children: [
          {
            id: '1001', 
            label: 'vue',
            expanded: true,
            children: [
              {id: '100101', label: 'vue2'},
              {id: '100102', label: 'vue3'},
            ]
          }, 
          {id: '1002', label: 'react'}
        ]
      },
      {
        id: '2',
        label: 'webpack'
      },
      {
        id: '3',
        label: 'css',
        expanded: true,
        children: [
          {id: '3001', label: 'sass'},
          {id: '3002', label: 'less'},
          {id: '3003', label: 'stylus'}
        ]
      }
    ]
</script>
```

:::

## 可选择

适用于需要选择层级时使用。

:::demo

```vue
<template>
  <div class="demo-button">
   <MTree :data="data" checkable />
  </div>
</template>
<script setup>
  const data = [
      {
        id: '1', 
        label: 'js',
        expanded: true,
        children: [
          {
            id: '1001', 
            label: 'vue',
            expanded: true,
            children: [
              {id: '100101', label: 'vue2'},
              {id: '100102', label: 'vue3'},
            ]
          }, 
          {id: '1002', label: 'react'}
        ]
      },
      {
        id: '2',
        label: 'webpack'
      },
      {
        id: '3',
        label: 'css',
        expanded: true,
        children: [
          {id: '3001', label: 'sass'},
          {id: '3002', label: 'less'},
          {id: '3003', label: 'stylus'}
        ]
      }
    ]
</script>  
```