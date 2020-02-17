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
/* harmony import */ var _helpers_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/colors */ "./helpers/colors.js");
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1013956469", [_helpers_colors__WEBPACK_IMPORTED_MODULE_3__["default"].grey]]]) + " " + 'new-list',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("form", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1013956469", [_helpers_colors__WEBPACK_IMPORTED_MODULE_3__["default"].grey]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1013956469", [_helpers_colors__WEBPACK_IMPORTED_MODULE_3__["default"].grey]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1013956469", [_helpers_colors__WEBPACK_IMPORTED_MODULE_3__["default"].grey]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Add note")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1013956469",
    dynamic: [_helpers_colors__WEBPACK_IMPORTED_MODULE_3__["default"].grey],
    __self: this
  }, ".new-list.__jsx-style-dynamic-selector{width:250px;background-color:".concat(_helpers_colors__WEBPACK_IMPORTED_MODULE_3__["default"].grey, ";height:50px;border-radius:5px;line-height:50px;text-align:center;}input.__jsx-style-dynamic-selector{padding:8px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FobWFpemVscy9EZXNrdG9wL3RyZWxsb2xpa2UvY29tcG9uZW50cy9OZXdMaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtDa0IsQUFHdUIsQUFRQSxZQVBrQyxBQVFoRCw4Q0FQYyxZQUNNLGtCQUNELGlCQUNDLGtCQUNwQiIsImZpbGUiOiIvVXNlcnMvbm9haG1haXplbHMvRGVza3RvcC90cmVsbG9saWtlL2NvbXBvbmVudHMvTmV3TGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9MaXN0J1xuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi9oZWxwZXJzL2NvbG9ycydcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXdMaXN0KHthZGRMaXN0LCBkZWxldGVMaXN0LCBzd2l0Y2hMaXN0cywgc2V0T3Blbk1lbnUsIGdldE9wZW5NZW51LCBvcGVuTWVudX0pIHtcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZSgnJylcbiAgXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J25ldy1saXN0Jz5cbiAgICAgIDxmb3JtPlxuICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgdmFsdWU9e3RpdGxlfSBcbiAgICAgICAgICBwbGFjZWhvbGRlcj0nTm90ZSB0aXRsZSdcbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICBuYW1lPSd0aXRsZSdcbiAgICAgICAgPiBcbiAgICAgICAgPC9pbnB1dD5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIGFkZExpc3QoeyBcbiAgICAgICAgICAgIHNldE9wZW5NZW51OiBzZXRPcGVuTWVudSxcbiAgICAgICAgICAgIHNldFRpdGxlOiBzZXRUaXRsZSxcbiAgICAgICAgICAgIHN3aXRjaExpc3RzOiBzd2l0Y2hMaXN0cywgXG4gICAgICAgICAgICBkZWxldGVMaXN0OiBkZWxldGVMaXN0LFxuICAgICAgICAgICAga2V5OiBNYXRoLnJhbmRvbSgpLFxuICAgICAgICAgICAgaWQ6IE1hdGgucmFuZG9tKCksXG4gICAgICAgICAgICBpbml0aWFsVGl0bGU6IHRpdGxlIHx8IFwiVGl0bGVcIix9KVxuICAgICAgICAgIHNldFRpdGxlKFwiXCIpXG4gICAgICAgIH19PlxuICAgICAgICAgIEFkZCBub3RlXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAubmV3LWxpc3Qge1xuICAgICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9ycy5ncmV5fTtcbiAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICB9XG4gICAgYH08L3N0eWxlPiAgXG4gICAgPC9kaXY+XG4gICk7XG59Il19 */\n/*@ sourceURL=/Users/noahmaizels/Desktop/trellolike/components/NewList.js */")));
}

/***/ })

})
//# sourceMappingURL=index.js.14172938928608a2d50b.hot-update.js.map