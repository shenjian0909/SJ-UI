
import { ExtractPropTypes } from 'vue'
// table中的props定义
export const tableColumnProps = {
  label: {
    type: String,
    default: ''
  },
  prop: {
    type: String,
    default: ''
  },
  width: {
    type: String,
  }
}

// 利用值反推出Button属性类型
export type TableColumnProps = ExtractPropTypes<typeof tableColumnProps>
  