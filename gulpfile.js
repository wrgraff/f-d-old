var gulp = require('gulp'),
    sass = require('gulp-sass'),
    livereload = require('gulp-livereload'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify-es').default,
    concat = require('gulp-concat'),
    include = require("gulp-include"),
    nunjucks = require('gulp-nunjucks-render'),
    prettify = require('gulp-html-prettify');

gulp.task('scss', () => {
    return gulp.src('src/scss/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/static/css'))
        .pipe(livereload());
});

gulp.task('njk', () => {
    return gulp.src('src/njk/pages/**/*.njk')
        .pipe(nunjucks({
            path: ['src/njk/layouts']
        }))
        .pipe(prettify({indent_char: ' ', indent_size: 4}))
        // .on('error', console.log)
        .pipe(gulp.dest('dist'))
        .pipe(livereload());
});

gulp.task('js', () => {
    return gulp.src('src/js/app.js')
        .pipe(include())
        // .pipe(uglify())
        .on('error', console.log)
        .pipe(gulp.dest('dist/static/js'))
        .pipe(livereload());
});

gulp.task('default', () => {
    livereload.listen();
    gulp.watch('src/scss/**/*.scss', gulp.series('scss'));
    gulp.watch('src/js/**/*.js', gulp.series('js'));
    gulp.watch('src/njk/**/*.njk', gulp.series('njk'));
});
