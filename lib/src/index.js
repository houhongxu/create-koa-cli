"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const create_1 = require("./commander/create");
const createProject = async (projectName) => await (0, create_1.create)(projectName);
const packageJson = require('../package.json');
function init() {
    commander_1.program.version(packageJson.version, '-v --version');
    commander_1.program.command('create <project-name>').description('Create new project').action(createProject);
    commander_1.program.parse();
}
console.log('---正在搭建---');
createProject('koa-cli').then(() => {
    console.log('---搭建完成---');
    init();
});
