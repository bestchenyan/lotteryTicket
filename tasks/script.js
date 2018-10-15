/*
 * @Author: lenovo
 * @Date:   2018-10-14 11:40:57
 * @Last Modified by:   lenovo
 * @Last Modified time: 2018-10-15 08:50:28
 */
import gulp from 'gulp'; //引入gulp
import gulpif from 'gulp-if'; //gulp 中做if判断的包
import concat from 'gulp-concat'; //gulp 做文件拼接的
import webpack from 'webpack'; //引入webpack
import gulpWebpack from 'webpack-stream'; //结合webpackstream
import named from 'vinyl-named'; //文件名标识
import livereload from 'gulp-livereload'; //文件修改后，浏览器自动刷新。热更新
import plumber from 'gulp-plumber'; //处理文件信息流
import rename from 'gulp-rename'; //文件重命名
import uglify from 'gulp-uglify'; //处理js 和 css压缩的包
import { log, colors } from 'gulp-util'; //命令行工具中输出的包
import args from './util/args'; //引入命令行参数解析包

gulp.task('script', () => {
    // 文件打开
    return gulp.src(['app/js/index.js'])
        // 错误处理
        .pipe(plumber({
            errorHandle: function() {

            }
        }))
        // 文件名标识
        .pipe(named())
        // webpack编译
        .pipe(gulpWebpack({
            mode: 'development', // 设置mode
            module: {
                rules: [{
                    test: /\.js$/,
                    use: {
                        loader: 'babel-loader',
                    },
                    exclude: '/node_modules/'
                }]
            }
        }), null, (err, stats) => {
            log(`Finished '${colors.cyan('scripts')}'`, stats.toString({
                chunks: false
            }))
        })
        // 编译输出路径
        .pipe(gulp.dest('server/public/js'))
        // 输出cp一份 重命名
        .pipe(rename({
            basename: 'cp',
            extname: '.min.js'
        }))
        // 压缩
        .pipe(uglify({ compress: { properties: false }, output: { 'quote_keys': true } }))
        // 压缩之后生成路径
        .pipe(gulp.dest('server/public/js'))
        // 监听文件 文件变化后自动刷新
        .pipe(gulpif(args.watch, livereload()))

})