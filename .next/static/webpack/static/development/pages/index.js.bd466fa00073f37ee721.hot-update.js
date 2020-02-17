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
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_11__);







var _jsxFileName = "/Users/noahmaizels/Desktop/trellolike/components/List.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;





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
      __jsx(EditorJs, {
        data: data,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
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
          lineNumber: 53
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-2810470222" + " " + 'list-heading',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, __jsx(_EditableTitle__WEBPACK_IMPORTED_MODULE_9__["default"], {
        initialTitle: this.props.initialTitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }), __jsx("div", {
        className: "jsx-2810470222" + " " + 'ellipsis',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeIcon"], {
        onClick: this.handleEllipsisClick,
        icon: "ellipsis-h",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }), __jsx("div", {
        className: "jsx-2810470222" + " " + "menu ".concat(this.state.menuDisplay),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-2810470222" + " " + 'close-button',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeIcon"], {
        onClick: this.handleCloseButtonClick,
        icon: "window-close",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-2810470222",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
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
          lineNumber: 63
        },
        __self: this
      }, "Delete Note"))))), __jsx("div", {
        className: "jsx-2810470222",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, __jsx("div", {
        id: this.props.editorId,
        className: "jsx-2810470222",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, __jsx("p", {
        className: "jsx-2810470222",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, "Write notes here...."), __jsx("p", {
        className: "jsx-2810470222",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, __jsx("br", {
        className: "jsx-2810470222",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2810470222",
        __self: this
      }, ".delete-button.jsx-2810470222{border:1px solid black;margin-left:30px;width:80px;}.close-button.jsx-2810470222{text-align:right;}.hidden.jsx-2810470222{display:none;}.menu.jsx-2810470222{border:1px solid black;border-radius:5px;background-color:white;height:200px;width:180px;position:absolute;z-index:10;}.ellipsis.jsx-2810470222{padding-right:3px;}.list-heading.jsx-2810470222{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-size:1rem;}.list.jsx-2810470222{vertical-align:top;width:250px;border-radius:5px;padding:5px;display:inline-block;background-color:#EBECF0;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;margin-right:7px;}h2.jsx-2810470222{font-size:18px;}input.jsx-2810470222{width:80%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FobWFpemVscy9EZXNrdG9wL3RyZWxsb2xpa2UvY29tcG9uZW50cy9MaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThFb0IsQUFHb0MsQUFLTixBQUdKLEFBR1UsQUFTTixBQUdKLEFBS00sQUFVSixBQUdMLFVBQ1osR0FqQ0EsRUE4QkEsRUFqQ0EsQ0FlQSxDQVFjLElBNUJLLEFBV0MsUUFrQkEsU0E1QlAsQ0FXWSxRQWtCWCxFQTVCZCxVQTZCdUIsR0FsQlIsVUFVaUIsR0FUbEIsS0FrQmEsT0FqQlAsa0JBQ1AsQUFpQkcsV0FoQmhCLDZDQWlCbUIsaUJBQ25CLFNBWGlCLGVBQ2pCIiwiZmlsZSI6Ii9Vc2Vycy9ub2FobWFpemVscy9EZXNrdG9wL3RyZWxsb2xpa2UvY29tcG9uZW50cy9MaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEVkaXRhYmxlVGl0bGUgZnJvbSAnLi9FZGl0YWJsZVRpdGxlJ1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbWVudURpc3BsYXk6ICdoaWRkZW4nLFxuICAgICAgdGV4dDogJycsXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAvLyA8UmVhY3RRdWlsbCB2YWx1ZT17dGhpcy5zdGF0ZS50ZXh0fSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IC8+XG4gICAgPEVkaXRvckpzIGRhdGE9e2RhdGF9IC8+O1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlID0gKHZhbHVlKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRleHQ6IHZhbHVlIH0pXG4gIH1cblxuICBkcmFnID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQnLCBldmVudC50YXJnZXQuaWQpXG4gIH1cbiAgIFxuICBvbkRyYWdPdmVyID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIG9uRHJvcCA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3Qgc291cmNlTm9kZUlkID0gZXZlbnQuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3RleHQnKVxuICAgIGNvbnN0IHRhcmdldE5vZGVJZCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcubGlzdCcpLmlkXG4gICAgdGhpcy5wcm9wcy5zd2l0Y2hMaXN0cyhzb3VyY2VOb2RlSWQsIHRhcmdldE5vZGVJZClcbiAgfVxuXG4gIGhhbmRsZUVsbGlwc2lzQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHttZW51RGlzcGxheTogJyd9KVxuICAgIHRoaXMucHJvcHMuc2V0T3Blbk1lbnUodGhpcy5wcm9wcy5tZW51SWQpXG4gICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5vcGVuTWVudSlcbiAgfVxuXG4gIGhhbmRsZUNsb3NlQnV0dG9uQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHttZW51RGlzcGxheTogJ2hpZGRlbid9KVxuICB9XG4gIFxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBvbkRyb3A9eygpID0+IHRoaXMub25Ecm9wKGV2ZW50KX0gb25EcmFnT3Zlcj17KCkgPT4gdGhpcy5vbkRyYWdPdmVyKGV2ZW50KX0gb25EcmFnU3RhcnQ9eygpID0+IHRoaXMuZHJhZyhldmVudCl9IGRyYWdnYWJsZT0ndHJ1ZScgaWQ9e3RoaXMucHJvcHMuaWR9IGNsYXNzTmFtZT1cImxpc3RcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xpc3QtaGVhZGluZyc+XG4gICAgICAgICAgPEVkaXRhYmxlVGl0bGUgaW5pdGlhbFRpdGxlPXt0aGlzLnByb3BzLmluaXRpYWxUaXRsZX0vPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdlbGxpcHNpcyc+XG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlRWxsaXBzaXNDbGlja30gaWNvbj0nZWxsaXBzaXMtaCcgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbWVudSAke3RoaXMuc3RhdGUubWVudURpc3BsYXl9YH0+IFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2xvc2UtYnV0dG9uJz5cbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xvc2VCdXR0b25DbGlja30gIGljb249J3dpbmRvdy1jbG9zZScgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdkZWxldGUtYnV0dG9uJyBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGVsZXRlTGlzdCh0aGlzLnByb3BzLmlkKVxuICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICBEZWxldGUgTm90ZVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+ICAgICAgICBcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IGlkPXt0aGlzLnByb3BzLmVkaXRvcklkfT5cbiAgICAgICAgICAgIDxwPldyaXRlIG5vdGVzIGhlcmUuLi4uPC9wPlxuICAgICAgICAgICAgPHA+PGJyLz48L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmRlbGV0ZS1idXR0b24ge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2xvc2UtYnV0dG9uIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaGlkZGVuIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tZW51IHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDE4MHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5lbGxpcHNpcyB7XG4gICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDNweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxpc3QtaGVhZGluZyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGlzdCB7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VCRUNGMDtcbiAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA3cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0iXX0= */\n/*@ sourceURL=/Users/noahmaizels/Desktop/trellolike/components/List.js */"));
    }
  }]);

  return List;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/dynamic.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/dynamic.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var loadable_1 = __importDefault(__webpack_require__(/*! ./loadable */ "./node_modules/next/dist/next-server/lib/loadable.js"));

var isServerSide = false;

function noSSR(LoadableInitializer, loadableOptions) {
  // Removing webpack and modules means react-loadable won't try preloading
  delete loadableOptions.webpack;
  delete loadableOptions.modules; // This check is neccesary to prevent react-loadable from initializing on the server

  if (!isServerSide) {
    return LoadableInitializer(loadableOptions);
  }

  var Loading = loadableOptions.loading; // This will only be rendered on the server side

  return function () {
    return react_1["default"].createElement(Loading, {
      error: null,
      isLoading: true,
      pastDelay: false,
      timedOut: false
    });
  };
}

exports.noSSR = noSSR; // function dynamic<P = {}, O extends DynamicOptions>(options: O):

function dynamic(dynamicOptions, options) {
  var loadableFn = loadable_1["default"];
  var loadableOptions = {
    // A loading component is not required, so we default it
    loading: function loading(_ref) {
      var error = _ref.error,
          isLoading = _ref.isLoading,
          pastDelay = _ref.pastDelay;
      if (!pastDelay) return null;

      if (true) {
        if (isLoading) {
          return null;
        }

        if (error) {
          return react_1["default"].createElement("p", null, error.message, react_1["default"].createElement("br", null), error.stack);
        }
      }

      return null;
    }
  }; // Support for direct import(), eg: dynamic(import('../hello-world'))
  // Note that this is only kept for the edge case where someone is passing in a promise as first argument
  // The react-loadable babel plugin will turn dynamic(import('../hello-world')) into dynamic(() => import('../hello-world'))
  // To make sure we don't execute the import without rendering first

  if (dynamicOptions instanceof _Promise) {
    loadableOptions.loader = function () {
      return dynamicOptions;
    }; // Support for having import as a function, eg: dynamic(() => import('../hello-world'))

  } else if (typeof dynamicOptions === 'function') {
    loadableOptions.loader = dynamicOptions; // Support for having first argument being options, eg: dynamic({loader: import('../hello-world')})
  } else if (typeof dynamicOptions === 'object') {
    loadableOptions = _Object$assign(_Object$assign({}, loadableOptions), dynamicOptions);
  } // Support for passing options, eg: dynamic(import('../hello-world'), {loading: () => <p>Loading something</p>})


  loadableOptions = _Object$assign(_Object$assign({}, loadableOptions), options);

  if (typeof dynamicOptions === 'object' && !(dynamicOptions instanceof _Promise)) {
    // show deprecation warning for `modules` key in development
    if (true) {
      if (dynamicOptions.modules) {
        console.warn('The modules option for next/dynamic has been deprecated. See here for more info https://err.sh/zeit/next.js/next-dynamic-modules');
      }
    } // Support for `render` when using a mapping, eg: `dynamic({ modules: () => {return {HelloWorld: import('../hello-world')}, render(props, loaded) {} } })


    if (dynamicOptions.render) {
      loadableOptions.render = function (loaded, props) {
        return dynamicOptions.render(props, loaded);
      };
    } // Support for `modules` when using a mapping, eg: `dynamic({ modules: () => {return {HelloWorld: import('../hello-world')}, render(props, loaded) {} } })


    if (dynamicOptions.modules) {
      loadableFn = loadable_1["default"].Map;
      var loadModules = {};
      var modules = dynamicOptions.modules();

      _Object$keys(modules).forEach(function (key) {
        var value = modules[key];

        if (typeof value.then === 'function') {
          loadModules[key] = function () {
            return value.then(function (mod) {
              return mod["default"] || mod;
            });
          };

          return;
        }

        loadModules[key] = value;
      });

      loadableOptions.loader = loadModules;
    }
  } // coming from build/babel/plugins/react-loadable-plugin.js


  if (loadableOptions.loadableGenerated) {
    loadableOptions = _Object$assign(_Object$assign({}, loadableOptions), loadableOptions.loadableGenerated);
    delete loadableOptions.loadableGenerated;
  } // support for disabling server side rendering, eg: dynamic(import('../hello-world'), {ssr: false})


  if (typeof loadableOptions.ssr === 'boolean') {
    if (!loadableOptions.ssr) {
      delete loadableOptions.ssr;
      return noSSR(loadableFn, loadableOptions);
    }

    delete loadableOptions.ssr;
  }

  return loadableFn(loadableOptions);
}

exports["default"] = dynamic;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/loadable-context.js":
/*!********************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/loadable-context.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js")); // @ts-ignore for some reason the React types don't like this, but it's correct.


exports.LoadableContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/loadable.js":
/*!************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/loadable.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
@copyright (c) 2017-present James Kyle <me@thejameskyle.com>
 MIT License
 Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
 The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
*/
// https://github.com/jamiebuilds/react-loadable/blob/v5.5.0/src/index.js
// Modified to be compatible with webpack 4 / Next.js

var _Set = __webpack_require__(/*! @babel/runtime-corejs2/core-js/set */ "./node_modules/@babel/runtime-corejs2/core-js/set.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js");

var _Array$isArray = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");

var _getIterator = __webpack_require__(/*! @babel/runtime-corejs2/core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var use_subscription_1 = __webpack_require__(/*! use-subscription */ "./node_modules/use-subscription/index.js");

var loadable_context_1 = __webpack_require__(/*! ./loadable-context */ "./node_modules/next/dist/next-server/lib/loadable-context.js");

var ALL_INITIALIZERS = [];
var READY_INITIALIZERS = [];
var initialized = false;

function load(loader) {
  var promise = loader();
  var state = {
    loading: true,
    loaded: null,
    error: null
  };
  state.promise = promise.then(function (loaded) {
    state.loading = false;
    state.loaded = loaded;
    return loaded;
  })["catch"](function (err) {
    state.loading = false;
    state.error = err;
    throw err;
  });
  return state;
}

function loadMap(obj) {
  var state = {
    loading: false,
    loaded: {},
    error: null
  };
  var promises = [];

  try {
    _Object$keys(obj).forEach(function (key) {
      var result = load(obj[key]);

      if (!result.loading) {
        state.loaded[key] = result.loaded;
        state.error = result.error;
      } else {
        state.loading = true;
      }

      promises.push(result.promise);
      result.promise.then(function (res) {
        state.loaded[key] = res;
      })["catch"](function (err) {
        state.error = err;
      });
    });
  } catch (err) {
    state.error = err;
  }

  state.promise = _Promise.all(promises).then(function (res) {
    state.loading = false;
    return res;
  })["catch"](function (err) {
    state.loading = false;
    throw err;
  });
  return state;
}

function resolve(obj) {
  return obj && obj.__esModule ? obj["default"] : obj;
}

function render(loaded, props) {
  return react_1["default"].createElement(resolve(loaded), props);
}

function createLoadableComponent(loadFn, options) {
  var opts = _Object$assign({
    loader: null,
    loading: null,
    delay: 200,
    timeout: null,
    render: render,
    webpack: null,
    modules: null
  }, options);

  var subscription = null;

  function init() {
    if (!subscription) {
      var sub = new LoadableSubscription(loadFn, opts);
      subscription = {
        getCurrentValue: sub.getCurrentValue.bind(sub),
        subscribe: sub.subscribe.bind(sub),
        retry: sub.retry.bind(sub),
        promise: sub.promise.bind(sub)
      };
    }

    return subscription.promise();
  } // Server only


  if (false) {} // Client only


  if (!initialized && true && typeof opts.webpack === 'function') {
    var moduleIds = opts.webpack();
    READY_INITIALIZERS.push(function (ids) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = _getIterator(moduleIds), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var moduleId = _step.value;

          if (ids.indexOf(moduleId) !== -1) {
            return init();
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    });
  }

  var LoadableComponent = function LoadableComponent(props, ref) {
    init();
    var context = react_1["default"].useContext(loadable_context_1.LoadableContext);
    var state = use_subscription_1.useSubscription(subscription);
    react_1["default"].useImperativeHandle(ref, function () {
      return {
        retry: subscription.retry
      };
    });

    if (context && _Array$isArray(opts.modules)) {
      opts.modules.forEach(function (moduleName) {
        context(moduleName);
      });
    }

    if (state.loading || state.error) {
      return react_1["default"].createElement(opts.loading, {
        isLoading: state.loading,
        pastDelay: state.pastDelay,
        timedOut: state.timedOut,
        error: state.error,
        retry: subscription.retry
      });
    } else if (state.loaded) {
      return opts.render(state.loaded, props);
    } else {
      return null;
    }
  };

  LoadableComponent.preload = function () {
    return init();
  };

  LoadableComponent.displayName = 'LoadableComponent';
  return react_1["default"].forwardRef(LoadableComponent);
}

var LoadableSubscription =
/*#__PURE__*/
function () {
  function LoadableSubscription(loadFn, opts) {
    _classCallCheck(this, LoadableSubscription);

    this._loadFn = loadFn;
    this._opts = opts;
    this._callbacks = new _Set();
    this._delay = null;
    this._timeout = null;
    this.retry();
  }

  _createClass(LoadableSubscription, [{
    key: "promise",
    value: function promise() {
      return this._res.promise;
    }
  }, {
    key: "retry",
    value: function retry() {
      var _this = this;

      this._clearTimeouts();

      this._res = this._loadFn(this._opts.loader);
      this._state = {
        pastDelay: false,
        timedOut: false
      };
      var res = this._res,
          opts = this._opts;

      if (res.loading) {
        if (typeof opts.delay === 'number') {
          if (opts.delay === 0) {
            this._state.pastDelay = true;
          } else {
            this._delay = setTimeout(function () {
              _this._update({
                pastDelay: true
              });
            }, opts.delay);
          }
        }

        if (typeof opts.timeout === 'number') {
          this._timeout = setTimeout(function () {
            _this._update({
              timedOut: true
            });
          }, opts.timeout);
        }
      }

      this._res.promise.then(function () {
        _this._update();

        _this._clearTimeouts();
      }) // eslint-disable-next-line handle-callback-err
      ["catch"](function (err) {
        _this._update();

        _this._clearTimeouts();
      });

      this._update({});
    }
  }, {
    key: "_update",
    value: function _update(partial) {
      this._state = _Object$assign(_Object$assign({}, this._state), partial);

      this._callbacks.forEach(function (callback) {
        return callback();
      });
    }
  }, {
    key: "_clearTimeouts",
    value: function _clearTimeouts() {
      clearTimeout(this._delay);
      clearTimeout(this._timeout);
    }
  }, {
    key: "getCurrentValue",
    value: function getCurrentValue() {
      return _Object$assign(_Object$assign({}, this._state), {
        error: this._res.error,
        loaded: this._res.loaded,
        loading: this._res.loading
      });
    }
  }, {
    key: "subscribe",
    value: function subscribe(callback) {
      var _this2 = this;

      this._callbacks.add(callback);

      return function () {
        _this2._callbacks["delete"](callback);
      };
    }
  }]);

  return LoadableSubscription;
}();

function Loadable(opts) {
  return createLoadableComponent(load, opts);
}

function LoadableMap(opts) {
  if (typeof opts.render !== 'function') {
    throw new Error('LoadableMap requires a `render(loaded, props)` function');
  }

  return createLoadableComponent(loadMap, opts);
}

Loadable.Map = LoadableMap;

function flushInitializers(initializers, ids) {
  var promises = [];

  while (initializers.length) {
    var init = initializers.pop();
    promises.push(init(ids));
  }

  return _Promise.all(promises).then(function () {
    if (initializers.length) {
      return flushInitializers(initializers, ids);
    }
  });
}

Loadable.preloadAll = function () {
  return new _Promise(function (resolve, reject) {
    flushInitializers(ALL_INITIALIZERS).then(resolve, reject);
  });
};

Loadable.preloadReady = function () {
  var ids = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return new _Promise(function (resolve) {
    var res = function res() {
      initialized = true;
      return resolve();
    }; // We always will resolve, errors should be handled within loading UIs.


    flushInitializers(READY_INITIALIZERS, ids).then(res, res);
  });
};

if (true) {
  window.__NEXT_PRELOADREADY = Loadable.preloadReady;
}

exports["default"] = Loadable;

/***/ }),

/***/ "./node_modules/use-subscription/cjs/use-subscription.development.js":
/*!***************************************************************************!*\
  !*** ./node_modules/use-subscription/cjs/use-subscription.development.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v1.1.1
 * use-subscription.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

//
// In order to avoid removing and re-adding subscriptions each time this hook is called,
// the parameters passed to this hook should be memoized in some way–
// either by wrapping the entire params object with useMemo()
// or by wrapping the individual callbacks with useCallback().

function useSubscription(_ref) {
  var getCurrentValue = _ref.getCurrentValue,
      subscribe = _ref.subscribe;

  // Read the current value from our subscription.
  // When this value changes, we'll schedule an update with React.
  // It's important to also store the hook params so that we can check for staleness.
  // (See the comment in checkForUpdates() below for more info.)
  var _useState = react.useState(function () {
    return {
      getCurrentValue: getCurrentValue,
      subscribe: subscribe,
      value: getCurrentValue()
    };
  }),
      state = _useState[0],
      setState = _useState[1];

  var valueToReturn = state.value; // If parameters have changed since our last render, schedule an update with its current value.

  if (state.getCurrentValue !== getCurrentValue || state.subscribe !== subscribe) {
    // If the subscription has been updated, we'll schedule another update with React.
    // React will process this update immediately, so the old subscription value won't be committed.
    // It is still nice to avoid returning a mismatched value though, so let's override the return value.
    valueToReturn = getCurrentValue();
    setState({
      getCurrentValue: getCurrentValue,
      subscribe: subscribe,
      value: valueToReturn
    });
  } // Display the current value for this hook in React DevTools.


  react.useDebugValue(valueToReturn); // It is important not to subscribe while rendering because this can lead to memory leaks.
  // (Learn more at reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects)
  // Instead, we wait until the commit phase to attach our handler.
  //
  // We intentionally use a passive effect (useEffect) rather than a synchronous one (useLayoutEffect)
  // so that we don't stretch the commit phase.
  // This also has an added benefit when multiple components are subscribed to the same source:
  // It allows each of the event handlers to safely schedule work without potentially removing an another handler.
  // (Learn more at https://codesandbox.io/s/k0yvr5970o)

  react.useEffect(function () {
    var didUnsubscribe = false;

    var checkForUpdates = function () {
      // It's possible that this callback will be invoked even after being unsubscribed,
      // if it's removed as a result of a subscription event/update.
      // In this case, React will log a DEV warning about an update from an unmounted component.
      // We can avoid triggering that warning with this check.
      if (didUnsubscribe) {
        return;
      } // We use a state updater function to avoid scheduling work for a stale source.
      // However it's important to eagerly read the currently value,
      // so that all scheduled work shares the same value (in the event of multiple subscriptions).
      // This avoids visual "tearing" when a mutation happens during a (concurrent) render.


      var value = getCurrentValue();
      setState(function (prevState) {
        // Ignore values from stale sources!
        // Since we subscribe an unsubscribe in a passive effect,
        // it's possible that this callback will be invoked for a stale (previous) subscription.
        // This check avoids scheduling an update for that stale subscription.
        if (prevState.getCurrentValue !== getCurrentValue || prevState.subscribe !== subscribe) {
          return prevState;
        } // Some subscriptions will auto-invoke the handler, even if the value hasn't changed.
        // If the value hasn't changed, no update is needed.
        // Return state as-is so React can bail out and avoid an unnecessary render.


        if (prevState.value === value) {
          return prevState;
        }

        return objectAssign({}, prevState, {
          value: value
        });
      });
    };

    var unsubscribe = subscribe(checkForUpdates); // Because we're subscribing in a passive effect,
    // it's possible that an update has occurred between render and our effect handler.
    // Check for this and schedule an update if work has occurred.

    checkForUpdates();
    return function () {
      didUnsubscribe = true;
      unsubscribe();
    };
  }, [getCurrentValue, subscribe]); // Return the current value for our caller to use while rendering.

  return valueToReturn;
}

exports.useSubscription = useSubscription;
  })();
}


/***/ }),

/***/ "./node_modules/use-subscription/index.js":
/*!************************************************!*\
  !*** ./node_modules/use-subscription/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/use-subscription.development.js */ "./node_modules/use-subscription/cjs/use-subscription.development.js");
}


/***/ })

})
//# sourceMappingURL=index.js.bd466fa00073f37ee721.hot-update.js.map