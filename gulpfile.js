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

var fs = require('fs');
var path = require('path');
var merge = require('merge-stream');

function getFolders(dir) {
    return fs.readdirSync(dir)
      .filter(function(file) {
        return fs.statSync(path.join(dir, file)).isDirectory();
      });
}

gulp.task("clean", function() {
	return gulp.src(['build', 'pubilc'], {read: false})
        .pipe(clean())
});

gulp.task("build-md", ["clean"], function() {
	return gulp.src("md/**/*.md", {'base': 'md/'})
		.pipe(run('pandoc -f markdown_github -t html <%= file.path %>', {silent: true}))
		.pipe(rename(function (path) {
    		path.extname = ".html";
  		}))
		.pipe(gulp.dest("build/"))
});

gulp.task("build-wrap", ['build-md'], function() {
	return gulp.src("build/**/*.html", {'base': 'build/'})
		.pipe(wrap('<section><%= contents %></section>'))
    	.pipe(gulp.dest("build/"))
});

gulp.task("combind-pages", ["build-wrap"], function() {
	var folders = getFolders("build");

	// concat into foldername.html
	var tasks = folders.map(function(folder) {
		return gulp.src(path.join("build/", folder, '/*.html'))
			.pipe(concat(folder + '.html'))
			.pipe(gulp.dest("build/"));
	});

	return merge(tasks);
});

gulp.task("templates", ["combind-pages"], function() {
	gulp.src("template/*.html", {'base': 'template/'})
		.pipe(fileinclude({
			prefix: '@@',
			basepath: './'
		}))
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