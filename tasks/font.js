const {
  src,
  dest
} = require('gulp');
const ttf2woff2 = require('gulp-ttftowoff2');


module.exports = function font() {
  return src('src/fonts/VelaSans/**.ttf').pipe(ttf2woff2()).pipe(dest('build/fonts'))
}
