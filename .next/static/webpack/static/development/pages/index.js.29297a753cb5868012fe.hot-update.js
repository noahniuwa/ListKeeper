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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["880803736", [_helpers_colors__WEBPACK_IMPORTED_MODULE_3__["default"].grey]]]) + " " + 'new-list',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("form", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["880803736", [_helpers_colors__WEBPACK_IMPORTED_MODULE_3__["default"].grey]]]),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["880803736", [_helpers_colors__WEBPACK_IMPORTED_MODULE_3__["default"].grey]]]),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["880803736", [_helpers_colors__WEBPACK_IMPORTED_MODULE_3__["default"].grey]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Add note")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "880803736",
    dynamic: [_helpers_colors__WEBPACK_IMPORTED_MODULE_3__["default"].grey],
    __self: this
  }, ".new-list.__jsx-style-dynamic-selector{width:250px;background-color:".concat(_helpers_colors__WEBPACK_IMPORTED_MODULE_3__["default"].grey, ";height:50px;border-radius:5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FobWFpemVscy9EZXNrdG9wL3RyZWxsb2xpa2UvY29tcG9uZW50cy9OZXdMaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtDa0IsQUFHdUIsWUFDa0MsOENBQ2xDLFlBQ00sa0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9ub2FobWFpemVscy9EZXNrdG9wL3RyZWxsb2xpa2UvY29tcG9uZW50cy9OZXdMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL0xpc3QnXG5pbXBvcnQgY29sb3JzIGZyb20gJy4uL2hlbHBlcnMvY29sb3JzJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld0xpc3Qoe2FkZExpc3QsIGRlbGV0ZUxpc3QsIHN3aXRjaExpc3RzLCBzZXRPcGVuTWVudSwgZ2V0T3Blbk1lbnUsIG9wZW5NZW51fSkge1xuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKCcnKVxuICBcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nbmV3LWxpc3QnPlxuICAgICAgPGZvcm0+XG4gICAgICAgIDxpbnB1dCBcbiAgICAgICAgICB2YWx1ZT17dGl0bGV9IFxuICAgICAgICAgIHBsYWNlaG9sZGVyPSdOb3RlIHRpdGxlJ1xuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgIG5hbWU9J3RpdGxlJ1xuICAgICAgICA+IFxuICAgICAgICA8L2lucHV0PlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgYWRkTGlzdCh7IFxuICAgICAgICAgICAgc2V0T3Blbk1lbnU6IHNldE9wZW5NZW51LFxuICAgICAgICAgICAgc2V0VGl0bGU6IHNldFRpdGxlLFxuICAgICAgICAgICAgc3dpdGNoTGlzdHM6IHN3aXRjaExpc3RzLCBcbiAgICAgICAgICAgIGRlbGV0ZUxpc3Q6IGRlbGV0ZUxpc3QsXG4gICAgICAgICAgICBrZXk6IE1hdGgucmFuZG9tKCksXG4gICAgICAgICAgICBpZDogTWF0aC5yYW5kb20oKSxcbiAgICAgICAgICAgIGluaXRpYWxUaXRsZTogdGl0bGUgfHwgXCJUaXRsZVwiLH0pXG4gICAgICAgICAgc2V0VGl0bGUoXCJcIilcbiAgICAgICAgfX0+XG4gICAgICAgICAgQWRkIG5vdGVcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5uZXctbGlzdCB7XG4gICAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JzLmdyZXl9O1xuICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIH1cbiAgICBgfTwvc3R5bGU+ICBcbiAgICA8L2Rpdj5cbiAgKTtcbn0iXX0= */\n/*@ sourceURL=/Users/noahmaizels/Desktop/trellolike/components/NewList.js */")));
}

/***/ })

})
//# sourceMappingURL=index.js.29297a753cb5868012fe.hot-update.js.map