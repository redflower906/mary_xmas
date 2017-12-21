var gulp = require('gulp'),
  del = require('del');

// Deletes dist directory

gulp.task('clean', function () {
  return del.sync([
    'dist/'
  ]);
});
