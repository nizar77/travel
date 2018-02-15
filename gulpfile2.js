var gulp =require('gulp'),
    htmlmin = require('gulp-htmlmin'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify');


// Minify HTML files
gulp.task('minifyHTML', function() {
 
 return gulp.src('./*.html')
  // Running htmlmin plugin
  .pipe(htmlmin({collapseWhitespace: true, removeComments: true}))
  // Specifying destination folder where will be copied processed files
  .pipe(gulp.dest('dist'))
 });

// Compile sass to CSS
gulp.task('sass', function() {
 // Specifying source folder and file (I use one main file with @import)
 return gulp.src('./resource/assets/sass/main.scss')
  // Initiate sourcemaps plugin (if not used, skip this)
  .pipe(sourcemaps.init())
  // Running sass plugin – it will compress output code and log any errors
  .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
  // Finish work of sourcemaps plugin (again, if not used, skip this)
  .pipe(sourcemaps.write('.'))
  // Specifying destination folder where will be copied processed files
  .pipe(gulp.dest('./public/assets/css'));
});

// Minify JavaScript files
gulp.task('minifyJS', function() {
 // Specifying source folder and file
 return gulp.src('./resource/assets/js/main.js')
  // Running uglify plugin
  .pipe(uglify())
  // Specifying destination folder where will be copied processed files
  .pipe(gulp.dest('./public/assets/js'));
});

// Watch for changes
gulp.task('watch', function(){
 gulp.watch('./resource/assets/sass/**/*.scss',['sass']);
});

// Automate tasks
gulp.task('default', ['minifyHTML', 'sass', 'minifyJS'], function() {});

