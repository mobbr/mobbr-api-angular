module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
               // separator: ';'
                banner: '/*! <%= pkg.name %> <%= pkg.version %> <%= grunt.template.today("dd-mm-yyyy") %> */\n' +
                    '(function (angular, factory) {\n' +
                    '    if (typeof define === \'function\' && define.amd) {\n' +
                    '        define([\'angular\'], function(angular) {\n' +
                    '            return factory(angular);\n' +
                    '        });\n' +
                    '    } else {\n' +
                    '        return factory(angular);\n' +
                    '    }}(angular || null, function (angular) {\n' +
                    '        \'use strict\';\n\n',
                footer: '    }\n' +
                    '));'
            },
            dist: {
                files: {
                    'mobbr-api.src.js': [ 'src/mobbr-config.js', 'src/api/*.js' ],
                    'mobbr-api-msg.src.js': [ 'src/msg/mobbr-msg.js', 'src/msg/mobbr-msg-interceptor.js' ],
                    'mobbr-api-session.src.js': [ 'src/session/mobbr-session.js', 'src/session/mobbr-session-interceptor.js' ]
                }
            }
        },
        uglify: {
            options: {

            },
            dist: {
                files: {
                    'mobbr-api.min.js': [ 'mobbr-api.src.js' ],
                    'mobbr-api-msg.min.js': [ 'mobbr-api-msg.src.js' ],
                    'mobbr-api-session.min.js': [ 'mobbr-api-session.src.js' ],
                    'mobbr-api-all.min.js': [ 'mobbr-api.src.js', 'mobbr-api-msg.src.js', 'mobbr-api-session.src.js' ]
                }
            }
        },
        jshint: {
            files: [ 'Gruntfile.js', '<%= pkg.name %>.js' ],
            options: {
                // options here to override JSHint defaults
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        },
        watch: {
            files: [ '<%= jshint.files %>' ],
            tasks: [ 'jshint' ]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-karma');
    grunt.registerTask('test', [ 'jshint' ]);
    grunt.registerTask('default', [ 'concat', 'jshint', 'uglify' ]);
};