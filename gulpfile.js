const gulp = require('gulp');
const babel = require('gulp-babel');
const watch = require('gulp-watch');
const concat = require('gulp-concat');


gulp.task('scripts', function() {
  	var src = watch('./scripts/*.js', function(){
  		gulp.src(
	  	[
	  		'./scripts/object.js',
	  		'./scripts/canvas.js',
	  		'./scripts/player.js',
	  		'./scripts/index.js'
	  	])
	    .pipe(concat('all.js'))
	    .pipe(babel({
	        presets: ['es2015']
	    }))
	    .pipe(gulp.dest('./lib/'))

	    });
});
