var gulp        = require('gulp');
var less        = require('gulp-less');
var browserSync = require('browser-sync').create();
var useref      = require('gulp-useref');
var uglify      = require('gulp-uglify');
var ngAnnotate  = require('gulp-ng-annotate');
var gulpIf      = require('gulp-if');
var cleanCSS    = require('gulp-clean-css');
var runSequence = require('run-sequence');


// 静态服务器 + 监听 less/html 文件
gulp.task('browserSync', ['less'], function() {
    browserSync.init({
        server: "./dist"
    });
});

// less编译后的css将注入到浏览器里实现更新
gulp.task('less', function() {
    return gulp.src("src/less/*.less")
        .pipe(less())
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.reload({
        		stream: true
        }));
});

gulp.task('watch', function (){
	gulp.watch('src/less/**/*.less', ['less']);
	gulp.watch("./src/**/*.*").on('change', browserSync.reload);
});

gulp.task('docmin', function(){
	return gulp.src('src/*.html')
//		.pipe(gulpIf('controllers/*.js',uglify()))
//		.pipe(gulpIf('css/*.css',cleanCSS()))
		.pipe(useref())
		.pipe(gulp.dest('dist'))
});

gulp.task('cssmin', function () {
    gulp.src('dist/css/style.min.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('ngmin', function () {
    return gulp.src('src/controllers/*.js')
        .pipe(ngAnnotate({single_quotes: true}))
        .pipe(gulp.dest('src/controllers'));
});

gulp.task('jsmin', function () {
    gulp.src('dist/controllers/controllers.min.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/controllers'));
});

gulp.task('build', function (callback) {
	runSequence('less', 'ngmin', 'docmin', 'cssmin', 'jsmin',
	    callback
	)
})

gulp.task('default', function (callback) {
	runSequence(['less','browserSync'], 'watch',
    		callback
	)
})