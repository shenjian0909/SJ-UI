import { ensureDirSync, writeFileSync, readFileSync } from 'fs-extra'
import { resolve } from 'path'
import { lightGreen } from 'kolorist'
import genCoreTemplate from '../template/core'
import genPropTemplate from '../template/types'
import genStyleTemplate from '../template/style'
import genIndexTemplate from '../template'
import genDocsIndexTemplate from '../template/docs'
import { upperFirst } from '../template/utils'
export interface MetaComponent {
  name: string
  title: string
}
export function createComponent(meta: MetaComponent) {
  const { name, title } = meta
  const WRITE_FILE_OPTIONS = 'utf-8'
  // 组件目录
  const compDir = resolve('../src', name)
  // 组件源文件目录，样式目录，测试目录
  const compSrcDir = resolve(compDir, 'src')
  const styleDir = resolve(compDir, 'style')
  const testDir = resolve(compDir, 'test')
  // 组件docs文件目录
  const docsDir = resolve('../docs')
  const compDocsDir = resolve(docsDir, `components/${name}`)
  // 主样式文件 SJ-UI\src\index.scss
  const basicStylePath = resolve('../src/index.scss')
  // 组件集合文件 SJ-UI\src\components.ts
  const baseCompPath = resolve('../src/components.ts')
  const compName = 'M' + upperFirst(name) // MTree

  // 创建目录
  ensureDirSync(compSrcDir)
  ensureDirSync(styleDir)
  ensureDirSync(testDir)
  ensureDirSync(compDocsDir)

  // 创建文件
  // 核心文件：组件文件
  const compSrcCore = resolve(compSrcDir, name) + '.tsx'
  writeFileSync(compSrcCore, genCoreTemplate(name), WRITE_FILE_OPTIONS)
  // 核心文件：组件类型
  const compTypeFile = resolve(compSrcDir, name) + '-type.ts'
  writeFileSync(compTypeFile, genPropTemplate(name), WRITE_FILE_OPTIONS)

  // 组件样式
  const styleFilePath = resolve(styleDir, name + '.scss')
  writeFileSync(styleFilePath, genStyleTemplate(name), WRITE_FILE_OPTIONS)

  // 生成索引文件
  const indexFilePath = resolve(compDir, 'index.ts')
  writeFileSync(indexFilePath, genIndexTemplate(name), WRITE_FILE_OPTIONS)

  // 生成docs中的index.md文件
  const docsIndexFilePath = resolve(compDocsDir, 'index.md')
  writeFileSync(docsIndexFilePath, genDocsIndexTemplate(name, title), WRITE_FILE_OPTIONS)

  // 将组件样式拼接到index.scss中
  const importCompStyle = `@import './${name}/style/${name}.scss'`
  const baseStyleContent = readFileSync(basicStylePath, WRITE_FILE_OPTIONS)
  const unionStyleContent = baseStyleContent + '\r\n' + importCompStyle
  baseStyleContent.indexOf(`${name}.scss`) === -1 && writeFileSync(basicStylePath, unionStyleContent, WRITE_FILE_OPTIONS)

  // 将组件拼接到components.ts中
  const importCompFile = `export { default as ${compName} } from './${name}'`
  const baseCompContent = readFileSync(baseCompPath, WRITE_FILE_OPTIONS)
  const unionCompContent = baseCompContent + '\r\n' + importCompFile
  baseCompContent.indexOf(`${compName}`) === -1 && writeFileSync(baseCompPath, unionCompContent, WRITE_FILE_OPTIONS)


  // 创建成功通知
  console.log(
    lightGreen(`
      √组件${name}目录创建成功
    `)
  )
}