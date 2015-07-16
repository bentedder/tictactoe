module.exports = {
  files: {
    src: "dist/*"
  },
  options: {
    watchTask: true,
    server: {
      host: "localhost",
      baseDir: "dist"
    }
  }
};
