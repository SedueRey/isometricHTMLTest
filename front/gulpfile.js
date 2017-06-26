'use strict';

var postcss      = require('gulp-postcss');
var gulp         = require('gulp');
var sass         = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
var connect      = require('gulp-connect-php');
var browserSync  = require('browser-sync').create();
var spritesmith = require('gulp.spritesmith');

// Static Server + watching scss/html files

gulp.task('serve', ['sass'], function() {

    browserSync.init({
        injectChanges: true,
        proxy: "localhost/isometricHTMLTest/front/html/"
    });

    gulp.watch('scss/**/*.scss', ['sass']);
    gulp.watch("html/**/*.html").on('change',  browserSync.reload);
    gulp.watch("html/js/*.js").on('change',  browserSync.reload);

});

gulp.task('sass', function () {
    gulp.src('scss/**/*.scss')
    .pipe(sass({sourcemap: false, outputStyle: 'compressed', trace: true}).on('error', sass.logError ) )
    .pipe(postcss([ autoprefixer({ browsers: ['last 4 versions'] }) ]))
    .pipe(gulp.dest('html/css/'))
    .pipe(browserSync.stream());
});

gulp.task('sass:watch', function () {
  gulp.watch('scss/**/*.scss', ['sass']);
});

gulp.task('default', ['sass:watch', 'serve'] );