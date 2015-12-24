module.exports = function (config) {
    config.set({
        basePath: '.',
        files: ['node_modules/html2commonmark/dist/client/bundle.js', 'test/unit/client.js'],
        frameworks: ['jasmine'],
        browsers: ['PhantomJS'],
        plugins: ['karma-phantomjs-launcher', 'karma-jasmine'],
        singleRun: true
    });
};