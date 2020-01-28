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
  siteName: "Esmeralda3",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "GeneralSiteSettings",
        baseDir: "./content/site_settings",
        path: "*.json",
        resolveAbsolutePaths: true
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Product",
        baseDir: "./content/products",
        path: "*.md",
        resolveAbsolutePaths: true,
        refs: {
          category: {
            typeName: "Category",
            create: true
          }
        }
      }
    }
  ],
  templates: {
    Product: "/:category/:title",
    Category: "/:title"
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: isProd ? [Purgecss] : []
      }
    }
  }
};
