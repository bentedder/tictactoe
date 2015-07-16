module.exports = function(grunt) {
  require("load-grunt-config")(grunt);
  require("time-grunt")(grunt);

  var defaults = [ "clean", "files", "lint", "style" ];

  var watching = [ "browserSync", "watch" ];

  grunt.registerTask("default", function() {
      grunt.task.run(defaults);
      grunt.task.run(watching);
  });

  grunt.registerTask("lint", [ "jscs", "jshint" ]);
  grunt.registerTask("style", [ "sass", "autoprefixer" ]);
  grunt.registerTask("files", [ "copy" ]);

};
