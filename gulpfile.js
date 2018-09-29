var gulp = require('gulp'),
    sass = require('gulp-sass'),
    livereload = require('gulp-livereload');

gulp.task('sass', function () {
    return gulp.src('./sass/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'))
        .pipe(livereload());
});
gulp.task('html', function () {
    return gulp.src('*.html').pipe(livereload());
});

gulp.task('sass:watch', function () {
    livereload.listen();
    gulp.watch(['./sass/**/*.scss', './sass/*/*.scss'], ['sass']);
    gulp.watch(['./**/*.html'], ['html']);
});
