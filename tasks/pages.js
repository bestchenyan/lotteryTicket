/*
* @Author: lenovo
* @Date:   2018-10-14 12:08:19
* @Last Modified by:   lenovo
* @Last Modified time: 2018-10-14 20:12:28
*/
import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';

gulp.task('pages',()=>{
	return gulp.src('app/**/*.ejs')
	.pipe(gulp.dest('server'))
	.pipe(gulpif(args.watch,livereload()))
})