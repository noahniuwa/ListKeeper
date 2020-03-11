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
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["27342338", [_helpers_colors__WEBPACK_IMPORTED_MODULE_13__["default"].grey]]]) + " " + "list",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        }), __jsx("div", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["27342338", [_helpers_colors__WEBPACK_IMPORTED_MODULE_13__["default"].grey]]]) + " " + 'list-heading',
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
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["27342338", [_helpers_colors__WEBPACK_IMPORTED_MODULE_13__["default"].grey]]]) + " " + 'drag-handle',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        }), __jsx("div", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["27342338", [_helpers_colors__WEBPACK_IMPORTED_MODULE_13__["default"].grey]]]) + " " + 'ellipsis',
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
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["27342338", [_helpers_colors__WEBPACK_IMPORTED_MODULE_13__["default"].grey]]]) + " " + "menu ".concat(_this2.state.menuDisplay),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        }, __jsx("div", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["27342338", [_helpers_colors__WEBPACK_IMPORTED_MODULE_13__["default"].grey]]]) + " " + 'close-button',
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
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["27342338", [_helpers_colors__WEBPACK_IMPORTED_MODULE_13__["default"].grey]]]),
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
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["27342338", [_helpers_colors__WEBPACK_IMPORTED_MODULE_13__["default"].grey]]]) + " " + 'delete-button',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          },
          __self: this
        }, "Delete Note"))))), __jsx("div", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["27342338", [_helpers_colors__WEBPACK_IMPORTED_MODULE_13__["default"].grey]]]),
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
          id: "27342338",
          dynamic: [_helpers_colors__WEBPACK_IMPORTED_MODULE_13__["default"].grey],
          __self: this
        }, ".delete-button.__jsx-style-dynamic-selector{border:1px solid black;margin-left:30px;width:80px;}.drag-handle.__jsx-style-dynamic-selector{width:20px;height:20px;position:relative;-webkit-transform:translate(-20px,px);-ms-transform:translate(-20px,px);transform:translate(-20px,px);}.close-button.__jsx-style-dynamic-selector{text-align:right;}.hidden.__jsx-style-dynamic-selector{display:none;}.menu.__jsx-style-dynamic-selector{border:1px solid black;border-radius:5px;background-color:white;height:200px;width:180px;position:absolute;z-index:10;}.ellipsis.__jsx-style-dynamic-selector{padding-right:3px;}.ellipsis.__jsx-style-dynamic-selector:hover{cursor:pointer;}.list-heading.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-size:1rem;}.list.__jsx-style-dynamic-selector{vertical-align:top;width:300px;border-radius:5px;padding:8px;display:inline-block;background-color:".concat(_helpers_colors__WEBPACK_IMPORTED_MODULE_13__["default"].grey, ";-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;margin-right:7px;}h2.__jsx-style-dynamic-selector{font-size:18px;}input.__jsx-style-dynamic-selector{width:80%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FobWFpemVscy9EZXNrdG9wL0xpc3RLZWVwZXIvY29tcG9uZW50cy9MaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStGd0IsQUFHd0MsQUFLWixBQU1NLEFBR0osQUFHVSxBQVNQLEFBR0QsQUFHRixBQUtNLEFBVUosQUFHTCxVQUNaLENBN0NjLEVBU2QsRUFlQSxBQWtCQSxFQXBDQSxDQWVBLENBV2MsSUFyQ0ssQUFNQyxBQVdBLFFBcUJBLFNBckNQLENBTW9CLEFBV1IsUUFxQlgsRUFyQ2QsVUFzQ3VCLEdBckJSLFVBYWlCLEdBWmxCLEtBcUJrQyxPQXBCNUIsa0JBQ1AsV0FDYixVQW1CZ0IsZUFsQ2hCLHlDQW1DbUIsS0FWRixZQVdqQixHQVZBIiwiZmlsZSI6Ii9Vc2Vycy9ub2FobWFpemVscy9EZXNrdG9wL0xpc3RLZWVwZXIvY29tcG9uZW50cy9MaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEVkaXRhYmxlVGl0bGUgZnJvbSAnLi9FZGl0YWJsZVRpdGxlJ1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi9oZWxwZXJzL2NvbG9ycydcbmltcG9ydCB7IERyYWdnYWJsZSB9IGZyb20gJ3JlYWN0LWJlYXV0aWZ1bC1kbmQnXG5cbmNvbnN0IEVkaXRvciA9IGR5bmFtaWMoXG4gICgpID0+IGltcG9ydCgnLi9FZGl0b3InKSxcbiAgeyBzc3I6IGZhbHNlIH1cbilcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1lbnVEaXNwbGF5OiAnaGlkZGVuJyxcbiAgICAgIG1lbnVJZDogJ20nLmNvbmNhdChTdHJpbmcoRGF0ZS5ub3coKSkpLFxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpe1xuICAgIGlmICh0aGlzLnByb3BzLm9wZW5NZW51ICE9PSBwcmV2UHJvcHMub3Blbk1lbnUpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLm9wZW5NZW51ID09PSB0aGlzLnN0YXRlLm1lbnVJZCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHttZW51RGlzcGxheTogJyd9KVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe21lbnVEaXNwbGF5OiAnaGlkZGVuJ30pXG4gICAgICB9XG4gICAgfSBcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSA9ICh2YWx1ZSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB0ZXh0OiB2YWx1ZSB9KVxuICB9XG5cblxuICBoYW5kbGVFbGxpcHNpc0NsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMub3Blbk1lbnUgPT09IHRoaXMuc3RhdGUubWVudUlkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLnByb3BzLnNldE9wZW5NZW51KHRoaXMuc3RhdGUubWVudUlkKVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUNsb3NlQnV0dG9uQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICBpZiAodGhpcy5wcm9wcy5vcGVuTWVudSA9PT0gdGhpcy5zdGF0ZS5tZW51SWQpe1xuICAgICAgdGhpcy5wcm9wcy5zZXRPcGVuTWVudSgnJylcbiAgICB9XG4gIH1cbiAgXG4gIHJlbmRlcigpe1xuICAgIHJldHVybiAoXG4gICAgICA8RHJhZ2dhYmxlIFxuICAgICAgICBkcmFnZ2FibGVJZD17U3RyaW5nKHRoaXMucHJvcHMuaWQpfVxuICAgICAgICBpbmRleD17dGhpcy5wcm9wcy5pbmRleH1cbiAgICAgID5cbiAgICAgICAgeyhwcm92aWRlZCkgPT4gKFxuICAgICAgICAgICAgPGRpdiBcbiAgICAgICAgICAgIC8vIG9uRHJvcD17KCkgPT4gdGhpcy5vbkRyb3AoZXZlbnQpfSBcbiAgICAgICAgICAgIC8vIG9uRHJhZ092ZXI9eygpID0+IHRoaXMub25EcmFnT3ZlcihldmVudCl9IFxuICAgICAgICAgICAgLy8gb25EcmFnU3RhcnQ9eygpID0+IHRoaXMuZHJhZyhldmVudCl9IFxuICAgICAgICAgICAgLy8gZHJhZ2dhYmxlPSd0cnVlJyBcbiAgICAgICAgICAgIHsuLi5wcm92aWRlZC5kcmFnZ2FibGVQcm9wc31cbiAgICAgICAgICAgIHsuLi5wcm92aWRlZC5kcmFnSGFuZGxlUHJvcHN9XG4gICAgICAgICAgICByZWY9e3Byb3ZpZGVkLmlubmVyUmVmfVxuICAgICAgICAgICAgaWQ9e3RoaXMucHJvcHMuaWR9IFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibGlzdFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xpc3QtaGVhZGluZyc+XG4gICAgICAgICAgICAgIDxFZGl0YWJsZVRpdGxlIGluaXRpYWxUaXRsZT17dGhpcy5wcm9wcy5pbml0aWFsVGl0bGV9Lz5cbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J2RyYWctaGFuZGxlJyBzcmM9J2RyYWctaGFuZGxlLnN2ZycvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZWxsaXBzaXMnPlxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gb25DbGljaz17dGhpcy5oYW5kbGVFbGxpcHNpc0NsaWNrfSBpY29uPSdlbGxpcHNpcy1oJyAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbWVudSAke3RoaXMuc3RhdGUubWVudURpc3BsYXl9YH0+IFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Nsb3NlLWJ1dHRvbic+XG4gICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gb25DbGljaz17dGhpcy5oYW5kbGVDbG9zZUJ1dHRvbkNsaWNrfSAgaWNvbj0nd2luZG93LWNsb3NlJyAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2RlbGV0ZS1idXR0b24nIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRlbGV0ZUxpc3QodGhpcy5wcm9wcy5pZClcbiAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICBEZWxldGUgTm90ZVxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj4gICAgICAgIFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPEVkaXRvciAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgIC5kZWxldGUtYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZHJhZy1oYW5kbGUge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTIwcHgsIHB4KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuY2xvc2UtYnV0dG9uIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuaGlkZGVuIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5tZW51IHtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTgwcHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5lbGxpcHNpcyB7XG4gICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDNweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZWxsaXBzaXM6aG92ZXIge1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubGlzdC1oZWFkaW5nIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmxpc3Qge1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JzLmdyZXl9O1xuICAgICAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogN3B4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvRHJhZ2dhYmxlPlxuICAgICk7XG4gIH1cbn0iXX0= */\n/*@ sourceURL=/Users/noahmaizels/Desktop/ListKeeper/components/List.js */")));
      });
    }
  }]);

  return List;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.3b60e698e2759b28d9c2.hot-update.js.map