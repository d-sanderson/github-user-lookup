const tailwindcss = require("tailwindcss");
const purgecss = require("@fullhuman/postcss-purgecss")({
  // Specify the paths to all of the template files in the project
  content: ["./src/**/*.html", "./src/**/*.jsx"],
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
});
module.exports = {
  plugins: [
    tailwindcss("./tailwind.config.js"),
    require("autoprefixer"),
    ...(process.env.NODE_ENV === "production" ? [purgecss] : []),
  ],
};
