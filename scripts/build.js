const path = require('path')
const fs = require('fs')
const vue = require('@vitejs/plugin-vue')
const vueJsx = require('@vitejs/plugin-vue-jsx')
const fsExtra = require('fs-extra')
// 1.引入vite中的build， 将来用于创建
const { defineConfig, build } = require('vite')
const version = require('../package.json').version

// 基础配置
const baseConfig = defineConfig({
  configFile: false,
  publicDir: false,
  plugins: [vue(), vueJsx()]
})
// 入口文件
const entryFile = path.resolve(__dirname, './entry.ts')
// 输出目录
const outputDir = path.resolve(__dirname, '../build')

// 组件目录
const compDir = path.resolve(__dirname, '../src')

// readme模板
const tempReadmeFile = path.resolve(__dirname, './README.md')

// rollup配置
const rollupOptions = {
  // 外置
  external: ['vue', 'vue-router'],
  output: {
    globals: {
      vue: 'Vue'
    }
  }
}

// 生成package.json
const createPackageJson = (name) => {
  // 预设package.json内容
  const fileStr = `{
    "name": "${ name ? name: 'jacksj-ui'}",
    "version": "${version}",
    "main": "${name ? 'index.umd.js' : 'sj-ui.umd.js'}",
    "module": "${name ? 'index.es.js' : 'sj-ui.es.js'}",
    "author": "sj",
    "github": "https://github.com/shenjian0909/SJ-UI",
    "description": "组件库",
    "repository": {
      "type": "git",
      "url": ""
    },
    "keywords": ["vue3", "组件库", "ts"],
    "license": "ISC"
  }`
  if (name) { // 按需打包
    fsExtra.outputFile(path.resolve(outputDir, `components/${name}/package.json`), fileStr, 'utf-8')
  } else { // 全量打包
    fsExtra.outputFile(path.resolve(outputDir, 'package.json'), fileStr, 'utf-8')
  }
}

// 生成readMe文件
const createReadmeFile = () => {
  fsExtra.copySync(tempReadmeFile, `${outputDir}/README.md`)
}


// 执行创建
// 全量构建
const buildAll = async () => {
  await build(defineConfig({
    ...baseConfig,
    build: {
      rollupOptions,
      lib: {
        entry: entryFile,
        name: 'sj-ui',
        fileName: 'sj-ui',
        formats: ['es', 'umd']
      },
      outDir: outputDir
    }
  }))
  createPackageJson()
}
// 按需构建
const buildSingle = async (name) => {
  await build(defineConfig({
    ...baseConfig,
    build: {
      rollupOptions,
      lib: {
        entry: path.resolve(compDir, name),
        name: 'index',
        fileName: 'index',
        formats: ['es', 'umd']
      },
      outDir: path.resolve(outputDir, `components/${name}`)
    }
  }))
  createPackageJson(name)
}

const buildLib = async () => {
  await buildAll()
  createReadmeFile()
  fs.readdirSync(compDir).filter(name => {
    // 只需要目录不要文件，且里面包含index.ts
    const componentDir = path.resolve(compDir, name)
    const isDir = fs.lstatSync(componentDir).isDirectory()
    return isDir && fs.readdirSync(componentDir).includes('index.ts')
  }).forEach(async name => {
    await buildSingle(name)
  })
}

buildLib()