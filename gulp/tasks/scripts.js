const rename = require('gulp-rename');
const plumber = require('gulp-plumber');
const babel = require('rollup-plugin-babel');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const sourcemaps = require('gulp-sourcemaps');
const rollup = require('gulp-better-rollup');
const terser =  require('rollup-plugin-terser').terser;
const scriptsPATH = {
    "input": "./dev/static/js/main.js",
    "ouput": "./build/static/js/"
};

module.exports = function () {

$.gulp.task('scripts', function () {
  return $.gulp.src(scriptsPATH.input)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(rollup({
      plugins: [
        resolve({browser: true}),
        commonjs(),
        babel(),
        terser()
      ]
    }, 'iife'))
    .pipe(sourcemaps.write(''))
    .pipe(rename('main.min.js'))
    .pipe($.gulp.dest(scriptsPATH.ouput));
  });
};
