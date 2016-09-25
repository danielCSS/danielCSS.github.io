var currentSrc = 'svg/demo';

var gulp = require('gulp');
var plumber = require('gulp-plumber');

var autoprefixer = require('gulp-autoprefixer');

// var browserify  = require('browserify');
// var babelify    = require('babelify');
// var source      = require('vinyl-source-stream');
// var buffer      = require('vinyl-buffer');
//var sourcemaps  = require('gulp-sourcemaps');
//
// var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
//var gzip = require('gulp-gzip');
var del = require('del');
var runSequence = require('run-sequence');
var tinypng = require('gulp-tinypng');
var imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache');
var cssnano = require('gulp-cssnano');
//var less = require('gulp-less');
var sass = require('gulp-sass');

//var hologram = require('gulp-hologram');
var svgSprite = require('gulp-svg-sprite');
var svgmin = require('gulp-svgmin');

var browserSync = require('browser-sync').create();

// gulp.task('hologram', function() {
//         gulp.src('./src/hologram_config.yml')
//                 .pipe(hologram({bundler:true, logging:true}));
// });

gulp.task('bs-reload', function () {
  browserSync.reload();
});

gulp.task('clean:dist', function() {
  return del.sync('dist');
})

// in order to clean the (image) cache: run 'gulp cache:clear'
gulp.task('cache:clear', function (callback) {
return cache.clearAll(callback)
})

gulp.task('minifyhtml', function() {
  return gulp.src(currentSrc + '/**/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    //.pipe(gzip())
    .pipe(gulp.dest('dist'))
});

gulp.task('svgmin', function () {
    return gulp.src(currentSrc + '/images/**/*.svg')
        .pipe(svgmin())
        .pipe(gulp.dest('dist/images/'));
});

gulp.task('images', function(){
  gulp.src(currentSrc + '/images/**/*.+(png|jpg)')
    .pipe(cache(tinypng('UTq9eYonuLa9yHXFJXh_9mbYfEsk05IO')))
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('dist/images/'));
});

gulp.task('fonts', function() {
  return gulp.src(currentSrc + '/fonts/**/*')
  .pipe(gulp.dest('dist/fonts'))
})

gulp.task('nanocss', function() {
  gulp.src([currentSrc + '/css/**/*.css'])
  //return gulp.src(currentSrc + '/script/**/*')
  .pipe(cssnano())
  .pipe(gulp.dest('dist/css/'))
})

// When ready for production - just run: gulp build-production
// and the dist folder and files will be created.
gulp.task('build-production', function (callback) {
  runSequence('clean:dist',
    //['minifyhtml','svgmin', 'images', 'fonts','nanocss','scripts','script2dist'],
    ['minifyhtml','svgmin', 'images', 'fonts','nanocss'],
    callback
  )
})

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
       baseDir: currentSrc
    }
  });
});

gulp.task('styles', function(){
  //gulp.src([currentSrc + '/less/**/*.less'])
  gulp.src([currentSrc + '/scss/**/*.scss'])
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    //.pipe(less())
    .pipe(sass())
    .pipe(autoprefixer('last 2 versions'))
    .pipe(gulp.dest(currentSrc + '/css/'))
    //.pipe(rename({suffix: '.min'}))
    //.pipe(cssnano())
    //.pipe(gulp.dest('dist/css/'))
    .pipe(browserSync.reload({
      stream:true
    }));
});
// gulp.task('sourcemaps', function() {
//   gulp.src(currentSrc + '/scss/**/*.scss')
//       .pipe(sourcemaps.init())
//         .pipe(sass())
//         .pipe(autoprefixer('last 2 versions'))
//       .pipe(sourcemaps.write('../maps'))
//       .pipe(gulp.dest('dist'));
// });
// gulp.task('build', ['minifyhtml','svgmin', 'images', 'fonts'], function (){
//   console.log('Building files');
// })

// gulp.task('scripts', function () {
//     return browserify({entries: 'src/js/app.js', debug: true})
//         .transform("babelify", { presets: ["es2015"] })
//         .bundle()
//         .pipe(source('app.js'))
//         .pipe(buffer())
//         .pipe(sourcemaps.init())
//         .pipe(uglify())
//         .pipe(sourcemaps.write('./maps'))
//         .pipe(gulp.dest('src/script'))
//         .pipe(browserSync.reload({stream:true}));
// });

// gulp.task('script2dist', function() {
//   gulp.src(['src/js/**/*.js'])
//   //return gulp.src('src/script/**/*')
//   .pipe(gulp.dest('dist/script'))
// })

//gulp.task('default', ['styles','browser-sync'], function(){
//gulp.task('default', ['styles','scripts','browser-sync'], function(){
//gulp.task('default', ['styles','sourcemaps','browser-sync'], function(){
gulp.task('default', ['styles','browser-sync'], function(){
  //gulp.watch("src/less/**/*.less", ['styles','bs-reload']);
  //gulp.watch("src/scss/**/*.scss", ['styles', 'hologram', 'bs-reload']);
  gulp.watch(currentSrc + "/scss/**/*.scss", ['styles', 'bs-reload']);
  //gulp.watch("src/js/**/*.+(js|coffee)", ['scripts']);
  gulp.watch(currentSrc + "/**/*.html", ['bs-reload']);
});


gulp.task('svgo', function () {
    return gulp.src('svg/CORAL/**/*.svg')
        .pipe(svgmin())
        .pipe(gulp.dest('./svg/CORAL-optimized'));
});

// SVG Config
var config = {
  mode: {
    symbol: { // symbol mode to build the SVG
      dest: 'CORAL-sprite', // destination foldeer
      sprite: 'CORAL-sprite.svg', //sprite name
      example: true // Build sample page
    }
  },
  svg: {
    xmlDeclaration: false, // strip out the XML attribute
    doctypeDeclaration: false // don't include the !DOCTYPE declaration
  }
};

gulp.task('sprite-page', function() {
  return gulp.src('svg/CORAL-optimized/**/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest('.'));
});

gulp.task('sprite-shortcut', function() {
  return gulp.src('CORAL-sprite/CORAL-sprite.svg')
    .pipe(gulp.dest('.'));
});

gulp.task('svgs', ['sprite-page', 'sprite-shortcut']);

// If this produces error like: 'Error: EPERM: operation not permitted'
// then
// 0) Manually delete the dist folder with unlocker
// 1) install npm globally as admin,
// 2) run: npm cache clean
// 3) Disable antivirus
//https://github.com/Medium/phantomjs/issues/19
// NB: option 0) 2) or 3) may work by themselves.
