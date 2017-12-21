var gulp = require('gulp');
var preprocess = require('gulp-preprocess');

gulp.task('scripts', function () {
  return gulp.src([
    './client/js/**/*',
  ])
    .pipe(preprocess())
    .pipe(gulp.dest('dist'));
});
