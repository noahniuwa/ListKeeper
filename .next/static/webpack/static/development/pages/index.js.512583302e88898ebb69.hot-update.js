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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_NewList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/NewList */ "./components/NewList.js");
/* harmony import */ var _components_List__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/List */ "./components/List.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _helpers_colors__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../helpers/colors */ "./helpers/colors.js");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-beautiful-dnd */ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");









var _jsxFileName = "/Users/noahmaizels/Desktop/trellolike/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;







var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Index, _React$Component);

  function Index(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Index).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "setOpenMenu", function (menuId) {
      _this.setState({
        openMenu: menuId
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "getOpenMenu", function () {
      return _this.state.openMenu;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "addList", function (list) {
      var newLists = _this.state.lists.slice();

      newLists.push(list);

      _this.setState({
        lists: newLists
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "deleteList", function (listId) {
      var newLists = _this.state.lists.slice();

      newLists = newLists.filter(function (list) {
        return list.id !== listId;
      });

      _this.setState({
        lists: newLists
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onDragEnd", function (result) {
      console.log(result);
      var destination = result.destination,
          source = result.source,
          draggableId = result.draggableId;

      if (!destination) {
        return;
      }

      if (destination.droppableId === source.droppableId && destination.index === source.index) {
        return;
      }

      var newLists = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_1___default()(_this.state.lists);
    });

    _this.state = {
      lists: [],
      openMenu: ''
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Index, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["152300519", [_helpers_colors__WEBPACK_IMPORTED_MODULE_14__["default"].grey]]]) + " " + "app",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_13___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, __jsx("title", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["152300519", [_helpers_colors__WEBPACK_IMPORTED_MODULE_14__["default"].grey]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, "TrelloLike"), __jsx("link", {
        href: "https://fonts.googleapis.com/css?family=Dosis:400,700&display=swap",
        rel: "stylesheet",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["152300519", [_helpers_colors__WEBPACK_IMPORTED_MODULE_14__["default"].grey]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }), __jsx("script", {
        src: "/DragDropTouch.js",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["152300519", [_helpers_colors__WEBPACK_IMPORTED_MODULE_14__["default"].grey]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      })), __jsx("header", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["152300519", [_helpers_colors__WEBPACK_IMPORTED_MODULE_14__["default"].grey]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, "ListKeeper"), __jsx("main", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["152300519", [_helpers_colors__WEBPACK_IMPORTED_MODULE_14__["default"].grey]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_15__["DragDropContext"], {
        onDragEnd: this.onDragEnd,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_15__["Droppable"], {
        droppableId: "droppable-id",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, function (provided) {
        return __jsx("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          ref: provided.innerRef
        }, provided.droppableProps, {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["152300519", [_helpers_colors__WEBPACK_IMPORTED_MODULE_14__["default"].grey]]]) + " " + (provided.droppableProps && provided.droppableProps.className != null && provided.droppableProps.className || 'lists-container'),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          },
          __self: this
        }), _this2.state.lists.map(function (list, index) {
          return __jsx(_components_List__WEBPACK_IMPORTED_MODULE_12__["default"], {
            index: index,
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
              lineNumber: 100
            },
            __self: this
          });
        }), provided.placeholder);
      })), __jsx(_components_NewList__WEBPACK_IMPORTED_MODULE_11__["default"], {
        openMenu: this.state.openMenu,
        getOpenMenu: this.getOpenMenu,
        setOpenMenu: this.setOpenMenu,
        switchLists: this.switchLists,
        deleteList: this.deleteList,
        addList: this.addList,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "152300519",
        dynamic: [_helpers_colors__WEBPACK_IMPORTED_MODULE_14__["default"].grey],
        __self: this
      }, "main.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding-left:20px;}.dropspace.__jsx-style-dynamic-selector{border:1px solid blue;display:inline-block;height:100px;width:100px;}.item.__jsx-style-dynamic-selector{border:1px solid red;display:inline-block;}.targets-container.__jsx-style-dynamic-selector{position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.lists-container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100vh;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}header.__jsx-style-dynamic-selector{position:fixed;height:80px;width:100%;line-height:80px;background-color:".concat(_helpers_colors__WEBPACK_IMPORTED_MODULE_14__["default"].grey, ";font-size:2rem;left:0;top:0;padding-left:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FobWFpemVscy9EZXNrdG9wL3RyZWxsb2xpa2UvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkhtQixBQU0wQixBQUtTLEFBTUQsQUFJSCxBQUlMLEFBS0UsZUFDSCxHQVRDLEdBSlEsQ0FOQSxLQW9CVixXQUNNLElBZG5CLENBTmUsWUFxQmlDLENBcEJsQyxZQUNkLE1BUm9CLEFBbUJMLGFBQ1UsS0FsQnpCLEFBY0EsU0FZaUIsZUFDUixPQUNELE1BQ1ksa0JBQ3BCLGlEQVhBIiwiZmlsZSI6Ii9Vc2Vycy9ub2FobWFpemVscy9EZXNrdG9wL3RyZWxsb2xpa2UvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV3TGlzdCBmcm9tICcuLi9jb21wb25lbnRzL05ld0xpc3QnXG5pbXBvcnQgTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL0xpc3QnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi9oZWxwZXJzL2NvbG9ycydcbmltcG9ydCB7IERyYWdEcm9wQ29udGV4dCwgRHJvcHBhYmxlIH0gZnJvbSAncmVhY3QtYmVhdXRpZnVsLWRuZCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxpc3RzOiBbXSxcbiAgICAgIG9wZW5NZW51OiAnJyxcbiAgICB9XG4gIH1cblxuICBzZXRPcGVuTWVudSA9IChtZW51SWQpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtvcGVuTWVudTogbWVudUlkfSlcbiAgfVxuXG4gIGdldE9wZW5NZW51ID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLm9wZW5NZW51XG4gIH1cbiAgICBcbiAgYWRkTGlzdCA9IChsaXN0KSA9PiB7XG4gICAgbGV0IG5ld0xpc3RzID0gdGhpcy5zdGF0ZS5saXN0cy5zbGljZSgpXG4gICAgbmV3TGlzdHMucHVzaChsaXN0KVxuICAgIHRoaXMuc2V0U3RhdGUoe2xpc3RzOiBuZXdMaXN0c30pXG4gIH1cblxuICBkZWxldGVMaXN0ID0gKGxpc3RJZCkgPT4ge1xuICAgIGxldCBuZXdMaXN0cyA9IHRoaXMuc3RhdGUubGlzdHMuc2xpY2UoKVxuICAgIG5ld0xpc3RzID0gbmV3TGlzdHMuZmlsdGVyKGxpc3QgPT4gbGlzdC5pZCAhPT0gbGlzdElkKVxuICAgIHRoaXMuc2V0U3RhdGUoe2xpc3RzOiBuZXdMaXN0c30pXG4gIH1cblxuICAvLyBzd2l0Y2hMaXN0cyA9IChzb3VyY2VJZCwgdGFyZ2V0SWQpID0+IHtcbiAgLy8gICBsZXQgbmV3TGlzdHMgPSB0aGlzLnN0YXRlLmxpc3RzLnNsaWNlKClcbiAgLy8gICBsZXQgc291cmNlRWxlbWVudFxuICAvLyAgIGxldCB0YXJnZXRFbGVtZW50XG4gIC8vICAgbmV3TGlzdHMuZm9yRWFjaChsaXN0ID0+IHtcbiAgLy8gICAgIGlmIChTdHJpbmcobGlzdC5pZCkgPT09IFN0cmluZyhzb3VyY2VJZCkpe1xuICAvLyAgICAgICBzb3VyY2VFbGVtZW50ID0gbGlzdFxuICAvLyAgICAgfVxuICAvLyAgICAgaWYgKFN0cmluZyhsaXN0LmlkKSA9PT0gU3RyaW5nKHRhcmdldElkKSl7XG4gIC8vICAgICAgIHRhcmdldEVsZW1lbnQgPSBsaXN0XG4gIC8vICAgICB9XG4gIC8vICAgfSlcblxuICAvLyAgIG5ld0xpc3RzID0gbmV3TGlzdHMubWFwKGxpc3QgPT4ge1xuICAvLyAgICAgaWYgKFN0cmluZyhsaXN0LmlkKSA9PT0gU3RyaW5nKHNvdXJjZUlkKSl7XG4gIC8vICAgICAgIHJldHVybiB0YXJnZXRFbGVtZW50XG4gIC8vICAgICB9XG4gIC8vICAgICBpZiAoU3RyaW5nKGxpc3QuaWQpID09PSBTdHJpbmcodGFyZ2V0SWQpKXtcbiAgLy8gICAgICAgcmV0dXJuIHNvdXJjZUVsZW1lbnRcbiAgLy8gICAgIH1cbiAgLy8gICAgIHJldHVybiBsaXN0XG4gIC8vICAgfSlcbiAgLy8gICB0aGlzLnNldFN0YXRlKHtsaXN0czogbmV3TGlzdHN9KVxuICAvLyB9XG5cbiAgb25EcmFnRW5kID0gKHJlc3VsdCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHJlc3VsdClcbiAgICBjb25zdCB7IGRlc3RpbmF0aW9uLCBzb3VyY2UsIGRyYWdnYWJsZUlkIH0gPSByZXN1bHRcbiAgICBpZiAoIWRlc3RpbmF0aW9uKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYgKGRlc3RpbmF0aW9uLmRyb3BwYWJsZUlkID09PSBzb3VyY2UuZHJvcHBhYmxlSWQgJiYgZGVzdGluYXRpb24uaW5kZXggPT09IHNvdXJjZS5pbmRleCAgKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBuZXdMaXN0cyA9IEFycmF5LmZyb20odGhpcy5zdGF0ZS5saXN0cylcbiAgICBcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcFwiPlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+VHJlbGxvTGlrZTwvdGl0bGU+XG4gICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Eb3Npczo0MDAsNzAwJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuICAgICAgICAgIDxzY3JpcHQgc3JjPVwiL0RyYWdEcm9wVG91Y2guanNcIj48L3NjcmlwdD5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgIExpc3RLZWVwZXJcbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxtYWluPlxuICAgICAgICAgIDxEcmFnRHJvcENvbnRleHRcbiAgICAgICAgICAgIG9uRHJhZ0VuZD17dGhpcy5vbkRyYWdFbmR9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPERyb3BwYWJsZVxuICAgICAgICAgICAgICBkcm9wcGFibGVJZD17XCJkcm9wcGFibGUtaWRcIn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIHsocHJvdmlkZWQpID0+IChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xpc3RzLWNvbnRhaW5lcidcbiAgICAgICAgICAgICAgICByZWY9e3Byb3ZpZGVkLmlubmVyUmVmfVxuICAgICAgICAgICAgICAgIHsuLi5wcm92aWRlZC5kcm9wcGFibGVQcm9wc31cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5saXN0cy5tYXAoKGxpc3QsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxMaXN0IFxuICAgICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgb3Blbk1lbnU9e3RoaXMuc3RhdGUub3Blbk1lbnV9XG4gICAgICAgICAgICAgICAgICBzZXRPcGVuTWVudT17bGlzdC5zZXRPcGVuTWVudX1cbiAgICAgICAgICAgICAgICAgIHNldFRpdGxlPXtsaXN0LnNldFRpdGxlfVxuICAgICAgICAgICAgICAgICAgLy8gc3dpdGNoTGlzdHM9e2xpc3Quc3dpdGNoTGlzdHN9XG4gICAgICAgICAgICAgICAgICBkZWxldGVMaXN0PXtsaXN0LmRlbGV0ZUxpc3R9XG4gICAgICAgICAgICAgICAgICBrZXk9e2xpc3Qua2V5fVxuICAgICAgICAgICAgICAgICAgaWQ9e2xpc3QuaWR9XG4gICAgICAgICAgICAgICAgICBpbml0aWFsVGl0bGU9e2xpc3QuaW5pdGlhbFRpdGxlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICB7cHJvdmlkZWQucGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L0Ryb3BwYWJsZT5cbiAgICAgICAgICA8L0RyYWdEcm9wQ29udGV4dD5cbiAgICAgICAgICA8TmV3TGlzdCBcbiAgICAgICAgICAgIG9wZW5NZW51PXt0aGlzLnN0YXRlLm9wZW5NZW51fVxuICAgICAgICAgICAgZ2V0T3Blbk1lbnU9e3RoaXMuZ2V0T3Blbk1lbnV9IFxuICAgICAgICAgICAgc2V0T3Blbk1lbnU9e3RoaXMuc2V0T3Blbk1lbnV9IFxuICAgICAgICAgICAgc3dpdGNoTGlzdHM9e3RoaXMuc3dpdGNoTGlzdHN9IFxuICAgICAgICAgICAgZGVsZXRlTGlzdD17dGhpcy5kZWxldGVMaXN0fSBcbiAgICAgICAgICAgIGFkZExpc3Q9e3RoaXMuYWRkTGlzdH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L21haW4+ICAgXG4gICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgLmFwcCB7XG4gICAgICAgICAgXG4gICAgICAgICB9XG4gICAgICAgICAgbWFpbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgXG4gICAgICAgICAgfVxuICAgICAgICAgIC5kcm9wc3BhY2Uge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pdGVtIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRhcmdldHMtY29udGFpbmVyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5saXN0cy1jb250YWluZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaGVhZGVyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDgwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9ycy5ncmV5fTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn0iXX0= */\n/*@ sourceURL=/Users/noahmaizels/Desktop/trellolike/pages/index.js */")));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.512583302e88898ebb69.hot-update.js.map