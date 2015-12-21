module.exports = function (config) {
    config.set({
        basePath: '.',
        files: [
            {
                pattern: '.tmp/client/**/*.js.map',
                included: false
            },
            '.tmp/client/**/*.js',
            'test/unit/client/**.js'
        ],
        frameworks: ['mocha'],
        browsers: ['Firefox'],
        plugins: ['karma-mocha', 'karma-phantomjs-launcher', 'karma-chrome-launcher', 'karma-firefox-launcher', 'karma-sourcemap-loader'],
        preprocessors: {
            '**/*.js': ['sourcemap']
        }
    });
};