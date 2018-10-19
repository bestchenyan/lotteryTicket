/*
 * @Author: lenovo
 * @Date:   2018-10-14 11:40:57
 * @Last Modified by:   lenovo
 * @Last Modified time: 2018-10-19 14:47:45
 */
var gulp = require('gulp');
var gulpif = require('gulp-if');
var concat = require('gulp-concat');
var webpack = require('webpack');
var webpackStream = require('webpack-stream');
var named = require('vinyl-named');
var livereload = require('gulp-livereload');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var { log, colors } = require('gulp-util');
var args = require('./util/args');

gulp.task('scripts', () => {
    // 文件打开
    return gulp.src(['app/js/index.js'])
        // 错误处理
        .pipe(plumber({
            errorHandle: function() {

            }
        }))
        // 文件名标识
        .pipe(named())
        // webpack打包编译
        .pipe(webpackStream({
            module: {
                rules: [{
                    test: /\.m?js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                    }
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