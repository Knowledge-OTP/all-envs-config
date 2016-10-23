var gulp = require('gulp');
var jsoncombine = require("gulp-jsoncombine");
var conf = require('./conf');

gulp.task('allEnvsConfig', function () {
    gulp.src('src/envs/**/*.json')
        .pipe(jsoncombine("allEnvsConfig.json", function (allEnvStream) {
            var allEnvConfig = {
                ENV: {
                    dev: {},
                    prod: {}
                }
            };

            var keys = Object.keys(allEnvStream);
            var allApps = conf.apps;
            var appRegex = /.+(?=\\)/;

            for (var i = 0; i < keys.length; i++) {
                var result = appRegex.exec(keys[i]);
                var appName = Array.isArray(result) ? result[0] : '';
                if (allApps[appName] && allApps[appName] !== null) {
                    var appKey = allApps[appName];
                    allEnvConfig.ENV.dev[appKey] = allEnvStream[keys[i]].dev.ENV;
                    allEnvConfig.ENV.prod[appKey] = [keys[i]].prod.ENV;
                }
            }

            var allEnvConfigJson = JSON.stringify(allEnvConfig);
            return new Buffer(allEnvConfigJson)
        }))
        .pipe(gulp.dest('dist/'));
});
