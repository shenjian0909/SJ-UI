// 函数式组件
// export default () => <div>test jsx</div>

// 通过defineComponent({}) 方式使用jsx
import { defineComponent, withModifiers, ref } from "vue"

// export default defineComponent({
//   render() {
//     return <div>test jsx by defineComponent</div>
//   }
// })

// 3. 通过defineComponent({ setup() {}}) 方式使用jsx
// 彻底摒弃this
// 借助babel-plugin-jsx
// Vue独特的概念：修饰符，slot，directive，emit
export default defineComponent({
  setup(props, ctx) {
    const count = ref(0)
    const condition = ref(true)
    const list = ref<string[]>(['1', '2', '3'])
    const inc = function() {
      count.value++
    }
    return () => (
        <div onClick={withModifiers(inc, ["self"])}>{count.value}
        <br />
        <input type="text" v-model={count.value} />
        <div>{ condition ? <span>A</span> : <span>B</span> }</div>
        <ul>
          { list.value.map(item => <li key={item}>{item}</li>) }
        </ul>
       </div>
    )
  }
})