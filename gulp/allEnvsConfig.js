var gulp = require('gulp');
var jsoncombine = require("gulp-jsoncombine");
var conf = require('./conf');
var gutil = require('gulp-util');
var path = require('path');

gulp.task('allEnvsConfig', function () {
    gulp.src('src/envs/**/*.json')
        .pipe(jsoncombine("allEnvsConfig.json", function (allEnvStream) {
            var allEnvConfig = {
                AllEnvs: {
                    dev: {},
                    prod: {}
                }
            };

            var keys = Object.keys(allEnvStream);
            var allApps = conf.apps;
            
            for (var i = 0; i < keys.length; i++) {
                var appName =  path.parse(keys[i]).dir;
                if (allApps[appName] && allApps[appName] !== null) {
                    var appKey = allApps[appName];
                    allEnvConfig.AllEnvs.dev[appKey] = allEnvStream[keys[i]].dev.ENV;
                    allEnvConfig.AllEnvs.prod[appKey] = allEnvStream[keys[i]].prod.ENV;
                }
            }

            var allEnvConfigJson = JSON.stringify(allEnvConfig);
            return new Buffer(allEnvConfigJson)
        }))
        .pipe(gulp.dest('dist/'));
});
