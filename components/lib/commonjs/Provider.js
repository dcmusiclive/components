"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Provider = void 0;

var _react = _interopRequireDefault(require("react"));

var _nativeBase = require("native-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const theme = (0, _nativeBase.extendTheme)({
  config: {
    initialColorMode: "dark"
  }
});

const Provider = props => /*#__PURE__*/_react.default.createElement(_nativeBase.NativeBaseProvider, _extends({
  theme: theme
}, props));

exports.Provider = Provider;
//# sourceMappingURL=Provider.js.map