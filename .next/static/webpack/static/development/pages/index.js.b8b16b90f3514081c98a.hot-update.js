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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2579928465", [_helpers_colors__WEBPACK_IMPORTED_MODULE_3__["default"].grey]]]) + " " + 'new-list',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2579928465", [_helpers_colors__WEBPACK_IMPORTED_MODULE_3__["default"].grey]]]) + " " + 'new-list-container',
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2579928465", [_helpers_colors__WEBPACK_IMPORTED_MODULE_3__["default"].grey]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), __jsx("div", {
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2579928465", [_helpers_colors__WEBPACK_IMPORTED_MODULE_3__["default"].grey]]]) + " " + "add-list-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Add note")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2579928465",
    dynamic: [_helpers_colors__WEBPACK_IMPORTED_MODULE_3__["default"].grey],
    __self: this
  }, ".add-list-button.__jsx-style-dynamic-selector{display:inline-block;background-color:#D9DBE2;}.new-list-container.__jsx-style-dynamic-selector{white-space:nowrap;border:7px ".concat(_helpers_colors__WEBPACK_IMPORTED_MODULE_3__["default"].grey, " solid;border-radius:5px;width:250px;border-radius:5px;text-align:center;}input.__jsx-style-dynamic-selector{padding:5px;}button.__jsx-style-dynamic-selector{padding:5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FobWFpemVscy9EZXNrdG9wL3RyZWxsb2xpa2UvY29tcG9uZW50cy9OZXdMaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJDa0IsQUFHZ0MsQUFJRixBQVlQLEFBR0EsWUFGZCxBQUdBLE9BZmdELEVBSnJCLHlCQUMzQixtQkFJb0Isa0JBQ04sWUFDTSxrQkFDQSxrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL25vYWhtYWl6ZWxzL0Rlc2t0b3AvdHJlbGxvbGlrZS9jb21wb25lbnRzL05ld0xpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvTGlzdCdcbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vaGVscGVycy9jb2xvcnMnXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3TGlzdCh7XG4gIGFkZExpc3QsIFxuICBkZWxldGVMaXN0LCBcbiAgc2V0T3Blbk1lbnUsIFxuICAvKnN3aXRjaExpc3RzLCovIFxuICBnZXRPcGVuTWVudSwgXG4gIG9wZW5NZW51XG59KSB7XG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoJycpXG4gIFxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSduZXctbGlzdCc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbmV3LWxpc3QtY29udGFpbmVyJz5cbiAgICAgICAgPGlucHV0IFxuICAgICAgICAgIHZhbHVlPXt0aXRsZX0gXG4gICAgICAgICAgcGxhY2Vob2xkZXI9J05vdGUgdGl0bGUnXG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgbmFtZT0ndGl0bGUnXG4gICAgICAgID4gXG4gICAgICAgIDwvaW5wdXQ+XG4gICAgICAgIDxkaXYgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICBhZGRMaXN0KHsgXG4gICAgICAgICAgICBzZXRPcGVuTWVudTogc2V0T3Blbk1lbnUsXG4gICAgICAgICAgICBzZXRUaXRsZTogc2V0VGl0bGUsXG4gICAgICAgICAgICAvLyBzd2l0Y2hMaXN0czogc3dpdGNoTGlzdHMsXG4gICAgICAgICAgICBkZWxldGVMaXN0OiBkZWxldGVMaXN0LFxuICAgICAgICAgICAga2V5OiBNYXRoLnJhbmRvbSgpLFxuICAgICAgICAgICAgaWQ6IE1hdGgucmFuZG9tKCksXG4gICAgICAgICAgICBpbml0aWFsVGl0bGU6IHRpdGxlIHx8IFwiVGl0bGVcIix9KVxuICAgICAgICAgIHNldFRpdGxlKFwiXCIpXG4gICAgICAgIH19XG4gICAgICAgIGNsYXNzTmFtZT1cImFkZC1saXN0LWJ1dHRvblwiXG4gICAgICAgID5cbiAgICAgICAgICBBZGQgbm90ZVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuYWRkLWxpc3QtYnV0dG9ue1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDlEQkUyO1xuICAgICAgICB9XG4gICAgICAgIC5uZXctbGlzdC1jb250YWluZXIge1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgYm9yZGVyOiA3cHggJHtjb2xvcnMuZ3JleX0gc29saWQ7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5uZXctbGlzdCB7XG4gICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgaW5wdXQge1xuICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgfVxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgfVxuICAgIGB9PC9zdHlsZT4gIFxuICAgIDwvZGl2PlxuICApO1xufSJdfQ== */\n/*@ sourceURL=/Users/noahmaizels/Desktop/trellolike/components/NewList.js */")));
}

/***/ })

})
//# sourceMappingURL=index.js.b8b16b90f3514081c98a.hot-update.js.map