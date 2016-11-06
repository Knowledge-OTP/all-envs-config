var gulp = require('gulp');

gulp.task('copyEnvs', function () {
    return gulp.src('src/envs/**/*.json')
        .pipe(gulp.dest('dist'));
});
