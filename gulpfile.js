/**
 * @file
 * Lightship Theme Gulpfile for compiling Sass.
 */

// https://css-tricks.com/gulp-for-beginners/
const gulp = require('gulp');
// Requires the gulp-sass plugin.
const sass = require('gulp-sass');
// Create sass sourcemaps.
const sourcemaps = require('gulp-sourcemaps');
// Delete generated files when needed.
const del = require('del');
// Run a list of tasks in order.
const runSequence = require('run-sequence');
// Used to set whether CSS format is compressed or expanded when compiled.
let style = 'compressed';

gulp.task('sass', () => gulp.src('sass/**/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass({ outputStyle: style })) // Converts Sass to CSS with gulp-sass.
  // .pipe(sourcemaps.write())
  .pipe(gulp.dest('css')));

gulp.task('clean:css', () => del.sync('css/*'));

gulp.task('watch', () => {
  gulp.watch('sass/**/*.scss', ['sass']);
});

// One time build process.
gulp.task('build', () => {
  runSequence('clean:css', 'sass');
});

gulp.task('build-unminified', () => {
  style = 'expanded';
  runSequence('build');
});
