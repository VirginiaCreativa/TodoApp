const postcss = require("postcss");
const stylelint = require("stylelint");

postcss([stylelint({ fix: true })])
  .process(source, { syntax: syntax })
  .then(function (result) {
    // An alias for the result.css property. Use it with syntaxes that generate non-CSS output.
    result.content;
  });

const syntax = require("postcss-syntax")({
  "i-css": (index, namespace) => namespace[index + 1] === "addStyles",
  "styled-components": true
});
return syntax;