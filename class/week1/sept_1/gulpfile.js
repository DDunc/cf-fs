'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var gulpMocha = require('gulp-mocha');

gulp.task('jshint', function(){  //first parameter defines task
	return gulp.src(['index.js', 'bin/greet', 'test/**/*.js', 'lib/**/*.js', 'gulpfile.js']) //**/* just looks at everything in those folders that ends in js.
	.pipe(jshint())
	.pipe(jshint.reporter('default'));  //pipe returns stream... TBA, jshint is a function run it within
});

gulp.task('test', function(){
	return gulp.src('test/**/*test.js')
	.pipe(gulpMocha({reporter: 'nyan'}))
});

gulp.task('default', ['jshint', 'test']);