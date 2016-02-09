module.exports = function (config) {
    config.set({
        basePath: '.',
        files: ['node_modules/html2commonmark/dist/browser/bundle.js', 'test/unit/browser.js'],
        frameworks: ['jasmine'],
        browsers: ['PhantomJS'],
        plugins: ['karma-phantomjs-launcher', 'karma-jasmine'],
        singleRun: true
    });
};