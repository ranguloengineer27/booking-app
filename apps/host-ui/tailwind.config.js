const path = require("path");

module.exports = {
  content: [
    "./index.html",
    path.resolve(__dirname, "./src/**/*.{js,ts,jsx,tsx}"),
    path.resolve(
      __dirname,
      "../../packages/shared-ui/src/**/*.{js,ts,jsx,tsx}"
    ),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
