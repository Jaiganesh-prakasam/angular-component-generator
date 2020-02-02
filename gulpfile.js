const gulp = require('gulp');
const { series, watch } = require('gulp');
var exec = require('child_process').exec;
var browserSyncvar,nodeServer;
var browserSync = require('browser-sync');
var nodemon = require('gulp-nodemon');

function initiateFlow(){
  watch('src/**/*', series(buildApp, startBrowser, nodemonfunction) );
}
function buildApp(cb){
  console.log('Hello Zell');
  // console.log(process.env);
  // put ng build here
  exec('ng build', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
  // cb();
}
function startBrowser(cb){
    if(!browserSyncvar){
        browserSyncvar = true;
        console.log('inside if node server');
        browserSync.init(null, {
            proxy: "http://localhost:8080",
            browser: "chrome",
            files: ["dist/component-generator/*.*"],
            port: 7000,
        });
    }else {
        browserSync.reload();
    }
  cb();
}
function nodemonfunction(cb){
    if(!nodeServer){
        nodeServer = true;
        var started = false;
        return nodemon({
            script: 'server.js'
        }).on('start', function () {
            // to avoid nodemon being started multiple times
            // thanks @matthisk
            if (!started) {
                started = true; 
                cb();
            } 
        });
    }
    cb();
	
}

if (process.env.NODE_ENV === 'production') {
} else {
  gulp.task('build', initiateFlow);
}
