var gulp = require('gulp');
var preprocess = require('gulp-preprocess');

gulp.task('templates', function () {
  return gulp.src([
    './client/templates/*.html'
  ])
    .pipe(preprocess())
    .pipe(gulp.dest('dist/'));
});
