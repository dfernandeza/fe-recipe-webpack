module.exports = function(karma) {
  karma.set({
    frameworks: ['jasmine'],
 
    files: [
      // all files ending in "-spec" 
      './app/src/**/*-spec.js',
      './app/fixtures/*.html'
    ],

    reporters: ['progress'],
 
    preprocessors: {
      './app/src/**/*.js': 'webpack',
      './app/fixtures/*.html': 'html2js'
    },

    browsers: ['PhantomJS'],

    logLevel: 'LOG_DEBUG',

    singleRun: true,
    autoWatch: false,
 
    webpack: {
      cache: true,
      devtool: 'inline-source-map',
      module: {
        loaders: [
          {
            test: /\.js?$/,
            exclude: /(node_modules)/,
            loader: 'babel', // 'babel-loader' is also a legal name to reference
            query: {
              presets: ['es2015']
            }
          }
        ]
      }
    }
 
  });
};