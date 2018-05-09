var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync=require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    /*babel = require('gulp-babel'),*/
    uglify= require('gulp-uglify'),
    concat = require('gulp-concat');    

    gulp.task("sass",function(){
    	return gulp.src('./resource/assets/sass/travel/**/*.scss')
    	.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer({
             browsers: ['last 2 versions'],
            cascade: false
        }))
    	.pipe(concat('travel.min.css'))
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write('../maps'))
        .pipe(gulp.dest('./public/assets/css')); 
        
    });

    gulp.task('script',function(){  
        return gulp.src("./resource/assets/js/tr/**/*.js")  
       /*.pipe(babel({
        presets:['es2015']
        
       }))*/
       .pipe(uglify())
       .pipe(concat('travel.min.js'))       
       .pipe(gulp.dest("./public/assets/js"));

         });


    gulp.task('serve',function(){
         browserSync.init({
         	server:{
         		baseDir:"./public/"
         	}
         });	
    gulp.task('watch', function() {
    gulp.watch("./resource/assets/sass/**/*.scss",['sass'])
    gulp.watch("./resource/assets/js/*.js",['script'])

    gulp.watch("./public/assets/css/**/*.css").on('change', browserSync.reload)
    gulp.watch("./public/assets/js/*.js").on('change', browserSync.reload)

    gulp.watch("*.html").on('change', browserSync.reload);     
     
});
});    