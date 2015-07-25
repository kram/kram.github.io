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
var concat = require('gulp-concat');
var fileinclude = require('gulp-file-include');
var watch = require('gulp-watch');

gulp.task("clean", function() {
	return gulp.src(['build', 'pubilc'], {read: false})
        .pipe(clean())
});

gulp.task("build-md", ["clean"], function() {
	return gulp.src("md/*.md", {'base': 'md/'})
		.pipe(run('pandoc <%= file.path %>', {silent: true}))
		.pipe(rename(function (path) {
    		path.extname = ".html";
  		}))
		.pipe(gulp.dest("build/pages/"))
});

gulp.task("build-wrap", ['build-md'], function() {
	return gulp.src("build/pages/*.html", {'base': 'build/pages/'})
		// .pipe(wrap('<section><%= contents %></section>'))
    	.pipe(gulp.dest("build/pages/"))
});

gulp.task("combind-pages", ["build-wrap"], function() {
	return gulp.src("build/pages/*.html", {'base': 'build/pages/'})
		.pipe(concat("pages.html"))
		.pipe(gulp.dest("build/"))
});

gulp.task("templates", ["combind-pages"], function() {
	gulp.src("template/*", {'base': 'template/'})
		.pipe(fileinclude({
			prefix: '@@',
			basepath: 'build/'
		}))
		.pipe(rename("index.html"))
		.pipe(gulp.dest('public/'))
});

gulp.task("css", function() {
	return gulp.src(["css/*", "images/*"], {'base': './'})
		.pipe(gulp.dest('public/'))
});

gulp.task("build", ["clean", "templates", "css"]);

gulp.task("default", ["build"]);

gulp.task("watch", ["build"], function() {
	gulp.watch('**/*', ["build"]);
});