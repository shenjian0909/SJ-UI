
import { ExtractPropTypes, PropType } from 'vue'
import { EmitType } from '../../types'
// select中的props定义
export const selectProps = {
  // just for jsx
  onClick: {
    type: [Function, Array] as PropType<EmitType<(e: MouseEvent) => void>>
  }
}

// 利用值反推出Button属性类型
export type SelectProps = ExtractPropTypes<typeof selectProps>
  