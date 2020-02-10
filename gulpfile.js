const gulp = require('gulp');
const imageMin = require('gulp-imagemin');
const sass = require('gulp-sass');
const autoPrefixer = require('gulp-autoprefixer');
const cleanCss = require('gulp-clean-css');
const minify = require('gulp-minify');
const svgMin = require('gulp-svgmin');
const babel = require('gulp-babel');

sass.compiler = require('node-sass');

// Log message for building project
gulp.task('buildText', async () => {
  return console.log('Building project...');
});

// Copy html files over
gulp.task('copyHtml', () => gulp.src('src/*.html').pipe(gulp.dest('dist')));

// Optimize images
gulp.task('minifyImages', () =>
  gulp
    .src('src/images/*')
    .pipe(imageMin())
    .pipe(gulp.dest('dist/images'))
);

// Sass compiling
gulp.task('compileSass', () =>
  gulp
    .src('src/css/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(
      autoPrefixer({
        cascade: false
      })
    )
    .pipe(cleanCss({ compability: 'ie8' }))
    .pipe(gulp.dest('dist/css'))
);

// Minify Scripts
gulp.task('compileAndMinify', () =>
  gulp
    .src('src/js/*.js')
    .pipe(babel({ presets: ['@babel/env'] }))
    // .pipe(
    //   webpack({
    //     entry: 'dist/js/main.js',
    //     mode: 'production'
    //   })
    // )
    .pipe(minify({ noSource: true }))
    .pipe(gulp.dest('dist/js'))
);

// Minify SVGs
gulp.task('minifySvg', () =>
  gulp
    .src('src/vectors/*.svg')
    .pipe(svgMin())
    .pipe(gulp.dest('dist/vectors'))
);

// Build task
gulp.task(
  'default',
  gulp.parallel([
    'buildText',
    'copyHtml',
    'minifyImages',
    'compileSass',
    'compileAndMinify',
    'minifySvg'
  ])
);

// Watch task
gulp.task('watch', () => {
  gulp.watch('src/*.html', gulp.series('copyHtml'));
  gulp.watch('src/images/*', gulp.series('minifyImages'));
  gulp.watch('src/css/*.scss', gulp.series('compileSass'));
  gulp.watch('src/js/*.js', gulp.series('compileAndMinify'));
  gulp.watch('src/vectors/*.svg', gulp.series('minifySvg'));
});
