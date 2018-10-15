/*
* @Author: lenovo
* @Date:   2018-10-14 12:11:47
* @Last Modified by:   lenovo
* @Last Modified time: 2018-10-15 08:49:20
*/
import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';

gulp.task('css',()=>{
	return gulp.src('app/**/*.css')
	.pipe(gulp.dest('server/public'))
	.pipe(gulpif(args.watch,livereload()))
})