var gulp = require('gulp'),
    uglify = require('gulp-uglify');
    jshint = require('gulp-jshint');
    concat = require('gulp-concat');

gulp.task('dealJS', function () {
    gulp.src('js/*.js')
         .pipe(jshint())
         .pipe(jshint.reporter('default'))
         .pipe(uglify())
         .pipe(concat('app.js'))
         .pipe(gulp.dest('build'));
});