const { promisify } = require('util')
const chalk = require('chalk')
const log = content => console.log(chalk.red(content))

const spawn = async(...args) => {
  const { spawn } = require('child_process');
  return new Promise(resolve => {
    const proc = spawn(...args)
      // proc.stdout.pipe(process.stdout)
      // proc.stderr.pipe(process.stderr)
    proc.on('close', () => {
      resolve()
    })
  })
}
module.exports.setup = async(name) => {
  const ora = require('ora')
  const setup_process = ora(` 安装依赖`)
  setup_process.start()
  let cmdName = process.platform === 'win32' ? 'cnpm.cmd' : 'cnpm'
  await spawn(cmdName, ['install'], { cwd: `./${name}` })
  setup_process.succeed()
}