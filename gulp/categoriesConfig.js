var gulp = require('gulp');
var jsoncombine = require("gulp-jsoncombine");
var conf = require('./conf');
var gutil = require('gulp-util');
var path = require('path');

gulp.task('categoriesConfig', function () {
    gulp.src('src/categoriesMap/**/*.json')
        .pipe(jsoncombine("allEnvsConfig.json", function (categoriesMapStream) {

            var keys = Object.keys(categoriesMapStream);
            var allApps = conf.apps;
            
            for (var i = 0; i < keys.length; i++) {
                var appName =  path.parse(keys[i]).dir;
                // gutil.log('appName=' + appName);
                if (allApps[appName] && allApps[appName] !== null) {
                    var appKey = allApps[appName];
                    // gutil.log('appKey='+ appKey);
                    allEnvConfig.AllEnvs.dev[appKey] = allEnvStream[keys[i]].dev.ENV;
                    allEnvConfig.AllEnvs.prod[appKey] = allEnvStream[keys[i]].prod.ENV;
                }
                else{
                    gutil.log('appKey is not configured !!')
                }
            }

            var allEnvConfigJson = JSON.stringify(allEnvConfig);
            return new Buffer(allEnvConfigJson)
        }))
        .pipe(gulp.dest('dist/'));
});
