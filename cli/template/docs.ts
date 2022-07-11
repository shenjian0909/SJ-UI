/**
 * 生成docs下组件的index.md文件模板
 * @param name 组件名称 eg: select
 * @param title 组件中文名 eg: 选择器
 */
import { upperFirst } from "./utils"
export default function genDocsIndexTemplate(name, title) {
  const upper = upperFirst(name)
  return `
# ${upper} ${title}控件

这是一个${title}组件
`
}