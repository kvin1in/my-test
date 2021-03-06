var gulp = require('gulp'),
    gutil = require('gulp-util'),
    browserify = require('gulp-browserify'),
    concatCss = require('gulp-concat-css'),
    cleanCSS = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    gulpif = require('gulp-if');
webserver = require('gulp-webserver')
path = require('path');


var src = './process',
    dest = './dist'
environment = 'production';

gulp.task('js', function() {
    return gulp.src(src + '/js/app.js')
        .pipe(browserify())
        .pipe(gulpif(environment === 'production', uglify()))
        .on('error', function(err) {
            console.error('Error!', err.message);
        })
        .pipe(gulp.dest(dest + '/javascript'));
});

gulp.task('html', function() {});

gulp.task('css', function() {
    gulp.src(src + '/css/app.css')
        .pipe(concatCss('app.css', { rebaseUrls: false }))
        .pipe(gulpif(environment === 'production', cleanCSS()))
        .pipe(gulp.dest(dest + '/stylesheets'));
});

gulp.task('watch', function() {
    gulp.watch([src + '/js/**/*', dest + '/data/**/*'], ['js']);
    gulp.watch(src + '/css/*.css', ['css']);
    gulp.watch(dest + '/*.html', ['html']);
});

gulp.task('webserver', ['html', 'css', 'js'], function() {
    gulp.src(dest)
        .pipe(webserver({
            livereload: true,
            open: true
        }));
});

gulp.task('default', ['watch', 'html', 'css', 'js']);