var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var watch = require('gulp-watch');

gulp.task('autoPrefix', function () {
    return gulp.src('src/style.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
  var files = 'src/style.css';
  gulp.watch(files, ['autoPrefix']);
});
