var gulp = require('gulp')
var imagemin = require('gulp-imagemin')
var minifycss = require('gulp-clean-css')
var uglify = require('gulp-uglify')
var rename = require('gulp-rename')
var htmlmin  = require('gulp-htmlmin')
var less = require('gulp-less')
var autoprefixer = require('gulp-autoprefixer')
var watch = require('gulp-watch')
var concat = require('gulp-concat')
var plumber = require('gulp-plumber')
var template = require('gulp-underscore-template')
var babel = require('gulp-babel')
// var babel = require('gulp-babel')


gulp.task('html', function(){
	var htmlSrc = './src/*.html'
	var dest = './dist/'
	gulp.src(htmlSrc)
		.pipe(htmlmin({collapseWhitespace: true,
						minifycss:true,
						minifyjs:true,
						removeComments:true}))
		.pipe(gulp.dest(dest))
		.pipe(livereload())
})



gulp.task('css',function(){
	gulp.src('./src/css/pages/*.css')
		.pipe(autoprefixer({
			browsers:['last 10 versions'],
			cascade: false
		}))
		.pipe(minifycss({compatibility:'ie8'}))
		.pipe(gulp.dest('./dist/css/pages/'))
})

gulp.task('template', function () {
	gulp.src('./src/template/*.html')
		.pipe(htmlmin({collapseWhitespace: true,
						minifycss:true,
						minifyjs:true,
						removeComments:true}))
		.pipe(plumber())
	    .pipe(template())
	    .pipe(concat('templates.js'))
	    .pipe(wrapper({
		    header: 'define(function(require, exports, module){',
		    footer: '});'
	    }))
	    .pipe(gulp.dest('./resources/js/common/'));
})
gulp.task('images', function(){
	gulp.src('./src/img/**/*')
		.pipe(imagemin({
			interlaced:true,
			progressive:true,
			optimizationLevel:5
		}))
		.pipe(gulp.dest('./dist/img'))
})


gulp.task('js',function(){
	gulp.src('./src/js/*.js')
		.pipe(plumber())
		.pipe(babel({
			presets: ['es2015']
		}))
		// .pipe(jshint())
		// .pipe(jshint.reporter('default'))
		// .pipe(babel({
		// 	presets:['es2015']
		// }))
		.pipe(uglify())
		.pipe(gulp.dest('./dist/js/'))
})

gulp.task('clean', function(){
	gulp(['./dist/css','./dist/js','./dist/images'],{read:false})
	.pipe(clean())
})

gulp.task('watch',function(){
	gulp.watch('./src/template/*.html',['template'])
	gulp.watch('./src/js/*.js',['js'])
	
})

gulp.task('concat',function(){
	gulp.src(['./src/js/common/jquery.min.js','./src/js/common/jqPaginator.min.js','./src/js/common/layout.js','./src/js/common/rem.js','./src/js/common/fastclick.js'])
		.pipe(uglify())
		.pipe(concat('public.js'))
		.pipe(gulp.dest('./dist/js/'))
})

// gulp.task('wless',function(){
// 	gulp.watch('./src/less/*.less',['less'])
// })