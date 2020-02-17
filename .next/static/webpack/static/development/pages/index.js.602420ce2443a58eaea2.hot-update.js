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
/* harmony import */ var _helpers_colors__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../helpers/colors */ "./helpers/colors.js");







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
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["96398669", [_helpers_colors__WEBPACK_IMPORTED_MODULE_12__["default"].grey]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_11___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, __jsx("title", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["96398669", [_helpers_colors__WEBPACK_IMPORTED_MODULE_12__["default"].grey]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "TrelloLike"), __jsx("style", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "@import url('https://fonts.googleapis.com/css?family=Muli:400,400i,700,700i&display=swap');")), __jsx("header", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["96398669", [_helpers_colors__WEBPACK_IMPORTED_MODULE_12__["default"].grey]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "ListKeeper"), __jsx("main", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["96398669", [_helpers_colors__WEBPACK_IMPORTED_MODULE_12__["default"].grey]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["96398669", [_helpers_colors__WEBPACK_IMPORTED_MODULE_12__["default"].grey]]]) + " " + 'lists-container',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
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
            lineNumber: 77
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
          lineNumber: 89
        },
        __self: this
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "96398669",
        dynamic: [_helpers_colors__WEBPACK_IMPORTED_MODULE_12__["default"].grey],
        __self: this
      }, "main.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:15px;}.dropspace.__jsx-style-dynamic-selector{border:1px solid blue;display:inline-block;height:100px;width:100px;}.item.__jsx-style-dynamic-selector{border:1px solid red;display:inline-block;}.targets-container.__jsx-style-dynamic-selector{position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.lists-container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100vh;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}header.__jsx-style-dynamic-selector{width:100%;background-color:".concat(_helpers_colors__WEBPACK_IMPORTED_MODULE_12__["default"].grey, ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FobWFpemVscy9EZXNrdG9wL3RyZWxsb2xpa2UvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUdtQixBQUcwQixBQUlTLEFBTUQsQUFJSCxBQUlMLEFBS0YsV0FDbUMsT0FUakMsR0FKUSxDQU5BLG9CQU92QixDQU5lLGFBQ0QsQ0FrQmQsV0FqQkEsTUFQZSxBQWtCQSxhQWpCZixBQWtCeUIsS0FKekIsd0dBS0EiLCJmaWxlIjoiL1VzZXJzL25vYWhtYWl6ZWxzL0Rlc2t0b3AvdHJlbGxvbGlrZS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXdMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvTmV3TGlzdCdcbmltcG9ydCBMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvTGlzdCdcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgY29sb3JzIGZyb20gJy4uL2hlbHBlcnMvY29sb3JzJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBsaXN0czogW10sXG4gICAgICBvcGVuTWVudTogJycsXG4gICAgfVxuICB9XG5cbiAgc2V0T3Blbk1lbnUgPSAobWVudUlkKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3Blbk1lbnU6IG1lbnVJZH0pXG4gIH1cblxuICBnZXRPcGVuTWVudSA9ICgpID0+IHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5vcGVuTWVudVxuICB9XG4gICAgXG4gIGFkZExpc3QgPSAobGlzdCkgPT4ge1xuICAgIGxldCBuZXdMaXN0cyA9IHRoaXMuc3RhdGUubGlzdHMuc2xpY2UoKVxuICAgIG5ld0xpc3RzLnB1c2gobGlzdClcbiAgICB0aGlzLnNldFN0YXRlKHtsaXN0czogbmV3TGlzdHN9KVxuICB9XG5cbiAgZGVsZXRlTGlzdCA9IChsaXN0SWQpID0+IHtcbiAgICBsZXQgbmV3TGlzdHMgPSB0aGlzLnN0YXRlLmxpc3RzLnNsaWNlKClcbiAgICBuZXdMaXN0cyA9IG5ld0xpc3RzLmZpbHRlcihsaXN0ID0+IGxpc3QuaWQgIT09IGxpc3RJZClcbiAgICB0aGlzLnNldFN0YXRlKHtsaXN0czogbmV3TGlzdHN9KVxuICB9XG5cbiAgc3dpdGNoTGlzdHMgPSAoc291cmNlSWQsIHRhcmdldElkKSA9PiB7XG4gICAgbGV0IG5ld0xpc3RzID0gdGhpcy5zdGF0ZS5saXN0cy5zbGljZSgpXG4gICAgbGV0IHNvdXJjZUVsZW1lbnRcbiAgICBsZXQgdGFyZ2V0RWxlbWVudFxuICAgIG5ld0xpc3RzLmZvckVhY2gobGlzdCA9PiB7XG4gICAgICBpZiAoU3RyaW5nKGxpc3QuaWQpID09PSBTdHJpbmcoc291cmNlSWQpKXtcbiAgICAgICAgc291cmNlRWxlbWVudCA9IGxpc3RcbiAgICAgIH1cbiAgICAgIGlmIChTdHJpbmcobGlzdC5pZCkgPT09IFN0cmluZyh0YXJnZXRJZCkpe1xuICAgICAgICB0YXJnZXRFbGVtZW50ID0gbGlzdFxuICAgICAgfVxuICAgIH0pXG5cbiAgICBuZXdMaXN0cyA9IG5ld0xpc3RzLm1hcChsaXN0ID0+IHtcbiAgICAgIGlmIChTdHJpbmcobGlzdC5pZCkgPT09IFN0cmluZyhzb3VyY2VJZCkpe1xuICAgICAgICByZXR1cm4gdGFyZ2V0RWxlbWVudFxuICAgICAgfVxuICAgICAgaWYgKFN0cmluZyhsaXN0LmlkKSA9PT0gU3RyaW5nKHRhcmdldElkKSl7XG4gICAgICAgIHJldHVybiBzb3VyY2VFbGVtZW50XG4gICAgICB9XG4gICAgICByZXR1cm4gbGlzdFxuICAgIH0pXG4gICAgdGhpcy5zZXRTdGF0ZSh7bGlzdHM6IG5ld0xpc3RzfSlcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+VHJlbGxvTGlrZTwvdGl0bGU+XG4gICAgICAgICAgPHN0eWxlPlxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1NdWxpOjQwMCw0MDBpLDcwMCw3MDBpJmRpc3BsYXk9c3dhcCcpO1xuPC9zdHlsZT5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgIExpc3RLZWVwZXJcbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxtYWluPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaXN0cy1jb250YWluZXInPlxuICAgICAgICAgICAge3RoaXMuc3RhdGUubGlzdHMubWFwKChsaXN0KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiA8TGlzdCBcbiAgICAgICAgICAgICAgb3Blbk1lbnU9e3RoaXMuc3RhdGUub3Blbk1lbnV9XG4gICAgICAgICAgICAgIHNldE9wZW5NZW51PXtsaXN0LnNldE9wZW5NZW51fVxuICAgICAgICAgICAgICBzZXRUaXRsZT17bGlzdC5zZXRUaXRsZX1cbiAgICAgICAgICAgICAgc3dpdGNoTGlzdHM9e2xpc3Quc3dpdGNoTGlzdHN9XG4gICAgICAgICAgICAgIGRlbGV0ZUxpc3Q9e2xpc3QuZGVsZXRlTGlzdH1cbiAgICAgICAgICAgICAga2V5PXtsaXN0LmtleX1cbiAgICAgICAgICAgICAgaWQ9e2xpc3QuaWR9XG4gICAgICAgICAgICAgIGluaXRpYWxUaXRsZT17bGlzdC5pbml0aWFsVGl0bGV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8TmV3TGlzdCBcbiAgICAgICAgICAgIG9wZW5NZW51PXt0aGlzLnN0YXRlLm9wZW5NZW51fVxuICAgICAgICAgICAgZ2V0T3Blbk1lbnU9e3RoaXMuZ2V0T3Blbk1lbnV9IFxuICAgICAgICAgICAgc2V0T3Blbk1lbnU9e3RoaXMuc2V0T3Blbk1lbnV9IFxuICAgICAgICAgICAgc3dpdGNoTGlzdHM9e3RoaXMuc3dpdGNoTGlzdHN9IFxuICAgICAgICAgICAgZGVsZXRlTGlzdD17dGhpcy5kZWxldGVMaXN0fSBcbiAgICAgICAgICAgIGFkZExpc3Q9e3RoaXMuYWRkTGlzdH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L21haW4+ICAgXG4gICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIG1haW4ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5kcm9wc3BhY2Uge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pdGVtIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRhcmdldHMtY29udGFpbmVyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5saXN0cy1jb250YWluZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaGVhZGVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMuZ3JleX07XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn0iXX0= */\n/*@ sourceURL=/Users/noahmaizels/Desktop/trellolike/pages/index.js */")));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.602420ce2443a58eaea2.hot-update.js.map