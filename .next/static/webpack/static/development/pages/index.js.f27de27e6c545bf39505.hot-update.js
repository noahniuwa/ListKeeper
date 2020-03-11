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
    backgroundColor: _helpers_colors__WEBPACK_IMPORTED_MODULE_2__["default"].grey,
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1204462541", [styles.borderColor]]]),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1204462541", [styles.borderColor]]]) + " " + 'editable-input',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1204462541",
    dynamic: [styles.borderColor],
    __self: this
  }, "textarea.__jsx-style-dynamic-selector,input.__jsx-style-dynamic-selector{outline:none;padding:2px;padding-left:5px;}input.__jsx-style-dynamic-selector{border:2px solid ".concat(styles.borderColor, ";border-radius:3px;width:80%;background-color:rgba;font-size:1.5rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FobWFpemVscy9EZXNrdG9wL0xpc3RLZWVwZXIvY29tcG9uZW50cy9FZGl0YWJsZVRpdGxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdDZ0IsQUFHc0IsQUFLaUMsYUFKbEMsWUFDSyxpQkFDbkIsSUFHb0Isa0JBQ1IsVUFDWSxzQkFDTCxpQkFDbkIiLCJmaWxlIjoiL1VzZXJzL25vYWhtYWl6ZWxzL0Rlc2t0b3AvTGlzdEtlZXBlci9jb21wb25lbnRzL0VkaXRhYmxlVGl0bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vaGVscGVycy9jb2xvcnMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXRhYmxlVGl0bGUoe2luaXRpYWxUaXRsZX0pIHtcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShpbml0aWFsVGl0bGUpXG4gIGNvbnN0IFtzdHlsZXMsIHNldFN0eWxlc10gPSB1c2VTdGF0ZSh7XG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuZ3JleSxcbiAgICBib3JkZXJDb2xvcjogY29sb3JzLmdyZXksXG4gIH0pXG5cbiAgY29uc3Qgb25CbHVyID0gKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQudmFsdWUudHJpbSgpID09PSAnJykgc2V0VGl0bGUoJycpXG4gICAgc2V0U3R5bGVzKHtiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5ncmV5LCBib3JkZXJDb2xvcjogY29sb3JzLnRyYW5zcGFyZW50fSlcbiAgfVxuXG4gIGNvbnN0IG9uRm9jdXMgPSAoZSkgPT4ge1xuICAgIHNldFN0eWxlcyh7YmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBib3JkZXJDb2xvcjogY29sb3JzLmRhcmtCbHVlfSlcbiAgfVxuIFxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgPGlucHV0XG4gICAgICBvbkJsdXI9e29uQmx1cn1cbiAgICAgIG9uRm9jdXM9e29uRm9jdXN9XG4gICAgICBjbGFzc05hbWU9J2VkaXRhYmxlLWlucHV0JyBcbiAgICAgIHZhbHVlPXt0aXRsZX0gXG4gICAgICBwbGFjZWhvbGRlcj0nVGl0bGUnXG4gICAgICBvbkNoYW5nZT17ZSA9PiBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICB0eXBlPSd0ZXh0J1xuICAgICAgbmFtZT0ndGl0bGUnXG4gICAgPiBcbiAgICA8L2lucHV0PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIHRleHRhcmVhLCBpbnB1dCB7IFxuICAgICAgICBvdXRsaW5lOiBub25lOyBcbiAgICAgICAgcGFkZGluZzogMnB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICAgIH1cbiAgICAgIGlucHV0IHtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHtzdHlsZXMuYm9yZGVyQ29sb3J9O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmE7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT4gIFxuICAgIDwvZGl2PlxuICApO1xufSJdfQ== */\n/*@ sourceURL=/Users/noahmaizels/Desktop/ListKeeper/components/EditableTitle.js */")));
}

/***/ })

})
//# sourceMappingURL=index.js.f27de27e6c545bf39505.hot-update.js.map