/*
* @Author: lenovo
* @Date:   2018-10-14 12:08:19
* @Last Modified by:   lenovo
* @Last Modified time: 2018-10-19 09:54:55
*/
var gulp = require('gulp');
var gulpif = require('gulp-if');
var livereload = require('gulp-livereload');
var args = require('./util/args');
gulp.task('pages',()=>{
	return gulp.src('app/**/*.ejs')
	.pipe(gulp.dest('server'))
	.pipe(gulpif(args.watch,livereload()))
})