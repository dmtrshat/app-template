module.exports = {
  plugins: [
    require("postcss-import"),
    require("rucksack-css")({
      responsiveType: true,
      shorthandPosition: false,
      quantityQueries: false,
      alias: false,
      inputPseudo: false,
      clearFix: false,
      fontPath: false,
      hexRGBA: false,
      easings: false
    }),
    require("postcss-move-it"),
    require("postcss-define-function"),
    require("postcss-custom-media"),
    require("postcss-custom-properties"),
    require("postcss-nested"),
    require("postcss-media-minmax"),
    require("autoprefixer")(),
    require("css-mqpacker"),
    require("cssnano")({
      preset: [
        "default",
        {
          discardComments: {
            removeAll: true
          }
        }
      ]
    })
  ]
};
