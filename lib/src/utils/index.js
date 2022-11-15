"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isObjectEmpty = exports.isArrayEmpty = void 0;
const isArrayEmpty = (arr) => !Array.isArray(arr) || arr.length === 0;
exports.isArrayEmpty = isArrayEmpty;
const isObjectEmpty = (obj) => (0, exports.isArrayEmpty)(Object.keys(obj !== null && obj !== void 0 ? obj : {}));
exports.isObjectEmpty = isObjectEmpty;
