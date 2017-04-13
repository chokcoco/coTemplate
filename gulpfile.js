var gulp = require('gulp');
var gutil = require('gulp-util');
var header = require('gulp-header');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var rename = require('gulp-rename');
var browserSync = require('browser-sync');
var pkg = require('./package.json');

gulp.task('build', function () {
    gulp.src('src/**')
        .pipe(gulp.dest('test/'));

    gulp.src('src/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(gulp.dest('output'))
        .pipe(uglify())
        .pipe(rename(function (file){
            file.basename += '.min';
        }))
        .pipe(gulp.dest('output'));
});

gulp.task('server', function () {
    browserSync.init({
        server: {
            baseDir: "."
        },
        ui: {
            port: 8081,
            weinre: {
                port: 9090
            }
        },
        port: 8080,
        startPath: '/test/'
    });
});

gulp.task('watch', ['build', 'server'], function (){
    gulp.watch('src/**', ['build']);
});

gulp.task('default', ['watch']);
