import { defineComponent, toRefs } from "vue";

import { ButtonProps, buttonProps } from "./button-type";

export default defineComponent({
  name: 'MButton',
  props: buttonProps,
  setup(props: ButtonProps, { slots }) {
    const { type, size, disabled, block } = toRefs(props)
    console.log('block: ', block.value)
    const blockCls = block.value ? 's-btn--block' : ''
    return () => {
      return <button disabled={disabled.value} class={`s-btn s-btn--${type.value} s-btn--${size.value} ${blockCls}`}>{slots.default ? slots.default() : '按钮'}</button>
    }
  }
})