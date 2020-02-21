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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4107859543", [_helpers_colors__WEBPACK_IMPORTED_MODULE_3__["default"].grey]]]) + " " + 'new-list',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("form", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4107859543", [_helpers_colors__WEBPACK_IMPORTED_MODULE_3__["default"].grey]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4107859543", [_helpers_colors__WEBPACK_IMPORTED_MODULE_3__["default"].grey]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4107859543", [_helpers_colors__WEBPACK_IMPORTED_MODULE_3__["default"].grey]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Add note")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4107859543",
    dynamic: [_helpers_colors__WEBPACK_IMPORTED_MODULE_3__["default"].grey],
    __self: this
  }, ".new-list.__jsx-style-dynamic-selector{width:250px;background-color:".concat(_helpers_colors__WEBPACK_IMPORTED_MODULE_3__["default"].grey, ";height:50px;border-radius:5px;line-height:50px;text-align:center;}input.__jsx-style-dynamic-selector{padding:5px;}button.__jsx-style-dynamic-selector{padding:5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FobWFpemVscy9EZXNrdG9wL3RyZWxsb2xpa2UvY29tcG9uZW50cy9OZXdMaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFDa0IsQUFHdUIsQUFRQSxBQUdBLFlBVmtDLEFBUWhELEFBR0EsOENBVmMsWUFDTSxrQkFDRCxpQkFDQyxrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL25vYWhtYWl6ZWxzL0Rlc2t0b3AvdHJlbGxvbGlrZS9jb21wb25lbnRzL05ld0xpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvTGlzdCdcbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vaGVscGVycy9jb2xvcnMnXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3TGlzdCh7XG4gIGFkZExpc3QsIFxuICBkZWxldGVMaXN0LCBcbiAgc2V0T3Blbk1lbnUsIC8qc3dpdGNoTGlzdHMsKi8gZ2V0T3Blbk1lbnUsIG9wZW5NZW51fSkge1xuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKCcnKVxuICBcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nbmV3LWxpc3QnPlxuICAgICAgPGZvcm0+XG4gICAgICAgIDxpbnB1dCBcbiAgICAgICAgICB2YWx1ZT17dGl0bGV9IFxuICAgICAgICAgIHBsYWNlaG9sZGVyPSdOb3RlIHRpdGxlJ1xuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgIG5hbWU9J3RpdGxlJ1xuICAgICAgICA+IFxuICAgICAgICA8L2lucHV0PlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgYWRkTGlzdCh7IFxuICAgICAgICAgICAgc2V0T3Blbk1lbnU6IHNldE9wZW5NZW51LFxuICAgICAgICAgICAgc2V0VGl0bGU6IHNldFRpdGxlLFxuICAgICAgICAgICAgc3dpdGNoTGlzdHM6IHN3aXRjaExpc3RzLFxuICAgICAgICAgICAgZGVsZXRlTGlzdDogZGVsZXRlTGlzdCxcbiAgICAgICAgICAgIGtleTogTWF0aC5yYW5kb20oKSxcbiAgICAgICAgICAgIGlkOiBNYXRoLnJhbmRvbSgpLFxuICAgICAgICAgICAgaW5pdGlhbFRpdGxlOiB0aXRsZSB8fCBcIlRpdGxlXCIsfSlcbiAgICAgICAgICBzZXRUaXRsZShcIlwiKVxuICAgICAgICB9fT5cbiAgICAgICAgICBBZGQgbm90ZVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLm5ldy1saXN0IHtcbiAgICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMuZ3JleX07XG4gICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXQge1xuICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgfVxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgfVxuICAgIGB9PC9zdHlsZT4gIFxuICAgIDwvZGl2PlxuICApO1xufSJdfQ== */\n/*@ sourceURL=/Users/noahmaizels/Desktop/trellolike/components/NewList.js */")));
}

/***/ })

})
//# sourceMappingURL=index.js.d20e1ccdc716f1f2d98e.hot-update.js.map