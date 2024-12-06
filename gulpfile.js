import gulp from 'gulp';
import zip from 'gulp-zip';
// const tar = require ('gulp-tar');
// const gzip = require ('gulp-gzip');
import * as sass from 'sass';
import gulpSass from 'gulp-sass';
import cleanCSS from 'gulp-clean-css';

const sassCompile = gulpSass(sass);
let options = {
    sass_path: './css/',
    css_path: './css/'
};

let scssFiles = [
    options.sass_path + '**/*.scss',
    '!' + options.sass_path + '**/_*.scss',
];
gulp.task('sass.min', () => {
    gulp.src(scssFiles)
    .pipe(sassCompile())
    .pipe(cleanCSS())
    .pipe(gulp.dest(options.css_path))
});
gulp.task('sass', () => {
    gulp.src(scssFiles)
    .pipe(sassCompile())
    .pipe(gulp.dest(options.css_path))
});

gulp.task('zip', () => {
    gulp.src ( [ 
        '*.html',
        'css/*.css',
        'img/*.jpg',
        'img/*.png',
    ], {base:'./'})
    .pipe(zip('debug.zip'))
    .pipe(gulp.dest('./dist'))
})


// export const createDebugArchive = () => {
//     return gulp.src(paths.files)
//         .pipe(zip('debug.zip'))
//         .pipe(gulp.dest('./archives'));
// };

// export const createProductionArchive = () => {
//     return gulp.src(paths.files)
//         .pipe(tar('production.tar'))
//         .pipe(gzip())
//         .pipe(gulp.dest('./archives'));
// };

// export default gulp.series(createDebugArchive, createProductionArchive);
