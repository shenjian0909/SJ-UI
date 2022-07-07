import * as inquirer from 'inquirer'
import { red } from 'kolorist'
import { createComponent } from '../shared/create-component'
const CREATE_TYPES = ['component', 'lib-entry']
export async function onCreate(args = {type: ''}) {
  console.log(args)
  // 判断用户输入的type
  // 当用户没有输入
  let { type } = args
  if(!type) {
    const result = await inquirer.prompt([
      {
        type: 'list', // 列表选择
        name: 'type',
        message: '<必填> 请选择需要创建的类型：',
        choices: CREATE_TYPES,
        default: 0
      }
    ])
    type = result.type
  }
  // 用户输入错误
  if(!CREATE_TYPES.includes(type)) {
    console.log(
      red(`当前类型仅支持${CREATE_TYPES.join(', ')}, 您输入的是"${type}", 请重新选择！`)
    )
    return onCreate()
  }
  // 输入正确
  try{
    switch(type) {
      case 'component':
        // 如果是组件，需要收集组件信息
        const info = await inquirer.prompt([
          {
            type: 'input', // 列表选择
            name: 'name',
            message: '<必填> 请输入组件的name，将用于文件名和文件夹名称：',
            validate(value: string) {
              if(value.trim() === '') {
                return '组件name不能为空'
              }
              return true
            }
          },
          {
            type: 'input', // 列表选择
            name: 'title',
            message: '<必填> 请输入组件中文名称：',
            validate(value: string) {
              if(value.trim() === '') {
                return '组件中文名称不能为空'
              }
              return true
            }
          }
        ])
        // console.log(info)
        // 创建组件模板
        createComponent(info)
        break;
      default:
        break;
  
    }
  }catch(e){

  }
}
