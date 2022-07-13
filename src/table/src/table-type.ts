
import { ExtractPropTypes, PropType } from 'vue'
import { EmitType } from '../../types'
import  type { TableColumnProps } from './table-column-type'
// table中的props定义
export const tableProps = {
  data: {
    type: Array<any>,
    default: []
  },
  columns: {
    type: Array<TableColumnProps>,
    default: []
  },
  // just for jsx
  onClick: {
    type: [Function, Array] as PropType<EmitType<(e: MouseEvent) => void>>
  }
}

// 利用值反推出Button属性类型
export type TableProps = ExtractPropTypes<typeof tableProps>
  