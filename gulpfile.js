var gulp 	= require('gulp');
var wrench 	= require('wrench');
var del     = require('del');

/**
 *  This will load all js or coffee files in the gulp directory
 *  in order to load all gulp tasks
 */
wrench.readdirSyncRecursive('./gulp').filter(function(file) {
    return (/\.(js|coffee)$/i).test(file);
}).map(function(file) {
    require('./gulp/' + file);
});

gulp.task('dist',['clean:dist','copyEnvs', 'allEnvsConfig', 'copyCategories']);


gulp.task('clean:dist', function () {
  return del([
    'dist/**/*',
    ]);
});  