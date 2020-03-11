webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/List.js":
/*!****************************!*\
  !*** ./components/List.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return List; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _EditableTitle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./EditableTitle */ "./components/EditableTitle.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _helpers_colors__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../helpers/colors */ "./helpers/colors.js");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-beautiful-dnd */ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");








var _jsxFileName = "/Users/noahmaizels/Desktop/ListKeeper/components/List.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;






var Editor = next_dynamic__WEBPACK_IMPORTED_MODULE_12___default()(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("styles"), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! ./Editor */ "./components/Editor.js"));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ./Editor */ "./components/Editor.js")];
    },
    modules: ['./Editor']
  }
});

var List = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(List, _React$Component);

  function List(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, List);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(List).call(this, props));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleChange", function (value) {
      _this.setState({
        text: value
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleEllipsisClick", function (event) {
      if (_this.props.openMenu === _this.state.menuId) {
        return;
      } else {
        _this.props.setOpenMenu(_this.state.menuId);
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleCloseButtonClick", function (event) {
      if (_this.props.openMenu === _this.state.menuId) {
        _this.props.setOpenMenu('');
      }
    });

    _this.state = {
      menuDisplay: 'hidden',
      menuId: 'm'.concat(String(Date.now()))
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(List, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.openMenu !== prevProps.openMenu) {
        if (this.props.openMenu === this.state.menuId) {
          this.setState({
            menuDisplay: ''
          });
        } else {
          this.setState({
            menuDisplay: 'hidden'
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_14__["Draggable"], {
        draggableId: String(this.props.id),
        index: this.props.index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, function (provided) {
        return __jsx("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, provided.draggableProps, provided.dragHandleProps, {
          ref: provided.innerRef,
          id: _this2.props.id,
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["1338579462", [_helpers_colors__WEBPACK_IMPORTED_MODULE_13__["default"].grey]]]) + " " + "list",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        }), __jsx("div", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["1338579462", [_helpers_colors__WEBPACK_IMPORTED_MODULE_13__["default"].grey]]]) + " " + 'list-heading',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        }, __jsx(_EditableTitle__WEBPACK_IMPORTED_MODULE_10__["default"], {
          initialTitle: _this2.props.initialTitle,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        }), __jsx("img", {
          src: "drag-handle.svg",
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["1338579462", [_helpers_colors__WEBPACK_IMPORTED_MODULE_13__["default"].grey]]]) + " " + 'drag-handle',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        }), __jsx("div", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["1338579462", [_helpers_colors__WEBPACK_IMPORTED_MODULE_13__["default"].grey]]]) + " " + 'ellipsis',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          },
          __self: this
        }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeIcon"], {
          onClick: _this2.handleEllipsisClick,
          icon: "ellipsis-h",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        }), __jsx("div", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["1338579462", [_helpers_colors__WEBPACK_IMPORTED_MODULE_13__["default"].grey]]]) + " " + "menu ".concat(_this2.state.menuDisplay),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        }, __jsx("div", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["1338579462", [_helpers_colors__WEBPACK_IMPORTED_MODULE_13__["default"].grey]]]) + " " + 'close-button',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          },
          __self: this
        }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeIcon"], {
          onClick: _this2.handleCloseButtonClick,
          icon: "window-close",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        })), __jsx("div", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["1338579462", [_helpers_colors__WEBPACK_IMPORTED_MODULE_13__["default"].grey]]]),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          },
          __self: this
        }, __jsx("button", {
          onClick: function onClick(e) {
            e.preventDefault();

            _this2.props.deleteList(_this2.props.id);
          },
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["1338579462", [_helpers_colors__WEBPACK_IMPORTED_MODULE_13__["default"].grey]]]) + " " + 'delete-button',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          },
          __self: this
        }, "Delete Note"))))), __jsx("div", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["1338579462", [_helpers_colors__WEBPACK_IMPORTED_MODULE_13__["default"].grey]]]),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        }, __jsx(Editor, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
          id: "1338579462",
          dynamic: [_helpers_colors__WEBPACK_IMPORTED_MODULE_13__["default"].grey],
          __self: this
        }, ".delete-button.__jsx-style-dynamic-selector{border:1px solid black;margin-left:30px;width:80px;}.drag-handle.__jsx-style-dynamic-selector{width:20px;height:20px;}.close-button.__jsx-style-dynamic-selector{text-align:right;}.hidden.__jsx-style-dynamic-selector{display:none;}.menu.__jsx-style-dynamic-selector{border:1px solid black;border-radius:5px;background-color:white;height:200px;width:180px;position:absolute;z-index:10;}.ellipsis.__jsx-style-dynamic-selector{padding-right:3px;}.list-heading.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-size:1rem;}.list.__jsx-style-dynamic-selector{vertical-align:top;width:300px;border-radius:5px;padding:8px;display:inline-block;background-color:".concat(_helpers_colors__WEBPACK_IMPORTED_MODULE_13__["default"].grey, ";-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;margin-right:7px;}h2.__jsx-style-dynamic-selector{font-size:18px;}input.__jsx-style-dynamic-selector{width:80%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FobWFpemVscy9EZXNrdG9wL0xpc3RLZWVwZXIvY29tcG9uZW50cy9MaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStGd0IsQUFHd0MsQUFLWixBQUlNLEFBR0osQUFHVSxBQVNQLEFBR0gsQUFLTSxBQVVKLEFBR0wsVUFDWixDQXhDYyxFQU9kLEVBOEJBLEVBakNBLENBZUEsQ0FRYyxJQWhDSyxBQU1uQixBQVNvQixRQWtCQSxTQWhDUCxDQWVZLFFBa0JYLEVBaENkLFVBaUN1QixHQWxCUixVQVVpQixHQVRsQixLQWtCa0MsT0FqQjVCLGtCQUNQLFdBQ2IsVUFnQmdCLHdEQUNHLEtBVkYsWUFXakIsR0FWQSIsImZpbGUiOiIvVXNlcnMvbm9haG1haXplbHMvRGVza3RvcC9MaXN0S2VlcGVyL2NvbXBvbmVudHMvTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBFZGl0YWJsZVRpdGxlIGZyb20gJy4vRWRpdGFibGVUaXRsZSdcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYydcbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vaGVscGVycy9jb2xvcnMnXG5pbXBvcnQgeyBEcmFnZ2FibGUgfSBmcm9tICdyZWFjdC1iZWF1dGlmdWwtZG5kJ1xuXG5jb25zdCBFZGl0b3IgPSBkeW5hbWljKFxuICAoKSA9PiBpbXBvcnQoJy4vRWRpdG9yJyksXG4gIHsgc3NyOiBmYWxzZSB9XG4pXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtZW51RGlzcGxheTogJ2hpZGRlbicsXG4gICAgICBtZW51SWQ6ICdtJy5jb25jYXQoU3RyaW5nKERhdGUubm93KCkpKSxcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKXtcbiAgICBpZiAodGhpcy5wcm9wcy5vcGVuTWVudSAhPT0gcHJldlByb3BzLm9wZW5NZW51KSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5vcGVuTWVudSA9PT0gdGhpcy5zdGF0ZS5tZW51SWQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWVudURpc3BsYXk6ICcnfSlcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHttZW51RGlzcGxheTogJ2hpZGRlbid9KVxuICAgICAgfVxuICAgIH0gXG4gIH1cblxuICBoYW5kbGVDaGFuZ2UgPSAodmFsdWUpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgdGV4dDogdmFsdWUgfSlcbiAgfVxuXG5cbiAgaGFuZGxlRWxsaXBzaXNDbGljayA9IChldmVudCkgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLm9wZW5NZW51ID09PSB0aGlzLnN0YXRlLm1lbnVJZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5wcm9wcy5zZXRPcGVuTWVudSh0aGlzLnN0YXRlLm1lbnVJZClcbiAgICB9XG4gIH1cblxuICBoYW5kbGVDbG9zZUJ1dHRvbkNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMub3Blbk1lbnUgPT09IHRoaXMuc3RhdGUubWVudUlkKXtcbiAgICAgIHRoaXMucHJvcHMuc2V0T3Blbk1lbnUoJycpXG4gICAgfVxuICB9XG4gIFxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPERyYWdnYWJsZSBcbiAgICAgICAgZHJhZ2dhYmxlSWQ9e1N0cmluZyh0aGlzLnByb3BzLmlkKX1cbiAgICAgICAgaW5kZXg9e3RoaXMucHJvcHMuaW5kZXh9XG4gICAgICA+XG4gICAgICAgIHsocHJvdmlkZWQpID0+IChcbiAgICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICAvLyBvbkRyb3A9eygpID0+IHRoaXMub25Ecm9wKGV2ZW50KX0gXG4gICAgICAgICAgICAvLyBvbkRyYWdPdmVyPXsoKSA9PiB0aGlzLm9uRHJhZ092ZXIoZXZlbnQpfSBcbiAgICAgICAgICAgIC8vIG9uRHJhZ1N0YXJ0PXsoKSA9PiB0aGlzLmRyYWcoZXZlbnQpfSBcbiAgICAgICAgICAgIC8vIGRyYWdnYWJsZT0ndHJ1ZScgXG4gICAgICAgICAgICB7Li4ucHJvdmlkZWQuZHJhZ2dhYmxlUHJvcHN9XG4gICAgICAgICAgICB7Li4ucHJvdmlkZWQuZHJhZ0hhbmRsZVByb3BzfVxuICAgICAgICAgICAgcmVmPXtwcm92aWRlZC5pbm5lclJlZn1cbiAgICAgICAgICAgIGlkPXt0aGlzLnByb3BzLmlkfSBcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpc3RcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaXN0LWhlYWRpbmcnPlxuICAgICAgICAgICAgICA8RWRpdGFibGVUaXRsZSBpbml0aWFsVGl0bGU9e3RoaXMucHJvcHMuaW5pdGlhbFRpdGxlfS8+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdkcmFnLWhhbmRsZScgc3JjPSdkcmFnLWhhbmRsZS5zdmcnLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2VsbGlwc2lzJz5cbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlRWxsaXBzaXNDbGlja30gaWNvbj0nZWxsaXBzaXMtaCcgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG1lbnUgJHt0aGlzLnN0YXRlLm1lbnVEaXNwbGF5fWB9PiBcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjbG9zZS1idXR0b24nPlxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xvc2VCdXR0b25DbGlja30gIGljb249J3dpbmRvdy1jbG9zZScgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdkZWxldGUtYnV0dG9uJyBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5kZWxldGVMaXN0KHRoaXMucHJvcHMuaWQpXG4gICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgRGVsZXRlIE5vdGVcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICBcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxFZGl0b3IgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAuZGVsZXRlLWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmRyYWctaGFuZGxlIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmNsb3NlLWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmhpZGRlbiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubWVudSB7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE4MHB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZWxsaXBzaXMge1xuICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmxpc3QtaGVhZGluZyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5saXN0IHtcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9ycy5ncmV5fTtcbiAgICAgICAgICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDdweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L0RyYWdnYWJsZT5cbiAgICApO1xuICB9XG59Il19 */\n/*@ sourceURL=/Users/noahmaizels/Desktop/ListKeeper/components/List.js */")));
      });
    }
  }]);

  return List;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.4ef1d5126f22ad084428.hot-update.js.map