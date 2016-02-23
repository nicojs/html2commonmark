module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        clean: {
            tmp: {
                src: ['.tmp']
            },
            dist: {
                src: ['dist']
            },
            test:{
                src: ['test/integration/module/node_modules/html2commonmark']
            }
        },

        copy: {
            dist: {
                files: [{
                    src: ['**/*.*'],
                    cwd: '.tmp/server/src',
                    dest: 'dist/server',
                    expand: true
                }, {
                    src: ['**/*.js'],
                    cwd: '.tmp/browser/src',
                    dest: 'dist/browser',
                    expand: true
                }]
            }
        },

        watch: {
            server: {
                files: ['**/*.ts'],
                tasks: ['ts', 'mochaTest:unit']
            }
        },
		
        // TypeScript compilation
        ts: {
            src: {
                tsconfig: true
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
                entry: ['./.tmp/server/src/html2commonmark.browser.js'],
                output: {
                    path: '.tmp/browser/src',
                    filename: 'bundle.js',
                },
                module: {
                    loaders: [
                        { test: /\.json$/, loader: 'json-loader' },
                        { test:  /html2commonmark\.browser\.js$/, loader: 'expose?html2commonmark' },
                    ]
                }
            },
            test: {
                // webpack options
                entry: [
                    './test/unit/browser/html2ast.browser.ts', 
                    './test/unit/browser/converter.spec.browser.ts',
                    './test/unit/browser/ast2md.browser.ts',
                    './test/unit/browser/BowserConverter.spec.ts',
                    './test/unit/browser/MarkdownRenderer.spec.browser.ts',
                    './test/unit/browser/back-and-forth.browser.ts'],
                output: {
                    path: '.tmp/browser/test',
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
            },
            integration: {
                options: {
                    timeout: 100000
                },
                src: ['test/integration/*.js']
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
    grunt.registerTask('test', ['build', 'mochaTest:unit', 'webpack:test', 'karma:singleRun', 'mochaTest:integration']);
    grunt.registerTask('build', ['clean', 'ts', 'webpack', 'copy:dist']);
}