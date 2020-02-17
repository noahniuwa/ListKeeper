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
        return list.props.id !== listId;
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
        if (String(list.props.id) === String(sourceId)) {
          sourceElement = list;
        }

        if (String(list.props.id) === String(targetId)) {
          targetElement = list;
        }
      });
      newLists = newLists.map(function (list) {
        if (String(list.props.id) === String(sourceId)) {
          return targetElement;
        }

        if (String(list.props.id) === String(targetId)) {
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
      return __jsx("div", {
        className: "jsx-3853516301",
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
        className: "jsx-3853516301",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "TrelloLike")), __jsx(_components_NewList__WEBPACK_IMPORTED_MODULE_9__["default"], {
        openMenut: this.state.openMenu,
        getOpenMenu: this.getOpenMenu,
        setOpenMenu: this.setOpenMenu,
        switchLists: this.switchLists,
        deleteList: this.deleteList,
        addList: this.addList,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }), __jsx("div", {
        className: "jsx-3853516301" + " " + 'lists-container',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, this.state.lists.map), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3853516301",
        __self: this
      }, ".dropspace.jsx-3853516301{border:1px solid blue;display:inline-block;height:100px;width:100px;}.item.jsx-3853516301{border:1px solid red;display:inline-block;}.targets-container.jsx-3853516301{position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.lists-container.jsx-3853516301{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100vh;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FobWFpemVscy9EZXNrdG9wL3RyZWxsb2xpa2UvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkVvQixBQUltQyxBQU1ELEFBSUgsQUFJTCxrQkFIQSxHQUpRLENBTkEsb0JBT3ZCLENBTmUsYUFDRCxZQUNkLE1BV2UsYUFDVSxLQUp6Qix3R0FLQSIsImZpbGUiOiIvVXNlcnMvbm9haG1haXplbHMvRGVza3RvcC90cmVsbG9saWtlL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5ld0xpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9OZXdMaXN0J1xuaW1wb3J0IExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9MaXN0J1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbGlzdHM6IFtdLFxuICAgICAgb3Blbk1lbnU6ICcnLFxuICAgIH1cbiAgfVxuXG4gIHNldE9wZW5NZW51ID0gKG1lbnVJZCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe29wZW5NZW51OiBtZW51SWR9KVxuICB9XG5cbiAgZ2V0T3Blbk1lbnUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUub3Blbk1lbnVcbiAgfVxuICAgIFxuICBhZGRMaXN0ID0gKGxpc3QpID0+IHtcbiAgICBsZXQgbmV3TGlzdHMgPSB0aGlzLnN0YXRlLmxpc3RzLnNsaWNlKClcbiAgICBuZXdMaXN0cy5wdXNoKGxpc3QpXG4gICAgdGhpcy5zZXRTdGF0ZSh7bGlzdHM6IG5ld0xpc3RzfSlcbiAgfVxuXG4gIGRlbGV0ZUxpc3QgPSAobGlzdElkKSA9PiB7XG4gICAgbGV0IG5ld0xpc3RzID0gdGhpcy5zdGF0ZS5saXN0cy5zbGljZSgpXG4gICAgbmV3TGlzdHMgPSBuZXdMaXN0cy5maWx0ZXIobGlzdCA9PiBsaXN0LnByb3BzLmlkICE9PSBsaXN0SWQpXG4gICAgdGhpcy5zZXRTdGF0ZSh7bGlzdHM6IG5ld0xpc3RzfSlcbiAgfVxuXG4gIHN3aXRjaExpc3RzID0gKHNvdXJjZUlkLCB0YXJnZXRJZCkgPT4ge1xuICAgIGxldCBuZXdMaXN0cyA9IHRoaXMuc3RhdGUubGlzdHMuc2xpY2UoKVxuICAgIGxldCBzb3VyY2VFbGVtZW50XG4gICAgbGV0IHRhcmdldEVsZW1lbnRcbiAgICBuZXdMaXN0cy5mb3JFYWNoKGxpc3QgPT4ge1xuICAgICAgaWYgKFN0cmluZyhsaXN0LnByb3BzLmlkKSA9PT0gU3RyaW5nKHNvdXJjZUlkKSl7XG4gICAgICAgIHNvdXJjZUVsZW1lbnQgPSBsaXN0XG4gICAgICB9XG4gICAgICBpZiAoU3RyaW5nKGxpc3QucHJvcHMuaWQpID09PSBTdHJpbmcodGFyZ2V0SWQpKXtcbiAgICAgICAgdGFyZ2V0RWxlbWVudCA9IGxpc3RcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgbmV3TGlzdHMgPSBuZXdMaXN0cy5tYXAobGlzdCA9PiB7XG4gICAgICBpZiAoU3RyaW5nKGxpc3QucHJvcHMuaWQpID09PSBTdHJpbmcoc291cmNlSWQpKXtcbiAgICAgICAgcmV0dXJuIHRhcmdldEVsZW1lbnRcbiAgICAgIH1cbiAgICAgIGlmIChTdHJpbmcobGlzdC5wcm9wcy5pZCkgPT09IFN0cmluZyh0YXJnZXRJZCkpe1xuICAgICAgICByZXR1cm4gc291cmNlRWxlbWVudFxuICAgICAgfVxuICAgICAgcmV0dXJuIGxpc3RcbiAgICB9KVxuICAgIHRoaXMuc2V0U3RhdGUoe2xpc3RzOiBuZXdMaXN0c30pXG4gIH1cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPlRyZWxsb0xpa2U8L3RpdGxlPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxOZXdMaXN0IFxuICAgICAgICAgIG9wZW5NZW51dD17dGhpcy5zdGF0ZS5vcGVuTWVudX1cbiAgICAgICAgICBnZXRPcGVuTWVudT17dGhpcy5nZXRPcGVuTWVudX0gXG4gICAgICAgICAgc2V0T3Blbk1lbnU9e3RoaXMuc2V0T3Blbk1lbnV9IFxuICAgICAgICAgIHN3aXRjaExpc3RzPXt0aGlzLnN3aXRjaExpc3RzfSBcbiAgICAgICAgICBkZWxldGVMaXN0PXt0aGlzLmRlbGV0ZUxpc3R9IFxuICAgICAgICAgIGFkZExpc3Q9e3RoaXMuYWRkTGlzdH1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xpc3RzLWNvbnRhaW5lcic+XG4gICAgICAgICAge3RoaXMuc3RhdGUubGlzdHMubWFwfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICBcbiAgICAgICAgICAuZHJvcHNwYWNlIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaXRlbSB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50YXJnZXRzLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGlzdHMtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn0iXX0= */\n/*@ sourceURL=/Users/noahmaizels/Desktop/trellolike/pages/index.js */"));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.1f5c301065fc0a7df447.hot-update.js.map