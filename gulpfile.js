var gulp = require('gulp');
var serve = require('gulp-serve');
var history = require('connect-history-api-fallback');
 
gulp.task('serve', serve({
    middleware: history()
}));
