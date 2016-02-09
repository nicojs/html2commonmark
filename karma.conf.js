module.exports = function (config) {
    config.set({
        basePath: '.',
        files: [
            {
                pattern: '.tmp/browser/**/*.js.map',
                included: false
            }, {
                pattern: 'readme.md',
                included: false  
            },
            '.tmp/browser/**/*.js',
            'test/unit/browser/**.js'
        ],
        frameworks: ['mocha'],
        browsers: ['Firefox'],
        plugins: ['karma-mocha', 'karma-phantomjs-launcher', 'karma-chrome-launcher', 'karma-firefox-launcher', 'karma-sourcemap-loader'],
        preprocessors: {
            '**/*.js': ['sourcemap']
        }
    });
};