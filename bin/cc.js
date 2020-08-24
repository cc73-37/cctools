#!/usr/bin/env node
 // console.log('cli ..... kkb')
const program = require('commander')
program.version(require('../package.json').version)

program.command('init <name>').description('创建项目并下载依赖').action(require('../lib/init'))

// program.command('edit <name>').description('修改项目名称').action(require('../lib/edit.js'))

program.parse(program.argv)