
import { defineComponent, onMounted, ref, computed } from "vue";

import { InputProps, inputProps } from "./input-type";

export default defineComponent({
  name: 'MInput',
  props: inputProps,
  setup(props: InputProps, { emit, slots }) {
    const { type, placeholder, modelValue, disabled, clearable, showPassword } = props
    
    const input = ref('')
    const passwordVisiable = ref(false)
    onMounted(() => {
      setNativeInputValue()
    })
    const nativeInputValue = computed(() =>
      !modelValue ? '' : String(modelValue)
    )
    const changeInput = (e: Event) => {
      const targetVal = (e.target as HTMLInputElement).value
      emit('update:modelValue', targetVal)
    }

    const clearInput = (e: Event) => {
      e.preventDefault()
      input.value = ''
      emit('update:modelValue', '')
    }

    const togglePwd = () => {
      passwordVisiable.value = !passwordVisiable.value
    }

    // 给当前input赋值
    const setNativeInputValue = () => {
      if(input.value === nativeInputValue.value) return
      input.value = nativeInputValue.value
    }
    // 后缀显示
    const showSuffix = computed(() => clearable || showPassword || !!slots.suffix)
    const showPrefix = computed(() => !!slots.prefix)
    // 是否展示清除图标
    const showClear = computed(() => clearable && input.value)
    // 是否显示密码图标
    const showPwdVisible = computed(() => showPassword && input.value)

    const inputStyle = computed(() => {
      return `s-input ${disabled ? 'is-disabled' : ''} ${showSuffix.value ? 's-input--suffix' : ''} ${showPrefix.value ? 's-input--prefix' : ''}`
    })
    
    return () => {
      return (
        <div class={`${inputStyle.value}`}>
          {/* 前缀图标 */}
          {showPrefix.value && <span class='s-input__prefix'>
              {slots.prefix && slots.prefix()}
          </span>}
          <input 
            v-model={input.value} 
            disabled={disabled} 
            type={showPassword ? (passwordVisiable.value ? 'text' : 'password') : type} 
            placeholder={placeholder} 
            onInput={(e) => changeInput(e)} class="s-input__inner"
          />
          {/* 后缀图标 */}
          {/* 可清除图标 */}
          {showSuffix.value && showClear.value && <span class='s-input__suffix' onClick={(e) => clearInput(e)}>x11</span>}
          {/* 密码框图标 */}
          {showSuffix.value && showPwdVisible.value && <span class='s-input__suffix' onClick={() => togglePwd()}>
              {passwordVisiable.value ? 
                <svg t="1657526034074" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4299" width="32" height="32"><path d="M512 768c-183.466667 0-328.533333-85.333333-426.666667-256 98.133333-170.666667 243.2-256 426.666667-256s328.533333 85.333333 426.666667 256c-98.133333 170.666667-243.2 256-426.666667 256z m8.533333-426.666667c-128 0-256 55.466667-328.533333 170.666667 72.533333 115.2 200.533333 170.666667 328.533333 170.666667s238.933333-55.466667 311.466667-170.666667c-72.533333-115.2-183.466667-170.666667-311.466667-170.666667z m-8.533333 298.666667c-72.533333 0-128-55.466667-128-128s55.466667-128 128-128 128 55.466667 128 128-55.466667 128-128 128z m0-85.333333c25.6 0 42.666667-17.066667 42.666667-42.666667s-17.066667-42.666667-42.666667-42.666667-42.666667 17.066667-42.666667 42.666667 17.066667 42.666667 42.666667 42.666667z" fill="#444444" p-id="4300"></path></svg>
                :
                <svg t="1657526063928" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4446" width="32" height="32"><path d="M422.4 776.533333l76.8-76.8h8.533333c145.066667 0 251.733333-55.466667 332.8-170.666666-25.6-34.133333-55.466667-64-85.333333-89.6L819.2 384c46.933333 38.4 85.333333 89.6 119.466667 145.066667-98.133333 170.666667-243.2 251.733333-426.666667 251.733333-29.866667 4.266667-59.733333 0-89.6-4.266667z m-238.933333-119.466666c-34.133333-34.133333-68.266667-76.8-98.133334-128 98.133333-170.666667 243.2-251.733333 426.666667-251.733334h46.933333l-85.333333 85.333334c-128 8.533333-226.133333 64-298.666667 166.4 17.066667 25.6 38.4 51.2 59.733334 68.266666l-51.2 59.733334zM755.2 213.333333l59.733333 59.733334L277.333333 810.666667l-59.733333-59.733334L755.2 213.333333z" fill="#444444" p-id="4447"></path></svg>
              }
            </span>
          }
          {/* 自定义后缀图标 */}
          { showSuffix.value && !showClear.value && !showPwdVisible.value && <span class='s-input__suffix'>{slots.suffix && slots.suffix()}</span>}
        </div>
      )
    }
  }
})
  