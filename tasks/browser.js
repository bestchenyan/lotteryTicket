/*
* @Author: lenovo
* @Date:   2018-10-14 12:25:37
* @Last Modified by:   lenovo
* @Last Modified time: 2018-10-19 11:33:13
*/
var gulp = require('gulp');
var gulpif = require('gulp-if');
var gutil =  require('gulp-util');
var args = require('./util/args');

gulp.task('browser',(cb)=>{
	// if (!args.watch) return cb();//这里好像不影响，以防万一我也注释了
	gulp.watch('app/**/*.js',['scripts']);
	gulp.watch('app/**/*.ejs',['pages']);
	gulp.watch('app/**/*.css',['css']);
});