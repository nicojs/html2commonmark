module.exports = function (grunt) {

	require('load-grunt-tasks')(grunt);


	grunt.initConfig({
		watch: {
			src: {
				files: ['**/*.ts'],
				tasks: ['ts', 'mochaTest']
			}
		},
		
		// TypeScript compilation
		ts: {
			src: {
				tsconfig: 'tsconfig.json'
			}
		},

		mochaTest: {
			options: {
				reporter: 'spec' ,
				timeout: 10000
			},
			unit: {
				src: ['.tmp/test/unit/serverside/**/*.js']
			}
		}
	});

	grunt.registerTask('serve', ['watch']);
	grunt.registerTask('test', ['ts', 'mochaTest']);
}