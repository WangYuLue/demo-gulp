var gulp = require('gulp'),
    uglify = require('gulp-uglify');

gulp.task('minify', function () {
    console.log("js文件夹里的文件正在重新编译...")
    gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('build'))
});

gulp.task('watch', function () {
    gulp.watch('js/*.js', ['minify']);
});
