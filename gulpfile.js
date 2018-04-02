const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
 
gulp.task('default', () =>
    gulp.src('static/img/*')
        .pipe(imagemin([
        	imagemin.optipng({optimizationLevel: 7}),
       	]))
        .pipe(gulp.dest('docs/img'))
);