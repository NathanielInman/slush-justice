// Load plugins
var gulp     = require('gulp'),
    semver   = require('semver'),
    bump     = require('gulp-bump'),
    git      = require('gulp-git'),
    tag      = require('gulp-tag-version');

var inc = function (importance) {
  return gulp.src(['./package.json'])
    .pipe(bump({type: importance}))
    .pipe(gulp.dest('./'))
    .pipe(git.commit('Release v' + semver.inc(
      require(__dirname + '/package.json').version,
      importance)))
    .pipe(tag())
    .pipe(git.push('origin', 'master', {args: '--tags'}));
};

/* Version bumping ------------------------------------------------------- */
gulp.task('patch', ['lint'], function () { return inc('patch'); });
gulp.task('feature', ['lint'], function () { return inc('minor'); });
gulp.task('release', ['lint'], function () { return inc('major'); });
