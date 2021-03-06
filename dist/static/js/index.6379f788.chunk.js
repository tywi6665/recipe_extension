(this["webpackJsonprecipe_extension"] = this["webpackJsonprecipe_extension"] || []).push([["index.6379f788"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/options/App.scss":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--6-oneOf-5-3!./node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./src/options/App.scss ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#options_page {\n  height: 100%;\n  margin: 1em; }\n  #options_page .card-container {\n    margin-top: 1em;\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n    grid-auto-rows: minmax(150px, auto);\n    grid-column-gap: 1em;\n    grid-row-gap: 1em;\n    justify-items: center;\n    align-items: center; }\n    #options_page .card-container .card {\n      width: 100%;\n      height: 100%;\n      border-radius: 8px;\n      box-shadow: 0px 15px 10px 2px rgba(16, 36, 94, 0.3); }\n      #options_page .card-container .card .card-top img {\n        width: 100%;\n        border-top-left-radius: 8px;\n        border-top-right-radius: 8px; }\n      #options_page .card-container .card .card-bottom {\n        padding: 0.5em; }\n        #options_page .card-container .card .card-bottom a {\n          cursor: pointer;\n          text-decoration: none;\n          position: relative;\n          width: -moz-fit-content;\n          width: fit-content;\n          display: block;\n          margin: 15px auto;\n          padding: 10px;\n          color: #000000;\n          border: 2px solid #f04a26;\n          transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1) 0s; }\n          #options_page .card-container .card .card-bottom a:hover {\n            color: #fff !important;\n            background-color: transparent; }\n          #options_page .card-container .card .card-bottom a:hover:before {\n            top: 0%;\n            bottom: auto;\n            height: 101%; }\n          #options_page .card-container .card .card-bottom a::before {\n            display: block;\n            position: absolute;\n            left: -1px;\n            bottom: -1px;\n            height: 0px;\n            width: 102%;\n            z-index: -1;\n            content: \"\";\n            color: #fff !important;\n            background: #f04a26;\n            transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1) 0s; }\n        #options_page .card-container .card .card-bottom span {\n          overflow: hidden;\n          color: #666;\n          font-size: 0.78em; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/components/Card.js":
/*!********************************!*\
  !*** ./src/components/Card.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Tyler Winstead\\Desktop\\Code\\recipe_extension\\src\\components\\Card.js";



const Card = ({
  title,
  description,
  timestamp,
  url
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-top",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://images.food52.com/0xdXYRRTPGLGTfxcHRxAkQgf7ps=/1536x1022/729016a7-afcd-49cb-a499-be9f31d6d3c0--Chicken-Cacciatore_0735_food52_mark_weinberg.jpg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-bottom",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, "Go Food52"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }, "Saved On: ", moment__WEBPACK_IMPORTED_MODULE_1___default()(timestamp).format("MMMM Do YYYY"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

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
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.scss */ "./src/options/App.scss");
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Card */ "./src/components/Card.js");
/* harmony import */ var _utils_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/firebase */ "./src/utils/firebase.js");
var _jsxFileName = "C:\\Users\\Tyler Winstead\\Desktop\\Code\\recipe_extension\\src\\options\\App.js";





function App() {
  const [recipes, setRecipes] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [sortBy, setSortBy] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(["TIME_DESC"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const unsubscribe = _utils_firebase__WEBPACK_IMPORTED_MODULE_3__["default"].firestore().collection("recipes").orderBy(sortOptions[sortBy].column, sortOptions[sortBy].direction).onSnapshot(snapshot => {
      const newRecipes = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setRecipes(newRecipes);
    });
    return () => unsubscribe();
  }, [sortBy]);
  const sortOptions = {
    "TIME_ASC": {
      column: "timestamp",
      direction: "asc"
    },
    "TIME_DESC": {
      column: "timestamp",
      direction: "desc"
    },
    "TITLE_ASC": {
      column: "title",
      direction: "asc"
    },
    "TITLE_DESC": {
      column: "title",
      direction: "desc"
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "options_page",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, "Dog-Ear"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, "Recipe Repository"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    value: sortBy,
    onChange: e => setSortBy(e.currentTarget.value),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "TIME_DESC",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, "Newest"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "TIME_ASC",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, "Oldest"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "TITLE_ASC",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }, "Title A-Z"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "TITLE_DESC",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, "Title Z-A"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, recipes.map(recipe => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: recipe.id,
    title: recipe.title,
    description: recipe.description,
    timestamp: recipe.timestamp // url={recipe.url}
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/options/App.scss":
/*!******************************!*\
  !*** ./src/options/App.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./App.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/options/App.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./App.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/options/App.scss", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./App.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/options/App.scss");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/options/index.js":
/*!******************************!*\
  !*** ./src/options/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/options/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "C:\\Users\\Tyler Winstead\\Desktop\\Code\\recipe_extension\\src\\options\\index.js";




react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }
})), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_3__["unregister"]();

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: {
      'Service-Worker': 'script'
    }
  }).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    }).catch(error => {
      console.error(error.message);
    });
  }
}

/***/ }),

/***/ "./src/utils/firebase.js":
/*!*******************************!*\
  !*** ./src/utils/firebase.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");

 // Firebase Config

const firebaseConfig = {
  apiKey: "AIzaSyD9SrA01N_4vLdkCLrddWlCGQl_ylIszaI",
  authDomain: "dog-ear-recipe-extension-4bfbf.firebaseapp.com",
  databaseURL: "https://dog-ear-recipe-extension-4bfbf.firebaseio.com",
  projectId: "dog-ear-recipe-extension-4bfbf",
  storageBucket: "dog-ear-recipe-extension-4bfbf.appspot.com",
  messagingSenderId: "147277096133",
  appId: "1:147277096133:web:6e74a347d42254b231bcac",
  measurementId: "G-5GEY75XZWH"
}; // Initialize Firebase

firebase__WEBPACK_IMPORTED_MODULE_0__["initializeApp"](firebaseConfig);
/* harmony default export */ __webpack_exports__["default"] = (firebase__WEBPACK_IMPORTED_MODULE_0__);

/***/ }),

/***/ 5:
/*!**********************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/options/index.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\Tyler Winstead\Desktop\Code\recipe_extension\node_modules\webpack\hot\dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! C:\Users\Tyler Winstead\Desktop\Code\recipe_extension\node_modules\react-dev-utils\webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! C:\Users\Tyler Winstead\Desktop\Code\recipe_extension\src\options\index.js */"./src/options/index.js");


/***/ })

},[[5,"runtime-index.6379f788",0,1,2]]]);
//# sourceMappingURL=index.6379f788.chunk.js.map