import { upperFirst } from "./utils"

// 生成核心组件代码内容
export default function genCoreTemplate(name: string) {
  const className = 's-' + name // s-tree
  const compName = 'M' + upperFirst(name) // MTree
  const compTypeProps = upperFirst(name) + 'Props' // TreeProps
  const compProps = name + 'Props' // treeProps
  const propsFile = name + '-type' // tree-type

  return `
import { defineComponent } from "vue";

import { ${compTypeProps}, ${compProps} } from "./${propsFile}";

export default defineComponent({
  name: '${compName}',
  props: ${compProps},
  setup(props: ${compTypeProps}) {
    return () => {
      return <div class="${className}">${name}</div>
    }
  }
})
  `
}