let preprocessor = "scss"; // Preprocessor (sass, scss)
let fileswatch = "html,htm,txt,json,md"; // List of files extensions for watching & hard reload (comma separated)
let imageswatch = "jpg,jpeg,png,webp,svg,woff2"; // List of files extensions for watching & hard reload (comma separated)

const { src, dest, parallel, series, watch } = require("gulp");
const sass = require("gulp-sass");
const cleancss = require("gulp-clean-css");
const concat = require("gulp-concat");
const browserSync = require("browser-sync").create();
const uglify = require("gulp-uglify-es").default;
const autoprefixer = require("gulp-autoprefixer");
const imagemin = require("gulp-imagemin");
const newer = require("gulp-newer");
const rsync = require("gulp-rsync");
const del = require("del");
const svgSprite = require("gulp-svg-sprite");
const gulp = require("gulp");
const njkRender = require("gulp-nunjucks-render");
const prettify = require("gulp-html-prettify");
const webpack = require("webpack-stream");
const rename = require("gulp-rename");
const gulpData = require("gulp-data");
var named = require("vinyl-named");

// Local Server

function browsersync() {
  browserSync.init({
    server: { baseDir: "app" },
    notify: false,
    // online: false, // Work offline without internet connection
  });
}

// HTML
function nunjucks() {
  return gulp
    .src("app/njk/pages/*.njk")
    .pipe(
      gulpData(() => {
        return require("./app/data.json");
      })
    )
    .pipe(njkRender())
    .pipe(
      prettify({
        indent_size: 4, // размер отступа - 4 пробела
      })
    )
    .pipe(gulp.dest("app/html/pages"));
}

// Custom Styles

function styles() {
  return (
    src("app/sass/pages/*.scss")
      .pipe(sass())
      // .pipe(concat("app.min.css"))
      .pipe(
        autoprefixer({ overrideBrowserslist: ["last 10 versions"], grid: true })
      )
      .pipe(cleancss({ level: { 1: { specialComments: 0 } } }))
      .pipe(rename({ suffix: ".min" }))
      .pipe(dest("app/css"))
      .pipe(browserSync.stream())
  );
}

// Scripts
function scripts() {
  return src([
    "app/js/ivideon_faces.js",
    "app/js/ivideon_counting.js",
    "app/js/ivideon_detector.js",
    "app/js/ivideon_control.js",
    "app/js/ivideon_scud.js",
    "app/js/ivideon_smart.js",
    "app/js/ivideon_bridge.js",
    "app/js/ivideon_analytics.js",
    "app/js/ivideon_office.js",
    "app/js/ivideon_store.js",
    "app/js/ivideon_storage.js",
    "app/js/ivideon_salon.js",
    "app/js/ivideon_azs.js",
    "app/js/ivideon_hotels.js",
    "app/js/ivideon_building.js",
    "app/js/ivideon_retail.js",
    "app/js/ivideon_number.js",
  ])
    .pipe(named())
    .pipe(
      webpack({
        mode: "production",
        performance: { hints: false },
        module: {
          rules: [
            {
              test: /\.(js)$/,
              exclude: /(node_modules)/,
              loader: "babel-loader",
              query: {
                presets: ["@babel/env"],
                plugins: ["babel-plugin-root-import"],
              },
            },
          ],
        },
      })
    )
    .on("error", function handleError() {
      this.emit("end");
    })
    .pipe(rename({ suffix: ".min" }))
    .pipe(dest("app/js_min"))
    .pipe(browserSync.stream());
}

// Images

function images() {
  return src("app/images/src/**/*")
    .pipe(newer("app/images/dest"))
    .pipe(imagemin())
    .pipe(dest("app/images/dest"));
}

function cleanimg() {
  return del("app/images/dest/**/*", { force: true });
}

// SVG Sprite
const configSprite = {
  shape: {
    dimension: {
      // Set maximum dimensions
      maxWidth: 100,
      maxHeight: 100,
    },
    spacing: {
      // Add padding
      padding: 0,
    },
  },
  mode: {
    symbol: {
      dest: ".",
    },
  },
};

function svgSpriteStart() {
  return src("app/images/svg-icon/*.svg")
    .pipe(svgSprite(configSprite))
    .pipe(dest("app/images/sprites"));
}

// Deploy

function deploy() {
  return src("app/").pipe(
    rsync({
      root: "app/",
      hostname: "username@yousite.com",
      destination: "yousite/public_html/",
      // include: ['*.htaccess'], // Included files
      exclude: ["**/Thumbs.db", "**/*.DS_Store"], // Excluded files
      recursive: true,
      archive: true,
      silent: false,
      compress: true,
    })
  );
}

// Watching

function startwatch() {
  watch("./**/*.njk", parallel("nunjucks"));
  watch("app/sass/**/*." + preprocessor + "", parallel("styles"));
  watch(
    ["app/js/**/*.js", "!app/js/**/*.min.js"],
    { usePolling: true },
    scripts
  );
  watch(["app/**/*.{" + imageswatch + "}"], parallel("images"));
  watch(["app/**/*.{" + fileswatch + "}"]).on("change", browserSync.reload);
}

exports.browsersync = browsersync;
exports.assets = series(cleanimg, styles, scripts, images);
exports.styles = styles;
exports.scripts = scripts;
exports.images = images;
exports.cleanimg = cleanimg;
exports.deploy = deploy;
exports.svgSpriteStart = svgSpriteStart;
exports.nunjucks = nunjucks;
exports.default = parallel(images, styles, scripts, browsersync, startwatch);
