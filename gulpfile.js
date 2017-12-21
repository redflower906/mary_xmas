var gulp = require('gulp'),
  runsync = require('run-sequence'),
  reqDir = require('require-dir'),
  watch = require('gulp-watch');

// Get all of the gulp scripts from /gulp
reqDir('./gulp', {
  recurse: true
});

// Default Gulp Task
gulp.task('default', function () {
  runsync(
    'clean',
    'assets',
    'styles',
    'scripts',
    'templates'
  )
});

gulp.task('release', function () {
  runsync(
    'clean',
    'assets',
    'styles-release',
    'scripts',
    'templates'
  )
});

gulp.task('watch', function () {
  // Watch Styles
  watch(['client/scss/**/*.scss'], function () {
    runsync('styles');
  });

  // Watch Scripts
  watch(['client/js/*.js'], function () {
    runsync('scripts');
  });

  // Watch Templates
  watch(['client/**.html'], function () {
    runsync('templates');
  });
});
