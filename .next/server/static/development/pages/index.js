module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static/development/pages/index.js": 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/EditableTitle.js":
/*!*************************************!*\
  !*** ./components/EditableTitle.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EditableTitle; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/colors */ "./helpers/colors.js");
var _jsxFileName = "/Users/noahmaizels/Desktop/trellolike/components/EditableTitle.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function EditableTitle({
  initialTitle
}) {
  const {
    0: title,
    1: setTitle
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialTitle);
  const {
    0: styles,
    1: setStyles
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    backgroundColor: _helpers_colors__WEBPACK_IMPORTED_MODULE_2__["default"].grey,
    borderColor: _helpers_colors__WEBPACK_IMPORTED_MODULE_2__["default"].grey
  });

  const onBlur = e => {
    if (e.target.value.trim() === '') setTitle('');
    setStyles({
      backgroundColor: _helpers_colors__WEBPACK_IMPORTED_MODULE_2__["default"].grey,
      borderColor: _helpers_colors__WEBPACK_IMPORTED_MODULE_2__["default"].transparent
    });
  };

  const onFocus = e => {
    setStyles({
      backgroundColor: 'white',
      borderColor: _helpers_colors__WEBPACK_IMPORTED_MODULE_2__["default"].darkBlue
    });
  };

  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["76390915", [styles.borderColor, styles.backgroundColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("input", {
    onBlur: onBlur,
    onFocus: onFocus,
    value: title,
    placeholder: "Title",
    onChange: e => setTitle(e.target.value),
    type: "text",
    name: "title",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["76390915", [styles.borderColor, styles.backgroundColor]]]) + " " + 'editable-input',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "76390915",
    dynamic: [styles.borderColor, styles.backgroundColor],
    __self: this
  }, `textarea.__jsx-style-dynamic-selector,input.__jsx-style-dynamic-selector{outline:none;padding:2px;padding-left:5px;}input.__jsx-style-dynamic-selector{border:2px solid ${styles.borderColor};border-radius:3px;width:80%;background-color:${styles.backgroundColor};font-size:1.5rem;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FobWFpemVscy9EZXNrdG9wL3RyZWxsb2xpa2UvY29tcG9uZW50cy9FZGl0YWJsZVRpdGxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdDZ0IsQUFHc0IsQUFLaUMsYUFKbEMsWUFDSyxpQkFDbkIsSUFHb0Isa0JBQ1IsVUFDb0MsOENBQzdCLGlCQUNuQiIsImZpbGUiOiIvVXNlcnMvbm9haG1haXplbHMvRGVza3RvcC90cmVsbG9saWtlL2NvbXBvbmVudHMvRWRpdGFibGVUaXRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi9oZWxwZXJzL2NvbG9ycydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdGFibGVUaXRsZSh7aW5pdGlhbFRpdGxlfSkge1xuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKGluaXRpYWxUaXRsZSlcbiAgY29uc3QgW3N0eWxlcywgc2V0U3R5bGVzXSA9IHVzZVN0YXRlKHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5ncmV5LFxuICAgIGJvcmRlckNvbG9yOiBjb2xvcnMuZ3JleSxcbiAgfSlcblxuICBjb25zdCBvbkJsdXIgPSAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC52YWx1ZS50cmltKCkgPT09ICcnKSBzZXRUaXRsZSgnJylcbiAgICBzZXRTdHlsZXMoe2JhY2tncm91bmRDb2xvcjogY29sb3JzLmdyZXksIGJvcmRlckNvbG9yOiBjb2xvcnMudHJhbnNwYXJlbnR9KVxuICB9XG5cbiAgY29uc3Qgb25Gb2N1cyA9IChlKSA9PiB7XG4gICAgc2V0U3R5bGVzKHtiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIGJvcmRlckNvbG9yOiBjb2xvcnMuZGFya0JsdWV9KVxuICB9XG4gXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICA8aW5wdXRcbiAgICAgIG9uQmx1cj17b25CbHVyfVxuICAgICAgb25Gb2N1cz17b25Gb2N1c31cbiAgICAgIGNsYXNzTmFtZT0nZWRpdGFibGUtaW5wdXQnIFxuICAgICAgdmFsdWU9e3RpdGxlfSBcbiAgICAgIHBsYWNlaG9sZGVyPSdUaXRsZSdcbiAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgIHR5cGU9J3RleHQnXG4gICAgICBuYW1lPSd0aXRsZSdcbiAgICA+IFxuICAgIDwvaW5wdXQ+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgdGV4dGFyZWEsIGlucHV0IHsgXG4gICAgICAgIG91dGxpbmU6IG5vbmU7IFxuICAgICAgICBwYWRkaW5nOiAycHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgfVxuICAgICAgaW5wdXQge1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAke3N0eWxlcy5ib3JkZXJDb2xvcn07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtzdHlsZXMuYmFja2dyb3VuZENvbG9yfTtcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICB9XG4gICAgYH08L3N0eWxlPiAgXG4gICAgPC9kaXY+XG4gICk7XG59Il19 */
/*@ sourceURL=/Users/noahmaizels/Desktop/trellolike/components/EditableTitle.js */`));
}

/***/ }),

/***/ "./components/List.js":
/*!****************************!*\
  !*** ./components/List.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return List; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _EditableTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditableTitle */ "./components/EditableTitle.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers_colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/colors */ "./helpers/colors.js");
var _jsxFileName = "/Users/noahmaizels/Desktop/trellolike/components/List.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const Editor = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(() => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./Editor */ "./components/Editor.js")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ./Editor */ "./components/Editor.js")],
    modules: ['./Editor']
  }
});
class List extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleChange", value => {
      this.setState({
        text: value
      });
    });

    _defineProperty(this, "drag", event => {
      event.dataTransfer.setData('text', event.target.id);
    });

    _defineProperty(this, "onDragOver", event => {
      event.preventDefault();
    });

    _defineProperty(this, "onDrop", event => {
      event.preventDefault();
      const sourceNodeId = event.dataTransfer.getData('text');
      const targetNodeId = event.target.closest('.list').id;
      this.props.switchLists(sourceNodeId, targetNodeId);
    });

    _defineProperty(this, "handleEllipsisClick", event => {
      if (this.props.openMenu === this.state.menuId) {
        return;
      } else {
        this.props.setOpenMenu(this.state.menuId);
      }
    });

    _defineProperty(this, "handleCloseButtonClick", event => {
      if (this.props.openMenu === this.state.menuId) {
        this.props.setOpenMenu('');
      }
    });

    this.state = {
      menuDisplay: 'hidden',
      menuId: 'm'.concat(String(Date.now()))
    };
  }

  componentDidUpdate(prevProps) {
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

  render() {
    return __jsx("div", {
      onDrop: () => this.onDrop(event),
      onDragOver: () => this.onDragOver(event),
      onDragStart: () => this.drag(event),
      draggable: "true",
      id: this.props.id,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["67594734", [_helpers_colors__WEBPACK_IMPORTED_MODULE_5__["default"].grey]]]) + " " + "list",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["67594734", [_helpers_colors__WEBPACK_IMPORTED_MODULE_5__["default"].grey]]]) + " " + 'list-heading',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, __jsx(_EditableTitle__WEBPACK_IMPORTED_MODULE_2__["default"], {
      initialTitle: this.props.initialTitle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["67594734", [_helpers_colors__WEBPACK_IMPORTED_MODULE_5__["default"].grey]]]) + " " + 'ellipsis',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      onClick: this.handleEllipsisClick,
      icon: "ellipsis-h",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["67594734", [_helpers_colors__WEBPACK_IMPORTED_MODULE_5__["default"].grey]]]) + " " + `menu ${this.state.menuDisplay}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["67594734", [_helpers_colors__WEBPACK_IMPORTED_MODULE_5__["default"].grey]]]) + " " + 'close-button',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      onClick: this.handleCloseButtonClick,
      icon: "window-close",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    })), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["67594734", [_helpers_colors__WEBPACK_IMPORTED_MODULE_5__["default"].grey]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, __jsx("button", {
      onClick: e => {
        e.preventDefault();
        this.props.deleteList(this.props.id);
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["67594734", [_helpers_colors__WEBPACK_IMPORTED_MODULE_5__["default"].grey]]]) + " " + 'delete-button',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, "Delete Note"))))), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["67594734", [_helpers_colors__WEBPACK_IMPORTED_MODULE_5__["default"].grey]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, __jsx(Editor, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "67594734",
      dynamic: [_helpers_colors__WEBPACK_IMPORTED_MODULE_5__["default"].grey],
      __self: this
    }, `.delete-button.__jsx-style-dynamic-selector{border:1px solid black;margin-left:30px;width:80px;}.close-button.__jsx-style-dynamic-selector{text-align:right;}.hidden.__jsx-style-dynamic-selector{display:none;}.menu.__jsx-style-dynamic-selector{border:1px solid black;border-radius:5px;background-color:white;height:200px;width:180px;position:absolute;z-index:10;}.ellipsis.__jsx-style-dynamic-selector{padding-right:3px;}.list-heading.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-size:1rem;}.list.__jsx-style-dynamic-selector{vertical-align:top;width:250px;border-radius:5px;padding:5px;display:inline-block;background-color:${_helpers_colors__WEBPACK_IMPORTED_MODULE_5__["default"].grey};-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;margin-right:7px;}h2.__jsx-style-dynamic-selector{font-size:18px;}input.__jsx-style-dynamic-selector{width:80%;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FobWFpemVscy9EZXNrdG9wL3RyZWxsb2xpa2UvY29tcG9uZW50cy9MaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRGb0IsQUFHb0MsQUFLTixBQUdKLEFBR1UsQUFTTixBQUdKLEFBS00sQUFVSixBQUdMLFVBQ1osR0FqQ0EsRUE4QkEsRUFqQ0EsQ0FlQSxDQVFjLElBNUJLLEFBV0MsUUFrQkEsU0E1QlAsQ0FXWSxRQWtCWCxFQTVCZCxVQTZCdUIsR0FsQlIsVUFVaUIsR0FUbEIsS0FrQmtDLE9BakI1QixrQkFDUCxXQUNiLFVBZ0JnQix3REFDRyxLQVZGLFlBV2pCLEdBVkEiLCJmaWxlIjoiL1VzZXJzL25vYWhtYWl6ZWxzL0Rlc2t0b3AvdHJlbGxvbGlrZS9jb21wb25lbnRzL0xpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgRWRpdGFibGVUaXRsZSBmcm9tICcuL0VkaXRhYmxlVGl0bGUnXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnXG5pbXBvcnQgY29sb3JzIGZyb20gJy4uL2hlbHBlcnMvY29sb3JzJ1xuXG5jb25zdCBFZGl0b3IgPSBkeW5hbWljKFxuICAoKSA9PiBpbXBvcnQoJy4vRWRpdG9yJyksXG4gIHsgc3NyOiBmYWxzZSB9XG4pXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtZW51RGlzcGxheTogJ2hpZGRlbicsXG4gICAgICBtZW51SWQ6ICdtJy5jb25jYXQoU3RyaW5nKERhdGUubm93KCkpKSxcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKXtcbiAgICBpZiAodGhpcy5wcm9wcy5vcGVuTWVudSAhPT0gcHJldlByb3BzLm9wZW5NZW51KSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5vcGVuTWVudSA9PT0gdGhpcy5zdGF0ZS5tZW51SWQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWVudURpc3BsYXk6ICcnfSlcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHttZW51RGlzcGxheTogJ2hpZGRlbid9KVxuICAgICAgfVxuICAgIH0gXG4gIH1cblxuICBoYW5kbGVDaGFuZ2UgPSAodmFsdWUpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgdGV4dDogdmFsdWUgfSlcbiAgfVxuXG4gIGRyYWcgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dCcsIGV2ZW50LnRhcmdldC5pZClcbiAgfVxuICAgXG4gIG9uRHJhZ092ZXIgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgb25Ecm9wID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBzb3VyY2VOb2RlSWQgPSBldmVudC5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgndGV4dCcpXG4gICAgY29uc3QgdGFyZ2V0Tm9kZUlkID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5saXN0JykuaWRcbiAgICB0aGlzLnByb3BzLnN3aXRjaExpc3RzKHNvdXJjZU5vZGVJZCwgdGFyZ2V0Tm9kZUlkKVxuICB9XG5cbiAgaGFuZGxlRWxsaXBzaXNDbGljayA9IChldmVudCkgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLm9wZW5NZW51ID09PSB0aGlzLnN0YXRlLm1lbnVJZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5wcm9wcy5zZXRPcGVuTWVudSh0aGlzLnN0YXRlLm1lbnVJZClcbiAgICB9XG4gIH1cblxuICBoYW5kbGVDbG9zZUJ1dHRvbkNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMub3Blbk1lbnUgPT09IHRoaXMuc3RhdGUubWVudUlkKXtcbiAgICAgIHRoaXMucHJvcHMuc2V0T3Blbk1lbnUoJycpXG4gICAgfVxuICB9XG4gIFxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBvbkRyb3A9eygpID0+IHRoaXMub25Ecm9wKGV2ZW50KX0gb25EcmFnT3Zlcj17KCkgPT4gdGhpcy5vbkRyYWdPdmVyKGV2ZW50KX0gb25EcmFnU3RhcnQ9eygpID0+IHRoaXMuZHJhZyhldmVudCl9IGRyYWdnYWJsZT0ndHJ1ZScgaWQ9e3RoaXMucHJvcHMuaWR9IGNsYXNzTmFtZT1cImxpc3RcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xpc3QtaGVhZGluZyc+XG4gICAgICAgICAgPEVkaXRhYmxlVGl0bGUgaW5pdGlhbFRpdGxlPXt0aGlzLnByb3BzLmluaXRpYWxUaXRsZX0vPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdlbGxpcHNpcyc+XG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlRWxsaXBzaXNDbGlja30gaWNvbj0nZWxsaXBzaXMtaCcgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbWVudSAke3RoaXMuc3RhdGUubWVudURpc3BsYXl9YH0+IFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2xvc2UtYnV0dG9uJz5cbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xvc2VCdXR0b25DbGlja30gIGljb249J3dpbmRvdy1jbG9zZScgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdkZWxldGUtYnV0dG9uJyBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGVsZXRlTGlzdCh0aGlzLnByb3BzLmlkKVxuICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICBEZWxldGUgTm90ZVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+ICAgICAgICBcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8RWRpdG9yIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmRlbGV0ZS1idXR0b24ge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2xvc2UtYnV0dG9uIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaGlkZGVuIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tZW51IHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDE4MHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5lbGxpcHNpcyB7XG4gICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDNweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxpc3QtaGVhZGluZyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGlzdCB7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMuZ3JleX07XG4gICAgICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogN3B4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBoMiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59Il19 */
/*@ sourceURL=/Users/noahmaizels/Desktop/trellolike/components/List.js */`));
  }

}

/***/ }),

/***/ "./components/NewList.js":
/*!*******************************!*\
  !*** ./components/NewList.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NewList; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/List */ "./components/List.js");
/* harmony import */ var _helpers_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/colors */ "./helpers/colors.js");
var _jsxFileName = "/Users/noahmaizels/Desktop/trellolike/components/NewList.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function NewList({
  addList,
  deleteList,
  switchLists,
  setOpenMenu,
  getOpenMenu,
  openMenu
}) {
  const {
    0: title,
    1: setTitle
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4107859543", [_helpers_colors__WEBPACK_IMPORTED_MODULE_3__["default"].grey]]]) + " " + 'new-list',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("form", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4107859543", [_helpers_colors__WEBPACK_IMPORTED_MODULE_3__["default"].grey]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("input", {
    value: title,
    placeholder: "Note title",
    onChange: e => setTitle(e.target.value),
    type: "text",
    name: "title",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4107859543", [_helpers_colors__WEBPACK_IMPORTED_MODULE_3__["default"].grey]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), __jsx("button", {
    onClick: e => {
      e.preventDefault();
      addList({
        setOpenMenu: setOpenMenu,
        setTitle: setTitle,
        switchLists: switchLists,
        deleteList: deleteList,
        key: Math.random(),
        id: Math.random(),
        initialTitle: title || "Title"
      });
      setTitle("");
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4107859543", [_helpers_colors__WEBPACK_IMPORTED_MODULE_3__["default"].grey]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Add note")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4107859543",
    dynamic: [_helpers_colors__WEBPACK_IMPORTED_MODULE_3__["default"].grey],
    __self: this
  }, `.new-list.__jsx-style-dynamic-selector{width:250px;background-color:${_helpers_colors__WEBPACK_IMPORTED_MODULE_3__["default"].grey};height:50px;border-radius:5px;line-height:50px;text-align:center;}input.__jsx-style-dynamic-selector{padding:5px;}button.__jsx-style-dynamic-selector{padding:5px;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FobWFpemVscy9EZXNrdG9wL3RyZWxsb2xpa2UvY29tcG9uZW50cy9OZXdMaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtDa0IsQUFHdUIsQUFRQSxBQUdBLFlBVmtDLEFBUWhELEFBR0EsOENBVmMsWUFDTSxrQkFDRCxpQkFDQyxrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL25vYWhtYWl6ZWxzL0Rlc2t0b3AvdHJlbGxvbGlrZS9jb21wb25lbnRzL05ld0xpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvTGlzdCdcbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vaGVscGVycy9jb2xvcnMnXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3TGlzdCh7YWRkTGlzdCwgZGVsZXRlTGlzdCwgc3dpdGNoTGlzdHMsIHNldE9wZW5NZW51LCBnZXRPcGVuTWVudSwgb3Blbk1lbnV9KSB7XG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoJycpXG4gIFxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSduZXctbGlzdCc+XG4gICAgICA8Zm9ybT5cbiAgICAgICAgPGlucHV0IFxuICAgICAgICAgIHZhbHVlPXt0aXRsZX0gXG4gICAgICAgICAgcGxhY2Vob2xkZXI9J05vdGUgdGl0bGUnXG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgbmFtZT0ndGl0bGUnXG4gICAgICAgID4gXG4gICAgICAgIDwvaW5wdXQ+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICBhZGRMaXN0KHsgXG4gICAgICAgICAgICBzZXRPcGVuTWVudTogc2V0T3Blbk1lbnUsXG4gICAgICAgICAgICBzZXRUaXRsZTogc2V0VGl0bGUsXG4gICAgICAgICAgICBzd2l0Y2hMaXN0czogc3dpdGNoTGlzdHMsIFxuICAgICAgICAgICAgZGVsZXRlTGlzdDogZGVsZXRlTGlzdCxcbiAgICAgICAgICAgIGtleTogTWF0aC5yYW5kb20oKSxcbiAgICAgICAgICAgIGlkOiBNYXRoLnJhbmRvbSgpLFxuICAgICAgICAgICAgaW5pdGlhbFRpdGxlOiB0aXRsZSB8fCBcIlRpdGxlXCIsfSlcbiAgICAgICAgICBzZXRUaXRsZShcIlwiKVxuICAgICAgICB9fT5cbiAgICAgICAgICBBZGQgbm90ZVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLm5ldy1saXN0IHtcbiAgICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMuZ3JleX07XG4gICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXQge1xuICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgfVxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgfVxuICAgIGB9PC9zdHlsZT4gIFxuICAgIDwvZGl2PlxuICApO1xufSJdfQ== */
/*@ sourceURL=/Users/noahmaizels/Desktop/trellolike/components/NewList.js */`));
}

/***/ }),

/***/ "./helpers/colors.js":
/*!***************************!*\
  !*** ./helpers/colors.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const colors = {
  darkBlue: 'rgb(23, 43, 77)',
  grey: '#EBECF0',
  gray: '#EBECF0',
  transparent: 'rgba(0,0,0,0)'
};
/* harmony default export */ __webpack_exports__["default"] = (colors);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_NewList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/NewList */ "./components/NewList.js");
/* harmony import */ var _components_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/List */ "./components/List.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers_colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/colors */ "./helpers/colors.js");
var _jsxFileName = "/Users/noahmaizels/Desktop/trellolike/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class Index extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "setOpenMenu", menuId => {
      this.setState({
        openMenu: menuId
      });
    });

    _defineProperty(this, "getOpenMenu", () => {
      return this.state.openMenu;
    });

    _defineProperty(this, "addList", list => {
      let newLists = this.state.lists.slice();
      newLists.push(list);
      this.setState({
        lists: newLists
      });
    });

    _defineProperty(this, "deleteList", listId => {
      let newLists = this.state.lists.slice();
      newLists = newLists.filter(list => list.id !== listId);
      this.setState({
        lists: newLists
      });
    });

    _defineProperty(this, "switchLists", (sourceId, targetId) => {
      let newLists = this.state.lists.slice();
      let sourceElement;
      let targetElement;
      newLists.forEach(list => {
        if (String(list.id) === String(sourceId)) {
          sourceElement = list;
        }

        if (String(list.id) === String(targetId)) {
          targetElement = list;
        }
      });
      newLists = newLists.map(list => {
        if (String(list.id) === String(sourceId)) {
          return targetElement;
        }

        if (String(list.id) === String(targetId)) {
          return sourceElement;
        }

        return list;
      });
      this.setState({
        lists: newLists
      });
    });

    this.state = {
      lists: [],
      openMenu: ''
    };
  }

  render() {
    return __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["96398669", [_helpers_colors__WEBPACK_IMPORTED_MODULE_5__["default"].grey]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, __jsx("title", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["96398669", [_helpers_colors__WEBPACK_IMPORTED_MODULE_5__["default"].grey]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, "TrelloLike"), __jsx("link", {
      href: "https://fonts.googleapis.com/css?family=Dosis:400,700&display=swap",
      rel: "stylesheet",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["96398669", [_helpers_colors__WEBPACK_IMPORTED_MODULE_5__["default"].grey]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    })), __jsx("header", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["96398669", [_helpers_colors__WEBPACK_IMPORTED_MODULE_5__["default"].grey]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, "ListKeeper"), __jsx("main", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["96398669", [_helpers_colors__WEBPACK_IMPORTED_MODULE_5__["default"].grey]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["96398669", [_helpers_colors__WEBPACK_IMPORTED_MODULE_5__["default"].grey]]]) + " " + 'lists-container',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, this.state.lists.map(list => {
      return __jsx(_components_List__WEBPACK_IMPORTED_MODULE_3__["default"], {
        openMenu: this.state.openMenu,
        setOpenMenu: list.setOpenMenu,
        setTitle: list.setTitle,
        switchLists: list.switchLists,
        deleteList: list.deleteList,
        key: list.key,
        id: list.id,
        initialTitle: list.initialTitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      });
    })), __jsx(_components_NewList__WEBPACK_IMPORTED_MODULE_2__["default"], {
      openMenu: this.state.openMenu,
      getOpenMenu: this.getOpenMenu,
      setOpenMenu: this.setOpenMenu,
      switchLists: this.switchLists,
      deleteList: this.deleteList,
      addList: this.addList,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "96398669",
      dynamic: [_helpers_colors__WEBPACK_IMPORTED_MODULE_5__["default"].grey],
      __self: this
    }, `main.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:15px;}.dropspace.__jsx-style-dynamic-selector{border:1px solid blue;display:inline-block;height:100px;width:100px;}.item.__jsx-style-dynamic-selector{border:1px solid red;display:inline-block;}.targets-container.__jsx-style-dynamic-selector{position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.lists-container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100vh;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}header.__jsx-style-dynamic-selector{width:100%;background-color:${_helpers_colors__WEBPACK_IMPORTED_MODULE_5__["default"].grey};}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FobWFpemVscy9EZXNrdG9wL3RyZWxsb2xpa2UvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0ZtQixBQUcwQixBQUlTLEFBTUQsQUFJSCxBQUlMLEFBS0YsV0FDbUMsT0FUakMsR0FKUSxDQU5BLG9CQU92QixDQU5lLGFBQ0QsQ0FrQmQsV0FqQkEsTUFQZSxBQWtCQSxhQWpCZixBQWtCeUIsS0FKekIsd0dBS0EiLCJmaWxlIjoiL1VzZXJzL25vYWhtYWl6ZWxzL0Rlc2t0b3AvdHJlbGxvbGlrZS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXdMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvTmV3TGlzdCdcbmltcG9ydCBMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvTGlzdCdcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgY29sb3JzIGZyb20gJy4uL2hlbHBlcnMvY29sb3JzJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBsaXN0czogW10sXG4gICAgICBvcGVuTWVudTogJycsXG4gICAgfVxuICB9XG5cbiAgc2V0T3Blbk1lbnUgPSAobWVudUlkKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3Blbk1lbnU6IG1lbnVJZH0pXG4gIH1cblxuICBnZXRPcGVuTWVudSA9ICgpID0+IHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5vcGVuTWVudVxuICB9XG4gICAgXG4gIGFkZExpc3QgPSAobGlzdCkgPT4ge1xuICAgIGxldCBuZXdMaXN0cyA9IHRoaXMuc3RhdGUubGlzdHMuc2xpY2UoKVxuICAgIG5ld0xpc3RzLnB1c2gobGlzdClcbiAgICB0aGlzLnNldFN0YXRlKHtsaXN0czogbmV3TGlzdHN9KVxuICB9XG5cbiAgZGVsZXRlTGlzdCA9IChsaXN0SWQpID0+IHtcbiAgICBsZXQgbmV3TGlzdHMgPSB0aGlzLnN0YXRlLmxpc3RzLnNsaWNlKClcbiAgICBuZXdMaXN0cyA9IG5ld0xpc3RzLmZpbHRlcihsaXN0ID0+IGxpc3QuaWQgIT09IGxpc3RJZClcbiAgICB0aGlzLnNldFN0YXRlKHtsaXN0czogbmV3TGlzdHN9KVxuICB9XG5cbiAgc3dpdGNoTGlzdHMgPSAoc291cmNlSWQsIHRhcmdldElkKSA9PiB7XG4gICAgbGV0IG5ld0xpc3RzID0gdGhpcy5zdGF0ZS5saXN0cy5zbGljZSgpXG4gICAgbGV0IHNvdXJjZUVsZW1lbnRcbiAgICBsZXQgdGFyZ2V0RWxlbWVudFxuICAgIG5ld0xpc3RzLmZvckVhY2gobGlzdCA9PiB7XG4gICAgICBpZiAoU3RyaW5nKGxpc3QuaWQpID09PSBTdHJpbmcoc291cmNlSWQpKXtcbiAgICAgICAgc291cmNlRWxlbWVudCA9IGxpc3RcbiAgICAgIH1cbiAgICAgIGlmIChTdHJpbmcobGlzdC5pZCkgPT09IFN0cmluZyh0YXJnZXRJZCkpe1xuICAgICAgICB0YXJnZXRFbGVtZW50ID0gbGlzdFxuICAgICAgfVxuICAgIH0pXG5cbiAgICBuZXdMaXN0cyA9IG5ld0xpc3RzLm1hcChsaXN0ID0+IHtcbiAgICAgIGlmIChTdHJpbmcobGlzdC5pZCkgPT09IFN0cmluZyhzb3VyY2VJZCkpe1xuICAgICAgICByZXR1cm4gdGFyZ2V0RWxlbWVudFxuICAgICAgfVxuICAgICAgaWYgKFN0cmluZyhsaXN0LmlkKSA9PT0gU3RyaW5nKHRhcmdldElkKSl7XG4gICAgICAgIHJldHVybiBzb3VyY2VFbGVtZW50XG4gICAgICB9XG4gICAgICByZXR1cm4gbGlzdFxuICAgIH0pXG4gICAgdGhpcy5zZXRTdGF0ZSh7bGlzdHM6IG5ld0xpc3RzfSlcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+VHJlbGxvTGlrZTwvdGl0bGU+XG4gICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Eb3Npczo0MDAsNzAwJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgTGlzdEtlZXBlclxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPG1haW4+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xpc3RzLWNvbnRhaW5lcic+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5saXN0cy5tYXAoKGxpc3QpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIDxMaXN0IFxuICAgICAgICAgICAgICBvcGVuTWVudT17dGhpcy5zdGF0ZS5vcGVuTWVudX1cbiAgICAgICAgICAgICAgc2V0T3Blbk1lbnU9e2xpc3Quc2V0T3Blbk1lbnV9XG4gICAgICAgICAgICAgIHNldFRpdGxlPXtsaXN0LnNldFRpdGxlfVxuICAgICAgICAgICAgICBzd2l0Y2hMaXN0cz17bGlzdC5zd2l0Y2hMaXN0c31cbiAgICAgICAgICAgICAgZGVsZXRlTGlzdD17bGlzdC5kZWxldGVMaXN0fVxuICAgICAgICAgICAgICBrZXk9e2xpc3Qua2V5fVxuICAgICAgICAgICAgICBpZD17bGlzdC5pZH1cbiAgICAgICAgICAgICAgaW5pdGlhbFRpdGxlPXtsaXN0LmluaXRpYWxUaXRsZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxOZXdMaXN0IFxuICAgICAgICAgICAgb3Blbk1lbnU9e3RoaXMuc3RhdGUub3Blbk1lbnV9XG4gICAgICAgICAgICBnZXRPcGVuTWVudT17dGhpcy5nZXRPcGVuTWVudX0gXG4gICAgICAgICAgICBzZXRPcGVuTWVudT17dGhpcy5zZXRPcGVuTWVudX0gXG4gICAgICAgICAgICBzd2l0Y2hMaXN0cz17dGhpcy5zd2l0Y2hMaXN0c30gXG4gICAgICAgICAgICBkZWxldGVMaXN0PXt0aGlzLmRlbGV0ZUxpc3R9IFxuICAgICAgICAgICAgYWRkTGlzdD17dGhpcy5hZGRMaXN0fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbWFpbj4gICBcbiAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgbWFpbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmRyb3BzcGFjZSB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLml0ZW0ge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGFyZ2V0cy1jb250YWluZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxpc3RzLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBoZWFkZXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9ycy5ncmV5fTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufSJdfQ== */
/*@ sourceURL=/Users/noahmaizels/Desktop/trellolike/pages/index.js */`));
  }

}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/noahmaizels/Desktop/trellolike/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-quill":
/*!******************************!*\
  !*** external "react-quill" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-quill");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map