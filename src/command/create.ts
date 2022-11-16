import chalk from 'chalk'
import { clear, log } from 'console'
import { existsSync } from 'fs'
import { getFilePath, getPackageJson } from 'utils'

export async function create(projectName: string): Promise<void> {
  isFileExist(projectName)
  selectFeature()

  log(chalk.green('---搭建完成---'))
}

/**
 * @description:验证当前目录下是否已经存在指定文件，如果存在则退出
 * @param {string} filename
 */
function isFileExist(filename: string) {
  // 获取文件路径
  const filePath = getFilePath(filename)

  // 若文件存在则退出进程
  if (existsSync(filePath)) {
    log(`${filename}已存在`)
    process.exit(1)
  }
}

async function selectFeature() {
  // 输出信息
  log(chalk.blue(`Koa Cli version ${getPackageJson().version}`))
  log('请选择所需功能')
  log('TODO')
}
