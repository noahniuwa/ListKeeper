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
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-beautiful-dnd */ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");







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

    _this.state = {
      lists: [],
      openMenu: ''
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "render",
    // switchLists = (sourceId, targetId) => {
    //   let newLists = this.state.lists.slice()
    //   let sourceElement
    //   let targetElement
    //   newLists.forEach(list => {
    //     if (String(list.id) === String(sourceId)){
    //       sourceElement = list
    //     }
    //     if (String(list.id) === String(targetId)){
    //       targetElement = list
    //     }
    //   })
    //   newLists = newLists.map(list => {
    //     if (String(list.id) === String(sourceId)){
    //       return targetElement
    //     }
    //     if (String(list.id) === String(targetId)){
    //       return sourceElement
    //     }
    //     return list
    //   })
    //   this.setState({lists: newLists})
    // }
    value: function render() {
      var _this2 = this;

      return __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["152300519", [_helpers_colors__WEBPACK_IMPORTED_MODULE_12__["default"].grey]]]) + " " + "app",
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
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["152300519", [_helpers_colors__WEBPACK_IMPORTED_MODULE_12__["default"].grey]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "TrelloLike"), __jsx("link", {
        href: "https://fonts.googleapis.com/css?family=Dosis:400,700&display=swap",
        rel: "stylesheet",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["152300519", [_helpers_colors__WEBPACK_IMPORTED_MODULE_12__["default"].grey]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }), __jsx("script", {
        src: "/DragDropTouch.js",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["152300519", [_helpers_colors__WEBPACK_IMPORTED_MODULE_12__["default"].grey]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      })), __jsx("header", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["152300519", [_helpers_colors__WEBPACK_IMPORTED_MODULE_12__["default"].grey]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "ListKeeper"), __jsx("main", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["152300519", [_helpers_colors__WEBPACK_IMPORTED_MODULE_12__["default"].grey]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["152300519", [_helpers_colors__WEBPACK_IMPORTED_MODULE_12__["default"].grey]]]) + " " + 'lists-container',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_13__["DragDropContext"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, this.state.lists.map(function (list) {
        return __jsx(_components_List__WEBPACK_IMPORTED_MODULE_10__["default"], {
          openMenu: _this2.state.openMenu,
          setOpenMenu: list.setOpenMenu,
          setTitle: list.setTitle // switchLists={list.switchLists}
          ,
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
      }))), __jsx(_components_NewList__WEBPACK_IMPORTED_MODULE_9__["default"], {
        openMenu: this.state.openMenu,
        getOpenMenu: this.getOpenMenu,
        setOpenMenu: this.setOpenMenu // switchLists={this.switchLists} 
        ,
        deleteList: this.deleteList,
        addList: this.addList,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "152300519",
        dynamic: [_helpers_colors__WEBPACK_IMPORTED_MODULE_12__["default"].grey],
        __self: this
      }, "main.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding-left:20px;}.dropspace.__jsx-style-dynamic-selector{border:1px solid blue;display:inline-block;height:100px;width:100px;}.item.__jsx-style-dynamic-selector{border:1px solid red;display:inline-block;}.targets-container.__jsx-style-dynamic-selector{position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.lists-container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100vh;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}header.__jsx-style-dynamic-selector{position:fixed;height:80px;width:100%;line-height:80px;background-color:".concat(_helpers_colors__WEBPACK_IMPORTED_MODULE_12__["default"].grey, ";font-size:2rem;left:0;top:0;padding-left:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FobWFpemVscy9EZXNrdG9wL3RyZWxsb2xpa2UvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUdtQixBQU0wQixBQUtTLEFBTUQsQUFJSCxBQUlMLEFBS0UsZUFDSCxHQVRDLEdBSlEsQ0FOQSxLQW9CVixXQUNNLElBZG5CLENBTmUsWUFxQmlDLENBcEJsQyxZQUNkLE1BUm9CLEFBbUJMLGFBQ1UsS0FsQnpCLEFBY0EsU0FZaUIsZUFDUixPQUNELE1BQ1ksa0JBQ3BCLGlEQVhBIiwiZmlsZSI6Ii9Vc2Vycy9ub2FobWFpemVscy9EZXNrdG9wL3RyZWxsb2xpa2UvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV3TGlzdCBmcm9tICcuLi9jb21wb25lbnRzL05ld0xpc3QnXG5pbXBvcnQgTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL0xpc3QnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi9oZWxwZXJzL2NvbG9ycydcbmltcG9ydCB7IERyYWdEcm9wQ29udGV4dCB9IGZyb20gJ3JlYWN0LWJlYXV0aWZ1bC1kbmQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBsaXN0czogW10sXG4gICAgICBvcGVuTWVudTogJycsXG4gICAgfVxuICB9XG5cbiAgc2V0T3Blbk1lbnUgPSAobWVudUlkKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3Blbk1lbnU6IG1lbnVJZH0pXG4gIH1cblxuICBnZXRPcGVuTWVudSA9ICgpID0+IHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5vcGVuTWVudVxuICB9XG4gICAgXG4gIGFkZExpc3QgPSAobGlzdCkgPT4ge1xuICAgIGxldCBuZXdMaXN0cyA9IHRoaXMuc3RhdGUubGlzdHMuc2xpY2UoKVxuICAgIG5ld0xpc3RzLnB1c2gobGlzdClcbiAgICB0aGlzLnNldFN0YXRlKHtsaXN0czogbmV3TGlzdHN9KVxuICB9XG5cbiAgZGVsZXRlTGlzdCA9IChsaXN0SWQpID0+IHtcbiAgICBsZXQgbmV3TGlzdHMgPSB0aGlzLnN0YXRlLmxpc3RzLnNsaWNlKClcbiAgICBuZXdMaXN0cyA9IG5ld0xpc3RzLmZpbHRlcihsaXN0ID0+IGxpc3QuaWQgIT09IGxpc3RJZClcbiAgICB0aGlzLnNldFN0YXRlKHtsaXN0czogbmV3TGlzdHN9KVxuICB9XG5cbiAgLy8gc3dpdGNoTGlzdHMgPSAoc291cmNlSWQsIHRhcmdldElkKSA9PiB7XG4gIC8vICAgbGV0IG5ld0xpc3RzID0gdGhpcy5zdGF0ZS5saXN0cy5zbGljZSgpXG4gIC8vICAgbGV0IHNvdXJjZUVsZW1lbnRcbiAgLy8gICBsZXQgdGFyZ2V0RWxlbWVudFxuICAvLyAgIG5ld0xpc3RzLmZvckVhY2gobGlzdCA9PiB7XG4gIC8vICAgICBpZiAoU3RyaW5nKGxpc3QuaWQpID09PSBTdHJpbmcoc291cmNlSWQpKXtcbiAgLy8gICAgICAgc291cmNlRWxlbWVudCA9IGxpc3RcbiAgLy8gICAgIH1cbiAgLy8gICAgIGlmIChTdHJpbmcobGlzdC5pZCkgPT09IFN0cmluZyh0YXJnZXRJZCkpe1xuICAvLyAgICAgICB0YXJnZXRFbGVtZW50ID0gbGlzdFxuICAvLyAgICAgfVxuICAvLyAgIH0pXG5cbiAgLy8gICBuZXdMaXN0cyA9IG5ld0xpc3RzLm1hcChsaXN0ID0+IHtcbiAgLy8gICAgIGlmIChTdHJpbmcobGlzdC5pZCkgPT09IFN0cmluZyhzb3VyY2VJZCkpe1xuICAvLyAgICAgICByZXR1cm4gdGFyZ2V0RWxlbWVudFxuICAvLyAgICAgfVxuICAvLyAgICAgaWYgKFN0cmluZyhsaXN0LmlkKSA9PT0gU3RyaW5nKHRhcmdldElkKSl7XG4gIC8vICAgICAgIHJldHVybiBzb3VyY2VFbGVtZW50XG4gIC8vICAgICB9XG4gIC8vICAgICByZXR1cm4gbGlzdFxuICAvLyAgIH0pXG4gIC8vICAgdGhpcy5zZXRTdGF0ZSh7bGlzdHM6IG5ld0xpc3RzfSlcbiAgLy8gfVxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcFwiPlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+VHJlbGxvTGlrZTwvdGl0bGU+XG4gICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Eb3Npczo0MDAsNzAwJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuICAgICAgICAgIDxzY3JpcHQgc3JjPVwiL0RyYWdEcm9wVG91Y2guanNcIj48L3NjcmlwdD5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgIExpc3RLZWVwZXJcbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxtYWluPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaXN0cy1jb250YWluZXInPlxuICAgICAgICAgICAgPERyYWdEcm9wQ29udGV4dD5cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmxpc3RzLm1hcCgobGlzdCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gPExpc3QgXG4gICAgICAgICAgICAgIG9wZW5NZW51PXt0aGlzLnN0YXRlLm9wZW5NZW51fVxuICAgICAgICAgICAgICBzZXRPcGVuTWVudT17bGlzdC5zZXRPcGVuTWVudX1cbiAgICAgICAgICAgICAgc2V0VGl0bGU9e2xpc3Quc2V0VGl0bGV9XG4gICAgICAgICAgICAgIC8vIHN3aXRjaExpc3RzPXtsaXN0LnN3aXRjaExpc3RzfVxuICAgICAgICAgICAgICBkZWxldGVMaXN0PXtsaXN0LmRlbGV0ZUxpc3R9XG4gICAgICAgICAgICAgIGtleT17bGlzdC5rZXl9XG4gICAgICAgICAgICAgIGlkPXtsaXN0LmlkfVxuICAgICAgICAgICAgICBpbml0aWFsVGl0bGU9e2xpc3QuaW5pdGlhbFRpdGxlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L0RyYWdEcm9wQ29udGV4dD5cbiAgICAgICAgICAgIFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxOZXdMaXN0IFxuICAgICAgICAgICAgb3Blbk1lbnU9e3RoaXMuc3RhdGUub3Blbk1lbnV9XG4gICAgICAgICAgICBnZXRPcGVuTWVudT17dGhpcy5nZXRPcGVuTWVudX0gXG4gICAgICAgICAgICBzZXRPcGVuTWVudT17dGhpcy5zZXRPcGVuTWVudX0gXG4gICAgICAgICAgICAvLyBzd2l0Y2hMaXN0cz17dGhpcy5zd2l0Y2hMaXN0c30gXG4gICAgICAgICAgICBkZWxldGVMaXN0PXt0aGlzLmRlbGV0ZUxpc3R9IFxuICAgICAgICAgICAgYWRkTGlzdD17dGhpcy5hZGRMaXN0fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbWFpbj4gICBcbiAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAuYXBwIHtcbiAgICAgICAgICBcbiAgICAgICAgIH1cbiAgICAgICAgICBtYWluIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICBcbiAgICAgICAgICB9XG4gICAgICAgICAgLmRyb3BzcGFjZSB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLml0ZW0ge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGFyZ2V0cy1jb250YWluZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxpc3RzLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBoZWFkZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogODBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JzLmdyZXl9O1xuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufSJdfQ== */\n/*@ sourceURL=/Users/noahmaizels/Desktop/trellolike/pages/index.js */")));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.32e4ea20c4fa6b7a2c9d.hot-update.js.map