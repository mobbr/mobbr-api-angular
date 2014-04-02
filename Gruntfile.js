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
                src: [ 'src/mobbr-config.js', 'src/**/!(mobbr-config).js' ],
                dest: '<%= pkg.name %>.src.js'
            }
        },
        uglify: {
            options: {

            },
            dist: {
                files: {
                    '<%= pkg.name %>.min.js': [ '<%= concat.dist.dest %>' ]
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