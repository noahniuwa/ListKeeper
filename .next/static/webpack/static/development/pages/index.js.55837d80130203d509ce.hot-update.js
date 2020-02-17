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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_List__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/List */ "./components/List.js");
var _jsxFileName = "/Users/noahmaizels/Desktop/trellolike/components/NewList.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function NewList(_ref) {
  var addList = _ref.addList,
      deleteList = _ref.deleteList,
      switchLists = _ref.switchLists,
      setOpenMenu = _ref.setOpenMenu,
      openMenu = _ref.openMenu;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      title = _useState[0],
      setTitle = _useState[1];

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("form", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("input", {
    value: title,
    placeholder: "List title",
    onChange: function onChange(e) {
      return setTitle(e.target.value);
    },
    type: "text",
    name: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), __jsx("button", {
    onClick: function onClick(e) {
      e.preventDefault();
      addList(__jsx(_components_List__WEBPACK_IMPORTED_MODULE_1__["default"], {
        openMenu: openMenu,
        setOpenMenu: setOpenMenu,
        menuId: 'm'.concat(uniqueId),
        setTitle: setTitle,
        switchLists: switchLists,
        deleteList: deleteList,
        key: Math.random(),
        id: Math.random(),
        initialTitle: title || "Title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }));
      setTitle(""); // console.log(lists.length)
      // console.log(newLists)
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Click me")));
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js":
false,

/***/ "./node_modules/core-js/library/fn/date/now.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.date.now.js":
false

})
//# sourceMappingURL=index.js.55837d80130203d509ce.hot-update.js.map