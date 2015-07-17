module.exports = {
  watch: {
    src: ["src/js/app.js"],
    dest: "dist/app.js",
    options: {
      transform: [
        [ "babelify", { loose: "all"} ],
        [ "reactify", { "es6": true } ]
      ]
    }
  }
};
