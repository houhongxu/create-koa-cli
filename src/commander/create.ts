export async function create(projectName: string): Promise<void> {
  isFileExist(projectName)
}

function isFileExist(filename: string) {
  console.log('create' + filename)
}
