
import { computed } from "@vue/reactivity";
import { defineComponent, toRefs, ref } from "vue";

import { IInnerTreeNode, TreeProps, treeProps } from "./tree-type";
import { generateTreeData } from "./utils";

export default defineComponent({
  name: 'MTree',
  props: treeProps,
  setup(props: TreeProps) {
    const { data } = toRefs(props)
    // let data = [
    //   {
    //     id: '1', 
    //     label: 'js', 
    //     children: [
    //       {id: '1001', label: 'vue', children: [
    //         {id: '100101', label: 'vue2'},
    //         {id: '100102', label: 'vue3'},
    //       ]}, 
    //       {id: '1002', label: 'react'}
    //     ]
    //   },
    //   {
    //     id: '2',
    //     label: 'webpack'
    //   },
    //   {
    //     id: '3',
    //     label: 'css',
    //     children: [
    //       {id: '3001', label: 'scss'},
    //       {id: '3002', label: 'less'},
    //       {id: '3003', label: 'stylus'}
    //     ]
    //   }
    // ]
    let innerData = ref(generateTreeData(data.value))
    // 点击展开/收起
    const toggleNode = (node: IInnerTreeNode) => {
      let curNode = innerData.value.find(item => item.id === node.id)
      if (curNode) {
        curNode.expanded = !curNode.expanded
      }
    }
    // 获取展开的节点
    const expandedTree = computed(() => {
      let excludedNodes: IInnerTreeNode[] = []
      let result = []
      for(let item of innerData.value) {
        // 如果遍历节点在排除列表中， 则跳出此次循环
        if(excludedNodes.includes(item)) {
          continue
        }
        // 如果当前节点不是展开状态 ，则排除下面的子节点
        if(item.expanded !== true) {
          excludedNodes = getChildren(item)
        }
        result.push(item)
      }
      return result
    })
    // 获取节点下的子节点
    const getChildren = (node: IInnerTreeNode) => {
      let result = []
      let startIndex = innerData.value.findIndex(item => item.id === node.id)
      for(let i = startIndex + 1; i<innerData.value.length && node.level < innerData.value[i].level; i++) {
        result.push(innerData.value[i])
      }
      return result
    }

    return () => {
      return <div class="s-tree">
        {
          expandedTree.value.map(treeNode => {
            return <div class="s-tree-node" style={{paddingLeft: `${24 * (treeNode.level - 1)}px`}}>
              { 
                treeNode.isLeaf ? <span class="s-tree-leaf"></span> : 
                <svg onClick={ () => toggleNode(treeNode) } t="1657177794318" class="icon s-tree-icon" style={{transform: treeNode.expanded ? 'rotate(90deg)' : ''}} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3223" width="32" height="32"><path d="M292.9664 164.1472v695.808c0 40.1408 48.5376 60.3136 77.0048 31.8464L717.824 543.8464c17.6128-17.6128 17.6128-46.1824 0-63.7952L369.9712 132.1984c-28.4672-28.3648-77.0048-8.2944-77.0048 31.9488z" p-id="3224"></path></svg>
              }
              {treeNode.label}
            </div>
          })
        }
      </div>
    }
  }
})
  