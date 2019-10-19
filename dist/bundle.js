/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Imports\nvar getUrl = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL___0___ = getUrl(__webpack_require__(/*! ../assets/fonts/FuturaBookC.ttf */ \"./src/assets/fonts/FuturaBookC.ttf\"));\nvar ___CSS_LOADER_URL___1___ = getUrl(__webpack_require__(/*! ../assets/fonts/Futurademic.otf */ \"./src/assets/fonts/Futurademic.otf\"));\nvar ___CSS_LOADER_URL___2___ = getUrl(__webpack_require__(/*! ../assets/fonts/ProximaNova-Regular.ttf */ \"./src/assets/fonts/ProximaNova-Regular.ttf\"));\nvar ___CSS_LOADER_URL___3___ = getUrl(__webpack_require__(/*! ../assets/images/repair-bg.png */ \"./src/assets/images/repair-bg.png\"));\nvar ___CSS_LOADER_URL___4___ = getUrl(__webpack_require__(/*! ../assets/images/online-control-video.png */ \"./src/assets/images/online-control-video.png\"));\nvar ___CSS_LOADER_URL___5___ = getUrl(__webpack_require__(/*! ../assets/images/realize-bg.png */ \"./src/assets/images/realize-bg.png\"));\nvar ___CSS_LOADER_URL___6___ = getUrl(__webpack_require__(/*! ../assets/images/competed-first-photo.png */ \"./src/assets/images/competed-first-photo.png\"));\nvar ___CSS_LOADER_URL___7___ = getUrl(__webpack_require__(/*! ../assets/images/competed-third-photo.png */ \"./src/assets/images/competed-third-photo.png\"));\n// Module\nexports.push([module.i, \"/* http://meyerweb.com/eric/tools/css/reset/ \\n   v2.0 | 20110126\\n   License: none (public domain)\\n*/\\nhtml,\\nbody,\\ndiv,\\nspan,\\napplet,\\nobject,\\niframe,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6,\\np,\\nblockquote,\\npre,\\na,\\nabbr,\\nacronym,\\naddress,\\nbig,\\ncite,\\ncode,\\ndel,\\ndfn,\\nem,\\nimg,\\nins,\\nkbd,\\nq,\\ns,\\nsamp,\\nsmall,\\nstrike,\\nstrong,\\nsub,\\nsup,\\ntt,\\nvar,\\nb,\\nu,\\ni,\\ncenter,\\ndl,\\ndt,\\ndd,\\nol,\\nul,\\nli,\\nfieldset,\\nform,\\nlabel,\\nlegend,\\ntable,\\ncaption,\\ntbody,\\ntfoot,\\nthead,\\ntr,\\nth,\\ntd,\\narticle,\\naside,\\ncanvas,\\ndetails,\\nembed,\\nfigure,\\nfigcaption,\\nfooter,\\nheader,\\nhgroup,\\nmenu,\\nnav,\\noutput,\\nruby,\\nsection,\\nsummary,\\ntime,\\nmark,\\naudio,\\nvideo {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline; }\\n\\n/* HTML5 display-role reset for older browsers */\\narticle,\\naside,\\ndetails,\\nfigcaption,\\nfigure,\\nfooter,\\nheader,\\nhgroup,\\nmenu,\\nnav,\\nsection {\\n  display: block; }\\n\\nbody {\\n  line-height: 1; }\\n\\nol,\\nul {\\n  list-style: none; }\\n\\nblockquote,\\nq {\\n  quotes: none; }\\n\\nblockquote:before, blockquote:after {\\n  content: '';\\n  content: none; }\\n\\nq:before, q:after {\\n  content: '';\\n  content: none; }\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0; }\\n\\n@font-face {\\n  font-family: 'FuturaBook';\\n  src: url(\" + ___CSS_LOADER_URL___0___ + \"); }\\n\\n@font-face {\\n  font-family: 'FuturaDemiC';\\n  src: url(\" + ___CSS_LOADER_URL___1___ + \"); }\\n\\n@font-face {\\n  font-family: 'Proxima Nova';\\n  src: url(\" + ___CSS_LOADER_URL___2___ + \"); }\\n\\n.button {\\n  display: flex;\\n  border-radius: 2px;\\n  justify-content: center;\\n  align-items: center;\\n  box-sizing: border-box;\\n  padding: 1em 2em;\\n  white-space: nowrap;\\n  cursor: pointer; }\\n\\n.repair {\\n  background: #131313;\\n  border: none;\\n  position: relative; }\\n\\n.repair__scroll {\\n  display: flex;\\n  background: #131313;\\n  position: absolute;\\n  width: 15.4375rem;\\n  height: 6.0625rem;\\n  left: 0;\\n  bottom: 0;\\n  align-items: center;\\n  justify-content: center;\\n  flex-direction: row; }\\n  @media (max-width: 900px) {\\n    .repair__scroll {\\n      display: none; } }\\n  .repair__scroll .text {\\n    font-family: \\\"Yeseva One\\\";\\n    font-style: normal;\\n    font-weight: normal;\\n    font-size: 0.875rem;\\n    line-height: 1.1875rem;\\n    text-transform: uppercase;\\n    color: #ffffff; }\\n    .repair__scroll .text span {\\n      padding-right: 0.75rem; }\\n\\n.header {\\n  background-color: #131313;\\n  height: 5.125rem;\\n  color: white;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  font-size: 0.875rem;\\n  line-height: 1rem;\\n  white-space: nowrap; }\\n  @media (max-width: 900px) {\\n    .header {\\n      height: 4.0625rem; } }\\n  .header .header__logo {\\n    display: flex;\\n    font-family: \\\"FuturaDemiC\\\";\\n    text-transform: uppercase;\\n    color: #e3b873;\\n    align-content: center;\\n    justify-content: center;\\n    margin-left: 4.75rem; }\\n    @media (max-width: 900px) {\\n      .header .header__logo {\\n        margin-left: 2rem; } }\\n  .header .header__nav {\\n    display: flex;\\n    flex-direction: row;\\n    flex: 1;\\n    justify-content: center;\\n    align-content: center; }\\n    .header .header__nav .nav__text {\\n      padding: 1em;\\n      font-family: \\\"FuturaBook\\\";\\n      text-transform: uppercase;\\n      display: none; }\\n      .header .header__nav .nav__text:first-of-type {\\n        color: #e3b873; }\\n      @media (min-width: 1200px) {\\n        .header .header__nav .nav__text {\\n          display: block; } }\\n  .header .header__phone {\\n    display: flex;\\n    font-family: \\\"FuturaDemiC\\\";\\n    text-align: right;\\n    text-decoration-line: underline;\\n    color: #e3b873;\\n    align-content: center;\\n    justify-content: center;\\n    margin-right: 2em; }\\n    @media (max-width: 900px) {\\n      .header .header__phone {\\n        color: white;\\n        text-decoration-line: none; } }\\n  .header .header__button {\\n    background: #e3b873;\\n    box-shadow: 0px 5px 15px rgba(227, 184, 115, 0.2);\\n    margin-right: 4.75rem; }\\n    .header .header__button span {\\n      font-family: \\\"FuturaDemiC\\\";\\n      font-size: 0.8125rem;\\n      line-height: 0.9375rem;\\n      text-align: center;\\n      text-transform: uppercase;\\n      color: #ffffff; }\\n    @media (max-width: 900px) {\\n      .header .header__button {\\n        display: none; } }\\n\\n.turkney {\\n  position: relative;\\n  height: calc(100vh - 82px);\\n  background: #131313;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center; }\\n  @media (max-width: 900px) {\\n    .turkney {\\n      height: calc(100vh - 26.0625rem); } }\\n\\n.turkney__image {\\n  width: 100%;\\n  height: 100%;\\n  background: url(\" + ___CSS_LOADER_URL___3___ + \");\\n  background-size: cover;\\n  background-position: center;\\n  position: absolute;\\n  opacity: 0.3;\\n  display: flex;\\n  align-items: center; }\\n\\n.turkney__instagram {\\n  position: absolute;\\n  display: flex;\\n  left: 0;\\n  bottom: 0;\\n  top: 0;\\n  width: 4.75rem;\\n  background: #131313;\\n  justify-content: center;\\n  align-items: center;\\n  align-content: center; }\\n  @media (max-width: 900px) {\\n    .turkney__instagram {\\n      display: none; } }\\n  .turkney__instagram .text {\\n    font-family: \\\"FuturaDemiC\\\";\\n    font-size: 0.875rem;\\n    line-height: 1rem;\\n    text-align: center;\\n    color: #e3b873;\\n    transform: rotate(90deg);\\n    text-transform: uppercase; }\\n\\n.turkney__info {\\n  position: relative;\\n  display: flex;\\n  max-width: 32.5rem;\\n  flex-direction: column;\\n  margin-left: calc(2 * 4.75rem); }\\n  @media (max-width: 900px) {\\n    .turkney__info {\\n      margin: 0 18px; } }\\n  .turkney__info .heading {\\n    font-family: \\\"Yeseva One\\\";\\n    font-style: normal;\\n    font-weight: normal;\\n    font-size: 2.5rem;\\n    line-height: 3.3125rem;\\n    text-transform: uppercase;\\n    color: #ffffff;\\n    padding-bottom: 1.0625rem; }\\n    @media (max-width: 900px) {\\n      .turkney__info .heading {\\n        font-size: 2.2rem; } }\\n    .turkney__info .heading span {\\n      color: #e3b873; }\\n  .turkney__info .text {\\n    font-family: \\\"FuturaBook\\\";\\n    font-size: 1.375rem;\\n    line-height: 1.875rem;\\n    max-width: 32.5rem;\\n    color: #ffffff; }\\n    @media (max-width: 900px) {\\n      .turkney__info .text {\\n        font-size: 1.675rem; } }\\n  .turkney__info .buttons {\\n    display: flex;\\n    flex-direction: row;\\n    margin-top: 2rem; }\\n    @media (max-width: 900px) {\\n      .turkney__info .buttons {\\n        flex-direction: column; } }\\n    .turkney__info .buttons .button-cost {\\n      flex: 1;\\n      background: #e3b873;\\n      box-shadow: 0px 5px 15px rgba(227, 184, 115, 0.3);\\n      margin-right: 2rem; }\\n      @media (max-width: 900px) {\\n        .turkney__info .buttons .button-cost {\\n          margin-right: 0;\\n          margin-bottom: 2rem; } }\\n    .turkney__info .buttons .button-submit {\\n      flex: 1;\\n      border: 1px solid #ffffff; }\\n    .turkney__info .buttons span {\\n      font-family: \\\"FuturaDemiC\\\";\\n      font-size: 0.8125rem;\\n      line-height: 15px;\\n      text-align: center;\\n      color: #ffffff; }\\n      @media (max-width: 900px) {\\n        .turkney__info .buttons span {\\n          font-size: 1.0125rem; } }\\n\\n.online-control {\\n  background-color: white; }\\n  @media (max-width: 900px) {\\n    .online-control {\\n      background: #131313; } }\\n  .online-control .online-control__logo {\\n    display: flex;\\n    background: #131313;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: center; }\\n    .online-control .online-control__logo .logo__text {\\n      font-family: \\\"Yeseva One\\\";\\n      font-style: normal;\\n      font-weight: normal;\\n      font-size: 20px;\\n      line-height: 28px;\\n      text-align: center;\\n      text-transform: uppercase;\\n      color: #FFFFFF; }\\n  .online-control .online-control__video {\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    background: linear-gradient(180deg, #131313 50%, white 50%);\\n    padding: 2rem;\\n    margin-bottom: 3.75rem; }\\n    @media (max-width: 900px) {\\n      .online-control .online-control__video {\\n        background: #131313; } }\\n    .online-control .online-control__video .video__container {\\n      position: relative;\\n      height: 27.125rem;\\n      width: 51.0625rem;\\n      background: #131313;\\n      box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.15); }\\n      .online-control .online-control__video .video__container .video {\\n        height: 100%;\\n        width: 100%;\\n        background: url(\" + ___CSS_LOADER_URL___4___ + \");\\n        background-size: cover;\\n        background-position: center;\\n        opacity: 0.2; }\\n  .online-control .online-control__description {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: center;\\n    background: white;\\n    width: 42.4rem;\\n    margin: 0 auto; }\\n    @media (max-width: 900px) {\\n      .online-control .online-control__description {\\n        background: #131313;\\n        width: 30.4rem; } }\\n    .online-control .online-control__description .description__line {\\n      display: flex;\\n      border-radius: 30px;\\n      background: #E3B873;\\n      height: 0.0938rem;\\n      width: 3.4375rem;\\n      margin-bottom: 2.1875rem; }\\n    .online-control .online-control__description .description__text {\\n      display: flex;\\n      font-family: 'FuturaBook';\\n      font-size: 1.25rem;\\n      line-height: 2.125rem;\\n      text-align: center;\\n      color: #363636;\\n      margin-bottom: 5.75rem; }\\n      @media (max-width: 900px) {\\n        .online-control .online-control__description .description__text {\\n          color: #FFFFFF; } }\\n  .online-control .online-control__form {\\n    display: flex;\\n    align-items: center;\\n    justify-content: center; }\\n    .online-control .online-control__form form {\\n      display: grid;\\n      grid-template-areas: \\\"form-name form-phone submit\\\" \\\"checkbox checkbox checkbox\\\";\\n      grid-template-columns: 35% 35% 30%;\\n      margin-bottom: 6.25rem;\\n      width: 770px; }\\n      @media (max-width: 900px) {\\n        .online-control .online-control__form form {\\n          grid-template-areas: 'form-name' 'form-phone' 'checkbox' 'submit';\\n          grid-template-columns: 100%;\\n          margin-bottom: -1.75rem; } }\\n      .online-control .online-control__form form .form {\\n        display: flex;\\n        flex-direction: column; }\\n        .online-control .online-control__form form .form input {\\n          background-color: transparent;\\n          border: none;\\n          border-bottom: 1px solid rgba(54, 54, 54, 0.5);\\n          padding-bottom: 0.625rem; }\\n          .online-control .online-control__form form .form input:focus::-webkit-input-placeholder {\\n            color: transparent; }\\n          .online-control .online-control__form form .form input::placeholder {\\n            color: #131313; }\\n          @media (max-width: 900px) {\\n            .online-control .online-control__form form .form input {\\n              color: white;\\n              border-bottom: 1px solid white; }\\n              .online-control .online-control__form form .form input::placeholder {\\n                color: white; } }\\n        .online-control .online-control__form form .form .label {\\n          font-family: 'FuturaBook';\\n          font-size: 0.9375rem;\\n          line-height: 1.25rem;\\n          color: rgba(54, 54, 54, 0.5); }\\n          @media (max-width: 900px) {\\n            .online-control .online-control__form form .form .label {\\n              color: rgba(255, 255, 255, 0.5); } }\\n      .online-control .online-control__form form .form__name {\\n        grid-area: form-name;\\n        margin-top: 18px;\\n        margin-right: 49px; }\\n        @media (max-width: 900px) {\\n          .online-control .online-control__form form .form__name {\\n            margin-left: 18px;\\n            margin-right: 18px; } }\\n      .online-control .online-control__form form .form__phone {\\n        grid-area: form-phone;\\n        margin-top: 18px;\\n        margin-right: 49px; }\\n        @media (max-width: 900px) {\\n          .online-control .online-control__form form .form__phone {\\n            margin-left: 18px;\\n            margin-right: 18px; } }\\n      .online-control .online-control__form form .form__button {\\n        grid-area: submit;\\n        margin-top: 14px; }\\n        @media (max-width: 900px) {\\n          .online-control .online-control__form form .form__button {\\n            margin-left: 18px;\\n            margin-right: 18px; } }\\n        .online-control .online-control__form form .form__button .form__submit {\\n          background: #e3b873;\\n          box-shadow: 0px 5px 15px rgba(227, 184, 115, 0.2);\\n          border: none;\\n          width: 100%;\\n          font-family: 'FuturaDemiC';\\n          font-size: 0.9375rem;\\n          line-height: 1.625rem;\\n          text-align: center;\\n          text-transform: uppercase;\\n          color: #FFFFFF; }\\n          @media (max-width: 900px) {\\n            .online-control .online-control__form form .form__button .form__submit {\\n              margin-top: 3.875rem; } }\\n      .online-control .online-control__form form .form__checkbox {\\n        grid-area: checkbox;\\n        display: flex;\\n        align-items: center;\\n        justify-content: center;\\n        margin-top: 30px; }\\n        .online-control .online-control__form form .form__checkbox .checkbox {\\n          background: #E3B873;\\n          border-radius: 1px;\\n          width: 18px;\\n          height: 18px; }\\n        .online-control .online-control__form form .form__checkbox .label {\\n          font-family: 'FuturaBook';\\n          font-size: 1rem;\\n          line-height: 1.375rem;\\n          color: #181818;\\n          position: relative; }\\n          @media (max-width: 900px) {\\n            .online-control .online-control__form form .form__checkbox .label {\\n              color: white; } }\\n\\n.types {\\n  margin-bottom: 311px;\\n  background-color: white; }\\n  .types .types__logo {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: center;\\n    margin-bottom: 31px; }\\n    @media (max-width: 900px) {\\n      .types .types__logo {\\n        margin-top: 60px; } }\\n  .types .types__repairs {\\n    display: flex;\\n    flex-wrap: wrap;\\n    background: white;\\n    justify-content: center; }\\n    .types .types__repairs span {\\n      font-family: 'Yeseva One';\\n      font-size: 1.125rem;\\n      line-height: 1.5625rem;\\n      color: #363636; }\\n    .types .types__repairs .info {\\n      position: absolute;\\n      left: 2.1875rem;\\n      top: 18.375rem;\\n      width: 20.625rem;\\n      height: 17.875rem;\\n      background: #FFFFFF;\\n      box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.03);\\n      font-family: 'FuturaBook';\\n      color: #959595; }\\n      @media (max-width: 900px) {\\n        .types .types__repairs .info {\\n          left: -1px; } }\\n      .types .types__repairs .info .list {\\n        margin-top: 25px;\\n        margin-left: 34px;\\n        line-height: 1.875rem; }\\n      .types .types__repairs .info .button {\\n        position: absolute;\\n        top: 16.25rem;\\n        width: 14.25rem;\\n        height: 3.375rem;\\n        background: #E3B873;\\n        box-shadow: 5px 5px 10px rgba(227, 184, 115, 0.3);\\n        font-family: 'Yeseva One';\\n        font-size: 1.125rem;\\n        line-height: 1.5625rem;\\n        text-transform: uppercase;\\n        color: #FFFFFF; }\\n    .types .types__repairs .first,\\n    .types .types__repairs .second,\\n    .types .types__repairs .third {\\n      height: 38.1875rem;\\n      margin: 0px 10px 60px 10px;\\n      position: relative; }\\n      @media (max-width: 900px) {\\n        .types .types__repairs .first,\\n        .types .types__repairs .second,\\n        .types .types__repairs .third {\\n          margin: 0px 18px 60px 18px; } }\\n    .types .types__repairs .first img,\\n    .types .types__repairs .second img,\\n    .types .types__repairs .third img {\\n      width: 100%; }\\n\\n.pluses {\\n  height: 860px;\\n  background-color: white;\\n  display: flex; }\\n  .pluses .pluses__circle {\\n    background: url(/src/assets/images/pluses-bg.png);\\n    height: 650px;\\n    flex: 1; }\\n  .pluses .pluses__form {\\n    background-color: #131313;\\n    height: 650px;\\n    flex: 1; }\\n\\n.realize {\\n  height: 1020px;\\n  background: white; }\\n  .realize .realize__styles {\\n    background: url(\" + ___CSS_LOADER_URL___5___ + \");\\n    height: 865px;\\n    width: 100%;\\n    background-size: cover;\\n    display: flex; }\\n    .realize .realize__styles--text {\\n      display: flex;\\n      flex-direction: column;\\n      margin-top: 137px;\\n      margin-left: 99px; }\\n      .realize .realize__styles--text .text__header {\\n        font-family: 'Yeseva One';\\n        font-style: normal;\\n        font-weight: normal;\\n        font-size: 27px;\\n        line-height: 37px;\\n        text-transform: uppercase;\\n        color: #E3B873;\\n        margin-bottom: 2.9375rem; }\\n      .realize .realize__styles--text .text__list ul {\\n        font-family: 'Proxima Nova';\\n        font-size: 20px;\\n        line-height: 26.5px;\\n        color: white;\\n        margin-bottom: 1.3625rem; }\\n        .realize .realize__styles--text .text__list ul:first-of-type {\\n          color: #E3B873;\\n          text-decoration: underline; }\\n    .realize .realize__styles--photos {\\n      display: flex; }\\n      .realize .realize__styles--photosline1 {\\n        display: flex;\\n        flex-direction: column; }\\n\\n.design {\\n  height: 1000px;\\n  background-color: white; }\\n  .design .design__logo {\\n    display: flex;\\n    align-content: center;\\n    justify-content: center; }\\n\\n.steps {\\n  height: 770px;\\n  background-color: #131313;\\n  display: flex; }\\n  .steps .steps__text {\\n    flex: 1;\\n    background: red; }\\n  .steps .steps__numbers {\\n    flex: 1;\\n    display: flex;\\n    flex-direction: column; }\\n    .steps .steps__numbers .steps {\\n      flex: 1; }\\n    .steps .steps__numbers .photo {\\n      flex: 1;\\n      background: url(/src/assets/images/steps-photo.png);\\n      background-size: cover; }\\n\\n.team {\\n  height: 1000px;\\n  background-color: white; }\\n\\n.competed {\\n  background-color: #131313;\\n  display: flex;\\n  flex-direction: column; }\\n  .competed .competed__nav {\\n    display: flex;\\n    justify-content: flex-end;\\n    flex-direction: row;\\n    margin-right: 10.6875rem;\\n    margin-top: 59px; }\\n    .competed .competed__nav .nav__text {\\n      font-family: \\\"Yeseva One\\\";\\n      font-style: normal;\\n      font-weight: normal;\\n      font-size: 0.875rem;\\n      text-transform: uppercase;\\n      color: rgba(255, 255, 255, 0.3);\\n      padding-right: 3rem; }\\n      .competed .competed__nav .nav__text:first-of-type {\\n        color: #E3B873;\\n        text-decoration-line: underline; }\\n    @media (max-width: 900px) {\\n      .competed .competed__nav {\\n        display: none; } }\\n  .competed .completed__container {\\n    display: grid;\\n    grid-template-areas: \\\"top-text image\\\" \\\"bottom-text image\\\";\\n    grid-template-columns: 40% 60%;\\n    margin-top: 45px; }\\n    @media (max-width: 900px) {\\n      .competed .completed__container {\\n        grid-template-areas: \\\"top-text\\\" \\\"image\\\" \\\"bottom-text\\\";\\n        grid-template-columns: 100%; } }\\n    .competed .completed__container span {\\n      color: #E3B873;\\n      font-family: 'Yeseva One';\\n      font-size: 1.125rem;\\n      line-height: 2.8125rem;\\n      text-transform: uppercase; }\\n    .competed .completed__container .completed__text {\\n      grid-area: top-text;\\n      display: flex;\\n      flex-direction: column;\\n      margin-left: 102px; }\\n      @media (max-width: 900px) {\\n        .competed .completed__container .completed__text {\\n          align-items: center;\\n          text-align: center;\\n          margin: 0 18px; } }\\n      .competed .completed__container .completed__text .completed__header {\\n        display: flex;\\n        flex-direction: row;\\n        margin-bottom: 2rem; }\\n        .competed .completed__container .completed__text .completed__header .header__name {\\n          font-family: 'Yeseva One';\\n          white-space: normal;\\n          font-size: 1.6875rem;\\n          line-height: 2.3125rem;\\n          letter-spacing: -0.07em;\\n          text-transform: uppercase;\\n          color: #E3B873; }\\n      .competed .completed__container .completed__text .completed__benefit {\\n        font-family: 'FuturaBook';\\n        font-size: 1.125rem;\\n        line-height: 1.8125rem;\\n        margin-bottom: 3rem;\\n        color: white; }\\n    .competed .completed__container .completed__apartment {\\n      grid-area: bottom-text;\\n      display: flex;\\n      flex-direction: column;\\n      font-family: 'FuturaBook';\\n      font-size: 0.9375rem;\\n      line-height: 1.25rem;\\n      margin-bottom: 3rem;\\n      margin-left: 102px; }\\n      @media (max-width: 900px) {\\n        .competed .completed__container .completed__apartment {\\n          margin: 36px 18px 57px 18px;\\n          font-size: 1.125rem; } }\\n      .competed .completed__container .completed__apartment .apartments {\\n        display: flex;\\n        flex-direction: row;\\n        color: white;\\n        margin-bottom: 27px; }\\n        .competed .completed__container .completed__apartment .apartments .apartment__one {\\n          display: flex;\\n          flex-direction: column; }\\n        .competed .completed__container .completed__apartment .apartments .apartment__two {\\n          display: flex;\\n          flex-direction: column;\\n          margin-left: 7.25rem; }\\n          @media (max-width: 900px) {\\n            .competed .completed__container .completed__apartment .apartments .apartment__two {\\n              margin-left: 6.25rem; } }\\n      .competed .completed__container .completed__apartment .completed__repair {\\n        display: flex;\\n        flex-direction: row;\\n        font-family: 'FuturaBook';\\n        line-height: 1.25rem;\\n        margin-bottom: 3rem;\\n        color: white;\\n        margin-bottom: 64px; }\\n        @media (max-width: 900px) {\\n          .competed .completed__container .completed__apartment .completed__repair {\\n            margin: 0; } }\\n        .competed .completed__container .completed__apartment .completed__repair .repair__one {\\n          display: flex;\\n          flex-direction: column; }\\n        .competed .completed__container .completed__apartment .completed__repair .repair__two {\\n          display: flex;\\n          flex-direction: column;\\n          margin-left: 5rem; }\\n  .competed .description__arrows {\\n    display: flex;\\n    flex-direction: row;\\n    align-items: center; }\\n    .competed .description__arrows .arrows__left {\\n      margin-right: 2.5rem; }\\n    .competed .description__arrows .arrows__dot {\\n      margin-right: 2.5rem;\\n      border-radius: 30px;\\n      height: 10.1px;\\n      width: 16px;\\n      background: rgba(255, 255, 255, 0.3); }\\n      .competed .description__arrows .arrows__dot:first-of-type {\\n        background: #e3b873; }\\n    @media (max-width: 900px) {\\n      .competed .description__arrows {\\n        display: none; } }\\n\\n.competed__photos {\\n  grid-area: image;\\n  display: flex;\\n  overflow: hidden;\\n  color: white;\\n  margin-left: 50px; }\\n  @media (max-width: 900px) {\\n    .competed__photos {\\n      margin: 0 18px;\\n      display: flex;\\n      justify-content: center; } }\\n  .competed__photos .competed__images {\\n    display: flex;\\n    height: 30.1875rem;\\n    flex-direction: row;\\n    overflow: hidden; }\\n    .competed__photos .competed__images .images {\\n      width: 42.4375rem;\\n      height: 100%; }\\n    .competed__photos .competed__images .images__first-photo {\\n      background: url(\" + ___CSS_LOADER_URL___6___ + \");\\n      flex-shrink: 0; }\\n      @media (max-width: 900px) {\\n        .competed__photos .competed__images .images__first-photo {\\n          display: none; } }\\n    .competed__photos .competed__images .images__second-photo {\\n      background: url(\" + ___CSS_LOADER_URL___7___ + \");\\n      margin-left: 1.25rem;\\n      flex-shrink: 0; }\\n      @media (max-width: 900px) {\\n        .competed__photos .competed__images .images__second-photo {\\n          margin-left: 0; } }\\n\\nhtml {\\n  font-size: 16px; }\\n  @media (max-width: 900px) {\\n    html {\\n      font-size: 12px; } }\\n\\n.logo__text {\\n  font-family: \\\"Yeseva One\\\";\\n  font-style: normal;\\n  font-weight: normal;\\n  font-size: 20px;\\n  line-height: 28px;\\n  text-align: center;\\n  text-transform: uppercase;\\n  margin-bottom: 12px; }\\n\\n.button {\\n  display: flex;\\n  border-radius: 2px;\\n  justify-content: center;\\n  align-items: center;\\n  box-sizing: border-box;\\n  padding: 1em 2em;\\n  white-space: nowrap;\\n  cursor: pointer; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/styles/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \"{\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      // eslint-disable-next-line prefer-destructuring\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = modules[_i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = \"(\".concat(item[2], \") and (\").concat(mediaQuery, \")\");\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, needQuotes) {\n  // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n  url = url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar stylesInDom = {};\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nfunction listToStyles(list, options) {\n  var styles = [];\n  var newStyles = {};\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var css = item[1];\n    var media = item[2];\n    var sourceMap = item[3];\n    var part = {\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    };\n\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = {\n        id: id,\n        parts: [part]\n      });\n    } else {\n      newStyles[id].parts.push(part);\n    }\n  }\n\n  return styles;\n}\n\nfunction addStylesToDom(styles, options) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i];\n    var domStyle = stylesInDom[item.id];\n    var j = 0;\n\n    if (domStyle) {\n      domStyle.refs++;\n\n      for (; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j]);\n      }\n\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j], options));\n      }\n    } else {\n      var parts = [];\n\n      for (; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j], options));\n      }\n\n      stylesInDom[item.id] = {\n        id: item.id,\n        refs: 1,\n        parts: parts\n      };\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n\n  if (typeof options.attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      options.attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(options.attributes).forEach(function (key) {\n    style.setAttribute(key, options.attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  var styles = listToStyles(list, options);\n  addStylesToDom(styles, options);\n  return function update(newList) {\n    var mayRemove = [];\n\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i];\n      var domStyle = stylesInDom[item.id];\n\n      if (domStyle) {\n        domStyle.refs--;\n        mayRemove.push(domStyle);\n      }\n    }\n\n    if (newList) {\n      var newStyles = listToStyles(newList, options);\n      addStylesToDom(newStyles, options);\n    }\n\n    for (var _i = 0; _i < mayRemove.length; _i++) {\n      var _domStyle = mayRemove[_i];\n\n      if (_domStyle.refs === 0) {\n        for (var j = 0; j < _domStyle.parts.length; j++) {\n          _domStyle.parts[j]();\n        }\n\n        delete stylesInDom[_domStyle.id];\n      }\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/assets/fonts/FuturaBookC.ttf":
/*!******************************************!*\
  !*** ./src/assets/fonts/FuturaBookC.ttf ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"0da80852c99513566f212e4dda89d2c3.ttf\";\n\n//# sourceURL=webpack:///./src/assets/fonts/FuturaBookC.ttf?");

/***/ }),

/***/ "./src/assets/fonts/Futurademic.otf":
/*!******************************************!*\
  !*** ./src/assets/fonts/Futurademic.otf ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"fa7892c650d8237d04043b1cf3cdc49f.otf\";\n\n//# sourceURL=webpack:///./src/assets/fonts/Futurademic.otf?");

/***/ }),

/***/ "./src/assets/fonts/ProximaNova-Regular.ttf":
/*!**************************************************!*\
  !*** ./src/assets/fonts/ProximaNova-Regular.ttf ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"ef005f1764e8c54150d749d8909840d2.ttf\";\n\n//# sourceURL=webpack:///./src/assets/fonts/ProximaNova-Regular.ttf?");

/***/ }),

/***/ "./src/assets/images/competed-first-photo.png":
/*!****************************************************!*\
  !*** ./src/assets/images/competed-first-photo.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"ac70fb557ef8691dbfac6034de6bb0bc.png\";\n\n//# sourceURL=webpack:///./src/assets/images/competed-first-photo.png?");

/***/ }),

/***/ "./src/assets/images/competed-third-photo.png":
/*!****************************************************!*\
  !*** ./src/assets/images/competed-third-photo.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"165a1743603a50d5fdb1a202f76f0b58.png\";\n\n//# sourceURL=webpack:///./src/assets/images/competed-third-photo.png?");

/***/ }),

/***/ "./src/assets/images/online-control-video.png":
/*!****************************************************!*\
  !*** ./src/assets/images/online-control-video.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"54da060d56c4ccdefd7efc99a806103c.png\";\n\n//# sourceURL=webpack:///./src/assets/images/online-control-video.png?");

/***/ }),

/***/ "./src/assets/images/realize-bg.png":
/*!******************************************!*\
  !*** ./src/assets/images/realize-bg.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"03092c70befb86794ddc021cae745247.png\";\n\n//# sourceURL=webpack:///./src/assets/images/realize-bg.png?");

/***/ }),

/***/ "./src/assets/images/repair-bg.png":
/*!*****************************************!*\
  !*** ./src/assets/images/repair-bg.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"75e380ca9814f061c481e46ff4ebac93.png\";\n\n//# sourceURL=webpack:///./src/assets/images/repair-bg.png?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ \"./src/styles/style.scss\");\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/styles/style.scss?");

/***/ })

/******/ });