/*
 * Building also requires pandoc (for markdown support)
 * > brew install pandoc
 */
var gulp = require("gulp");
var include = require('gulp-include');
var wrap = require("gulp-wrap");
var rename = require("gulp-rename");
var clean = require('gulp-clean');
var run = require('gulp-run');

gulp.task("clean", function() {
	return gulp.src('public', {read: false})
        .pipe(clean())
});

gulp.task("build-md", ["clean"], function() {
	return gulp.src("md/*.md", {'base': 'md/'})
		.pipe(run('pandoc <%= file.path %>', {silent: true}))
		.pipe(rename(function (path) {
    		path.extname = ".html";
  		}))
		.pipe(gulp.dest("public/"))
});

gulp.task("build-html", ["clean"], function() {
	return gulp.src("html/*.html", {'base': 'src/'})
		.pipe(gulp.dest("public/"))
});

gulp.task("build-wrap", ['build-md', 'build-html'], function() {
	return gulp.src("public/*.html", {'base': 'src/'})
		.pipe(wrap('<section><%= contents %></section>'))
    	.pipe(gulp.dest("public/"))
});

gulp.task("build", ["clean", "build-wrap"], function() {
	return gulp.src('src/*.html')
        .pipe(include() )
        .pipe(gulp.dest("public"))
});

gulp.task("default", ["build"]);