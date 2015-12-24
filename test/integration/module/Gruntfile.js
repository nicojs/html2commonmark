module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-karma');

    grunt.initConfig({
        mochaTest: {
            server: {
                src: ['test/unit/server.js']
            }
        },
        
        karma: {
            client: {
                configFile: 'karma.conf.integration-test.js'
            }
        }
    });

}
