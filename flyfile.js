const paths = {
  scripts: ["src/**/*.js", "!src/ignore/**/*.js"]
}

export default function* () {
  yield this.watch(paths.scripts, "build")
}

export function* build () {
  yield this.clear("dist")
  yield this
    .source(paths.scripts)
    .babel({ presets: ["es2015"], sourceMap: true })
    .uglify()
    .concat("app.js")
    .target("dist")
}
