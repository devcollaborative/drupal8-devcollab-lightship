// DevCollab Starter Theme
// https://css-tricks.com/gulp-for-beginners/

var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');
// Create sass sourcemaps
var sourcemaps = require('gulp-sourcemaps');
// Delete generated files when needed
var del = require('del');

var sass_config = {
  includePaths: [
    'node_modules/breakpoint-sass/stylesheets/',
  ]
};

gulp.task('sass', function(){
  return gulp.src('sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass(sass_config).on('error', sass.logError))
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('css'));
});

gulp.task('clean:css', function(){
  return del.sync('css/*');
});

gulp.task('watch', function(){
  gulp.watch('sass/**/*.scss', ['sass']);
});
