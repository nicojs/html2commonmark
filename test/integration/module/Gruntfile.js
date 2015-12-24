module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-mocha-test');

    grunt.initConfig({
        mochaTest: {
            server: {
                src: ['test/unit/server.js']
            }
        }
    });

}
