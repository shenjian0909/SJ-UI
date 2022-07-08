import { ref, computed, unref, Ref } from 'vue';
import { generateTreeData } from '../utils';
import { IInnerTreeNode, ITreeNode } from './../tree-type';
type TreeType = Ref<ITreeNode[]> | ITreeNode[]
export function useTree(node: TreeType) {
  const innerData = ref(generateTreeData(unref(node)))
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
  
  /**
   * 获取节点下的子节点
   * @param node 父节点
   * @param flag 是否获取全部子节点 true:是  false: 获取直接子节点
   * @returns 
   */
  const getChildren = (node: IInnerTreeNode, flag=true) => {
    let result = []
    let startIndex = innerData.value.findIndex(item => item.id === node.id)
    for(let i = startIndex + 1; i<innerData.value.length && node.level < innerData.value[i].level; i++) {
      if(flag) {
        result.push(innerData.value[i])
      } else if (innerData.value[i].level === node.level + 1) { // 只获取直接子节点
        result.push(innerData.value[i])
      }
    }
    return result
  }

  // 获取已展开的子节点
  const getExpandedChildren = (node: IInnerTreeNode) => {
    let result = []
    let startIndex = innerData.value.findIndex(item => item.id === node.id)
    let excludedNodes: IInnerTreeNode[] = []
    for(let i = startIndex + 1; i<innerData.value.length && node.level < innerData.value[i].level; i++) {
      let cur = innerData.value[i]
      // 排除已收起的父节点下面的子节点
      if(excludedNodes.includes(cur)) {
        continue
      }
      if(!cur.expanded) {
        excludedNodes = excludedNodes.concat(getChildren(cur))
      }
      result.push(innerData.value[i])
    }
    return result
  }

  // 切换选中状态
  const toggleCheckNode = (node: IInnerTreeNode, flag=false) => {
    // 父控制子
    // 获取所有子节点，设置子节点状态和父节点一致
    if (!flag) {
      node.inChecked = false // 设置为未选中状态
      const children = getChildren(node)
      children.forEach(child => {
        child.checked = node.checked
        child.inChecked = false  // 重置带选中状态
      })
    }
    // 子控制父
    const parentNode = innerData.value.find(item => item.id === node.parentId)
    if(parentNode) { // 父节点存在
      // 获取当前节点的所有的兄弟节点
      const siblingNodes = getChildren(parentNode, false)
      const allCheckedNodes = siblingNodes.filter(item => item.checked)

      if(allCheckedNodes.length === siblingNodes.length) {
        parentNode.checked = true
        parentNode.inChecked = false
      } else {
        if(allCheckedNodes.length > 0) {
          parentNode.inChecked = true
        } else {
          parentNode.inChecked = false
        }
        parentNode.checked = false
      }
      // 递归判断父节点状态
      toggleCheckNode(parentNode, true)
    }
  }

  const toggleInCheckNode = (node: IInnerTreeNode) => {
    node.checked = !node.checked
    toggleCheckNode(node)
  }

  return {
    innerData, // 扁平化后的数据
    expandedTree, // 所有展开的节点数组
    toggleNode, // 展开/收起
    getChildren, // 获取子节点
    getExpandedChildren, // 获取已展开的子节点
    toggleCheckNode, // 切换节点选中状态
    toggleInCheckNode // 切换带选中节点状态
  }
}
