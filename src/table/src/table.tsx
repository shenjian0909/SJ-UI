
import { defineComponent } from "vue";

import { TableProps, tableProps } from "./table-type";

export default defineComponent({
  name: 'MTable',
  props: tableProps,
  setup(props: TableProps) {
    return () => {
      return <div class="s-table">table</div>
    }
  }
})
  