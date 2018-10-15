/*
 * @Author: lenovo
 * @Date:   2018-10-14 11:25:47
 * @Last Modified by:   lenovo
 * @Last Modified time: 2018-10-14 22:51:33
 */
import yargs from 'yargs';

const args = yargs
    // 区分是线上还是开发环境，默认false 开发环境
    .option('production', {
        boolean: true,
        default: false,
        describe: 'min all script'
    })
    // 是否监听 修改的文件 我改了 js、css是否需要自动编译
    .option('watch', {
        boolean: true,
        default: false,
        describe: 'watch all files'
    })
    // 是否详细输出日志
    .option('verbose', {
        boolean: true,
        default: false,
        describe: 'log'
    })
    // 强制生成sourcemaps
    .option('sourcemaps', {
        describe: 'force the creation of sourcemaps'
    })
    // 服务器端口
    .option('port', {
        string: true,
        default: 8080,
        describe: 'server port'
    })

    .argv
export default args;