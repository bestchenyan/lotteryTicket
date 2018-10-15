/*
* @Author: lenovo
* @Date:   2018-10-14 12:25:37
* @Last Modified by:   lenovo
* @Last Modified time: 2018-10-14 20:40:13
*/
import gulp from 'gulp';
import gulpif from 'gulp-if';
import gutil from 'gulp-util';
import args from './util/args';

gulp.task('browser',(cb)=>{
	if (!args.watch) return cb();
	gulp.watch('app/**/*.js',['script']);
	gulp.watch('app/**/*.ejs',['pages']);
	gulp.watch('app/**/*.css',['css']);
});