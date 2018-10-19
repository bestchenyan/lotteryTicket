/*
* @Author: lenovo
* @Date:   2018-10-14 12:36:42
* @Last Modified by:   lenovo
* @Last Modified time: 2018-10-19 09:51:41
*/
var gulp = require('gulp');
var gulpSequence = require('gulp-sequence');
gulp.task('bulid',gulpSequence('clean','css','pages','scripts',['browser','serve']));