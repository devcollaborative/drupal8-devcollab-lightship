// DevCollab Starter Theme
// https://css-tricks.com/gulp-for-beginners/ 

var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');
// Delete generated files when needed 
var del = require('del');

gulp.task('sass', function(){
  return gulp.src('sass/*.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('css'))
});

gulp.task('clean:css', function() {
  return del.sync('css/*');
})

gulp.task('watch', function(){
  gulp.watch('sass/*/*.scss', ['sass']); 
  // Other watchers
})