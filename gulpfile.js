var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var less = require('gulp-less');
var babel = require('gulp-babel');
var browserSync = require('browser-sync').create();

gulp.task('less',function(){
    gulp.src('public/less/*.less')
        .pipe(less())
        .pipe(gulp.dest('public/css'))
        autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        })
        .pipe(gulp.dest('public/css'))
        .pipe(browserSync.stream())
})
gulp.task('html',function(){
    gulp.src('public/*.html')
    .pipe(liverload({reloadPage:'index.html'}))
})
gulp.task('serve',['less'],function(){
    browserSync.init({
        server: "./public"
    });
    gulp.watch('public/less/*.less',['less']);
    gulp.watch('public/*/*.*').on('change',browserSync.reload);
    gulp.watch('public/*.*').on('change',browserSync.reload);
})

gulp.task('watch',function(){
    gulp.watch('public/less/*.less',['less']);
})
