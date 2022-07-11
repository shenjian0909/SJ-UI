
import { defineComponent } from "vue";

import { SelectProps, selectProps } from "./select-type";

export default defineComponent({
  name: 'MSelect',
  props: selectProps,
  setup(props: SelectProps) {
    return () => {
      return <div class="s-select">select</div>
    }
  }
})
  