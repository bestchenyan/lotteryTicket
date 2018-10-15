/*
* @Author: lenovo
* @Date:   2018-10-14 12:32:40
* @Last Modified by:   lenovo
* @Last Modified time: 2018-10-14 12:34:26
*/
import gulp from 'gulp';
import del from 'del';
import args from './util/args';

gulp.task('clean',()=>{
	return del(['server/public','server/views'])
})