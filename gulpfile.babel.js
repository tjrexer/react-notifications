import gulp from 'gulp';
import del from 'del';
import babel from 'gulp-babel';
import webpackStream from 'webpack-stream';
import webpack from 'webpack';
import sass from 'gulp-sass';
import postcss from 'gulp-postcss';
import concat from 'gulp-concat';
import pkg from './package.json';
import webpackConfig from './webpack.config';
import exampleWebpackConfig from './example/webpack.config.babel';

require('regenerator-runtime/runtime')

gulp.task('build:lib:clean', async function(){
  return del.sync(['lib', 'dist']);
});

gulp.task('build:lib:babel', async function(){ 
  gulp.src(['src/**/*.js'])
    .pipe(babel())
    .pipe(gulp.dest('lib'))
});

gulp.task('build:lib:umd', async function(){ 
  gulp.src(['src/index.js'])
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(gulp.dest('dist'))
});

gulp.task('build:lib:style', async function(){ 
  gulp.src(['src/**/*.scss', '!src/**/_*.scss'])
    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(gulp.dest('lib'))
    .pipe(concat(`${pkg.name}.css`))
    .pipe(postcss())
    .pipe(gulp.dest('dist'))
});

gulp.task('build:lib:copy', async function(){ 
  gulp.src(['src/**/*', '!src/**/*.{scss,js}'])
    .pipe(gulp.dest('lib'))
    .pipe(gulp.dest('dist'))
});

gulp.task('build:lib', gulp.series(
  'build:lib:clean',
  'build:lib:babel',
  'build:lib:umd',
  'build:lib:style',
  'build:lib:copy'
  ));

gulp.task('build:example:clean', async function(){
  return del.sync(['example/dist']);
});

gulp.task('build:example:webpack', async function(){ 
  gulp.src(['example/app/app.js'], {allowEmpty: true})
    .pipe(webpackStream(exampleWebpackConfig, webpack))
    .pipe(gulp.dest('example/dist'))
});

gulp.task('build:example:copy', async function(){ 
  gulp.src(['example/app/*', '!example/app/*.{html,js}'], { nodir: true })
    .pipe(gulp.dest('example/dist'))
});

gulp.task('build:example', gulp.series(
    'build:example:clean',
    'build:example:webpack',
    'build:example:copy'
));

gulp.task('build', gulp.series(
  'build:lib',
  'build:example'
  ));

gulp.task('default', gulp.series('build'));
