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
  }
};
