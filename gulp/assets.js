var gulp = require('gulp');

//Copies assets directory into Dist

gulp.task('assets', function () {
  return gulp.src([
    './client/assets/*/*.*'
  ])
    .pipe(gulp.dest('dist'));
});
