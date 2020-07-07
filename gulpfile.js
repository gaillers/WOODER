// Подключение модули галпа
const gulp = require('gulp'),
 concat = require('gulp-concat'),
 autoprefixer = require('gulp-autoprefixer'),
 cleanCSS = require('gulp-clean-css'),
 terser = require("gulp-terser"),
 del = require('del'),
 browserSync = require('browser-sync').create(),
 sourcemaps = require('gulp-sourcemaps'),
 scss = require('gulp-sass'),
 babel = require('gulp-babel'),
 imagemin = require('gulp-imagemin'),
 rename = require('gulp-rename'),
 ttf2woff = require('gulp-ttf2woff'),
 ttf2woff2 = require('gulp-ttf2woff2');

// порядок подкл css
const styleFiles = [
 './src/styles/common/header.scss',
 './src/styles/common/main.scss',
 './src/styles/common/furniture.scss',
 './src/styles/common/decor.scss',
 './src/styles/common/quality.scss',
 './src/styles/common/complexity.scss',
 './src/styles/common/aboutus.scss',
 './src/styles/common/footer.scss',
 './src/styles/medias/media.scss',
 './src/styles/common/styles.scss',
 './src/styles/common/fonts.scss'
];

// порядок подкл js
const jsFiles = ['./src/js/main.js','./src/js/lib.js'];

// подключение нормалайз
const normalizeFile = ['./src/styles/normalize.css'];


gulp.task('normalize', function () {
    return gulp.src(normalizeFile)

    .pipe(concat('normalize.css'))
    .pipe(autoprefixer({
         cascade: false
    }))
    //    Минификация CSS
    .pipe(cleanCSS({
        level: 2
    }))
    //    --Минификация CSS--
    .pipe(gulp.dest('./build/css'))
});

// Стили
gulp.task('styles', function () {
    return gulp.src(styleFiles)

    .pipe(sourcemaps.init())
    .pipe(scss())
    .pipe(concat('styles.css'))
    .pipe(autoprefixer({
       cascade: false
    }))
     // не сжатый файл
     .pipe(gulp.dest('./build/css'))
    
     //    Минификация CSS
    .pipe(cleanCSS({
        level: 2
    }))
    
    // сжатый min.css
    .pipe(rename({extname:'.min.css'}))
    
    //    --Минификация CSS-- 
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./build/css'))
    .pipe(browserSync.stream());
});

// Скрипты
gulp.task('scripts', function () {
    return gulp.src(jsFiles)

    .pipe(concat('main.js'))
    //    Минификация js
    
    //      babel ES6+
    .pipe(babel({
        presets: ['@babel/env']
    }))
    
    // не сжатый
    .pipe(gulp.dest('build/js'))
    // минификация и оптимизация js
    .pipe(terser())
    // сжатый mini.js
    .pipe(rename({extname:'.min.js'}))
    .pipe(gulp.dest("./build/js"))

    //    --Минификация js--
    .pipe(gulp.dest('./build/js'))
    .pipe(browserSync.stream());
});

    //      babel soursemaps 
gulp.task('default', () =>
    gulp.src('src/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(concat('all.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build/js'))
);

// Изображение
gulp.task('img-compress', () => {
    return gulp.src('./src/images/**/*.{jpg,png,svg,gif,ico,webp}')
    .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        interlaced: true,
        optimizationLevel: 3 // 0 to 7
    }))
    .pipe(gulp.dest('./build/images'))
}); 

// Шрифты
gulp.task('fonts', function () {
    return gulp.src(['./src/fonts/*.ttf'])
       .pipe(ttf2woff())
       .pipe(gulp.dest('./build/fonts'));
});
gulp.task('font', function () {
   return gulp.src(['./src/fonts/*.ttf'])
      .pipe(ttf2woff2())
      .pipe(gulp.dest('./build/fonts'));
});


// Общие
gulp.task('del', function () {
    return del(['build/*'])
});
gulp.task('watch', function (done) {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('./src/styles/**/*.css', gulp.series('styles'));
    gulp.watch('./src/styles/**/*.scss', gulp.series('styles'));
    gulp.watch('./src/styles/**/*.sass', gulp.series('styles'));
    gulp.watch('./src/js/**/*.js', gulp.series('scripts'));
    gulp.watch('./src/images/**/*.{jpg,png,svg,gif,ico,webp}', gulp.series('img-compress'));
    gulp.watch('./src/fonts/*.ttf', gulp.series('font'));
    gulp.watch('./src/fonts/*.ttf', gulp.series('fonts'));
    gulp.watch("./*.html").on('change', browserSync.reload);
    done()
});

gulp.task('default', gulp.series('del', gulp.parallel('normalize', 'styles', 'scripts', 'img-compress','font','fonts'), 'watch'));