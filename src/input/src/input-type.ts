
import { ExtractPropTypes, PropType } from 'vue'
import { EmitType } from '../../types'
// input中的props定义
export const inputProps = {
  // just for jsx
  modelValue: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: '请输入内容'
  },
  disabled: { // 禁用
    type: Boolean,
    default: false
  },
  clearable: { // 清空
    type: Boolean,
    default: false
  },
  onClick: {
    type: [Function, Array] as PropType<EmitType<(e: MouseEvent) => void>>
  }
}

export const inputEmits = {
  input: (value: string) => value,
  change: (value: string) => value,
  focus: (evt: FocusEvent) => evt instanceof FocusEvent,
  blur: (evt: FocusEvent) => evt instanceof FocusEvent,
  clear: () => true,
  mouseleave: (evt: MouseEvent) => evt instanceof MouseEvent,
  mouseenter: (evt: MouseEvent) => evt instanceof MouseEvent,
  keydown: (evt: KeyboardEvent | Event) => evt instanceof Event,
  compositionstart: (evt: CompositionEvent) => evt instanceof CompositionEvent,
  compositionupdate: (evt: CompositionEvent) => evt instanceof CompositionEvent,
  compositionend: (evt: CompositionEvent) => evt instanceof CompositionEvent,
}

// 利用值反推出Button属性类型
export type InputProps = ExtractPropTypes<typeof inputProps>

export type InputEmits = typeof inputEmits
  