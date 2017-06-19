module.exports = function(grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);
    var port = 9000 + ((Math.random() * 10) | 0);
    console.log(port);

    grunt.initConfig({

        portSetting: {
            port: port
        },

        connect: {
            server: {
                options: {
                    livereload: true,
                    base: 'src/',
                    port: '<%= portSetting.port %>'
                }
            }
        },

        open: {
            server: {
                path: 'http://localhost:<%= portSetting.port %>',
                app: 'firefox'
            }
        },

        watch: {
            scripts: {
                files: ['src/js/*.js', '!src/js/all.min.js', '!src/js/all.js'],
                tasks: ['clean', 'jshint', 'concat', 'uglify'],
                options: {
                    livereload: true
                },
            },
        },

        clean: {
            js: ['src/js/all.min.js', 'src/js/all.js']
        },

        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['src/**/*.js'],
                dest: 'src/js/all.js'
            }
        },

        uglify: {
            dist: {
                files: {
                    'src/js/all.min.js': ['src/js/all.js']
                }
            }
        },

        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js'],
            options: {
                globals: {
                    console: true,
                    module: true
                }
            }
        }

    });

    grunt.registerTask('default', ['clean', 'jshint', 'concat', 'uglify', 'connect', 'open', 'watch']);
    grunt.registerTask('testjs', ['jshint']);
    grunt.registerTask('concatjs', ['concat']);
    grunt.registerTask('uglifyjs', ['uglify']);
    grunt.registerTask('watchjs', ['watch']);
    grunt.registerTask('cleanjs', ['clean']);
};
