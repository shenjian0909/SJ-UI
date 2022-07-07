import { ensureDirSync, writeFileSync } from 'fs-extra'
import { resolve } from 'path'
import { lightBlue, lightGreen } from 'kolorist'
import genCoreTemplate from '../template/core'
import genPropTemplate from '../template/types'
import genStyleTemplate from '../template/style'
import genIndexTemplate from '../template'
export interface MetaComponent {
  name: string
  title: string
}
export function createComponent(meta: MetaComponent) {
  const { name } = meta
  const WRITE_FILE_OPTIONS = 'utf-8'
  // 组件目录
  const compDir = resolve('../src', name)
  // 组件源文件目录，样式目录，测试目录
  const compSrcDir = resolve(compDir, 'src')
  const styleDir = resolve(compDir, 'style')
  const testDir = resolve(compDir, 'test')

  // 创建目录
  ensureDirSync(compSrcDir)
  ensureDirSync(styleDir)
  ensureDirSync(testDir)

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

  // 创建成功通知
  console.log(
    lightGreen(`
      √组件${name}目录创建成功
    `)
  )
}