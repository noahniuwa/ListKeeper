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
var _jsxFileName = "/Users/noahmaizels/Desktop/ListKeeper/components/EditableTitle.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function EditableTitle(_ref) {
  var initialTitle = _ref.initialTitle;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialTitle),
      title = _useState[0],
      setTitle = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    backgroundColor: rgba(235, 236, 240, 0.5),
    borderColor: _helpers_colors__WEBPACK_IMPORTED_MODULE_2__["default"].grey
  }),
      styles = _useState2[0],
      setStyles = _useState2[1];

  var onBlur = function onBlur(e) {
    if (e.target.value.trim() === '') setTitle('');
    setStyles({
      backgroundColor: _helpers_colors__WEBPACK_IMPORTED_MODULE_2__["default"].grey,
      borderColor: _helpers_colors__WEBPACK_IMPORTED_MODULE_2__["default"].transparent
    });
  };

  var onFocus = function onFocus(e) {
    setStyles({
      backgroundColor: 'white',
      borderColor: _helpers_colors__WEBPACK_IMPORTED_MODULE_2__["default"].darkBlue
    });
  };

  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["76390915", [styles.borderColor, styles.backgroundColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
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
      lineNumber: 22
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "76390915",
    dynamic: [styles.borderColor, styles.backgroundColor],
    __self: this
  }, "textarea.__jsx-style-dynamic-selector,input.__jsx-style-dynamic-selector{outline:none;padding:2px;padding-left:5px;}input.__jsx-style-dynamic-selector{border:2px solid ".concat(styles.borderColor, ";border-radius:3px;width:80%;background-color:").concat(styles.backgroundColor, ";font-size:1.5rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FobWFpemVscy9EZXNrdG9wL0xpc3RLZWVwZXIvY29tcG9uZW50cy9FZGl0YWJsZVRpdGxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdDZ0IsQUFHc0IsQUFLaUMsYUFKbEMsWUFDSyxpQkFDbkIsSUFHb0Isa0JBQ1IsVUFDb0MsOENBQzdCLGlCQUNuQiIsImZpbGUiOiIvVXNlcnMvbm9haG1haXplbHMvRGVza3RvcC9MaXN0S2VlcGVyL2NvbXBvbmVudHMvRWRpdGFibGVUaXRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi9oZWxwZXJzL2NvbG9ycydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdGFibGVUaXRsZSh7aW5pdGlhbFRpdGxlfSkge1xuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKGluaXRpYWxUaXRsZSlcbiAgY29uc3QgW3N0eWxlcywgc2V0U3R5bGVzXSA9IHVzZVN0YXRlKHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHJnYmEoMjM1LCAyMzYsIDI0MCwgMC41KSxcbiAgICBib3JkZXJDb2xvcjogY29sb3JzLmdyZXksXG4gIH0pXG5cbiAgY29uc3Qgb25CbHVyID0gKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQudmFsdWUudHJpbSgpID09PSAnJykgc2V0VGl0bGUoJycpXG4gICAgc2V0U3R5bGVzKHtiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5ncmV5LCBib3JkZXJDb2xvcjogY29sb3JzLnRyYW5zcGFyZW50fSlcbiAgfVxuXG4gIGNvbnN0IG9uRm9jdXMgPSAoZSkgPT4ge1xuICAgIHNldFN0eWxlcyh7YmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBib3JkZXJDb2xvcjogY29sb3JzLmRhcmtCbHVlfSlcbiAgfVxuIFxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgPGlucHV0XG4gICAgICBvbkJsdXI9e29uQmx1cn1cbiAgICAgIG9uRm9jdXM9e29uRm9jdXN9XG4gICAgICBjbGFzc05hbWU9J2VkaXRhYmxlLWlucHV0JyBcbiAgICAgIHZhbHVlPXt0aXRsZX0gXG4gICAgICBwbGFjZWhvbGRlcj0nVGl0bGUnXG4gICAgICBvbkNoYW5nZT17ZSA9PiBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICB0eXBlPSd0ZXh0J1xuICAgICAgbmFtZT0ndGl0bGUnXG4gICAgPiBcbiAgICA8L2lucHV0PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIHRleHRhcmVhLCBpbnB1dCB7IFxuICAgICAgICBvdXRsaW5lOiBub25lOyBcbiAgICAgICAgcGFkZGluZzogMnB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICAgIH1cbiAgICAgIGlucHV0IHtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHtzdHlsZXMuYm9yZGVyQ29sb3J9O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7c3R5bGVzLmJhY2tncm91bmRDb2xvcn07XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT4gIFxuICAgIDwvZGl2PlxuICApO1xufSJdfQ== */\n/*@ sourceURL=/Users/noahmaizels/Desktop/ListKeeper/components/EditableTitle.js */")));
}

/***/ })

})
//# sourceMappingURL=index.js.eb3473bef04c28f2c69c.hot-update.js.map