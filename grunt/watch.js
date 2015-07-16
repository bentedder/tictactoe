module.exports = {
  sass: {
    options: {
      livereload: true
    },
    files: ["src/**/*.scss"],
    tasks: ["style"]
  },

  html: {
    options: {
      livereload: true
    },
    files: ["index.html"],
    tasks: ["files"]
  },

  js: {
    files: ["src/**/*.js"],
    tasks: ["browserify"]
  }
};
