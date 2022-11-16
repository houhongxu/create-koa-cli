"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const commander_1 = require("commander");
const console_1 = require("console");
const utils_1 = require("./utils");
const command_1 = require("./command");
(0, utils_1.checkNodeVersion)();
(0, console_1.log)(chalk_1.default.green('---开始搭建---'));
commander_1.program.version((0, utils_1.getPackageJson)().version, '-v --version');
commander_1.program
    .command('create', { isDefault: true })
    .argument('[project-name]', 'project-name 项目名称', 'koa-cli')
    .description('create new project 创建新项目')
    .action((projectName) => {
    (0, command_1.create)(projectName);
});
commander_1.program.parse();
