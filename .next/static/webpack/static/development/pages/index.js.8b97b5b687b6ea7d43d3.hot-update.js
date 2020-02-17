webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_NewList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/NewList */ "./components/NewList.js");
/* harmony import */ var _components_List__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/List */ "./components/List.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_11__);







var _jsxFileName = "/Users/noahmaizels/Desktop/trellolike/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;





var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Index, _React$Component);

  function Index(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Index).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "setOpenMenu", function (menuId) {
      _this.setState({
        openMenu: menuId
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "getOpenMenu", function () {
      return _this.state.openMenu;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "addList", function (list) {
      var newLists = _this.state.lists.slice();

      newLists.push(list);

      _this.setState({
        lists: newLists
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "deleteList", function (listId) {
      var newLists = _this.state.lists.slice();

      newLists = newLists.filter(function (list) {
        return list.id !== listId;
      });

      _this.setState({
        lists: newLists
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "switchLists", function (sourceId, targetId) {
      var newLists = _this.state.lists.slice();

      var sourceElement;
      var targetElement;
      newLists.forEach(function (list) {
        if (String(list.id) === String(sourceId)) {
          sourceElement = list;
        }

        if (String(list.id) === String(targetId)) {
          targetElement = list;
        }
      });
      newLists = newLists.map(function (list) {
        if (String(list.id) === String(sourceId)) {
          return targetElement;
        }

        if (String(list.id) === String(targetId)) {
          return sourceElement;
        }

        return list;
      });

      _this.setState({
        lists: newLists
      });
    });

    _this.state = {
      lists: [],
      openMenu: ''
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx("div", {
        className: "jsx-3518781173",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_11___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, __jsx("title", {
        className: "jsx-3518781173",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "TrelloLike")), __jsx("main", {
        className: "jsx-3518781173",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-3518781173" + " " + 'lists-container',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, this.state.lists.map(function (list) {
        return __jsx(_components_List__WEBPACK_IMPORTED_MODULE_10__["default"], {
          openMenu: _this2.state.openMenu,
          setOpenMenu: list.setOpenMenu,
          setTitle: list.setTitle,
          switchLists: list.switchLists,
          deleteList: list.deleteList,
          key: list.key,
          id: list.id,
          initialTitle: list.initialTitle,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          },
          __self: this
        });
      })), __jsx(_components_NewList__WEBPACK_IMPORTED_MODULE_9__["default"], {
        openMenu: this.state.openMenu,
        getOpenMenu: this.getOpenMenu,
        setOpenMenu: this.setOpenMenu,
        switchLists: this.switchLists,
        deleteList: this.deleteList,
        addList: this.addList,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3518781173",
        __self: this
      }, "main.jsx-3518781173{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:15px;}.dropspace.jsx-3518781173{border:1px solid blue;display:inline-block;height:100px;width:100px;}.item.jsx-3518781173{border:1px solid red;display:inline-block;}.targets-container.jsx-3518781173{position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.lists-container.jsx-3518781173{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100vh;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FobWFpemVscy9EZXNrdG9wL3RyZWxsb2xpa2UvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEZtQixBQUcwQixBQUlTLEFBTUQsQUFJSCxBQUlMLGtCQUhBLEdBSlEsQ0FOQSxvQkFPdkIsQ0FOZSxhQUNELFlBQ2QsTUFQZSxBQWtCQSxhQWpCZixBQWtCeUIsS0FKekIsd0dBS0EiLCJmaWxlIjoiL1VzZXJzL25vYWhtYWl6ZWxzL0Rlc2t0b3AvdHJlbGxvbGlrZS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXdMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvTmV3TGlzdCdcbmltcG9ydCBMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvTGlzdCdcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxpc3RzOiBbXSxcbiAgICAgIG9wZW5NZW51OiAnJyxcbiAgICB9XG4gIH1cblxuICBzZXRPcGVuTWVudSA9IChtZW51SWQpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtvcGVuTWVudTogbWVudUlkfSlcbiAgfVxuXG4gIGdldE9wZW5NZW51ID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLm9wZW5NZW51XG4gIH1cbiAgICBcbiAgYWRkTGlzdCA9IChsaXN0KSA9PiB7XG4gICAgbGV0IG5ld0xpc3RzID0gdGhpcy5zdGF0ZS5saXN0cy5zbGljZSgpXG4gICAgbmV3TGlzdHMucHVzaChsaXN0KVxuICAgIHRoaXMuc2V0U3RhdGUoe2xpc3RzOiBuZXdMaXN0c30pXG4gIH1cblxuICBkZWxldGVMaXN0ID0gKGxpc3RJZCkgPT4ge1xuICAgIGxldCBuZXdMaXN0cyA9IHRoaXMuc3RhdGUubGlzdHMuc2xpY2UoKVxuICAgIG5ld0xpc3RzID0gbmV3TGlzdHMuZmlsdGVyKGxpc3QgPT4gbGlzdC5pZCAhPT0gbGlzdElkKVxuICAgIHRoaXMuc2V0U3RhdGUoe2xpc3RzOiBuZXdMaXN0c30pXG4gIH1cblxuICBzd2l0Y2hMaXN0cyA9IChzb3VyY2VJZCwgdGFyZ2V0SWQpID0+IHtcbiAgICBsZXQgbmV3TGlzdHMgPSB0aGlzLnN0YXRlLmxpc3RzLnNsaWNlKClcbiAgICBsZXQgc291cmNlRWxlbWVudFxuICAgIGxldCB0YXJnZXRFbGVtZW50XG4gICAgbmV3TGlzdHMuZm9yRWFjaChsaXN0ID0+IHtcbiAgICAgIGlmIChTdHJpbmcobGlzdC5pZCkgPT09IFN0cmluZyhzb3VyY2VJZCkpe1xuICAgICAgICBzb3VyY2VFbGVtZW50ID0gbGlzdFxuICAgICAgfVxuICAgICAgaWYgKFN0cmluZyhsaXN0LmlkKSA9PT0gU3RyaW5nKHRhcmdldElkKSl7XG4gICAgICAgIHRhcmdldEVsZW1lbnQgPSBsaXN0XG4gICAgICB9XG4gICAgfSlcblxuICAgIG5ld0xpc3RzID0gbmV3TGlzdHMubWFwKGxpc3QgPT4ge1xuICAgICAgaWYgKFN0cmluZyhsaXN0LmlkKSA9PT0gU3RyaW5nKHNvdXJjZUlkKSl7XG4gICAgICAgIHJldHVybiB0YXJnZXRFbGVtZW50XG4gICAgICB9XG4gICAgICBpZiAoU3RyaW5nKGxpc3QuaWQpID09PSBTdHJpbmcodGFyZ2V0SWQpKXtcbiAgICAgICAgcmV0dXJuIHNvdXJjZUVsZW1lbnRcbiAgICAgIH1cbiAgICAgIHJldHVybiBsaXN0XG4gICAgfSlcbiAgICB0aGlzLnNldFN0YXRlKHtsaXN0czogbmV3TGlzdHN9KVxuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5UcmVsbG9MaWtlPC90aXRsZT5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8bWFpbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGlzdHMtY29udGFpbmVyJz5cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmxpc3RzLm1hcCgobGlzdCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gPExpc3QgXG4gICAgICAgICAgICAgIG9wZW5NZW51PXt0aGlzLnN0YXRlLm9wZW5NZW51fVxuICAgICAgICAgICAgICBzZXRPcGVuTWVudT17bGlzdC5zZXRPcGVuTWVudX1cbiAgICAgICAgICAgICAgc2V0VGl0bGU9e2xpc3Quc2V0VGl0bGV9XG4gICAgICAgICAgICAgIHN3aXRjaExpc3RzPXtsaXN0LnN3aXRjaExpc3RzfVxuICAgICAgICAgICAgICBkZWxldGVMaXN0PXtsaXN0LmRlbGV0ZUxpc3R9XG4gICAgICAgICAgICAgIGtleT17bGlzdC5rZXl9XG4gICAgICAgICAgICAgIGlkPXtsaXN0LmlkfVxuICAgICAgICAgICAgICBpbml0aWFsVGl0bGU9e2xpc3QuaW5pdGlhbFRpdGxlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPE5ld0xpc3QgXG4gICAgICAgICAgICBvcGVuTWVudT17dGhpcy5zdGF0ZS5vcGVuTWVudX1cbiAgICAgICAgICAgIGdldE9wZW5NZW51PXt0aGlzLmdldE9wZW5NZW51fSBcbiAgICAgICAgICAgIHNldE9wZW5NZW51PXt0aGlzLnNldE9wZW5NZW51fSBcbiAgICAgICAgICAgIHN3aXRjaExpc3RzPXt0aGlzLnN3aXRjaExpc3RzfSBcbiAgICAgICAgICAgIGRlbGV0ZUxpc3Q9e3RoaXMuZGVsZXRlTGlzdH0gXG4gICAgICAgICAgICBhZGRMaXN0PXt0aGlzLmFkZExpc3R9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9tYWluPiAgIFxuICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBtYWluIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZHJvcHNwYWNlIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaXRlbSB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50YXJnZXRzLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGlzdHMtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn0iXX0= */\n/*@ sourceURL=/Users/noahmaizels/Desktop/trellolike/pages/index.js */"));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.8b97b5b687b6ea7d43d3.hot-update.js.map