webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/NewList.js":
/*!*******************************!*\
  !*** ./components/NewList.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NewList; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/List */ "./components/List.js");
var _jsxFileName = "/Users/noahmaizels/Desktop/trellolike/components/NewList.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function NewList(_ref) {
  var addList = _ref.addList,
      deleteList = _ref.deleteList,
      switchLists = _ref.switchLists,
      setOpenMenu = _ref.setOpenMenu,
      getOpenMenu = _ref.getOpenMenu,
      openMenu = _ref.openMenu;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      title = _useState[0],
      setTitle = _useState[1];

  return __jsx("div", {
    className: "jsx-706123200",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("form", {
    className: "jsx-706123200",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("input", {
    value: title,
    placeholder: "Note title",
    onChange: function onChange(e) {
      return setTitle(e.target.value);
    },
    type: "text",
    name: "title",
    className: "jsx-706123200",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), __jsx("button", {
    onClick: function onClick(e) {
      e.preventDefault();
      addList({
        setOpenMenu: setOpenMenu,
        setTitle: setTitle,
        switchLists: switchLists,
        deleteList: deleteList,
        key: Math.random(),
        id: Math.random(),
        initialTitle: title || "Title"
      });
      setTitle("");
    },
    className: "jsx-706123200",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Add note")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "706123200",
    __self: this
  }, "textarea.jsx-706123200,input.jsx-706123200{outline:none;padding:2px;padding-left:5px;}input.jsx-706123200{border:2px solid ".concat(styles.borderColor, ";border-radius:3px;width:80%;background-color:").concat(styles.backgroundColor, ";font-size:1.5rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FobWFpemVscy9EZXNrdG9wL3RyZWxsb2xpa2UvY29tcG9uZW50cy9OZXdMaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlDa0IsQUFHc0IsQUFLaUMsYUFKbEMsWUFDSyxpQkFDbkIsSUFHb0Isa0JBQ1IsVUFDb0MsOENBQzdCLGlCQUNuQiIsImZpbGUiOiIvVXNlcnMvbm9haG1haXplbHMvRGVza3RvcC90cmVsbG9saWtlL2NvbXBvbmVudHMvTmV3TGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9MaXN0J1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld0xpc3Qoe2FkZExpc3QsIGRlbGV0ZUxpc3QsIHN3aXRjaExpc3RzLCBzZXRPcGVuTWVudSwgZ2V0T3Blbk1lbnUsIG9wZW5NZW51fSkge1xuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKCcnKVxuICBcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGZvcm0+XG4gICAgICAgIDxpbnB1dCBcbiAgICAgICAgICB2YWx1ZT17dGl0bGV9IFxuICAgICAgICAgIHBsYWNlaG9sZGVyPSdOb3RlIHRpdGxlJ1xuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgIG5hbWU9J3RpdGxlJ1xuICAgICAgICA+IFxuICAgICAgICA8L2lucHV0PlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgYWRkTGlzdCh7IFxuICAgICAgICAgICAgc2V0T3Blbk1lbnU6IHNldE9wZW5NZW51LFxuICAgICAgICAgICAgc2V0VGl0bGU6IHNldFRpdGxlLFxuICAgICAgICAgICAgc3dpdGNoTGlzdHM6IHN3aXRjaExpc3RzLCBcbiAgICAgICAgICAgIGRlbGV0ZUxpc3Q6IGRlbGV0ZUxpc3QsXG4gICAgICAgICAgICBrZXk6IE1hdGgucmFuZG9tKCksXG4gICAgICAgICAgICBpZDogTWF0aC5yYW5kb20oKSxcbiAgICAgICAgICAgIGluaXRpYWxUaXRsZTogdGl0bGUgfHwgXCJUaXRsZVwiLH0pXG4gICAgICAgICAgc2V0VGl0bGUoXCJcIilcbiAgICAgICAgfX0+XG4gICAgICAgICAgQWRkIG5vdGVcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICB0ZXh0YXJlYSwgaW5wdXQgeyBcbiAgICAgICAgb3V0bGluZTogbm9uZTsgXG4gICAgICAgIHBhZGRpbmc6IDJweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgICB9XG4gICAgICBpbnB1dCB7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICR7c3R5bGVzLmJvcmRlckNvbG9yfTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3N0eWxlcy5iYWNrZ3JvdW5kQ29sb3J9O1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+ICBcbiAgICA8L2Rpdj5cbiAgKTtcbn0iXX0= */\n/*@ sourceURL=/Users/noahmaizels/Desktop/trellolike/components/NewList.js */")));
}

/***/ })

})
//# sourceMappingURL=index.js.a050a958d6903a40a661.hot-update.js.map