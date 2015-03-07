var gulp = require('gulp'),
    connect = require('gulp-connect');


gulp.task('webserver', function() {
    connect.server({
        livereload: true,
        root: 'public'
    });
});


gulp.task('watch', function() {
    gulp.watch('./public/css/*.css', ['css']);
    gulp.watch('./public/*.html', ['html']);
    gulp.watch('.public//js/*.js', ['js']);
});

gulp.task('html', function() {
    gulp.src('./public/*.html')
        .pipe(connect.reload());
});

gulp.task('css', function() {
    gulp.src('./public/css/*.css')
        .pipe(connect.reload());
});

gulp.task('js', function() {
    gulp.src('./public/js/*.js')
        .pipe(connect.reload());
});

gulp.task('default', ['webserver', 'watch', 'js']);
