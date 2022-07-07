function generateTreeData(data) {
  // [{id: '1', label: 'js', children: [{id: '1001', label: 'vue'}, {id: '1002', label: 'react'}]}]
  // 转为 [{id: '1', label: 'js', level: 1}, {id: '1001', label: 'vue', level: 2, parentId: '1'}, {id: '1002', label: 'react', level: 2, parentId: '1'}]
  return data.reduce((prev, cur) => {
    if(cur.children) {
      prev = prev.concat(cur)
      let children = generateTreeData(cur.children)
      return prev.concat(children)
    } else {
      return prev.concat(cur)
    }
  }, [])
}

let data =  [{id: '1', label: 'js', children: [{id: '1001', label: 'vue'}, {id: '1002', label: 'react'}]}]
let res = generateTreeData(data)
console.log(res);

function getChildren(node) {
  let result = []
  let startIndex = innerData.findIndex(item => item.id === node.id)
  console.log(node.level, innerData[startIndex].level)
  for(let i = startIndex + 1; i<innerData.length && node.level < innerData[i].level; i++) {
    result.push(innerData[i])
  }
  // console.log('children: ', startIndex)
  return result
}
let data1 = [
  {
    id: '1', 
    label: 'js',
    expanded: true,
    children: [
      {
        id: '1001', 
        label: 'vue',
        expanded: false,
        children: [
          {id: '100101', label: 'vue2'},
          {id: '100102', label: 'vue3'},
        ]
      }, 
      {id: '1002', label: 'react'}
    ]
  },
  {
    id: '2',
    label: 'webpack'
  },
  {
    id: '3',
    label: 'css',
    expanded: true,
    children: [
      {id: '3001', label: 'sass'},
      {id: '3002', label: 'less'},
      {id: '3003', label: 'stylus'}
    ]
  }
]
let innerData = generateTreeData(data1)

let node = {
  id: '1001', 
  label: 'vue',
  expanded: false,
  children: [
    {id: '100101', label: 'vue2'},
    {id: '100102', label: 'vue3'},
  ]
}

let children = getChildren(node)
console.log(children);