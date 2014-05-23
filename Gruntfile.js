module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    dirs: {
      css: 'assets/styles',
      js: 'assets/scripts'
    },
    
    clean: [
      '<%= dirs.css %>/combined.*',
      '<%= dirs.js %>/combined.*'
    ],

    concat: {
      css: {
        src: [
            '<%= dirs.css %>/reset.css', '<%= dirs.css %>/monkey*', '<%= dirs.css %>/*'
        ],
        dest: '<%= dirs.css %>/combined.css'
      },
      js: {
        src: [
            '<%= dirs.js %>/jquery.js', '<%= dirs.js %>/jquery.*', '<%= dirs.js %>/*'
        ],
        dest: '<%= dirs.js %>/combined.js'
      }
    },
    
    cssmin: {
      options: {
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
          '<%= grunt.template.today("yyyy-mm-dd") %> */',
      },
      css: {
        src: '<%= dirs.css %>/combined.css',
        dest: '<%= dirs.css %>/combined.min.css'
      }
    },
    
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
          '<%= grunt.template.today("yyyy-mm-dd") %> */',
      },
      js: {
        files: {
          '<%= dirs.js %>/combined.min.js': ['<%= dirs.js %>/combined.js']
        }
      }
    },

    processhtml: {
      dist: {
        files: {
          'index.html': ['index.html']
        }
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-processhtml');

  grunt.registerTask('default', ['clean', 'concat:css', 'cssmin:css', 'concat:js', 'uglify:js', 'processhtml:dist']);
};