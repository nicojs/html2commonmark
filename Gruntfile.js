module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        clean: {
            tmp: {
                src: ['.tmp']
            },
            dist: {
                src: ['dist']
            }
        },

        copy: {
            dist: {
                files: [{
                    src: ['**/*.js'],
                    cwd: '.tmp/server/src',
                    dest: 'dist/server',
                    expand: true
                }, {
                    src: ['**/*.js'],
                    cwd: '.tmp/client/src',
                    dest: 'dist/client',
                    expand: true
                }]
            }
        },

        watch: {
            server: {
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

        webpack: {
            options: {
                stats: {
                    colors: false,
                    modules: true,
                    reasons: true
                },
                progress: false,
                failOnError: true,
                watch: true,
                keepalive: false,
                inline: false,
                devtool: 'source-map',
                preLoaders: [
                    {
                        test: /\.js$/,
                        loader: 'source-map-loader'
                    }
                ]
            },
            src: {
                // webpack options
                entry: './.tmp/server/src/Converter.js',
                output: {
                    path: '.tmp/client/src',
                    filename: 'bundle.js',
                },
                module: {
                    loaders: [
                        { test: /\.json$/, loader: 'json-loader' },
                        { test: /Converter\.js$/, loader: 'expose?html2commonmark.Converter' }
                    ]
                }
            },
            test: {
                // webpack options
                entry: './test/unit/client/html2ast.client.ts',
                output: {
                    path: '.tmp/client/test',
                    filename: 'bundle.js',
                },
                resolve: {
                    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
                },
                module: {
                    loaders: [
                        { test: /\.json$/, loader: 'json-loader' },
                        { test: /\.ts$/, loader: 'ts-loader' }
                    ]
                }
            }
        },

        mochaTest: {
            options: {
                reporter: 'spec',
                timeout: 10000
            },
            unit: {
                src: ['.tmp/server/test/unit/server/**/*.js']
            }
        },

        karma: {
            watch: {
                configFile: 'karma.conf.js'
            },
            singleRun: {
                configFile: 'karma.conf.js',
                singleRun: true
            }
        }
    });

    grunt.registerTask('serve:server', ['clean', 'ts', 'watch']);
    grunt.registerTask('serve:client', ['clean', 'webpack:test', 'karma:watch']);
    grunt.registerTask('test', ['clean', 'ts', 'mochaTest', 'webpack:test', 'karma:singleRun']);
    grunt.registerTask('bundle', ['clean', 'ts', 'webpack', 'copy:dist']);
}