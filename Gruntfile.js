module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        concat: {
            css: {
                src: [
                    'assets/styles/*'
                ],
                dest: 'assets/styles/combined.css'
            },
            js: {
                src: [
                    'assets/scripts/*'
                ],
                dest: 'assets/scripts/combined.js'
            }
        },
        
        cssmin: {
            css: {
                src: 'assets/styles/combined.css',
                dest: 'assets/styles/combined.min.css'
            }
        },
        
        uglify: {
            js: {
                files: {
                    'assets/scripts/combined.min.js': ['assets/scripts/combined.js']
                }
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['concat:css', 'cssmin:css', 'concat:js', 'uglify:js']);
};