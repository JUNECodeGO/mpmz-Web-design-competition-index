var gulp = require("gulp");
//压缩图片
var imagemin = require("gulp-imagemin")
//压缩html
var htmlclean = require("gulp-htmlclean");
//压缩js
var uglify = require("gulp-uglify");
//去掉js中的调试语句
var stripDebug = require("gulp-strip-debug");
// var concat = require("gulp-concat");
// var deporder = require("gulp-deporder");
//编译less
var less = require("gulp-less");
//解析css语法
var postcss = require("gulp-postcss");
//添加前缀
var autoprefixer = require("autoprefixer");
var cssnano = require("cssnano")
//用于开启服务器
var connect = require("gulp-connect");



var folder = {
    src : "src/",
    dist : "dist/"
}
//判断环境变量
var devMode = process.env.NODE_ENV !== "production";

//流操作 task running
gulp.task("html",function(){
    var page =  gulp.src(folder.src + "html/index.html")
        //自动刷新
        .pipe(connect.reload());
    if(!devMode){
        page.pipe(htmlclean());
    }
    page.pipe(gulp.dest(folder.dist + "html/"))
})

gulp.task("images",function(){
    gulp.src(folder.src + "images/*")
        // .pipe(imagemin())
        .pipe(gulp.dest(folder.dist+"images/"))
})
gulp.task("js",function(){
    var js = gulp.src(folder.src+"js/*")
        .pipe(connect.reload());
    if(!devMode){
        js.pipe(uglify())
            .pipe(stripDebug())
    }
    js.pipe(gulp.dest(folder.dist+"js/"))
})
gulp.task("css",function(){
    var css = gulp.src(folder.src+"css/*")
        .pipe(connect.reload())
        .pipe(less());
    var options = [autoprefixer()];
    if(!devMode){
        options.push(cssnano())
    }

    css.pipe(postcss(options))
        .pipe(gulp.dest(folder.dist + "css/"))
})
//监听文件变化
gulp.task("watch",function(){
    gulp.watch(folder.src + "html/*",["html"]);
    gulp.watch(folder.src + "images/*",["images"]);
    gulp.watch(folder.src + "js/*",["js"]);
    gulp.watch(folder.src + "css/*",["css"]);
})
gulp.task("server",function(){
    connect.server({
        port : "8081",
        livereload : true
    });
})

gulp.task("default",["html","images","js","css","watch","server"]);