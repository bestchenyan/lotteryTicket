/*
* @Author: lenovo
* @Date:   2018-10-14 12:36:42
* @Last Modified by:   lenovo
* @Last Modified time: 2018-10-14 22:45:13
*/
import gulp from 'gulp';
import gulpSequence from 'gulp-sequence';

gulp.task('bulid',gulpSequence('clean','css','pages','script',['browser','serve']));