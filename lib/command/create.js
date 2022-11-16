"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const chalk_1 = __importDefault(require("chalk"));
const console_1 = require("console");
const fs_1 = require("fs");
const utils_1 = require("../utils");
async function create(projectName) {
    isFileExist(projectName);
    selectFeature();
    (0, console_1.log)(chalk_1.default.green('---搭建完成---'));
}
exports.create = create;
/**
 * @description:验证当前目录下是否已经存在指定文件，如果存在则退出
 * @param {string} filename
 */
function isFileExist(filename) {
    // 获取文件路径
    const filePath = (0, utils_1.getFilePath)(filename);
    // 若文件存在则退出进程
    if ((0, fs_1.existsSync)(filePath)) {
        (0, console_1.log)(`${filename}已存在`);
        process.exit(1);
    }
}
async function selectFeature() {
    // 输出信息
    (0, console_1.log)(chalk_1.default.blue(`Koa Cli version ${(0, utils_1.getPackageJson)().version}`));
    (0, console_1.log)('请选择所需功能');
    (0, console_1.log)('TODO');
}
