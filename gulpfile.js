const gulp = require('gulp');
const sass = require('gulp-sass');
const pug = require('gulp-pug');

gulp.task('sass', () => {
  return gulp.src('src/options/options.sass')
    .pipe(sass())
    .pipe(gulp.dest('src/.css'))
})

gulp.task('options', () => {
  return gulp.src('src/options/options.pug')
    .pipe(pug())
    .pipe(gulp.dest('dist'))
})

gulp.task('manifest', () => {
  return gulp.src('src/manifest.json')
    .pipe(gulp.dest('dist'))
})

const src = ['src/options/*.pug', 'src/popup/*.pug']

gulp.task('build', () => {
  return gulp.src(src)
    .pipe(pug())
    .pipe(gulp.dest('dist'))
})

gulp.task('pug-dev', () => {
  return gulp.src(src)
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest('dist'))
})

gulp.task('dev', () => {
  gulp.watch('src/**/*.pug', gulp.task('pug-dev'));
  gulp.watch('src/manifest.json', gulp.task('manifest'));
})
