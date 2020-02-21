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

      var sourceList = newLists[source.index];
      newLists.splice(source.index, 1);
      newLists.splice(destination.index, 0);
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
          lineNumber: 80
        },
        __self: this
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_13___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, __jsx("title", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["152300519", [_helpers_colors__WEBPACK_IMPORTED_MODULE_14__["default"].grey]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, "TrelloLike"), __jsx("link", {
        href: "https://fonts.googleapis.com/css?family=Dosis:400,700&display=swap",
        rel: "stylesheet",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["152300519", [_helpers_colors__WEBPACK_IMPORTED_MODULE_14__["default"].grey]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }), __jsx("script", {
        src: "/DragDropTouch.js",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["152300519", [_helpers_colors__WEBPACK_IMPORTED_MODULE_14__["default"].grey]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      })), __jsx("header", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["152300519", [_helpers_colors__WEBPACK_IMPORTED_MODULE_14__["default"].grey]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, "ListKeeper"), __jsx("main", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["152300519", [_helpers_colors__WEBPACK_IMPORTED_MODULE_14__["default"].grey]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_15__["DragDropContext"], {
        onDragEnd: this.onDragEnd,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_15__["Droppable"], {
        droppableId: "droppable-id",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, function (provided) {
        return __jsx("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          ref: provided.innerRef
        }, provided.droppableProps, {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["152300519", [_helpers_colors__WEBPACK_IMPORTED_MODULE_14__["default"].grey]]]) + " " + (provided.droppableProps && provided.droppableProps.className != null && provided.droppableProps.className || 'lists-container'),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
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
              lineNumber: 102
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
          lineNumber: 119
        },
        __self: this
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "152300519",
        dynamic: [_helpers_colors__WEBPACK_IMPORTED_MODULE_14__["default"].grey],
        __self: this
      }, "main.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding-left:20px;}.dropspace.__jsx-style-dynamic-selector{border:1px solid blue;display:inline-block;height:100px;width:100px;}.item.__jsx-style-dynamic-selector{border:1px solid red;display:inline-block;}.targets-container.__jsx-style-dynamic-selector{position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.lists-container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100vh;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}header.__jsx-style-dynamic-selector{position:fixed;height:80px;width:100%;line-height:80px;background-color:".concat(_helpers_colors__WEBPACK_IMPORTED_MODULE_14__["default"].grey, ";font-size:2rem;left:0;top:0;padding-left:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FobWFpemVscy9EZXNrdG9wL3RyZWxsb2xpa2UvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0htQixBQU0wQixBQUtTLEFBTUQsQUFJSCxBQUlMLEFBS0UsZUFDSCxHQVRDLEdBSlEsQ0FOQSxLQW9CVixXQUNNLElBZG5CLENBTmUsWUFxQmlDLENBcEJsQyxZQUNkLE1BUm9CLEFBbUJMLGFBQ1UsS0FsQnpCLEFBY0EsU0FZaUIsZUFDUixPQUNELE1BQ1ksa0JBQ3BCLGlEQVhBIiwiZmlsZSI6Ii9Vc2Vycy9ub2FobWFpemVscy9EZXNrdG9wL3RyZWxsb2xpa2UvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV3TGlzdCBmcm9tICcuLi9jb21wb25lbnRzL05ld0xpc3QnXG5pbXBvcnQgTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL0xpc3QnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi9oZWxwZXJzL2NvbG9ycydcbmltcG9ydCB7IERyYWdEcm9wQ29udGV4dCwgRHJvcHBhYmxlIH0gZnJvbSAncmVhY3QtYmVhdXRpZnVsLWRuZCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxpc3RzOiBbXSxcbiAgICAgIG9wZW5NZW51OiAnJyxcbiAgICB9XG4gIH1cblxuICBzZXRPcGVuTWVudSA9IChtZW51SWQpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtvcGVuTWVudTogbWVudUlkfSlcbiAgfVxuXG4gIGdldE9wZW5NZW51ID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLm9wZW5NZW51XG4gIH1cbiAgICBcbiAgYWRkTGlzdCA9IChsaXN0KSA9PiB7XG4gICAgbGV0IG5ld0xpc3RzID0gdGhpcy5zdGF0ZS5saXN0cy5zbGljZSgpXG4gICAgbmV3TGlzdHMucHVzaChsaXN0KVxuICAgIHRoaXMuc2V0U3RhdGUoe2xpc3RzOiBuZXdMaXN0c30pXG4gIH1cblxuICBkZWxldGVMaXN0ID0gKGxpc3RJZCkgPT4ge1xuICAgIGxldCBuZXdMaXN0cyA9IHRoaXMuc3RhdGUubGlzdHMuc2xpY2UoKVxuICAgIG5ld0xpc3RzID0gbmV3TGlzdHMuZmlsdGVyKGxpc3QgPT4gbGlzdC5pZCAhPT0gbGlzdElkKVxuICAgIHRoaXMuc2V0U3RhdGUoe2xpc3RzOiBuZXdMaXN0c30pXG4gIH1cblxuICAvLyBzd2l0Y2hMaXN0cyA9IChzb3VyY2VJZCwgdGFyZ2V0SWQpID0+IHtcbiAgLy8gICBsZXQgbmV3TGlzdHMgPSB0aGlzLnN0YXRlLmxpc3RzLnNsaWNlKClcbiAgLy8gICBsZXQgc291cmNlRWxlbWVudFxuICAvLyAgIGxldCB0YXJnZXRFbGVtZW50XG4gIC8vICAgbmV3TGlzdHMuZm9yRWFjaChsaXN0ID0+IHtcbiAgLy8gICAgIGlmIChTdHJpbmcobGlzdC5pZCkgPT09IFN0cmluZyhzb3VyY2VJZCkpe1xuICAvLyAgICAgICBzb3VyY2VFbGVtZW50ID0gbGlzdFxuICAvLyAgICAgfVxuICAvLyAgICAgaWYgKFN0cmluZyhsaXN0LmlkKSA9PT0gU3RyaW5nKHRhcmdldElkKSl7XG4gIC8vICAgICAgIHRhcmdldEVsZW1lbnQgPSBsaXN0XG4gIC8vICAgICB9XG4gIC8vICAgfSlcblxuICAvLyAgIG5ld0xpc3RzID0gbmV3TGlzdHMubWFwKGxpc3QgPT4ge1xuICAvLyAgICAgaWYgKFN0cmluZyhsaXN0LmlkKSA9PT0gU3RyaW5nKHNvdXJjZUlkKSl7XG4gIC8vICAgICAgIHJldHVybiB0YXJnZXRFbGVtZW50XG4gIC8vICAgICB9XG4gIC8vICAgICBpZiAoU3RyaW5nKGxpc3QuaWQpID09PSBTdHJpbmcodGFyZ2V0SWQpKXtcbiAgLy8gICAgICAgcmV0dXJuIHNvdXJjZUVsZW1lbnRcbiAgLy8gICAgIH1cbiAgLy8gICAgIHJldHVybiBsaXN0XG4gIC8vICAgfSlcbiAgLy8gICB0aGlzLnNldFN0YXRlKHtsaXN0czogbmV3TGlzdHN9KVxuICAvLyB9XG5cbiAgb25EcmFnRW5kID0gKHJlc3VsdCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHJlc3VsdClcbiAgICBjb25zdCB7IGRlc3RpbmF0aW9uLCBzb3VyY2UsIGRyYWdnYWJsZUlkIH0gPSByZXN1bHRcbiAgICBpZiAoIWRlc3RpbmF0aW9uKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYgKGRlc3RpbmF0aW9uLmRyb3BwYWJsZUlkID09PSBzb3VyY2UuZHJvcHBhYmxlSWQgJiYgZGVzdGluYXRpb24uaW5kZXggPT09IHNvdXJjZS5pbmRleCAgKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBuZXdMaXN0cyA9IEFycmF5LmZyb20odGhpcy5zdGF0ZS5saXN0cylcbiAgICBjb25zdCBzb3VyY2VMaXN0ID0gbmV3TGlzdHNbc291cmNlLmluZGV4XVxuICAgIG5ld0xpc3RzLnNwbGljZShzb3VyY2UuaW5kZXgsIDEpXG4gICAgbmV3TGlzdHMuc3BsaWNlKGRlc3RpbmF0aW9uLmluZGV4LCAwLCApXG4gIH1cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHBcIj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPlRyZWxsb0xpa2U8L3RpdGxlPlxuICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9RG9zaXM6NDAwLDcwMCZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgICAgICAgICA8c2NyaXB0IHNyYz1cIi9EcmFnRHJvcFRvdWNoLmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICBMaXN0S2VlcGVyXG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8bWFpbj5cbiAgICAgICAgICA8RHJhZ0Ryb3BDb250ZXh0XG4gICAgICAgICAgICBvbkRyYWdFbmQ9e3RoaXMub25EcmFnRW5kfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxEcm9wcGFibGVcbiAgICAgICAgICAgICAgZHJvcHBhYmxlSWQ9e1wiZHJvcHBhYmxlLWlkXCJ9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICB7KHByb3ZpZGVkKSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaXN0cy1jb250YWluZXInXG4gICAgICAgICAgICAgICAgcmVmPXtwcm92aWRlZC5pbm5lclJlZn1cbiAgICAgICAgICAgICAgICB7Li4ucHJvdmlkZWQuZHJvcHBhYmxlUHJvcHN9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3RoaXMuc3RhdGUubGlzdHMubWFwKChsaXN0LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiA8TGlzdCBcbiAgICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgIG9wZW5NZW51PXt0aGlzLnN0YXRlLm9wZW5NZW51fVxuICAgICAgICAgICAgICAgICAgc2V0T3Blbk1lbnU9e2xpc3Quc2V0T3Blbk1lbnV9XG4gICAgICAgICAgICAgICAgICBzZXRUaXRsZT17bGlzdC5zZXRUaXRsZX1cbiAgICAgICAgICAgICAgICAgIC8vIHN3aXRjaExpc3RzPXtsaXN0LnN3aXRjaExpc3RzfVxuICAgICAgICAgICAgICAgICAgZGVsZXRlTGlzdD17bGlzdC5kZWxldGVMaXN0fVxuICAgICAgICAgICAgICAgICAga2V5PXtsaXN0LmtleX1cbiAgICAgICAgICAgICAgICAgIGlkPXtsaXN0LmlkfVxuICAgICAgICAgICAgICAgICAgaW5pdGlhbFRpdGxlPXtsaXN0LmluaXRpYWxUaXRsZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAge3Byb3ZpZGVkLnBsYWNlaG9sZGVyfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9Ecm9wcGFibGU+XG4gICAgICAgICAgPC9EcmFnRHJvcENvbnRleHQ+XG4gICAgICAgICAgPE5ld0xpc3QgXG4gICAgICAgICAgICBvcGVuTWVudT17dGhpcy5zdGF0ZS5vcGVuTWVudX1cbiAgICAgICAgICAgIGdldE9wZW5NZW51PXt0aGlzLmdldE9wZW5NZW51fSBcbiAgICAgICAgICAgIHNldE9wZW5NZW51PXt0aGlzLnNldE9wZW5NZW51fSBcbiAgICAgICAgICAgIHN3aXRjaExpc3RzPXt0aGlzLnN3aXRjaExpc3RzfSBcbiAgICAgICAgICAgIGRlbGV0ZUxpc3Q9e3RoaXMuZGVsZXRlTGlzdH0gXG4gICAgICAgICAgICBhZGRMaXN0PXt0aGlzLmFkZExpc3R9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9tYWluPiAgIFxuICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgIC5hcHAge1xuICAgICAgICAgIFxuICAgICAgICAgfVxuICAgICAgICAgIG1haW4ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgICAgIFxuICAgICAgICAgIH1cbiAgICAgICAgICAuZHJvcHNwYWNlIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaXRlbSB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50YXJnZXRzLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGlzdHMtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGhlYWRlciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA4MHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMuZ3JleX07XG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59Il19 */\n/*@ sourceURL=/Users/noahmaizels/Desktop/trellolike/pages/index.js */")));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.62c316252f8540acbda4.hot-update.js.map