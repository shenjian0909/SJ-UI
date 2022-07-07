import { upperFirst } from "./utils"

// 生成组件propType类型文件
export default function genPropTemplate(name: string) {
  const propName = name + 'Props' // treeProps
  const propTypeName = upperFirst(name) + 'Props' // TreeProps
  return `
import { ExtractPropTypes, PropType } from 'vue'
import { EmitType } from '../../types'
// ${name}中的props定义
export const ${propName} = {
  // just for jsx
  onClick: {
    type: [Function, Array] as PropType<EmitType<(e: MouseEvent) => void>>
  }
}

// 利用值反推出Button属性类型
export type ${propTypeName} = ExtractPropTypes<typeof ${propName}>
  `
}