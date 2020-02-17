webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/EditableTitle.js":
/*!*************************************!*\
  !*** ./components/EditableTitle.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EditableTitle; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/colors */ "./helpers/colors.js");
var _jsxFileName = "/Users/noahmaizels/Desktop/trellolike/components/EditableTitle.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function EditableTitle(_ref) {
  var initialTitle = _ref.initialTitle;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialTitle),
      title = _useState[0],
      setTitle = _useState[1];

  var colors = {
    darkBlue: 'rgb(23, 43, 77)',
    grey: '#EBECF0',
    gray: '#EBECF0',
    transparent: 'rgba(0,0,0,0)'
  };

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    backgroundColor: colors.grey,
    borderColor: colors.grey
  }),
      styles = _useState2[0],
      setStyles = _useState2[1];

  var onBlur = function onBlur(e) {
    if (e.target.value.trim() === '') setTitle('');
    setStyles({
      backgroundColor: colors.grey,
      borderColor: colors.transparent
    });
  };

  var onFocus = function onFocus(e) {
    setStyles({
      backgroundColor: 'white',
      borderColor: colors.darkBlue
    });
  };

  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["76390915", [styles.borderColor, styles.backgroundColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("input", {
    onBlur: onBlur,
    onFocus: onFocus,
    value: title,
    placeholder: "Title",
    onChange: function onChange(e) {
      return setTitle(e.target.value);
    },
    type: "text",
    name: "title",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["76390915", [styles.borderColor, styles.backgroundColor]]]) + " " + 'editable-input',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "76390915",
    dynamic: [styles.borderColor, styles.backgroundColor],
    __self: this
  }, "textarea.__jsx-style-dynamic-selector,input.__jsx-style-dynamic-selector{outline:none;padding:2px;padding-left:5px;}input.__jsx-style-dynamic-selector{border:2px solid ".concat(styles.borderColor, ";border-radius:3px;width:80%;background-color:").concat(styles.backgroundColor, ";font-size:1.5rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FobWFpemVscy9EZXNrdG9wL3RyZWxsb2xpa2UvY29tcG9uZW50cy9FZGl0YWJsZVRpdGxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNDZ0IsQUFHc0IsQUFLaUMsYUFKbEMsWUFDSyxpQkFDbkIsSUFHb0Isa0JBQ1IsVUFDb0MsOENBQzdCLGlCQUNuQiIsImZpbGUiOiIvVXNlcnMvbm9haG1haXplbHMvRGVza3RvcC90cmVsbG9saWtlL2NvbXBvbmVudHMvRWRpdGFibGVUaXRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi9oZWxwZXJzL2NvbG9ycydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdGFibGVUaXRsZSh7aW5pdGlhbFRpdGxlfSkge1xuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKGluaXRpYWxUaXRsZSlcbiAgY29uc3QgY29sb3JzID0ge1xuICAgIGRhcmtCbHVlOiAncmdiKDIzLCA0MywgNzcpJyxcbiAgICBncmV5OiAnI0VCRUNGMCcsXG4gICAgZ3JheTogJyNFQkVDRjAnLFxuICAgIHRyYW5zcGFyZW50OiAncmdiYSgwLDAsMCwwKSdcbiAgfVxuICBjb25zdCBbc3R5bGVzLCBzZXRTdHlsZXNdID0gdXNlU3RhdGUoe1xuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLmdyZXksXG4gICAgYm9yZGVyQ29sb3I6IGNvbG9ycy5ncmV5LFxuICB9KVxuXG4gIGNvbnN0IG9uQmx1ciA9IChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LnZhbHVlLnRyaW0oKSA9PT0gJycpIHNldFRpdGxlKCcnKVxuICAgIHNldFN0eWxlcyh7YmFja2dyb3VuZENvbG9yOiBjb2xvcnMuZ3JleSwgYm9yZGVyQ29sb3I6IGNvbG9ycy50cmFuc3BhcmVudH0pXG4gIH1cblxuICBjb25zdCBvbkZvY3VzID0gKGUpID0+IHtcbiAgICBzZXRTdHlsZXMoe2JhY2tncm91bmRDb2xvcjogJ3doaXRlJywgYm9yZGVyQ29sb3I6IGNvbG9ycy5kYXJrQmx1ZX0pXG4gIH1cbiBcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgIDxpbnB1dFxuICAgICAgb25CbHVyPXtvbkJsdXJ9XG4gICAgICBvbkZvY3VzPXtvbkZvY3VzfVxuICAgICAgY2xhc3NOYW1lPSdlZGl0YWJsZS1pbnB1dCcgXG4gICAgICB2YWx1ZT17dGl0bGV9IFxuICAgICAgcGxhY2Vob2xkZXI9J1RpdGxlJ1xuICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgdHlwZT0ndGV4dCdcbiAgICAgIG5hbWU9J3RpdGxlJ1xuICAgID4gXG4gICAgPC9pbnB1dD5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICB0ZXh0YXJlYSwgaW5wdXQgeyBcbiAgICAgICAgb3V0bGluZTogbm9uZTsgXG4gICAgICAgIHBhZGRpbmc6IDJweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgICB9XG4gICAgICBpbnB1dCB7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICR7c3R5bGVzLmJvcmRlckNvbG9yfTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3N0eWxlcy5iYWNrZ3JvdW5kQ29sb3J9O1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+ICBcbiAgICA8L2Rpdj5cbiAgKTtcbn0iXX0= */\n/*@ sourceURL=/Users/noahmaizels/Desktop/trellolike/components/EditableTitle.js */")));
}

/***/ }),

/***/ "./helpers/colors.js":
/*!***************************!*\
  !*** ./helpers/colors.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var colors = {
  darkBlue: 'rgb(23, 43, 77)',
  grey: '#EBECF0',
  gray: '#EBECF0',
  transparent: 'rgba(0,0,0,0)'
};
/* harmony default export */ __webpack_exports__["default"] = (colors);

/***/ })

})
//# sourceMappingURL=index.js.1191d414b78ccae68fcb.hot-update.js.map