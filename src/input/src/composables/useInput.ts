import { inputEmits } from "../input-type";
import { defineEmits } from 'vue'
export function useInput() {
  const emit = defineEmits(inputEmits)
  const changeInput = function(inputValue: String) {
    console.log(inputValue);
    // emit('input', inputValue)
  }
  return {
    changeInput
  }
}