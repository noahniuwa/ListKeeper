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




var Editor = next_dynamic__WEBPACK_IMPORTED_MODULE_11___default()(function () {
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
      menuDisplay: 'hidden'
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(List, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.props.openMenu === this.props.menuId) {
        return;
      }
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
          lineNumber: 58
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-2810470222" + " " + 'list-heading',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, __jsx(_EditableTitle__WEBPACK_IMPORTED_MODULE_9__["default"], {
        initialTitle: this.props.initialTitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }), __jsx("div", {
        className: "jsx-2810470222" + " " + 'ellipsis',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeIcon"], {
        onClick: this.handleEllipsisClick,
        icon: "ellipsis-h",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }), __jsx("div", {
        className: "jsx-2810470222" + " " + "menu ".concat(this.state.menuDisplay),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-2810470222" + " " + 'close-button',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeIcon"], {
        onClick: this.handleCloseButtonClick,
        icon: "window-close",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-2810470222",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
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
          lineNumber: 68
        },
        __self: this
      }, "Delete Note"))))), __jsx("div", {
        className: "jsx-2810470222",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, __jsx(Editor, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2810470222",
        __self: this
      }, ".delete-button.jsx-2810470222{border:1px solid black;margin-left:30px;width:80px;}.close-button.jsx-2810470222{text-align:right;}.hidden.jsx-2810470222{display:none;}.menu.jsx-2810470222{border:1px solid black;border-radius:5px;background-color:white;height:200px;width:180px;position:absolute;z-index:10;}.ellipsis.jsx-2810470222{padding-right:3px;}.list-heading.jsx-2810470222{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-size:1rem;}.list.jsx-2810470222{vertical-align:top;width:250px;border-radius:5px;padding:5px;display:inline-block;background-color:#EBECF0;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;margin-right:7px;}h2.jsx-2810470222{font-size:18px;}input.jsx-2810470222{width:80%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FobWFpemVscy9EZXNrdG9wL3RyZWxsb2xpa2UvY29tcG9uZW50cy9MaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdGb0IsQUFHb0MsQUFLTixBQUdKLEFBR1UsQUFTTixBQUdKLEFBS00sQUFVSixBQUdMLFVBQ1osR0FqQ0EsRUE4QkEsRUFqQ0EsQ0FlQSxDQVFjLElBNUJLLEFBV0MsUUFrQkEsU0E1QlAsQ0FXWSxRQWtCWCxFQTVCZCxVQTZCdUIsR0FsQlIsVUFVaUIsR0FUbEIsS0FrQmEsT0FqQlAsa0JBQ1AsQUFpQkcsV0FoQmhCLDZDQWlCbUIsaUJBQ25CLFNBWGlCLGVBQ2pCIiwiZmlsZSI6Ii9Vc2Vycy9ub2FobWFpemVscy9EZXNrdG9wL3RyZWxsb2xpa2UvY29tcG9uZW50cy9MaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEVkaXRhYmxlVGl0bGUgZnJvbSAnLi9FZGl0YWJsZVRpdGxlJ1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xuXG5jb25zdCBFZGl0b3IgPSBkeW5hbWljKFxuICAoKSA9PiBpbXBvcnQoJy4vRWRpdG9yJyksXG4gIHsgc3NyOiBmYWxzZSB9XG4pXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtZW51RGlzcGxheTogJ2hpZGRlbicsXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCl7XG4gICAgaWYgKHRoaXMucHJvcHMub3Blbk1lbnUgPT09IHRoaXMucHJvcHMubWVudUlkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UgPSAodmFsdWUpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgdGV4dDogdmFsdWUgfSlcbiAgfVxuXG4gIGRyYWcgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dCcsIGV2ZW50LnRhcmdldC5pZClcbiAgfVxuICAgXG4gIG9uRHJhZ092ZXIgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgb25Ecm9wID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBzb3VyY2VOb2RlSWQgPSBldmVudC5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgndGV4dCcpXG4gICAgY29uc3QgdGFyZ2V0Tm9kZUlkID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5saXN0JykuaWRcbiAgICB0aGlzLnByb3BzLnN3aXRjaExpc3RzKHNvdXJjZU5vZGVJZCwgdGFyZ2V0Tm9kZUlkKVxuICB9XG5cbiAgaGFuZGxlRWxsaXBzaXNDbGljayA9IChldmVudCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe21lbnVEaXNwbGF5OiAnJ30pXG4gICAgdGhpcy5wcm9wcy5zZXRPcGVuTWVudSh0aGlzLnByb3BzLm1lbnVJZClcbiAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLm9wZW5NZW51KVxuICB9XG5cbiAgaGFuZGxlQ2xvc2VCdXR0b25DbGljayA9IChldmVudCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe21lbnVEaXNwbGF5OiAnaGlkZGVuJ30pXG4gIH1cbiAgXG4gIHJlbmRlcigpe1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IG9uRHJvcD17KCkgPT4gdGhpcy5vbkRyb3AoZXZlbnQpfSBvbkRyYWdPdmVyPXsoKSA9PiB0aGlzLm9uRHJhZ092ZXIoZXZlbnQpfSBvbkRyYWdTdGFydD17KCkgPT4gdGhpcy5kcmFnKGV2ZW50KX0gZHJhZ2dhYmxlPSd0cnVlJyBpZD17dGhpcy5wcm9wcy5pZH0gY2xhc3NOYW1lPVwibGlzdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGlzdC1oZWFkaW5nJz5cbiAgICAgICAgICA8RWRpdGFibGVUaXRsZSBpbml0aWFsVGl0bGU9e3RoaXMucHJvcHMuaW5pdGlhbFRpdGxlfS8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2VsbGlwc2lzJz5cbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gb25DbGljaz17dGhpcy5oYW5kbGVFbGxpcHNpc0NsaWNrfSBpY29uPSdlbGxpcHNpcy1oJyAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BtZW51ICR7dGhpcy5zdGF0ZS5tZW51RGlzcGxheX1gfT4gXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjbG9zZS1idXR0b24nPlxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gb25DbGljaz17dGhpcy5oYW5kbGVDbG9zZUJ1dHRvbkNsaWNrfSAgaWNvbj0nd2luZG93LWNsb3NlJyAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2RlbGV0ZS1idXR0b24nIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5kZWxldGVMaXN0KHRoaXMucHJvcHMuaWQpXG4gICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgIERlbGV0ZSBOb3RlXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj4gICAgICAgIFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxFZGl0b3IgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuZGVsZXRlLWJ1dHRvbiB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jbG9zZS1idXR0b24ge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5oaWRkZW4ge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1lbnUge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTgwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmVsbGlwc2lzIHtcbiAgICAgICAgICAgcGFkZGluZy1yaWdodDogM3B4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGlzdC1oZWFkaW5nIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5saXN0IHtcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUJFQ0YwO1xuICAgICAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDdweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDIge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSJdfQ== */\n/*@ sourceURL=/Users/noahmaizels/Desktop/trellolike/components/List.js */"));
    }
  }]);

  return List;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.e5c54a68ed126bd73e64.hot-update.js.map