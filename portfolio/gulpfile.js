const gulp = require('gulp');
const sass = require('gulp-sass');
const csso = require('gulp-csso');
const babel = require('gulp-babel');

gulp.task('default', ['scss', 'minify', 'babel']);

// Compile SASS
gulp.task('scss', function() {
    gulp.src('scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'))
});

// Minify CSS
gulp.task('minify', function() {
    return gulp.src('./dist/css/main.css')
        .pipe(csso())
        .pipe(gulp.dest('./dist/css'));
});

// Babel JS
gulp.task('babel', function() {
    gulp.src('dist/js/main.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('dist/js/safe'))
})
