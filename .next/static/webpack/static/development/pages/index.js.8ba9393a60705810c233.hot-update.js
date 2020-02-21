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
      setOpenMenu = _ref.setOpenMenu,
      getOpenMenu = _ref.getOpenMenu,
      openMenu = _ref.openMenu;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      title = _useState[0],
      setTitle = _useState[1];

  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1798358855", [_helpers_colors__WEBPACK_IMPORTED_MODULE_3__["default"].grey, _helpers_colors__WEBPACK_IMPORTED_MODULE_3__["default"].grey]]]) + " " + 'new-list',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1798358855", [_helpers_colors__WEBPACK_IMPORTED_MODULE_3__["default"].grey, _helpers_colors__WEBPACK_IMPORTED_MODULE_3__["default"].grey]]]) + " " + 'new-list-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1798358855", [_helpers_colors__WEBPACK_IMPORTED_MODULE_3__["default"].grey, _helpers_colors__WEBPACK_IMPORTED_MODULE_3__["default"].grey]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), __jsx("button", {
    onClick: function onClick(e) {
      e.preventDefault();
      addList({
        setOpenMenu: setOpenMenu,
        setTitle: setTitle,
        // switchLists: switchLists,
        deleteList: deleteList,
        key: Math.random(),
        id: Math.random(),
        initialTitle: title || "Title"
      });
      setTitle("");
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1798358855", [_helpers_colors__WEBPACK_IMPORTED_MODULE_3__["default"].grey, _helpers_colors__WEBPACK_IMPORTED_MODULE_3__["default"].grey]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Add note")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1798358855",
    dynamic: [_helpers_colors__WEBPACK_IMPORTED_MODULE_3__["default"].grey, _helpers_colors__WEBPACK_IMPORTED_MODULE_3__["default"].grey],
    __self: this
  }, ".new-list-container.__jsx-style-dynamic-selector{white-space:nowrap;border:7px ".concat(_helpers_colors__WEBPACK_IMPORTED_MODULE_3__["default"].grey, " solid;border-radius:5px;}button.__jsx-style-dynamic-selector{border-left:3px solid ").concat(_helpers_colors__WEBPACK_IMPORTED_MODULE_3__["default"].grey, ";}.new-list.__jsx-style-dynamic-selector{height:50px;border-radius:5px;text-align:center;}input.__jsx-style-dynamic-selector{padding:5px;}button.__jsx-style-dynamic-selector{padding:5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FobWFpemVscy9EZXNrdG9wL3RyZWxsb2xpa2UvY29tcG9uZW50cy9OZXdMaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlDa0IsQUFHOEIsQUFLZ0MsQUFJdkMsQUFLQSxBQUdBLFlBUE0sQUFLcEIsQUFHQSxPQWpCZ0QsV0FVNUIsa0JBQ3BCLEdBTkEsY0FKb0Isa0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9ub2FobWFpemVscy9EZXNrdG9wL3RyZWxsb2xpa2UvY29tcG9uZW50cy9OZXdMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL0xpc3QnXG5pbXBvcnQgY29sb3JzIGZyb20gJy4uL2hlbHBlcnMvY29sb3JzJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld0xpc3Qoe1xuICBhZGRMaXN0LCBcbiAgZGVsZXRlTGlzdCwgXG4gIHNldE9wZW5NZW51LCBcbiAgLypzd2l0Y2hMaXN0cywqLyBcbiAgZ2V0T3Blbk1lbnUsIFxuICBvcGVuTWVudVxufSkge1xuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKCcnKVxuICBcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nbmV3LWxpc3QnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J25ldy1saXN0LWNvbnRhaW5lcic+XG4gICAgICAgIDxpbnB1dCBcbiAgICAgICAgICB2YWx1ZT17dGl0bGV9IFxuICAgICAgICAgIHBsYWNlaG9sZGVyPSdOb3RlIHRpdGxlJ1xuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgIG5hbWU9J3RpdGxlJ1xuICAgICAgICA+IFxuICAgICAgICA8L2lucHV0PlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgYWRkTGlzdCh7IFxuICAgICAgICAgICAgc2V0T3Blbk1lbnU6IHNldE9wZW5NZW51LFxuICAgICAgICAgICAgc2V0VGl0bGU6IHNldFRpdGxlLFxuICAgICAgICAgICAgLy8gc3dpdGNoTGlzdHM6IHN3aXRjaExpc3RzLFxuICAgICAgICAgICAgZGVsZXRlTGlzdDogZGVsZXRlTGlzdCxcbiAgICAgICAgICAgIGtleTogTWF0aC5yYW5kb20oKSxcbiAgICAgICAgICAgIGlkOiBNYXRoLnJhbmRvbSgpLFxuICAgICAgICAgICAgaW5pdGlhbFRpdGxlOiB0aXRsZSB8fCBcIlRpdGxlXCIsfSlcbiAgICAgICAgICBzZXRUaXRsZShcIlwiKVxuICAgICAgICB9fT5cbiAgICAgICAgICBBZGQgbm90ZVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAubmV3LWxpc3QtY29udGFpbmVyIHtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgIGJvcmRlcjogN3B4ICR7Y29sb3JzLmdyZXl9IHNvbGlkO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgfVxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgJHtjb2xvcnMuZ3JleX07XG4gICAgICAgIH1cbiAgICAgICAgLm5ldy1saXN0IHtcbiAgICAgICAgICBcbiAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICB9XG4gICAgYH08L3N0eWxlPiAgXG4gICAgPC9kaXY+XG4gICk7XG59Il19 */\n/*@ sourceURL=/Users/noahmaizels/Desktop/trellolike/components/NewList.js */")));
}

/***/ })

})
//# sourceMappingURL=index.js.8ba9393a60705810c233.hot-update.js.map