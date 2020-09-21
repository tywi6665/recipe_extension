webpackHotUpdate("index.6379f788",{

/***/ "./src/options/App.js":
/*!****************************!*\
  !*** ./src/options/App.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ "./src/options/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/firebase */ "./src/utils/firebase.js");
var _jsxFileName = "C:\\Users\\Tyler Winstead\\Desktop\\Code\\recipe_extension\\src\\options\\App.js";



_utils_firebase__WEBPACK_IMPORTED_MODULE_2__["default"].firestore().collection("times").add({
  title: "Cube",
  time_seconds: 45
});

function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, "This is Firebase");
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=index.6379f788.b91762c0a489c78729d3.hot-update.js.map