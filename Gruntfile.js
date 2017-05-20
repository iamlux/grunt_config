module.exports = function(grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  grunt.initConfig({

      watch: {
        scripts: {
          files: ['src/**/*.js'],
          tasks: ['default'],
          options: {
            spawn: false,
            livereload: {
              host: 'localhost',
              port: 35729,
              files: ['src/**/*.js']
            }
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
            'src/js/all.min.js' : ['src/js/all.js']
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

  grunt.registerTask('default', ['clean', 'jshint', 'concat', 'uglify', 'watch']);
  grunt.registerTask('testjs', ['jshint']);
  grunt.registerTask('concatjs', ['concat']);
  grunt.registerTask('uglifyjs', ['uglify']);
  grunt.registerTask('watchjs', ['watch']);
  grunt.registerTask('cleanjs', ['clean']);
};
