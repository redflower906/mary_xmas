var gulp = require('gulp'),
  cleanCSS = require('gulp-clean-css'),
  sass = require('gulp-sass'),
  srcMap = require('gulp-sourcemaps');

// Generates a source map and minified css from Sass, places files in Dist

gulp.task('font-awesome', function () {
  return gulp.src('./client/scss/font-awesome/scss/font-awesome.scss')
    .pipe(gulp.dest('dist'));
});
gulp.task('images', function () {
  return gulp.src('./client/assets/images/**.*')
    .pipe(gulp.dest('dist/assets/images'));
});

gulp.task('styles', function () {
  return gulp.src('./client/scss/app.scss')
    .pipe(srcMap.init())
    .pipe(sass({ outputStyle: 'compact', sourceMap: true }).on('error', sass.logError))
    .pipe(srcMap.write())
    .pipe(cleanCSS({
      spaceAfterClosingBracket: true
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('styles-release', function () {
  return gulp.src('./client/scss/app.scss')
    .pipe(srcMap.init())
    .pipe(sass({ outputStyle: 'expanded', sourceMap: true }).on('error', sass.logError))
    .pipe(srcMap.write())
    .pipe(cleanCSS({
      spaceAfterClosingBracket: true
    }))
    .pipe(gulp.dest('dist'));
});
