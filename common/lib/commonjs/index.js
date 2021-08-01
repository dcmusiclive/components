"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  theme: true
};
exports.theme = void 0;

var _colors = require("./colors");

Object.keys(_colors).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _colors[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _colors[key];
    }
  });
});
const theme = {
  colors: {
    offWhite: "#f7f5f3",
    offBlack: "#202122",
    dcRed: "#f72e2a",
    usaBlue: "#0091e6",
    mallGreen: "#14c337",
    orange: "#f8630e",
    yellow: "#ffe614",
    silver: "#c8c8c8"
  },
  config: {
    useSystemColorMode: false,
    initialColorMode: "dark"
  }
};
exports.theme = theme;
//# sourceMappingURL=index.js.map