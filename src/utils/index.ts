export const isArrayEmpty = (arr?: any[]) => !Array.isArray(arr) || arr.length === 0
export const isObjectEmpty = (obj?: object) => isArrayEmpty(Object.keys(obj ?? {}))
