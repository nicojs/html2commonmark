module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-ts');

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
        },
        
        ts: {
            compile: {
                tsconfig: true
            }
        }
    });

}
