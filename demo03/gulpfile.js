var gulp = require('gulp'),
    sass = require('gulp-sass');
    minifyCSS = require('gulp-minify-css');

gulp.task('dealCSS', function () {
    gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(minifyCSS())
        .pipe(gulp.dest('build'))
});