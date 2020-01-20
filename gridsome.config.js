const isProd = process.env.NODE_ENV === "production";
const Purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["src/**/*.vue", "src/main.js"],
  whitelistPatternsChildren: [
    /html/,
    /body/,
    /hero/,
    /icon/,
    /slide/,
    /carousel/
  ]
});

module.exports = {
  siteName: "Gridsome",
  plugins: [],
  css: {
    loaderOptions: {
      postcss: {
        plugins: isProd ? [Purgecss] : []
      }
    }
  }
};
