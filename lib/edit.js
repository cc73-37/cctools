const fs = require('fs')
const chalk = require('chalk')

const readJson = async(name) => {
  return new Promise(resolve => {
    fs.readFile(`./${name}/package.json`, (err, data) => {
      if (err) throw err;
      resolve(data.toString())
    })
  })
}
const writeJson = async(name, data) => {
  return new Promise(resolve => {
    const _data = new Uint8Array(Buffer.from(data));
    fs.writeFile(`./${name}/package.json`, data, () => {
      resolve()
    })
  })
}
module.exports.edit = async(name,key,val) => {
  const ora = require('ora')
  // const process = ora(` 生成${key}`)
  // process.start()
  let obj_conf = JSON.parse(await readJson(name))
  obj_conf[key] = val
  await writeJson(name, JSON.stringify(obj_conf, null, '  '))
  // process.succeed()
}