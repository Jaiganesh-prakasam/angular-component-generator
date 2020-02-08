const gulp = require('gulp');
const { series, watch } = require('gulp');
var exec = require('child_process').exec;
var browserSyncvar,nodeServer;
var browserSync = require('browser-sync');
var nodemon = require('gulp-nodemon');

function initiateFlow(){
    // Initial flow will build, activates browser sync and start the production server
    // to trigger build and reload server when changed after initial load
  watch('src/**/*', series(buildApp, startBrowser, nodemonfunction) );
}
function buildApp(cb){
    // to build the application
  exec('ng build', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
}
function startBrowser(cb){
    // activates browser sync for the first time and reloads from the second time
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
    // to trigger the node server for the intial load
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
