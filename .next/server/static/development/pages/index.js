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
var _jsxFileName = "/Users/noahmaizels/Desktop/ListKeeper/components/EditableTitle.js";


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
    backgroundColor: 'rgb(245, 246, 250)',
    borderColor: _helpers_colors__WEBPACK_IMPORTED_MODULE_2__["default"].grey
  });

  const onBlur = e => {
    if (e.target.value.trim() === '') setTitle('');
    setStyles({
      backgroundColor: 'rgb(245, 246, 250)',
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3463078675", [styles.borderColor, styles.backgroundColor]]]),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3463078675", [styles.borderColor, styles.backgroundColor]]]) + " " + 'editable-input',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3463078675",
    dynamic: [styles.borderColor, styles.backgroundColor],
    __self: this
  }, `textarea.__jsx-style-dynamic-selector,input.__jsx-style-dynamic-selector{outline:none;padding:2px;padding-left:5px;}input.__jsx-style-dynamic-selector{border:2px solid ${styles.borderColor};border-radius:10px;width:80%;background-color:${styles.backgroundColor};font-size:1.5rem;margin-bottom:5px;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FobWFpemVscy9EZXNrdG9wL0xpc3RLZWVwZXIvY29tcG9uZW50cy9FZGl0YWJsZVRpdGxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdDZ0IsQUFHc0IsQUFLaUMsYUFKbEMsWUFDSyxpQkFDbkIsSUFHcUIsbUJBQ1QsVUFDb0MsOENBQzdCLGlCQUNDLGtCQUNwQiIsImZpbGUiOiIvVXNlcnMvbm9haG1haXplbHMvRGVza3RvcC9MaXN0S2VlcGVyL2NvbXBvbmVudHMvRWRpdGFibGVUaXRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi9oZWxwZXJzL2NvbG9ycydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdGFibGVUaXRsZSh7aW5pdGlhbFRpdGxlfSkge1xuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKGluaXRpYWxUaXRsZSlcbiAgY29uc3QgW3N0eWxlcywgc2V0U3R5bGVzXSA9IHVzZVN0YXRlKHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoMjQ1LCAyNDYsIDI1MCknLFxuICAgIGJvcmRlckNvbG9yOiBjb2xvcnMuZ3JleSxcbiAgfSlcblxuICBjb25zdCBvbkJsdXIgPSAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC52YWx1ZS50cmltKCkgPT09ICcnKSBzZXRUaXRsZSgnJylcbiAgICBzZXRTdHlsZXMoe2JhY2tncm91bmRDb2xvcjogJ3JnYigyNDUsIDI0NiwgMjUwKScsIGJvcmRlckNvbG9yOiBjb2xvcnMudHJhbnNwYXJlbnR9KVxuICB9XG5cbiAgY29uc3Qgb25Gb2N1cyA9IChlKSA9PiB7XG4gICAgc2V0U3R5bGVzKHtiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIGJvcmRlckNvbG9yOiBjb2xvcnMuZGFya0JsdWV9KVxuICB9XG4gXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICA8aW5wdXRcbiAgICAgIG9uQmx1cj17b25CbHVyfVxuICAgICAgb25Gb2N1cz17b25Gb2N1c31cbiAgICAgIGNsYXNzTmFtZT0nZWRpdGFibGUtaW5wdXQnIFxuICAgICAgdmFsdWU9e3RpdGxlfSBcbiAgICAgIHBsYWNlaG9sZGVyPSdUaXRsZSdcbiAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgIHR5cGU9J3RleHQnXG4gICAgICBuYW1lPSd0aXRsZSdcbiAgICA+IFxuICAgIDwvaW5wdXQ+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgdGV4dGFyZWEsIGlucHV0IHsgXG4gICAgICAgIG91dGxpbmU6IG5vbmU7IFxuICAgICAgICBwYWRkaW5nOiAycHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgfVxuICAgICAgaW5wdXQge1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAke3N0eWxlcy5ib3JkZXJDb2xvcn07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7c3R5bGVzLmJhY2tncm91bmRDb2xvcn07XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPiAgXG4gICAgPC9kaXY+XG4gICk7XG59Il19 */
/*@ sourceURL=/Users/noahmaizels/Desktop/ListKeeper/components/EditableTitle.js */`));
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
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-beautiful-dnd */ "react-beautiful-dnd");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/noahmaizels/Desktop/ListKeeper/components/List.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
    return __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_6__["Draggable"], {
      draggableId: String(this.props.id),
      index: this.props.index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, provided => __jsx("div", _extends({}, provided.draggableProps, provided.dragHandleProps, {
      ref: provided.innerRef,
      id: this.props.id,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1604877285", [_helpers_colors__WEBPACK_IMPORTED_MODULE_5__["default"].grey]]]) + " " + "list",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1604877285", [_helpers_colors__WEBPACK_IMPORTED_MODULE_5__["default"].grey]]]) + " " + 'list-heading',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, __jsx(_EditableTitle__WEBPACK_IMPORTED_MODULE_2__["default"], {
      initialTitle: this.props.initialTitle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }), __jsx("img", {
      src: "drag-handle.svg",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1604877285", [_helpers_colors__WEBPACK_IMPORTED_MODULE_5__["default"].grey]]]) + " " + 'drag-handle',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1604877285", [_helpers_colors__WEBPACK_IMPORTED_MODULE_5__["default"].grey]]]) + " " + 'ellipsis',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      onClick: this.handleEllipsisClick,
      icon: "ellipsis-h",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1604877285", [_helpers_colors__WEBPACK_IMPORTED_MODULE_5__["default"].grey]]]) + " " + `menu ${this.state.menuDisplay}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1604877285", [_helpers_colors__WEBPACK_IMPORTED_MODULE_5__["default"].grey]]]) + " " + 'close-button',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      onClick: this.handleCloseButtonClick,
      icon: "window-close",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    })), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1604877285", [_helpers_colors__WEBPACK_IMPORTED_MODULE_5__["default"].grey]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, __jsx("button", {
      onClick: e => {
        e.preventDefault();
        this.props.deleteList(this.props.id);
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1604877285", [_helpers_colors__WEBPACK_IMPORTED_MODULE_5__["default"].grey]]]) + " " + 'delete-button',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, "Delete Note"))))), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1604877285", [_helpers_colors__WEBPACK_IMPORTED_MODULE_5__["default"].grey]]]),
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
    })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1604877285",
      dynamic: [_helpers_colors__WEBPACK_IMPORTED_MODULE_5__["default"].grey],
      __self: this
    }, `.delete-button.__jsx-style-dynamic-selector{border:1px solid black;margin-left:30px;width:80px;}.drag-handle.__jsx-style-dynamic-selector{width:20px;height:20px;position:relative;-webkit-transform:translate(-20px,7px);-ms-transform:translate(-20px,7px);transform:translate(-20px,7px);}.close-button.__jsx-style-dynamic-selector{text-align:right;}.hidden.__jsx-style-dynamic-selector{display:none;}.menu.__jsx-style-dynamic-selector{border:1px solid black;border-radius:5px;background-color:white;height:200px;width:180px;position:absolute;z-index:10;}.ellipsis.__jsx-style-dynamic-selector{padding-right:3px;}.ellipsis.__jsx-style-dynamic-selector:hover{cursor:pointer;}.list-heading.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-size:1rem;}.list.__jsx-style-dynamic-selector{vertical-align:top;width:300px;border-radius:5px;padding:8px;display:inline-block;background-color:${_helpers_colors__WEBPACK_IMPORTED_MODULE_5__["default"].grey};-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;margin-right:7px;}h2.__jsx-style-dynamic-selector{font-size:18px;}input.__jsx-style-dynamic-selector{width:80%;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FobWFpemVscy9EZXNrdG9wL0xpc3RLZWVwZXIvY29tcG9uZW50cy9MaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStGd0IsQUFHd0MsQUFLWixBQU1NLEFBR0osQUFHVSxBQVNQLEFBR0QsQUFHRixBQUtNLEFBVUosQUFHTCxVQUNaLENBN0NjLEVBU2QsRUFlQSxBQWtCQSxFQXBDQSxDQWVBLENBV2MsSUFyQ0ssQUFNQyxBQVdBLFFBcUJBLFNBckNQLENBTXFCLEFBV1QsUUFxQlgsRUFyQ2QsVUFzQ3VCLEdBckJSLFVBYWlCLEdBWmxCLEtBcUJrQyxPQXBCNUIsa0JBQ1AsV0FDYixVQW1CZ0Isa0JBbENoQixzQ0FtQ21CLEtBVkYsWUFXakIsR0FWQSIsImZpbGUiOiIvVXNlcnMvbm9haG1haXplbHMvRGVza3RvcC9MaXN0S2VlcGVyL2NvbXBvbmVudHMvTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBFZGl0YWJsZVRpdGxlIGZyb20gJy4vRWRpdGFibGVUaXRsZSdcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYydcbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vaGVscGVycy9jb2xvcnMnXG5pbXBvcnQgeyBEcmFnZ2FibGUgfSBmcm9tICdyZWFjdC1iZWF1dGlmdWwtZG5kJ1xuXG5jb25zdCBFZGl0b3IgPSBkeW5hbWljKFxuICAoKSA9PiBpbXBvcnQoJy4vRWRpdG9yJyksXG4gIHsgc3NyOiBmYWxzZSB9XG4pXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtZW51RGlzcGxheTogJ2hpZGRlbicsXG4gICAgICBtZW51SWQ6ICdtJy5jb25jYXQoU3RyaW5nKERhdGUubm93KCkpKSxcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKXtcbiAgICBpZiAodGhpcy5wcm9wcy5vcGVuTWVudSAhPT0gcHJldlByb3BzLm9wZW5NZW51KSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5vcGVuTWVudSA9PT0gdGhpcy5zdGF0ZS5tZW51SWQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWVudURpc3BsYXk6ICcnfSlcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHttZW51RGlzcGxheTogJ2hpZGRlbid9KVxuICAgICAgfVxuICAgIH0gXG4gIH1cblxuICBoYW5kbGVDaGFuZ2UgPSAodmFsdWUpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgdGV4dDogdmFsdWUgfSlcbiAgfVxuXG5cbiAgaGFuZGxlRWxsaXBzaXNDbGljayA9IChldmVudCkgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLm9wZW5NZW51ID09PSB0aGlzLnN0YXRlLm1lbnVJZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5wcm9wcy5zZXRPcGVuTWVudSh0aGlzLnN0YXRlLm1lbnVJZClcbiAgICB9XG4gIH1cblxuICBoYW5kbGVDbG9zZUJ1dHRvbkNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMub3Blbk1lbnUgPT09IHRoaXMuc3RhdGUubWVudUlkKXtcbiAgICAgIHRoaXMucHJvcHMuc2V0T3Blbk1lbnUoJycpXG4gICAgfVxuICB9XG4gIFxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPERyYWdnYWJsZSBcbiAgICAgICAgZHJhZ2dhYmxlSWQ9e1N0cmluZyh0aGlzLnByb3BzLmlkKX1cbiAgICAgICAgaW5kZXg9e3RoaXMucHJvcHMuaW5kZXh9XG4gICAgICA+XG4gICAgICAgIHsocHJvdmlkZWQpID0+IChcbiAgICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICAvLyBvbkRyb3A9eygpID0+IHRoaXMub25Ecm9wKGV2ZW50KX0gXG4gICAgICAgICAgICAvLyBvbkRyYWdPdmVyPXsoKSA9PiB0aGlzLm9uRHJhZ092ZXIoZXZlbnQpfSBcbiAgICAgICAgICAgIC8vIG9uRHJhZ1N0YXJ0PXsoKSA9PiB0aGlzLmRyYWcoZXZlbnQpfSBcbiAgICAgICAgICAgIC8vIGRyYWdnYWJsZT0ndHJ1ZScgXG4gICAgICAgICAgICB7Li4ucHJvdmlkZWQuZHJhZ2dhYmxlUHJvcHN9XG4gICAgICAgICAgICB7Li4ucHJvdmlkZWQuZHJhZ0hhbmRsZVByb3BzfVxuICAgICAgICAgICAgcmVmPXtwcm92aWRlZC5pbm5lclJlZn1cbiAgICAgICAgICAgIGlkPXt0aGlzLnByb3BzLmlkfSBcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpc3RcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaXN0LWhlYWRpbmcnPlxuICAgICAgICAgICAgICA8RWRpdGFibGVUaXRsZSBpbml0aWFsVGl0bGU9e3RoaXMucHJvcHMuaW5pdGlhbFRpdGxlfS8+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdkcmFnLWhhbmRsZScgc3JjPSdkcmFnLWhhbmRsZS5zdmcnLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2VsbGlwc2lzJz5cbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlRWxsaXBzaXNDbGlja30gaWNvbj0nZWxsaXBzaXMtaCcgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG1lbnUgJHt0aGlzLnN0YXRlLm1lbnVEaXNwbGF5fWB9PiBcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjbG9zZS1idXR0b24nPlxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xvc2VCdXR0b25DbGlja30gIGljb249J3dpbmRvdy1jbG9zZScgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdkZWxldGUtYnV0dG9uJyBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5kZWxldGVMaXN0KHRoaXMucHJvcHMuaWQpXG4gICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgRGVsZXRlIE5vdGVcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICBcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxFZGl0b3IgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAuZGVsZXRlLWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmRyYWctaGFuZGxlIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0yMHB4LCA3cHgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5jbG9zZS1idXR0b24ge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5oaWRkZW4ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLm1lbnUge1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxODBweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmVsbGlwc2lzIHtcbiAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogM3B4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5lbGxpcHNpczpob3ZlciB7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5saXN0LWhlYWRpbmcge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubGlzdCB7XG4gICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMuZ3JleX07XG4gICAgICAgICAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA3cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9EcmFnZ2FibGU+XG4gICAgKTtcbiAgfVxufSJdfQ== */
/*@ sourceURL=/Users/noahmaizels/Desktop/ListKeeper/components/List.js */`)));
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
var _jsxFileName = "/Users/noahmaizels/Desktop/ListKeeper/components/NewList.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function NewList({
  addList,
  deleteList,
  setOpenMenu,

  /*switchLists,*/
  getOpenMenu,
  openMenu
}) {
  const {
    0: title,
    1: setTitle
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3447500328", [_helpers_colors__WEBPACK_IMPORTED_MODULE_3__["default"].grey]]]) + " " + 'new-list',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3447500328", [_helpers_colors__WEBPACK_IMPORTED_MODULE_3__["default"].grey]]]) + " " + 'new-list-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("input", {
    value: title,
    placeholder: "Note title",
    onChange: e => setTitle(e.target.value),
    type: "text",
    name: "title",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3447500328", [_helpers_colors__WEBPACK_IMPORTED_MODULE_3__["default"].grey]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), __jsx("div", {
    onClick: e => {
      e.preventDefault();
      addList({
        setOpenMenu: setOpenMenu,
        setTitle: setTitle,
        // switchLists: switchLists,
        deleteList: deleteList,
        key: Math.random(),
        id: Math.random(),
        initialTitle: title || "Title"
      });
      setTitle("");
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3447500328", [_helpers_colors__WEBPACK_IMPORTED_MODULE_3__["default"].grey]]]) + " " + "add-list-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Add note")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3447500328",
    dynamic: [_helpers_colors__WEBPACK_IMPORTED_MODULE_3__["default"].grey],
    __self: this
  }, `.add-list-button.__jsx-style-dynamic-selector{display:inline-block;background-color:#D9DBE2;padding:6px;border-radius:5px;}.new-list-container.__jsx-style-dynamic-selector{white-space:nowrap;border-radius:5px;width:250px;border-radius:5px;text-align:center;}input.__jsx-style-dynamic-selector{padding:5px;border:2px ${_helpers_colors__WEBPACK_IMPORTED_MODULE_3__["default"].grey} solid;border-radius:5px;margin-right:6px;}button.__jsx-style-dynamic-selector{padding:5px;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FobWFpemVscy9EZXNrdG9wL0xpc3RLZWVwZXIvY29tcG9uZW50cy9OZXdMaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJDa0IsQUFHZ0MsQUFNRixBQU9QLEFBTUEsWUFMa0MsQUFNaEQsT0Fib0IsRUFOTyxnQkFPYixTQU5BLEdBT00sU0FOQSxBQVlBLFNBTEEsU0FOcEIsQUFZbUIsU0FMbkIsUUFNQSIsImZpbGUiOiIvVXNlcnMvbm9haG1haXplbHMvRGVza3RvcC9MaXN0S2VlcGVyL2NvbXBvbmVudHMvTmV3TGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9MaXN0J1xuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi9oZWxwZXJzL2NvbG9ycydcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXdMaXN0KHtcbiAgYWRkTGlzdCwgXG4gIGRlbGV0ZUxpc3QsIFxuICBzZXRPcGVuTWVudSwgXG4gIC8qc3dpdGNoTGlzdHMsKi8gXG4gIGdldE9wZW5NZW51LCBcbiAgb3Blbk1lbnVcbn0pIHtcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZSgnJylcbiAgXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J25ldy1saXN0Jz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSduZXctbGlzdC1jb250YWluZXInPlxuICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgdmFsdWU9e3RpdGxlfSBcbiAgICAgICAgICBwbGFjZWhvbGRlcj0nTm90ZSB0aXRsZSdcbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICBuYW1lPSd0aXRsZSdcbiAgICAgICAgPiBcbiAgICAgICAgPC9pbnB1dD5cbiAgICAgICAgPGRpdiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIGFkZExpc3QoeyBcbiAgICAgICAgICAgIHNldE9wZW5NZW51OiBzZXRPcGVuTWVudSxcbiAgICAgICAgICAgIHNldFRpdGxlOiBzZXRUaXRsZSxcbiAgICAgICAgICAgIC8vIHN3aXRjaExpc3RzOiBzd2l0Y2hMaXN0cyxcbiAgICAgICAgICAgIGRlbGV0ZUxpc3Q6IGRlbGV0ZUxpc3QsXG4gICAgICAgICAgICBrZXk6IE1hdGgucmFuZG9tKCksXG4gICAgICAgICAgICBpZDogTWF0aC5yYW5kb20oKSxcbiAgICAgICAgICAgIGluaXRpYWxUaXRsZTogdGl0bGUgfHwgXCJUaXRsZVwiLH0pXG4gICAgICAgICAgc2V0VGl0bGUoXCJcIilcbiAgICAgICAgfX1cbiAgICAgICAgY2xhc3NOYW1lPVwiYWRkLWxpc3QtYnV0dG9uXCJcbiAgICAgICAgPlxuICAgICAgICAgIEFkZCBub3RlXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5hZGQtbGlzdC1idXR0b257XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNEOURCRTI7XG4gICAgICAgICAgcGFkZGluZzogNnB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgfVxuICAgICAgICAubmV3LWxpc3QtY29udGFpbmVyIHtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgIGJvcmRlcjogMnB4ICR7Y29sb3JzLmdyZXl9IHNvbGlkO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgICAgICAgfVxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgfVxuICAgIGB9PC9zdHlsZT4gIFxuICAgIDwvZGl2PlxuICApO1xufSJdfQ== */
/*@ sourceURL=/Users/noahmaizels/Desktop/ListKeeper/components/NewList.js */`));
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
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-beautiful-dnd */ "react-beautiful-dnd");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/noahmaizels/Desktop/ListKeeper/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

    _defineProperty(this, "onDragEnd", result => {
      console.log(result);
      const {
        destination,
        source,
        draggableId
      } = result;

      if (!destination) {
        return;
      }

      if (destination.droppableId === source.droppableId && destination.index === source.index) {
        return;
      }

      const newLists = Array.from(this.state.lists);
      const sourceList = newLists[source.index];
      newLists.splice(source.index, 1);
      newLists.splice(destination.index, 0, sourceList);
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
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["152300519", [_helpers_colors__WEBPACK_IMPORTED_MODULE_5__["default"].grey]]]) + " " + "app",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, __jsx("title", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["152300519", [_helpers_colors__WEBPACK_IMPORTED_MODULE_5__["default"].grey]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, "TrelloLike"), __jsx("link", {
      href: "https://fonts.googleapis.com/css?family=Dosis:400,700&display=swap",
      rel: "stylesheet",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["152300519", [_helpers_colors__WEBPACK_IMPORTED_MODULE_5__["default"].grey]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }), __jsx("script", {
      src: "/DragDropTouch.js",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["152300519", [_helpers_colors__WEBPACK_IMPORTED_MODULE_5__["default"].grey]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    })), __jsx("header", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["152300519", [_helpers_colors__WEBPACK_IMPORTED_MODULE_5__["default"].grey]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, "ListKeeper"), __jsx("main", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["152300519", [_helpers_colors__WEBPACK_IMPORTED_MODULE_5__["default"].grey]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_6__["DragDropContext"], {
      onDragEnd: this.onDragEnd,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_6__["Droppable"], {
      droppableId: "droppable-area",
      direction: "horizontal",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, provided => __jsx("div", _extends({
      ref: provided.innerRef
    }, provided.droppableProps, {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["152300519", [_helpers_colors__WEBPACK_IMPORTED_MODULE_5__["default"].grey]]]) + " " + (provided.droppableProps && provided.droppableProps.className != null && provided.droppableProps.className || 'lists-container'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }), this.state.lists.map((list, index) => {
      return __jsx(_components_List__WEBPACK_IMPORTED_MODULE_3__["default"], {
        index: index,
        openMenu: this.state.openMenu,
        setOpenMenu: list.setOpenMenu,
        setTitle: list.setTitle // switchLists={list.switchLists}
        ,
        deleteList: list.deleteList,
        key: list.key,
        id: list.id,
        initialTitle: list.initialTitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      });
    }), provided.placeholder))), __jsx(_components_NewList__WEBPACK_IMPORTED_MODULE_2__["default"], {
      openMenu: this.state.openMenu,
      getOpenMenu: this.getOpenMenu,
      setOpenMenu: this.setOpenMenu,
      switchLists: this.switchLists,
      deleteList: this.deleteList,
      addList: this.addList,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "152300519",
      dynamic: [_helpers_colors__WEBPACK_IMPORTED_MODULE_5__["default"].grey],
      __self: this
    }, `main.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding-left:20px;}.dropspace.__jsx-style-dynamic-selector{border:1px solid blue;display:inline-block;height:100px;width:100px;}.item.__jsx-style-dynamic-selector{border:1px solid red;display:inline-block;}.targets-container.__jsx-style-dynamic-selector{position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.lists-container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100vh;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}header.__jsx-style-dynamic-selector{position:fixed;height:80px;width:100%;line-height:80px;background-color:${_helpers_colors__WEBPACK_IMPORTED_MODULE_5__["default"].grey};font-size:2rem;left:0;top:0;padding-left:20px;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FobWFpemVscy9EZXNrdG9wL0xpc3RLZWVwZXIvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUltQixBQU0wQixBQUtTLEFBTUQsQUFJSCxBQUlMLEFBS0UsZUFDSCxHQVRDLEdBSlEsQ0FOQSxLQW9CVixXQUNNLElBZG5CLENBTmUsWUFxQmlDLENBcEJsQyxZQUNkLE1BUm9CLEFBbUJMLGFBQ1UsS0FsQnpCLEFBY0EsU0FZaUIsZUFDUixPQUNELE1BQ1ksa0JBQ3BCLGlEQVhBIiwiZmlsZSI6Ii9Vc2Vycy9ub2FobWFpemVscy9EZXNrdG9wL0xpc3RLZWVwZXIvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV3TGlzdCBmcm9tICcuLi9jb21wb25lbnRzL05ld0xpc3QnXG5pbXBvcnQgTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL0xpc3QnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi9oZWxwZXJzL2NvbG9ycydcbmltcG9ydCB7IERyYWdEcm9wQ29udGV4dCwgRHJvcHBhYmxlIH0gZnJvbSAncmVhY3QtYmVhdXRpZnVsLWRuZCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxpc3RzOiBbXSxcbiAgICAgIG9wZW5NZW51OiAnJyxcbiAgICB9XG4gIH1cblxuICBzZXRPcGVuTWVudSA9IChtZW51SWQpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtvcGVuTWVudTogbWVudUlkfSlcbiAgfVxuXG4gIGdldE9wZW5NZW51ID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLm9wZW5NZW51XG4gIH1cbiAgICBcbiAgYWRkTGlzdCA9IChsaXN0KSA9PiB7XG4gICAgbGV0IG5ld0xpc3RzID0gdGhpcy5zdGF0ZS5saXN0cy5zbGljZSgpXG4gICAgbmV3TGlzdHMucHVzaChsaXN0KVxuICAgIHRoaXMuc2V0U3RhdGUoe2xpc3RzOiBuZXdMaXN0c30pXG4gIH1cblxuICBkZWxldGVMaXN0ID0gKGxpc3RJZCkgPT4ge1xuICAgIGxldCBuZXdMaXN0cyA9IHRoaXMuc3RhdGUubGlzdHMuc2xpY2UoKVxuICAgIG5ld0xpc3RzID0gbmV3TGlzdHMuZmlsdGVyKGxpc3QgPT4gbGlzdC5pZCAhPT0gbGlzdElkKVxuICAgIHRoaXMuc2V0U3RhdGUoe2xpc3RzOiBuZXdMaXN0c30pXG4gIH1cblxuICAvLyBzd2l0Y2hMaXN0cyA9IChzb3VyY2VJZCwgdGFyZ2V0SWQpID0+IHtcbiAgLy8gICBsZXQgbmV3TGlzdHMgPSB0aGlzLnN0YXRlLmxpc3RzLnNsaWNlKClcbiAgLy8gICBsZXQgc291cmNlRWxlbWVudFxuICAvLyAgIGxldCB0YXJnZXRFbGVtZW50XG4gIC8vICAgbmV3TGlzdHMuZm9yRWFjaChsaXN0ID0+IHtcbiAgLy8gICAgIGlmIChTdHJpbmcobGlzdC5pZCkgPT09IFN0cmluZyhzb3VyY2VJZCkpe1xuICAvLyAgICAgICBzb3VyY2VFbGVtZW50ID0gbGlzdFxuICAvLyAgICAgfVxuICAvLyAgICAgaWYgKFN0cmluZyhsaXN0LmlkKSA9PT0gU3RyaW5nKHRhcmdldElkKSl7XG4gIC8vICAgICAgIHRhcmdldEVsZW1lbnQgPSBsaXN0XG4gIC8vICAgICB9XG4gIC8vICAgfSlcblxuICAvLyAgIG5ld0xpc3RzID0gbmV3TGlzdHMubWFwKGxpc3QgPT4ge1xuICAvLyAgICAgaWYgKFN0cmluZyhsaXN0LmlkKSA9PT0gU3RyaW5nKHNvdXJjZUlkKSl7XG4gIC8vICAgICAgIHJldHVybiB0YXJnZXRFbGVtZW50XG4gIC8vICAgICB9XG4gIC8vICAgICBpZiAoU3RyaW5nKGxpc3QuaWQpID09PSBTdHJpbmcodGFyZ2V0SWQpKXtcbiAgLy8gICAgICAgcmV0dXJuIHNvdXJjZUVsZW1lbnRcbiAgLy8gICAgIH1cbiAgLy8gICAgIHJldHVybiBsaXN0XG4gIC8vICAgfSlcbiAgLy8gICB0aGlzLnNldFN0YXRlKHtsaXN0czogbmV3TGlzdHN9KVxuICAvLyB9XG5cbiAgb25EcmFnRW5kID0gKHJlc3VsdCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHJlc3VsdClcbiAgICBjb25zdCB7IGRlc3RpbmF0aW9uLCBzb3VyY2UsIGRyYWdnYWJsZUlkIH0gPSByZXN1bHRcbiAgICBpZiAoIWRlc3RpbmF0aW9uKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYgKGRlc3RpbmF0aW9uLmRyb3BwYWJsZUlkID09PSBzb3VyY2UuZHJvcHBhYmxlSWQgJiYgZGVzdGluYXRpb24uaW5kZXggPT09IHNvdXJjZS5pbmRleCAgKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBuZXdMaXN0cyA9IEFycmF5LmZyb20odGhpcy5zdGF0ZS5saXN0cylcbiAgICBjb25zdCBzb3VyY2VMaXN0ID0gbmV3TGlzdHNbc291cmNlLmluZGV4XVxuICAgIG5ld0xpc3RzLnNwbGljZShzb3VyY2UuaW5kZXgsIDEpXG4gICAgbmV3TGlzdHMuc3BsaWNlKGRlc3RpbmF0aW9uLmluZGV4LCAwLCBzb3VyY2VMaXN0KVxuICAgIHRoaXMuc2V0U3RhdGUoe2xpc3RzOiBuZXdMaXN0c30pXG4gIH1cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHBcIj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPlRyZWxsb0xpa2U8L3RpdGxlPlxuICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9RG9zaXM6NDAwLDcwMCZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgICAgICAgICA8c2NyaXB0IHNyYz1cIi9EcmFnRHJvcFRvdWNoLmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICBMaXN0S2VlcGVyXG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8bWFpbj5cbiAgICAgICAgICA8RHJhZ0Ryb3BDb250ZXh0XG4gICAgICAgICAgICBvbkRyYWdFbmQ9e3RoaXMub25EcmFnRW5kfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxEcm9wcGFibGVcbiAgICAgICAgICAgICAgZHJvcHBhYmxlSWQ9XCJkcm9wcGFibGUtYXJlYVwiXG4gICAgICAgICAgICAgIGRpcmVjdGlvbj1cImhvcml6b250YWxcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgeyhwcm92aWRlZCkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGlzdHMtY29udGFpbmVyJ1xuICAgICAgICAgICAgICAgIHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9XG4gICAgICAgICAgICAgICAgey4uLnByb3ZpZGVkLmRyb3BwYWJsZVByb3BzfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmxpc3RzLm1hcCgobGlzdCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPExpc3QgXG4gICAgICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgICAgICAgICBvcGVuTWVudT17dGhpcy5zdGF0ZS5vcGVuTWVudX1cbiAgICAgICAgICAgICAgICAgIHNldE9wZW5NZW51PXtsaXN0LnNldE9wZW5NZW51fVxuICAgICAgICAgICAgICAgICAgc2V0VGl0bGU9e2xpc3Quc2V0VGl0bGV9XG4gICAgICAgICAgICAgICAgICAvLyBzd2l0Y2hMaXN0cz17bGlzdC5zd2l0Y2hMaXN0c31cbiAgICAgICAgICAgICAgICAgIGRlbGV0ZUxpc3Q9e2xpc3QuZGVsZXRlTGlzdH1cbiAgICAgICAgICAgICAgICAgIGtleT17bGlzdC5rZXl9XG4gICAgICAgICAgICAgICAgICBpZD17bGlzdC5pZH1cbiAgICAgICAgICAgICAgICAgIGluaXRpYWxUaXRsZT17bGlzdC5pbml0aWFsVGl0bGV9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIHtwcm92aWRlZC5wbGFjZWhvbGRlcn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvRHJvcHBhYmxlPlxuICAgICAgICAgIDwvRHJhZ0Ryb3BDb250ZXh0PlxuICAgICAgICAgIDxOZXdMaXN0IFxuICAgICAgICAgICAgb3Blbk1lbnU9e3RoaXMuc3RhdGUub3Blbk1lbnV9XG4gICAgICAgICAgICBnZXRPcGVuTWVudT17dGhpcy5nZXRPcGVuTWVudX0gXG4gICAgICAgICAgICBzZXRPcGVuTWVudT17dGhpcy5zZXRPcGVuTWVudX0gXG4gICAgICAgICAgICBzd2l0Y2hMaXN0cz17dGhpcy5zd2l0Y2hMaXN0c30gXG4gICAgICAgICAgICBkZWxldGVMaXN0PXt0aGlzLmRlbGV0ZUxpc3R9IFxuICAgICAgICAgICAgYWRkTGlzdD17dGhpcy5hZGRMaXN0fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbWFpbj4gICBcbiAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAuYXBwIHtcbiAgICAgICAgICBcbiAgICAgICAgIH1cbiAgICAgICAgICBtYWluIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICBcbiAgICAgICAgICB9XG4gICAgICAgICAgLmRyb3BzcGFjZSB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLml0ZW0ge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGFyZ2V0cy1jb250YWluZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxpc3RzLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBoZWFkZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogODBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JzLmdyZXl9O1xuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufSJdfQ== */
/*@ sourceURL=/Users/noahmaizels/Desktop/ListKeeper/pages/index.js */`));
  }

}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/noahmaizels/Desktop/ListKeeper/pages/index.js */"./pages/index.js");


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

/***/ "react-beautiful-dnd":
/*!**************************************!*\
  !*** external "react-beautiful-dnd" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-beautiful-dnd");

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