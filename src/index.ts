import chalk from 'chalk'
import { program } from 'commander'
import { log } from 'console'
import { checkNodeVersion, getPackageJson } from 'utils'
import { create } from 'command'

checkNodeVersion()

log(chalk.green('---开始搭建---'))

program.version(getPackageJson().version, '-v --version', 'output the version number 显示版本号')

program
  .command('create', { isDefault: true })
  .argument('[project-name]', 'project-name 项目名称', 'koa-cli')
  .description('create new project 创建新项目')
  .action((projectName) => {
    create(projectName)
  })

program.parse()
