
import { defineComponent } from "vue";

import { TableColumnProps, tableColumnProps } from "./table-column-type";

export default defineComponent({
  name: 'MTableColumn',
  props: tableColumnProps,
  setup(props: TableColumnProps, { slots }) {
    return () => {
      return <div class='s-table-column'>{ slots.default && slots.default()}</div>
    }
  }
})
  