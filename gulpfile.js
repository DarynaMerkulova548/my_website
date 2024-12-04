const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

// Шляхи до файлів
const paths = {
    scss: './src/scss/**/*.scss', // Всі SCSS-файли в папці src/scss
    css: './dist/css/'           // Папка для згенерованих CSS
};

// Завдання: компіляція SCSS у CSS
function styles() {
    return gulp.src(paths.scss) // Вхідні файли
        .pipe(sass().on('error', sass.logError)) // Компіляція SCSS
        .pipe(autoprefixer({ // Додавання префіксів
            cascade: false
        }))
        .pipe(cleanCSS()) // Мініфікація CSS
        .pipe(gulp.dest(paths.css)); // Збереження згенерованого CSS
}

// Спостереження за змінами
function watch() {
    gulp.watch(paths.scss, styles); // Спостереження за SCSS
}

// Завдання за замовчуванням
exports.default = gulp.series(styles, watch);
