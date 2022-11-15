"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
async function create(projectName) {
    isFileExist(projectName);
}
exports.create = create;
function isFileExist(filename) {
    console.log('create' + filename);
}
