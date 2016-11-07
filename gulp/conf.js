/**
 *  This file contains the variables used in other gulp files
 *  which defines tasks
 *  By design, we only put there very generic config values
 *  which are used in several places to keep good readability
 *  of the tasks
 */

var gutil = require('gulp-util');


exports.apps = {
    act: "ACT",
    sat: "SAT",
    toefl: "TOEFL",
    actDashboard:"ACT_DASHBOARD",
    satDashboard:"SAT_DASHBOARD"
};

exports.errorHandler = function (title, quit) {
    'use strict';

    return function (err) {
        gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
        if (quit) {
            process.exit(1);
        }
        else {
            this.emit('end');
        }
    };
};


