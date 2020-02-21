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
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
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








var _jsxFileName = "/Users/noahmaizels/Desktop/trellolike/components/List.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;






var Editor = next_dynamic__WEBPACK_IMPORTED_MODULE_12___default()(function () {
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
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(List, _React$Component);

  function List(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, List);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(List).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleChange", function (value) {
      _this.setState({
        text: value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleEllipsisClick", function (event) {
      if (_this.props.openMenu === _this.state.menuId) {
        return;
      } else {
        _this.props.setOpenMenu(_this.state.menuId);
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleCloseButtonClick", function (event) {
      if (_this.props.openMenu === _this.state.menuId) {
        _this.props.setOpenMenu('');
      }
    });

    _this.state = {
      menuDisplay: 'hidden',
      menuId: 'm'.concat(String(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()()))
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(List, [{
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
        draggableId: this.props.id,
        index: this.props.index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, function (provided) {}, __jsx("div", {
        // onDrop={() => this.onDrop(event)} 
        // onDragOver={() => this.onDragOver(event)} 
        // onDragStart={() => this.drag(event)} 
        // draggable='true' 
        id: this.props.id,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["771034895", [_helpers_colors__WEBPACK_IMPORTED_MODULE_13__["default"].grey]]]) + " " + "list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["771034895", [_helpers_colors__WEBPACK_IMPORTED_MODULE_13__["default"].grey]]]) + " " + 'list-heading',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, __jsx(_EditableTitle__WEBPACK_IMPORTED_MODULE_10__["default"], {
        initialTitle: this.props.initialTitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["771034895", [_helpers_colors__WEBPACK_IMPORTED_MODULE_13__["default"].grey]]]) + " " + 'ellipsis',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeIcon"], {
        onClick: this.handleEllipsisClick,
        icon: "ellipsis-h",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["771034895", [_helpers_colors__WEBPACK_IMPORTED_MODULE_13__["default"].grey]]]) + " " + "menu ".concat(this.state.menuDisplay),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["771034895", [_helpers_colors__WEBPACK_IMPORTED_MODULE_13__["default"].grey]]]) + " " + 'close-button',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeIcon"], {
        onClick: this.handleCloseButtonClick,
        icon: "window-close",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      })), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["771034895", [_helpers_colors__WEBPACK_IMPORTED_MODULE_13__["default"].grey]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, __jsx("button", {
        onClick: function onClick(e) {
          e.preventDefault();

          _this2.props.deleteList(_this2.props.id);
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["771034895", [_helpers_colors__WEBPACK_IMPORTED_MODULE_13__["default"].grey]]]) + " " + 'delete-button',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, "Delete Note"))))), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["771034895", [_helpers_colors__WEBPACK_IMPORTED_MODULE_13__["default"].grey]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, __jsx(Editor, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "771034895",
        dynamic: [_helpers_colors__WEBPACK_IMPORTED_MODULE_13__["default"].grey],
        __self: this
      }, ".delete-button.__jsx-style-dynamic-selector{border:1px solid black;margin-left:30px;width:80px;}.close-button.__jsx-style-dynamic-selector{text-align:right;}.hidden.__jsx-style-dynamic-selector{display:none;}.menu.__jsx-style-dynamic-selector{border:1px solid black;border-radius:5px;background-color:white;height:200px;width:180px;position:absolute;z-index:10;}.ellipsis.__jsx-style-dynamic-selector{padding-right:3px;}.list-heading.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-size:1rem;}.list.__jsx-style-dynamic-selector{vertical-align:top;width:300px;border-radius:5px;padding:8px;display:inline-block;background-color:".concat(_helpers_colors__WEBPACK_IMPORTED_MODULE_13__["default"].grey, ";-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;margin-right:7px;}h2.__jsx-style-dynamic-selector{font-size:18px;}input.__jsx-style-dynamic-selector{width:80%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FobWFpemVscy9EZXNrdG9wL3RyZWxsb2xpa2UvY29tcG9uZW50cy9MaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZHc0IsQUFHc0MsQUFLTixBQUdKLEFBR1UsQUFTUCxBQUdILEFBS00sQUFVSixBQUdMLFVBQ1osR0FqQ0EsRUE4QkEsRUFqQ0EsQ0FlQSxDQVFjLElBNUJLLEFBV0MsUUFrQkEsU0E1QlAsQ0FXWSxRQWtCWCxFQTVCZCxVQTZCdUIsR0FsQlIsVUFVaUIsR0FUbEIsS0FrQmtDLE9BakI1QixrQkFDUCxXQUNiLFVBZ0JnQix3REFDRyxLQVZGLFlBV2pCLEdBVkEiLCJmaWxlIjoiL1VzZXJzL25vYWhtYWl6ZWxzL0Rlc2t0b3AvdHJlbGxvbGlrZS9jb21wb25lbnRzL0xpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgRWRpdGFibGVUaXRsZSBmcm9tICcuL0VkaXRhYmxlVGl0bGUnXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnXG5pbXBvcnQgY29sb3JzIGZyb20gJy4uL2hlbHBlcnMvY29sb3JzJ1xuaW1wb3J0IHsgRHJhZ2dhYmxlIH0gZnJvbSAncmVhY3QtYmVhdXRpZnVsLWRuZCdcblxuY29uc3QgRWRpdG9yID0gZHluYW1pYyhcbiAgKCkgPT4gaW1wb3J0KCcuL0VkaXRvcicpLFxuICB7IHNzcjogZmFsc2UgfVxuKVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbWVudURpc3BsYXk6ICdoaWRkZW4nLFxuICAgICAgbWVudUlkOiAnbScuY29uY2F0KFN0cmluZyhEYXRlLm5vdygpKSksXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcyl7XG4gICAgaWYgKHRoaXMucHJvcHMub3Blbk1lbnUgIT09IHByZXZQcm9wcy5vcGVuTWVudSkge1xuICAgICAgaWYgKHRoaXMucHJvcHMub3Blbk1lbnUgPT09IHRoaXMuc3RhdGUubWVudUlkKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe21lbnVEaXNwbGF5OiAnJ30pXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWVudURpc3BsYXk6ICdoaWRkZW4nfSlcbiAgICAgIH1cbiAgICB9IFxuICB9XG5cbiAgaGFuZGxlQ2hhbmdlID0gKHZhbHVlKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRleHQ6IHZhbHVlIH0pXG4gIH1cblxuICAvLyBkcmFnID0gKGV2ZW50KSA9PiB7XG4gIC8vICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQnLCBldmVudC50YXJnZXQuaWQpXG4gIC8vIH1cbiAgIFxuICAvLyBvbkRyYWdPdmVyID0gKGV2ZW50KSA9PiB7XG4gIC8vICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgLy8gfVxuXG4gIC8vIG9uRHJvcCA9IChldmVudCkgPT4ge1xuICAvLyAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIC8vICAgY29uc3Qgc291cmNlTm9kZUlkID0gZXZlbnQuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3RleHQnKVxuICAvLyAgIGNvbnN0IHRhcmdldE5vZGVJZCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcubGlzdCcpLmlkXG4gIC8vICAgdGhpcy5wcm9wcy5zd2l0Y2hMaXN0cyhzb3VyY2VOb2RlSWQsIHRhcmdldE5vZGVJZClcbiAgLy8gfVxuXG4gIGhhbmRsZUVsbGlwc2lzQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICBpZiAodGhpcy5wcm9wcy5vcGVuTWVudSA9PT0gdGhpcy5zdGF0ZS5tZW51SWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMucHJvcHMuc2V0T3Blbk1lbnUodGhpcy5zdGF0ZS5tZW51SWQpXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQ2xvc2VCdXR0b25DbGljayA9IChldmVudCkgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLm9wZW5NZW51ID09PSB0aGlzLnN0YXRlLm1lbnVJZCl7XG4gICAgICB0aGlzLnByb3BzLnNldE9wZW5NZW51KCcnKVxuICAgIH1cbiAgfVxuICBcbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxEcmFnZ2FibGUgXG4gICAgICAgIGRyYWdnYWJsZUlkPXt0aGlzLnByb3BzLmlkfVxuICAgICAgICBpbmRleD17dGhpcy5wcm9wcy5pbmRleH1cbiAgICAgID5cbiAgICAgICAgeyhwcm92aWRlZCkgPT4ge1xuICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICA8ZGl2IFxuICAgICAgICAgIC8vIG9uRHJvcD17KCkgPT4gdGhpcy5vbkRyb3AoZXZlbnQpfSBcbiAgICAgICAgICAvLyBvbkRyYWdPdmVyPXsoKSA9PiB0aGlzLm9uRHJhZ092ZXIoZXZlbnQpfSBcbiAgICAgICAgICAvLyBvbkRyYWdTdGFydD17KCkgPT4gdGhpcy5kcmFnKGV2ZW50KX0gXG4gICAgICAgICAgLy8gZHJhZ2dhYmxlPSd0cnVlJyBcbiAgICAgICAgICBpZD17dGhpcy5wcm9wcy5pZH0gXG4gICAgICAgICAgY2xhc3NOYW1lPVwibGlzdFwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGlzdC1oZWFkaW5nJz5cbiAgICAgICAgICAgIDxFZGl0YWJsZVRpdGxlIGluaXRpYWxUaXRsZT17dGhpcy5wcm9wcy5pbml0aWFsVGl0bGV9Lz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdlbGxpcHNpcyc+XG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gb25DbGljaz17dGhpcy5oYW5kbGVFbGxpcHNpc0NsaWNrfSBpY29uPSdlbGxpcHNpcy1oJyAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG1lbnUgJHt0aGlzLnN0YXRlLm1lbnVEaXNwbGF5fWB9PiBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2xvc2UtYnV0dG9uJz5cbiAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gb25DbGljaz17dGhpcy5oYW5kbGVDbG9zZUJ1dHRvbkNsaWNrfSAgaWNvbj0nd2luZG93LWNsb3NlJyAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2RlbGV0ZS1idXR0b24nIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGVsZXRlTGlzdCh0aGlzLnByb3BzLmlkKVxuICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgRGVsZXRlIE5vdGVcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj4gICAgICAgIFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8RWRpdG9yIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLmRlbGV0ZS1idXR0b24ge1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNsb3NlLWJ1dHRvbiB7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmhpZGRlbiB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudSB7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgICB3aWR0aDogMTgwcHg7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZWxsaXBzaXMge1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogM3B4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxpc3QtaGVhZGluZyB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxpc3Qge1xuICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JzLmdyZXl9O1xuICAgICAgICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA3cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9EcmFnZ2FibGU+XG4gICAgKTtcbiAgfVxufSJdfQ== */\n/*@ sourceURL=/Users/noahmaizels/Desktop/trellolike/components/List.js */"))));
    }
  }]);

  return List;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.3b7519c8b06593e46289.hot-update.js.map