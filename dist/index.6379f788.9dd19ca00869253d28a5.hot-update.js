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
/* harmony import */ var _react_firebase_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-firebase/database */ "./node_modules/@react-firebase/database/dist/index.esm.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.css */ "./src/options/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/firebase */ "./src/utils/firebase.js");
var _jsxFileName = "C:\\Users\\Tyler Winstead\\Desktop\\Code\\recipe_extension\\src\\options\\App.js";




console.log(_utils_firebase__WEBPACK_IMPORTED_MODULE_3__["default"]);

function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_react_firebase_database__WEBPACK_IMPORTED_MODULE_1__["FirebaseDatabaseProvider"], Object.assign({
    firebase: firebase
  }, _utils_firebase__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, "This is Firebase"));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/utils/firebase.js":
/*!*******************************!*\
  !*** ./src/utils/firebase.js ***!
  \*******************************/
/*! exports provided: db */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "db", function() { return db; });
// Firebase Config
const config = {
  apiKey: "AIzaSyCequ3hTS8RQhCIll7Iq2phSvK2lQ6dWuk",
  authDomain: "dog-ear-recipe-extension.firebaseapp.com",
  databaseURL: "https://dog-ear-recipe-extension.firebaseio.com",
  projectId: "dog-ear-recipe-extension",
  storageBucket: "dog-ear-recipe-extension.appspot.com",
  messagingSenderId: "911429348304",
  appId: "1:911429348304:web:6688ea871ec366d760a7d5",
  measurementId: "G-Q8H50HRN8S"
};
firebase.initializeApp(config); // export const auth = firebase.auth;

const db = firebase.database();

/***/ })

})
//# sourceMappingURL=index.6379f788.9dd19ca00869253d28a5.hot-update.js.map