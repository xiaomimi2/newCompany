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
		// .pipe(jshint())
		// .pipe(jshint.reporter('default'))
		// .pipe(babel({
		// 	presets:['es2015']
		// }))
		.pipe(uglify())
		.pipe(gulp.dest('./dist/js'))
})

gulp.task('clean', function(){
	gulp(['./dist/css','./dist/js','./dist/images'],{read:false})
	.pipe(clean())
})

gulp.task('watch',function(){
	gulp.watch('./src/css/pages/*.css',['css'])
	
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