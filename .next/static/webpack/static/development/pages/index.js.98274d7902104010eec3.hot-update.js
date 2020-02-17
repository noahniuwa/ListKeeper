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
/* harmony import */ var _EditableTitle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./EditableTitle */ "./components/EditableTitle.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-quill/dist/quill.snow.css */ "./node_modules/react-quill/dist/quill.snow.css");
/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_quill__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-quill */ "./node_modules/react-quill/lib/index.js");
/* harmony import */ var react_quill__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_quill__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_editor_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-editor-js */ "./node_modules/react-editor-js/dist/react-editor-js.umd.js");
/* harmony import */ var react_editor_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_editor_js__WEBPACK_IMPORTED_MODULE_13__);







var _jsxFileName = "/Users/noahmaizels/Desktop/trellolike/components/List.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;



 // ES6

 // ES6



var List =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(List, _React$Component);

  function List(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, List);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(List).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleChange", function (value) {
      _this.setState({
        text: value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "drag", function (event) {
      event.dataTransfer.setData('text', event.target.id);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onDragOver", function (event) {
      event.preventDefault();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onDrop", function (event) {
      event.preventDefault();
      var sourceNodeId = event.dataTransfer.getData('text');
      var targetNodeId = event.target.closest('.list').id;

      _this.props.switchLists(sourceNodeId, targetNodeId);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleEllipsisClick", function (event) {
      _this.setState({
        menuDisplay: ''
      });

      _this.props.setOpenMenu(_this.props.menuId);

      console.log(_this.props.openMenu);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleCloseButtonClick", function (event) {
      _this.setState({
        menuDisplay: 'hidden'
      });
    });

    _this.state = {
      menuDisplay: 'hidden',
      text: ''
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(List, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // <ReactQuill value={this.state.text} onChange={this.handleChange} />
      __jsx(react_editor_js__WEBPACK_IMPORTED_MODULE_13___default.a, {
        data: data,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx("div", {
        onDrop: function onDrop() {
          return _this2.onDrop(event);
        },
        onDragOver: function onDragOver() {
          return _this2.onDragOver(event);
        },
        onDragStart: function onDragStart() {
          return _this2.drag(event);
        },
        draggable: "true",
        id: this.props.id,
        className: "jsx-2810470222" + " " + "list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-2810470222" + " " + 'list-heading',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, __jsx(_EditableTitle__WEBPACK_IMPORTED_MODULE_9__["default"], {
        initialTitle: this.props.initialTitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }), __jsx("div", {
        className: "jsx-2810470222" + " " + 'ellipsis',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeIcon"], {
        onClick: this.handleEllipsisClick,
        icon: "ellipsis-h",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }), __jsx("div", {
        className: "jsx-2810470222" + " " + "menu ".concat(this.state.menuDisplay),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-2810470222" + " " + 'close-button',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeIcon"], {
        onClick: this.handleCloseButtonClick,
        icon: "window-close",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-2810470222",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, __jsx("button", {
        onClick: function onClick(e) {
          e.preventDefault();

          _this2.props.deleteList(_this2.props.id);
        },
        className: "jsx-2810470222" + " " + 'delete-button',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "Delete Note"))))), __jsx("div", {
        className: "jsx-2810470222",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, __jsx("div", {
        id: this.props.editorId,
        className: "jsx-2810470222",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, __jsx("p", {
        className: "jsx-2810470222",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, "Write notes here...."), __jsx("p", {
        className: "jsx-2810470222",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, __jsx("br", {
        className: "jsx-2810470222",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2810470222",
        __self: this
      }, ".delete-button.jsx-2810470222{border:1px solid black;margin-left:30px;width:80px;}.close-button.jsx-2810470222{text-align:right;}.hidden.jsx-2810470222{display:none;}.menu.jsx-2810470222{border:1px solid black;border-radius:5px;background-color:white;height:200px;width:180px;position:absolute;z-index:10;}.ellipsis.jsx-2810470222{padding-right:3px;}.list-heading.jsx-2810470222{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-size:1rem;}.list.jsx-2810470222{vertical-align:top;width:250px;border-radius:5px;padding:5px;display:inline-block;background-color:#EBECF0;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;margin-right:7px;}h2.jsx-2810470222{font-size:18px;}input.jsx-2810470222{width:80%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FobWFpemVscy9EZXNrdG9wL3RyZWxsb2xpa2UvY29tcG9uZW50cy9MaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Gb0IsQUFHb0MsQUFLTixBQUdKLEFBR1UsQUFTTixBQUdKLEFBS00sQUFVSixBQUdMLFVBQ1osR0FqQ0EsRUE4QkEsRUFqQ0EsQ0FlQSxDQVFjLElBNUJLLEFBV0MsUUFrQkEsU0E1QlAsQ0FXWSxRQWtCWCxFQTVCZCxVQTZCdUIsR0FsQlIsVUFVaUIsR0FUbEIsS0FrQmEsT0FqQlAsa0JBQ1AsQUFpQkcsV0FoQmhCLDZDQWlCbUIsaUJBQ25CLFNBWGlCLGVBQ2pCIiwiZmlsZSI6Ii9Vc2Vycy9ub2FobWFpemVscy9EZXNrdG9wL3RyZWxsb2xpa2UvY29tcG9uZW50cy9MaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEVkaXRhYmxlVGl0bGUgZnJvbSAnLi9FZGl0YWJsZVRpdGxlJ1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xuXG5pbXBvcnQgJ3JlYWN0LXF1aWxsL2Rpc3QvcXVpbGwuc25vdy5jc3MnOyAvLyBFUzZcbmltcG9ydCBSZWFjdFF1aWxsIGZyb20gJ3JlYWN0LXF1aWxsJzsgLy8gRVM2XG5pbXBvcnQgRWRpdG9ySnMgZnJvbSAncmVhY3QtZWRpdG9yLWpzJztcblxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1lbnVEaXNwbGF5OiAnaGlkZGVuJyxcbiAgICAgIHRleHQ6ICcnLFxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgLy8gPFJlYWN0UXVpbGwgdmFsdWU9e3RoaXMuc3RhdGUudGV4dH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSAvPlxuICAgIDxFZGl0b3JKcyBkYXRhPXtkYXRhfSAvPjtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSA9ICh2YWx1ZSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB0ZXh0OiB2YWx1ZSB9KVxuICB9XG5cbiAgZHJhZyA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0JywgZXZlbnQudGFyZ2V0LmlkKVxuICB9XG4gICBcbiAgb25EcmFnT3ZlciA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBvbkRyb3AgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHNvdXJjZU5vZGVJZCA9IGV2ZW50LmRhdGFUcmFuc2Zlci5nZXREYXRhKCd0ZXh0JylcbiAgICBjb25zdCB0YXJnZXROb2RlSWQgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLmxpc3QnKS5pZFxuICAgIHRoaXMucHJvcHMuc3dpdGNoTGlzdHMoc291cmNlTm9kZUlkLCB0YXJnZXROb2RlSWQpXG4gIH1cblxuICBoYW5kbGVFbGxpcHNpc0NsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7bWVudURpc3BsYXk6ICcnfSlcbiAgICB0aGlzLnByb3BzLnNldE9wZW5NZW51KHRoaXMucHJvcHMubWVudUlkKVxuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMub3Blbk1lbnUpXG4gIH1cblxuICBoYW5kbGVDbG9zZUJ1dHRvbkNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7bWVudURpc3BsYXk6ICdoaWRkZW4nfSlcbiAgfVxuICBcbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgb25Ecm9wPXsoKSA9PiB0aGlzLm9uRHJvcChldmVudCl9IG9uRHJhZ092ZXI9eygpID0+IHRoaXMub25EcmFnT3ZlcihldmVudCl9IG9uRHJhZ1N0YXJ0PXsoKSA9PiB0aGlzLmRyYWcoZXZlbnQpfSBkcmFnZ2FibGU9J3RydWUnIGlkPXt0aGlzLnByb3BzLmlkfSBjbGFzc05hbWU9XCJsaXN0XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaXN0LWhlYWRpbmcnPlxuICAgICAgICAgIDxFZGl0YWJsZVRpdGxlIGluaXRpYWxUaXRsZT17dGhpcy5wcm9wcy5pbml0aWFsVGl0bGV9Lz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZWxsaXBzaXMnPlxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUVsbGlwc2lzQ2xpY2t9IGljb249J2VsbGlwc2lzLWgnIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG1lbnUgJHt0aGlzLnN0YXRlLm1lbnVEaXNwbGF5fWB9PiBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Nsb3NlLWJ1dHRvbic+XG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsb3NlQnV0dG9uQ2xpY2t9ICBpY29uPSd3aW5kb3ctY2xvc2UnIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nZGVsZXRlLWJ1dHRvbicgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRlbGV0ZUxpc3QodGhpcy5wcm9wcy5pZClcbiAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgRGVsZXRlIE5vdGVcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PiAgICAgICAgXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdiBpZD17dGhpcy5wcm9wcy5lZGl0b3JJZH0+XG4gICAgICAgICAgICA8cD5Xcml0ZSBub3RlcyBoZXJlLi4uLjwvcD5cbiAgICAgICAgICAgIDxwPjxici8+PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5kZWxldGUtYnV0dG9uIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNsb3NlLWJ1dHRvbiB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmhpZGRlbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubWVudSB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxODBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZWxsaXBzaXMge1xuICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5saXN0LWhlYWRpbmcge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxpc3Qge1xuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFQkVDRjA7XG4gICAgICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogN3B4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBoMiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59Il19 */\n/*@ sourceURL=/Users/noahmaizels/Desktop/trellolike/components/List.js */"));
    }
  }]);

  return List;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.98274d7902104010eec3.hot-update.js.map