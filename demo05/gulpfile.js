var gulp = require('gulp'),
    sass = require('gulp-sass');
    minifyCSS = require('gulp-minify-css');
    connect = require('gulp-connect');

gulp.task('dealCSS', function () {
    gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(minifyCSS())
        .pipe(gulp.dest('build'))
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch('scss/*.scss', ['dealCSS']);
});


gulp.task('connect', function () {
    connect.server({
        livereload: true
    });
});

gulp.task('livereload', [ 'connect', 'watch']);