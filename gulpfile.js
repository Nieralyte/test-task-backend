// for single build and run: `gulp build run`
// for auto rebuild and rerun: `gulp build run --watch`

'use strict'

var gulp = require('gulp')
var spawn = require('child_process').spawn
var gutil = require('gulp-util')
var path = require('path')


var babelCmdArgs = [
  'src',
  '--out-dir', 'dist',
  '--presets', 'es2015,stage-0',
  '--copy-files',
]


if (gutil.env.watch) {
  gulp.task('build', ['_compile-watch'])
  gulp.task('run', ['_run-watch'])
} else {
  gulp.task('build', ['_compile'])
  gulp.task('run', ['_run'])
}


gulp.task('_compile', function(cb) {
  // note: `.cmd` extensions are required under Windows due to Node limitation:
  
  var cmd = path.resolve('.', 'node_modules/.bin/babel.cmd')
  
  spawn(cmd, babelCmdArgs, {stdio: 'inherit'})
    .on('close', cb)
    .on('error', cb)
})

gulp.task('_run', ['_compile'], function(cb) {
  spawn('node', ['dist/index.js'], {stdio: 'inherit'})
    .on('close', cb)
    .on('error', cb)
})


gulp.task('_compile-watch', function(cb) {
  var cmd = path.resolve('.', 'node_modules/.bin/babel.cmd')
  
  spawn(cmd, babelCmdArgs.concat('--watch'), {stdio: 'inherit'})
    .on('error', cb)
})

gulp.task('_run-watch', ['_compile'], function(cb) {
  var cmd = path.resolve('.', 'node_modules/.bin/nodemon.cmd')
  
  spawn(cmd, ['dist/index.js', '--watch', 'dist'], {stdio: 'inherit'})
    .on('error', cb)
})
