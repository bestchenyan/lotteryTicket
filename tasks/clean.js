/*
* @Author: lenovo
* @Date:   2018-10-14 12:32:40
* @Last Modified by:   lenovo
* @Last Modified time: 2018-10-19 09:52:30
*/
var gulp = require('gulp');
var del = require('del');
var args = require('./util/args');
gulp.task('clean',()=>{
	return del(['server/public','server/views'])
})