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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1__);
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
/* harmony import */ var _EditableTitle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./EditableTitle */ "./components/EditableTitle.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _helpers_colors__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../helpers/colors */ "./helpers/colors.js");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-beautiful-dnd */ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");









var _jsxFileName = "/Users/noahmaizels/Desktop/trellolike/components/List.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;






var Editor = next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! ./Editor */ "./components/Editor.js"));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ./Editor */ "./components/Editor.js")];
    },
    modules: ['./Editor']
  }
});

var List =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(List, _React$Component);

  function List(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, List);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(List).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleChange", function (value) {
      _this.setState({
        text: value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleEllipsisClick", function (event) {
      if (_this.props.openMenu === _this.state.menuId) {
        return;
      } else {
        _this.props.setOpenMenu(_this.state.menuId);
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleCloseButtonClick", function (event) {
      if (_this.props.openMenu === _this.state.menuId) {
        _this.props.setOpenMenu('');
      }
    });

    _this.state = {
      menuDisplay: 'hidden',
      menuId: 'm'.concat(String(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1___default()()))
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(List, [{
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

      return __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_15__["Draggable"], {
        draggableId: "d".concat(this.props.id),
        index: this.props.index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, function (provided) {
        return __jsx("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, provided.draggableProps, provided.dragHandleProps, {
          innerRef: provided.innerRef,
          id: _this2.props.id,
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["737171272", [_helpers_colors__WEBPACK_IMPORTED_MODULE_14__["default"].grey]]]) + " " + "list",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          },
          __self: this
        }), __jsx("div", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["737171272", [_helpers_colors__WEBPACK_IMPORTED_MODULE_14__["default"].grey]]]) + " " + 'list-heading',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          },
          __self: this
        }, __jsx(_EditableTitle__WEBPACK_IMPORTED_MODULE_11__["default"], {
          initialTitle: _this2.props.initialTitle,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          },
          __self: this
        }), __jsx("div", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["737171272", [_helpers_colors__WEBPACK_IMPORTED_MODULE_14__["default"].grey]]]) + " " + 'ellipsis',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
          onClick: _this2.handleEllipsisClick,
          icon: "ellipsis-h",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          __self: this
        }), __jsx("div", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["737171272", [_helpers_colors__WEBPACK_IMPORTED_MODULE_14__["default"].grey]]]) + " " + "menu ".concat(_this2.state.menuDisplay),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          __self: this
        }, __jsx("div", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["737171272", [_helpers_colors__WEBPACK_IMPORTED_MODULE_14__["default"].grey]]]) + " " + 'close-button',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          },
          __self: this
        }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
          onClick: _this2.handleCloseButtonClick,
          icon: "window-close",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        })), __jsx("div", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["737171272", [_helpers_colors__WEBPACK_IMPORTED_MODULE_14__["default"].grey]]]),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          },
          __self: this
        }, __jsx("button", {
          onClick: function onClick(e) {
            e.preventDefault();

            _this2.props.deleteList(_this2.props.id);
          },
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["737171272", [_helpers_colors__WEBPACK_IMPORTED_MODULE_14__["default"].grey]]]) + " " + 'delete-button',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          },
          __self: this
        }, "Delete Note"))))), __jsx("div", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["737171272", [_helpers_colors__WEBPACK_IMPORTED_MODULE_14__["default"].grey]]]),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          },
          __self: this
        }, __jsx(Editor, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107
          },
          __self: this
        })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
          id: "737171272",
          dynamic: [_helpers_colors__WEBPACK_IMPORTED_MODULE_14__["default"].grey],
          __self: this
        }, ".delete-button.__jsx-style-dynamic-selector{border:1px solid black;margin-left:30px;width:80px;}.close-button.__jsx-style-dynamic-selector{text-align:right;}.hidden.__jsx-style-dynamic-selector{display:none;}.menu.__jsx-style-dynamic-selector{border:1px solid black;border-radius:5px;background-color:white;height:200px;width:180px;position:absolute;z-index:10;}.ellipsis.__jsx-style-dynamic-selector{padding-right:3px;}.list-heading.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-size:1rem;}.list.__jsx-style-dynamic-selector{vertical-align:top;width:300px;border-radius:5px;padding:8px;display:inline-block;background-color:".concat(_helpers_colors__WEBPACK_IMPORTED_MODULE_14__["default"].grey, ";-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;margin-right:7px;}h2.__jsx-style-dynamic-selector{font-size:18px;}input.__jsx-style-dynamic-selector{width:80%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FobWFpemVscy9EZXNrdG9wL3RyZWxsb2xpa2UvY29tcG9uZW50cy9MaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRHd0IsQUFHd0MsQUFLTixBQUdKLEFBR1UsQUFTUCxBQUdILEFBS00sQUFVSixBQUdMLFVBQ1osR0FqQ0EsRUE4QkEsRUFqQ0EsQ0FlQSxDQVFjLElBNUJLLEFBV0MsUUFrQkEsU0E1QlAsQ0FXWSxRQWtCWCxFQTVCZCxVQTZCdUIsR0FsQlIsVUFVaUIsR0FUbEIsS0FrQmtDLE9BakI1QixrQkFDUCxXQUNiLFVBZ0JnQix3REFDRyxLQVZGLFlBV2pCLEdBVkEiLCJmaWxlIjoiL1VzZXJzL25vYWhtYWl6ZWxzL0Rlc2t0b3AvdHJlbGxvbGlrZS9jb21wb25lbnRzL0xpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgRWRpdGFibGVUaXRsZSBmcm9tICcuL0VkaXRhYmxlVGl0bGUnXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnXG5pbXBvcnQgY29sb3JzIGZyb20gJy4uL2hlbHBlcnMvY29sb3JzJ1xuaW1wb3J0IHsgRHJhZ2dhYmxlIH0gZnJvbSAncmVhY3QtYmVhdXRpZnVsLWRuZCdcblxuY29uc3QgRWRpdG9yID0gZHluYW1pYyhcbiAgKCkgPT4gaW1wb3J0KCcuL0VkaXRvcicpLFxuICB7IHNzcjogZmFsc2UgfVxuKVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbWVudURpc3BsYXk6ICdoaWRkZW4nLFxuICAgICAgbWVudUlkOiAnbScuY29uY2F0KFN0cmluZyhEYXRlLm5vdygpKSksXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcyl7XG4gICAgaWYgKHRoaXMucHJvcHMub3Blbk1lbnUgIT09IHByZXZQcm9wcy5vcGVuTWVudSkge1xuICAgICAgaWYgKHRoaXMucHJvcHMub3Blbk1lbnUgPT09IHRoaXMuc3RhdGUubWVudUlkKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe21lbnVEaXNwbGF5OiAnJ30pXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWVudURpc3BsYXk6ICdoaWRkZW4nfSlcbiAgICAgIH1cbiAgICB9IFxuICB9XG5cbiAgaGFuZGxlQ2hhbmdlID0gKHZhbHVlKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRleHQ6IHZhbHVlIH0pXG4gIH1cblxuICAvLyBkcmFnID0gKGV2ZW50KSA9PiB7XG4gIC8vICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQnLCBldmVudC50YXJnZXQuaWQpXG4gIC8vIH1cbiAgIFxuICAvLyBvbkRyYWdPdmVyID0gKGV2ZW50KSA9PiB7XG4gIC8vICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgLy8gfVxuXG4gIC8vIG9uRHJvcCA9IChldmVudCkgPT4ge1xuICAvLyAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIC8vICAgY29uc3Qgc291cmNlTm9kZUlkID0gZXZlbnQuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3RleHQnKVxuICAvLyAgIGNvbnN0IHRhcmdldE5vZGVJZCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcubGlzdCcpLmlkXG4gIC8vICAgdGhpcy5wcm9wcy5zd2l0Y2hMaXN0cyhzb3VyY2VOb2RlSWQsIHRhcmdldE5vZGVJZClcbiAgLy8gfVxuXG4gIGhhbmRsZUVsbGlwc2lzQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICBpZiAodGhpcy5wcm9wcy5vcGVuTWVudSA9PT0gdGhpcy5zdGF0ZS5tZW51SWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMucHJvcHMuc2V0T3Blbk1lbnUodGhpcy5zdGF0ZS5tZW51SWQpXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQ2xvc2VCdXR0b25DbGljayA9IChldmVudCkgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLm9wZW5NZW51ID09PSB0aGlzLnN0YXRlLm1lbnVJZCl7XG4gICAgICB0aGlzLnByb3BzLnNldE9wZW5NZW51KCcnKVxuICAgIH1cbiAgfVxuICBcbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxEcmFnZ2FibGUgXG4gICAgICAgIGRyYWdnYWJsZUlkPXtgZCR7dGhpcy5wcm9wcy5pZH1gfVxuICAgICAgICBpbmRleD17dGhpcy5wcm9wcy5pbmRleH1cbiAgICAgID5cbiAgICAgICAgeyhwcm92aWRlZCkgPT4gKFxuICAgICAgICAgICAgPGRpdiBcbiAgICAgICAgICAgIC8vIG9uRHJvcD17KCkgPT4gdGhpcy5vbkRyb3AoZXZlbnQpfSBcbiAgICAgICAgICAgIC8vIG9uRHJhZ092ZXI9eygpID0+IHRoaXMub25EcmFnT3ZlcihldmVudCl9IFxuICAgICAgICAgICAgLy8gb25EcmFnU3RhcnQ9eygpID0+IHRoaXMuZHJhZyhldmVudCl9IFxuICAgICAgICAgICAgLy8gZHJhZ2dhYmxlPSd0cnVlJyBcbiAgICAgICAgICAgIHsuLi5wcm92aWRlZC5kcmFnZ2FibGVQcm9wc31cbiAgICAgICAgICAgIHsuLi5wcm92aWRlZC5kcmFnSGFuZGxlUHJvcHN9XG4gICAgICAgICAgICBpbm5lclJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9XG4gICAgICAgICAgICBpZD17dGhpcy5wcm9wcy5pZH0gXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJsaXN0XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGlzdC1oZWFkaW5nJz5cbiAgICAgICAgICAgICAgPEVkaXRhYmxlVGl0bGUgaW5pdGlhbFRpdGxlPXt0aGlzLnByb3BzLmluaXRpYWxUaXRsZX0vPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZWxsaXBzaXMnPlxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gb25DbGljaz17dGhpcy5oYW5kbGVFbGxpcHNpc0NsaWNrfSBpY29uPSdlbGxpcHNpcy1oJyAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbWVudSAke3RoaXMuc3RhdGUubWVudURpc3BsYXl9YH0+IFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Nsb3NlLWJ1dHRvbic+XG4gICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gb25DbGljaz17dGhpcy5oYW5kbGVDbG9zZUJ1dHRvbkNsaWNrfSAgaWNvbj0nd2luZG93LWNsb3NlJyAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2RlbGV0ZS1idXR0b24nIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRlbGV0ZUxpc3QodGhpcy5wcm9wcy5pZClcbiAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICBEZWxldGUgTm90ZVxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj4gICAgICAgIFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPEVkaXRvciAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgIC5kZWxldGUtYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuY2xvc2UtYnV0dG9uIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuaGlkZGVuIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5tZW51IHtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTgwcHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5lbGxpcHNpcyB7XG4gICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDNweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubGlzdC1oZWFkaW5nIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmxpc3Qge1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JzLmdyZXl9O1xuICAgICAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogN3B4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvRHJhZ2dhYmxlPlxuICAgICk7XG4gIH1cbn0iXX0= */\n/*@ sourceURL=/Users/noahmaizels/Desktop/trellolike/components/List.js */")));
      });
    }
  }]);

  return List;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.33afa5e9060c80a49451.hot-update.js.map