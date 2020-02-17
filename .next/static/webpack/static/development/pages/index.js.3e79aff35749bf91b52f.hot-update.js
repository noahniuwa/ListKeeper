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
      }, "TrelloLike"), __jsx("link", {
        href: "https://fonts.googleapis.com/css?family=Dosis:400,700&display=swap",
        rel: "stylesheet",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["96398669", [_helpers_colors__WEBPACK_IMPORTED_MODULE_12__["default"].grey]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      })), __jsx("header", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["96398669", [_helpers_colors__WEBPACK_IMPORTED_MODULE_12__["default"].grey]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "ListKeeper"), __jsx("main", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["96398669", [_helpers_colors__WEBPACK_IMPORTED_MODULE_12__["default"].grey]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["96398669", [_helpers_colors__WEBPACK_IMPORTED_MODULE_12__["default"].grey]]]) + " " + 'lists-container',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
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
            lineNumber: 75
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
          lineNumber: 87
        },
        __self: this
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "96398669",
        dynamic: [_helpers_colors__WEBPACK_IMPORTED_MODULE_12__["default"].grey],
        __self: this
      }, "main.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:15px;}.dropspace.__jsx-style-dynamic-selector{border:1px solid blue;display:inline-block;height:100px;width:100px;}.item.__jsx-style-dynamic-selector{border:1px solid red;display:inline-block;}.targets-container.__jsx-style-dynamic-selector{position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.lists-container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100vh;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}header.__jsx-style-dynamic-selector{width:100%;background-color:".concat(_helpers_colors__WEBPACK_IMPORTED_MODULE_12__["default"].grey, ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FobWFpemVscy9EZXNrdG9wL3RyZWxsb2xpa2UvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0ZtQixBQUcwQixBQUlTLEFBTUQsQUFJSCxBQUlMLEFBS0YsV0FDbUMsT0FUakMsR0FKUSxDQU5BLG9CQU92QixDQU5lLGFBQ0QsQ0FrQmQsV0FqQkEsTUFQZSxBQWtCQSxhQWpCZixBQWtCeUIsS0FKekIsd0dBS0EiLCJmaWxlIjoiL1VzZXJzL25vYWhtYWl6ZWxzL0Rlc2t0b3AvdHJlbGxvbGlrZS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXdMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvTmV3TGlzdCdcbmltcG9ydCBMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvTGlzdCdcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgY29sb3JzIGZyb20gJy4uL2hlbHBlcnMvY29sb3JzJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBsaXN0czogW10sXG4gICAgICBvcGVuTWVudTogJycsXG4gICAgfVxuICB9XG5cbiAgc2V0T3Blbk1lbnUgPSAobWVudUlkKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3Blbk1lbnU6IG1lbnVJZH0pXG4gIH1cblxuICBnZXRPcGVuTWVudSA9ICgpID0+IHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5vcGVuTWVudVxuICB9XG4gICAgXG4gIGFkZExpc3QgPSAobGlzdCkgPT4ge1xuICAgIGxldCBuZXdMaXN0cyA9IHRoaXMuc3RhdGUubGlzdHMuc2xpY2UoKVxuICAgIG5ld0xpc3RzLnB1c2gobGlzdClcbiAgICB0aGlzLnNldFN0YXRlKHtsaXN0czogbmV3TGlzdHN9KVxuICB9XG5cbiAgZGVsZXRlTGlzdCA9IChsaXN0SWQpID0+IHtcbiAgICBsZXQgbmV3TGlzdHMgPSB0aGlzLnN0YXRlLmxpc3RzLnNsaWNlKClcbiAgICBuZXdMaXN0cyA9IG5ld0xpc3RzLmZpbHRlcihsaXN0ID0+IGxpc3QuaWQgIT09IGxpc3RJZClcbiAgICB0aGlzLnNldFN0YXRlKHtsaXN0czogbmV3TGlzdHN9KVxuICB9XG5cbiAgc3dpdGNoTGlzdHMgPSAoc291cmNlSWQsIHRhcmdldElkKSA9PiB7XG4gICAgbGV0IG5ld0xpc3RzID0gdGhpcy5zdGF0ZS5saXN0cy5zbGljZSgpXG4gICAgbGV0IHNvdXJjZUVsZW1lbnRcbiAgICBsZXQgdGFyZ2V0RWxlbWVudFxuICAgIG5ld0xpc3RzLmZvckVhY2gobGlzdCA9PiB7XG4gICAgICBpZiAoU3RyaW5nKGxpc3QuaWQpID09PSBTdHJpbmcoc291cmNlSWQpKXtcbiAgICAgICAgc291cmNlRWxlbWVudCA9IGxpc3RcbiAgICAgIH1cbiAgICAgIGlmIChTdHJpbmcobGlzdC5pZCkgPT09IFN0cmluZyh0YXJnZXRJZCkpe1xuICAgICAgICB0YXJnZXRFbGVtZW50ID0gbGlzdFxuICAgICAgfVxuICAgIH0pXG5cbiAgICBuZXdMaXN0cyA9IG5ld0xpc3RzLm1hcChsaXN0ID0+IHtcbiAgICAgIGlmIChTdHJpbmcobGlzdC5pZCkgPT09IFN0cmluZyhzb3VyY2VJZCkpe1xuICAgICAgICByZXR1cm4gdGFyZ2V0RWxlbWVudFxuICAgICAgfVxuICAgICAgaWYgKFN0cmluZyhsaXN0LmlkKSA9PT0gU3RyaW5nKHRhcmdldElkKSl7XG4gICAgICAgIHJldHVybiBzb3VyY2VFbGVtZW50XG4gICAgICB9XG4gICAgICByZXR1cm4gbGlzdFxuICAgIH0pXG4gICAgdGhpcy5zZXRTdGF0ZSh7bGlzdHM6IG5ld0xpc3RzfSlcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+VHJlbGxvTGlrZTwvdGl0bGU+XG4gICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Eb3Npczo0MDAsNzAwJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgTGlzdEtlZXBlclxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPG1haW4+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xpc3RzLWNvbnRhaW5lcic+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5saXN0cy5tYXAoKGxpc3QpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIDxMaXN0IFxuICAgICAgICAgICAgICBvcGVuTWVudT17dGhpcy5zdGF0ZS5vcGVuTWVudX1cbiAgICAgICAgICAgICAgc2V0T3Blbk1lbnU9e2xpc3Quc2V0T3Blbk1lbnV9XG4gICAgICAgICAgICAgIHNldFRpdGxlPXtsaXN0LnNldFRpdGxlfVxuICAgICAgICAgICAgICBzd2l0Y2hMaXN0cz17bGlzdC5zd2l0Y2hMaXN0c31cbiAgICAgICAgICAgICAgZGVsZXRlTGlzdD17bGlzdC5kZWxldGVMaXN0fVxuICAgICAgICAgICAgICBrZXk9e2xpc3Qua2V5fVxuICAgICAgICAgICAgICBpZD17bGlzdC5pZH1cbiAgICAgICAgICAgICAgaW5pdGlhbFRpdGxlPXtsaXN0LmluaXRpYWxUaXRsZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxOZXdMaXN0IFxuICAgICAgICAgICAgb3Blbk1lbnU9e3RoaXMuc3RhdGUub3Blbk1lbnV9XG4gICAgICAgICAgICBnZXRPcGVuTWVudT17dGhpcy5nZXRPcGVuTWVudX0gXG4gICAgICAgICAgICBzZXRPcGVuTWVudT17dGhpcy5zZXRPcGVuTWVudX0gXG4gICAgICAgICAgICBzd2l0Y2hMaXN0cz17dGhpcy5zd2l0Y2hMaXN0c30gXG4gICAgICAgICAgICBkZWxldGVMaXN0PXt0aGlzLmRlbGV0ZUxpc3R9IFxuICAgICAgICAgICAgYWRkTGlzdD17dGhpcy5hZGRMaXN0fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbWFpbj4gICBcbiAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgbWFpbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmRyb3BzcGFjZSB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLml0ZW0ge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGFyZ2V0cy1jb250YWluZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxpc3RzLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBoZWFkZXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9ycy5ncmV5fTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufSJdfQ== */\n/*@ sourceURL=/Users/noahmaizels/Desktop/trellolike/pages/index.js */")));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.3e79aff35749bf91b52f.hot-update.js.map