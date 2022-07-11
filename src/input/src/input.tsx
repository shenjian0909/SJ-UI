
import { defineComponent, onMounted, ref, computed } from "vue";

import { InputProps, inputProps } from "./input-type";

export default defineComponent({
  name: 'MInput',
  props: inputProps,
  setup(props: InputProps, context) {
    const { type, placeholder, modelValue, disabled } = props
    const input = ref('')
    onMounted(() => {
      setNativeInputValue()
    })
    const nativeInputValue = computed(() =>
      !modelValue ? '' : String(modelValue)
    )
    const changeInput = (e: Event) => {
      const targetVal = (e.target as HTMLInputElement).value
      context.emit('update:modelValue', targetVal)
    }

    // 给当前input赋值
    const setNativeInputValue = () => {
      const inputDom = document.querySelector('.s-input__inner')
      
      if(!inputDom || input.value === nativeInputValue.value) return
      input.value = nativeInputValue.value
    }
    return () => {
      return (
        <div class={`s-input ${disabled ? 'is-disabled' : ''}`}>
          <input v-model={input.value} disabled={disabled} type={type} placeholder={placeholder} onInput={(e) => changeInput(e)} class="s-input__inner" />
        </div>
      )
    }
  }
})
  