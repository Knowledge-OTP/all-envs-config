var gulp = require('gulp');

gulp.task('copyEnvs', function () {
    return gulp.src('src/envs/**/*.json')
        .pipe(gulp.dest('dist'));
});


gulp.task('copyCategories', function () {
    return gulp.src('src/categoriesMap/**/*.json')
        .pipe(gulp.dest('dist'));
});
