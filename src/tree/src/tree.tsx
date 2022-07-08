
import { computed } from "@vue/reactivity";
import { defineComponent, toRefs, ref } from "vue";

import { TreeProps, treeProps } from "./tree-type";
import { useTree } from './composables/use-tree'

export default defineComponent({
  name: 'MTree',
  props: treeProps,
  setup(props: TreeProps) {
    const { data, checkable } = toRefs(props)
    const { expandedTree, toggleNode, getExpandedChildren, toggleCheckNode } = useTree(data)
    const NODE_HEIGHT = 28
    const NODE_INDENT = 24
    return () => {
      return <div class="s-tree">
        {
          expandedTree.value.map(treeNode => {
            return <div class="s-tree-node hover:bg-slate-100 relative leading-7" style={{paddingLeft: `${NODE_INDENT * (treeNode.level - 1)}px`}}>
              {/* 连接线 */}
              { !treeNode.isLeaf && treeNode.expanded && 
                <span class="s-tree-node__vline absolute w-px bg-gray-300 z-10" 
                      style={{height: `${getExpandedChildren(treeNode).length * NODE_HEIGHT}px`,
                        left: `${NODE_INDENT * (treeNode.level - 1) + 7}px`,
                        top: `${NODE_HEIGHT}px`
                    }}></span>
              }
              {/* 折叠图标 */}
              { 
                treeNode.isLeaf ? <span class="s-tree-leaf"></span> : 
                <svg onClick={ () => toggleNode(treeNode) } t="1657177794318" class="icon s-tree-icon" style={{transform: treeNode.expanded ? 'rotate(90deg)' : ''}} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3223" width="32" height="32"><path d="M292.9664 164.1472v695.808c0 40.1408 48.5376 60.3136 77.0048 31.8464L717.824 543.8464c17.6128-17.6128 17.6128-46.1824 0-63.7952L369.9712 132.1984c-28.4672-28.3648-77.0048-8.2944-77.0048 31.9488z" p-id="3224"></path></svg>
              }
              {/* 复选框 */}
              { checkable.value && 
                <input type="checkbox" class="ml-[2px] mr-[2px]" v-model={treeNode.checked} onChange={() => toggleCheckNode(treeNode)} />
              }
              {treeNode.label}
            </div>
          })
        }
      </div>
    }
  }
})
  