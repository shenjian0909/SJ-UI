# 按钮 -- Button

:::demo 这是按钮组件

```vue
<template>
  <div class="demo-button">
    <MButton>Default</MButton>
    <MButton type="primary">主要按钮</MButton>
    <MButton type="success">成功按钮</MButton>
    <MButton type="warning">警告按钮</MButton>
    <MButton type="danger">危险按钮</MButton>
    <MButton type="info">信息按钮</MButton>
  </div>
</template>
```

:::

## Attributes

| 参数     | 说明         | 类型    | 可选值                                             | 默认值  |
| -------- | ------------ | ------- | -------------------------------------------------- | ------- |
| size     | 尺寸         | string  | medium / small / mini                              | medium  |
| type     | 类型         | string  | primary / success / warning / danger / info / text | primary |
| disabled | 是否禁用状态 | boolean | —                                                  | false   |
