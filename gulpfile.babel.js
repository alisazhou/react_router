import gulp from 'gulp';
import webpack from 'webpack-stream';
import serve from 'gulp-serve';
import jsonServer from 'json-server';


// webpack
gulp.task('webpack', () => {
  gulp.src('./app/app.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('./'));
});

// API (database) server
let apiServer = jsonServer.create();
apiServer.use(jsonServer.defaults());
let router = jsonServer.router('db.json');
apiServer.use(router);
gulp.task('serve:api', (cb) => {
  apiServer.listen(3000);
  cb();
});


// web server
gulp.task('serve:web', serve({
  root: [ '.' ],
  port: 8000,
}));

// watch
gulp.task('watch', () => {
  gulp.watch('./app/**/*', [ 'webpack' ]);
});


gulp.task('default', [ 'serve:api', 'serve:web', 'webpack', 'watch' ]);
