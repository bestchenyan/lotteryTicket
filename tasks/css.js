/*
* @Author: lenovo
* @Date:   2018-10-14 12:11:47
* @Last Modified by:   lenovo
* @Last Modified time: 2018-10-19 09:53:39
*/
var gulp = require('gulp');
var gulpif = require('gulp-if');
var livereload = require('gulp-livereload');
var args = require('./util/args');
gulp.task('css',()=>{
	return gulp.src('app/**/*.css')
	.pipe(gulp.dest('server/public'))
	.pipe(gulpif(args.watch,livereload()))
})