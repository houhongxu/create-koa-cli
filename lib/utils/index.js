"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkNodeVersion = exports.getFilePath = exports.writeJsonFile = exports.readJsonFile = exports.getPackageJson = exports.isObjectEmpty = exports.isArrayEmpty = void 0;
const fs_1 = require("fs");
const path_1 = require("path");
const isArrayEmpty = (arr) => !Array.isArray(arr) || arr.length === 0;
exports.isArrayEmpty = isArrayEmpty;
const isObjectEmpty = (obj) => (0, exports.isArrayEmpty)(Object.keys(obj ?? {}));
exports.isObjectEmpty = isObjectEmpty;
/**
 * @description: 读取package.json 文件
 */
function getPackageJson() {
    return JSON.parse((0, fs_1.readFileSync)((0, path_1.resolve)(__dirname, '../../package.json'), { encoding: 'utf-8', flag: 'r' }));
}
exports.getPackageJson = getPackageJson;
/**
 * @description: 读取指定路径下 json 文件
 * @param {string} filename
 */
function readJsonFile(filename) {
    return JSON.parse((0, fs_1.readFileSync)(filename, { encoding: 'utf-8', flag: 'r' }));
}
exports.readJsonFile = readJsonFile;
/**
 * @description: 覆写指定路径下的 json 文件
 * @param {string} filename
 * @param {T} content
 */
function writeJsonFile(filename, content) {
    (0, fs_1.writeFileSync)(filename, JSON.stringify(content, null, 2));
}
exports.writeJsonFile = writeJsonFile;
/**
 * @description: 获取文件绝对路径
 * @param {string} fileName
 */
function getFilePath(fileName) {
    return (0, path_1.resolve)(process.cwd(), fileName);
}
exports.getFilePath = getFilePath;
/**
 * @description: 如果node版本小于14则提醒并退出
 */
function checkNodeVersion() {
    const currentNodeVersion = process.versions.node;
    const semver = currentNodeVersion.split('.');
    const major = semver[0];
    if (parseInt(major) < 14) {
        console.error(`当前node版本为${currentNodeVersion}，请升级node版本到14或以上`);
        process.exit(1);
    }
}
exports.checkNodeVersion = checkNodeVersion;
