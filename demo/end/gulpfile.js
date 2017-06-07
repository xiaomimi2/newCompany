'use strict';

var gulp     = require('gulp');
var concat   = require('gulp-concat');
var htmlmin  = require('gulp-htmlmin');
var wrapper  = require('gulp-wrapper');
var template = require('gulp-underscore-template');
var watch    = require('gulp-watch');
var plumber  = require('gulp-plumber');

gulp.task('tpl', function() {
	gulp.src('./tpl/pages/**/*.html')
	    .pipe(htmlmin({
		    collapseWhitespace: true,
		    conservativeCollapse: true
	    }))
        .pipe(plumber())
	    .pipe(template())
	    .pipe(concat('templates.js'))
	    .pipe(wrapper({
		    header: 'define(function(require, exports, module){',
		    footer: '});'
	    }))
	    .pipe(gulp.dest('./dist/js/common/'));
});

gulp.task('watch-tpl', function() {
	gulp.watch('./tpl/pages/**/*.html', ['tpl']);
});

gulp.task('default', ['watch-tpl']);
