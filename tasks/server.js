/*
 * @Author: lenovo
 * @Date:   2018-10-14 12:15:30
 * @Last Modified by:   lenovo
 * @Last Modified time: 2018-10-19 11:33:16
 */
var gulp = require('gulp');
var gulpif = require('gulp-if');
var liveserver = require('gulp-live-server');
var args = require('./util/args');
gulp.task('serve',(cb)=>{
  // if(!args.watch) return cb();//这里跟视频中不一样，要注释掉才能跑服务
  var server = liveserver.new(['--harmony','server/bin/www']);
  server.start();

  gulp.watch(['server/public/**/*.js','server/views/**/*.ejs'],function(file){
    server.notify.apply(server,[file]);
  });
  gulp.watch(['server/routes/**/*.js','server/app.js'],function(){
    server.start.bind(server)()
  });
})
