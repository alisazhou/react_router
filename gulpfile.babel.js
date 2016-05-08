import gulp from 'gulp';
import webpack from 'webpack-stream';
import serve from 'gulp-serve';


// webpack
gulp.task('webpack', () => {
  gulp.src('./app/app.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('./'));
});

// web server
gulp.task('serve:web', serve({
  root: [ '.' ],
  port: 8000,
}));

gulp.task('default', [ 'webpack', 'serve:web' ]);
