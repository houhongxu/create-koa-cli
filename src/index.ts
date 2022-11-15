import { program } from 'commander'
import { create } from './commander/create'

const createProject = async (projectName: string) => await create(projectName)

const packageJson = require('../package.json')

function init() {
  program.version(packageJson.version, '-v --version')

  program.command('create <project-name>').description('Create new project').action(createProject)

  program.parse()
}

console.log('---正在搭建---')

createProject('koa-cli').then(() => {
  console.log('---搭建完成---')

  init()
})
