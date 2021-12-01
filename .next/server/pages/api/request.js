module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/request.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/request.ts":
/*!******************************!*\
  !*** ./pages/api/request.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (_req, res) => {\n  switch (_req.method) {\n    case 'POST':\n      try {\n        const {\n          method,\n          url,\n          json,\n          headers\n        } = _req.body;\n        const h = {\n          'Accept': 'application/json',\n          'Content-Type': 'application/json'\n        };\n        headers.forEach(header => {\n          const {\n            key,\n            value\n          } = header;\n\n          if (key.length > 0 && value.length > 0) {\n            h[key] = value;\n          }\n        });\n        const config = {\n          method: method,\n          headers: _objectSpread({}, h),\n          body: json\n        };\n        console.log(config);\n\n        if (method) {\n          delete config.body;\n        }\n\n        const begin = Date.now();\n        const result = await fetch(url, config);\n        const end = Date.now();\n        const time = end - begin;\n        const {\n          status\n        } = result;\n        const response = await result.text();\n        res.status(200).json({\n          status,\n          response,\n          time\n        });\n      } catch (err) {\n        res.status(500).json({\n          statusCode: 500,\n          response: err.message\n        });\n      }\n\n      break;\n\n    default:\n      res.status(405).end();\n      break;\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvcmVxdWVzdC50cz9lYmNjIl0sIm5hbWVzIjpbIl9yZXEiLCJyZXMiLCJtZXRob2QiLCJ1cmwiLCJqc29uIiwiaGVhZGVycyIsImJvZHkiLCJoIiwiZm9yRWFjaCIsImhlYWRlciIsImtleSIsInZhbHVlIiwibGVuZ3RoIiwiY29uZmlnIiwiY29uc29sZSIsImxvZyIsImJlZ2luIiwiRGF0ZSIsIm5vdyIsInJlc3VsdCIsImZldGNoIiwiZW5kIiwidGltZSIsInN0YXR1cyIsInJlc3BvbnNlIiwidGV4dCIsImVyciIsInN0YXR1c0NvZGUiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRWUsc0VBQU9BLElBQVAsRUFBNkJDLEdBQTdCLEtBQXNEO0FBQ25FLFVBQVFELElBQUksQ0FBQ0UsTUFBYjtBQUNFLFNBQUssTUFBTDtBQUNFLFVBQUk7QUFDRixjQUFNO0FBQUVBLGdCQUFGO0FBQVVDLGFBQVY7QUFBZUMsY0FBZjtBQUFxQkM7QUFBckIsWUFBaUNMLElBQUksQ0FBQ00sSUFBNUM7QUFDQSxjQUFNQyxDQUFNLEdBQUc7QUFDYixvQkFBVSxrQkFERztBQUViLDBCQUFnQjtBQUZILFNBQWY7QUFJQUYsZUFBTyxDQUFDRyxPQUFSLENBQWlCQyxNQUFELElBQTRDO0FBQzFELGdCQUFNO0FBQUVDLGVBQUY7QUFBT0M7QUFBUCxjQUFpQkYsTUFBdkI7O0FBQ0EsY0FBSUMsR0FBRyxDQUFDRSxNQUFKLEdBQWEsQ0FBYixJQUFrQkQsS0FBSyxDQUFDQyxNQUFOLEdBQWUsQ0FBckMsRUFBd0M7QUFDdENMLGFBQUMsQ0FBQ0csR0FBRCxDQUFELEdBQVNDLEtBQVQ7QUFDRDtBQUNGLFNBTEQ7QUFPQSxjQUFNRSxNQUFNLEdBQUc7QUFDYlgsZ0JBQU0sRUFBRUEsTUFESztBQUViRyxpQkFBTyxvQkFBTUUsQ0FBTixDQUZNO0FBR2JELGNBQUksRUFBRUY7QUFITyxTQUFmO0FBS0FVLGVBQU8sQ0FBQ0MsR0FBUixDQUFZRixNQUFaOztBQUNBLFlBQUlYLE1BQUosRUFBWTtBQUNWLGlCQUFPVyxNQUFNLENBQUNQLElBQWQ7QUFDRDs7QUFDRCxjQUFNVSxLQUFLLEdBQUdDLElBQUksQ0FBQ0MsR0FBTCxFQUFkO0FBQ0EsY0FBTUMsTUFBTSxHQUFHLE1BQU1DLEtBQUssQ0FBQ2pCLEdBQUQsRUFBTVUsTUFBTixDQUExQjtBQUNBLGNBQU1RLEdBQUcsR0FBR0osSUFBSSxDQUFDQyxHQUFMLEVBQVo7QUFDQSxjQUFNSSxJQUFJLEdBQUdELEdBQUcsR0FBR0wsS0FBbkI7QUFDQSxjQUFNO0FBQUVPO0FBQUYsWUFBYUosTUFBbkI7QUFDQSxjQUFNSyxRQUFRLEdBQUcsTUFBTUwsTUFBTSxDQUFDTSxJQUFQLEVBQXZCO0FBQ0F4QixXQUFHLENBQUNzQixNQUFKLENBQVcsR0FBWCxFQUFnQm5CLElBQWhCLENBQXFCO0FBQUVtQixnQkFBRjtBQUFVQyxrQkFBVjtBQUFvQkY7QUFBcEIsU0FBckI7QUFDRCxPQTdCRCxDQTZCRSxPQUFPSSxHQUFQLEVBQWlCO0FBQ2pCekIsV0FBRyxDQUFDc0IsTUFBSixDQUFXLEdBQVgsRUFBZ0JuQixJQUFoQixDQUFxQjtBQUFFdUIsb0JBQVUsRUFBRSxHQUFkO0FBQW1CSCxrQkFBUSxFQUFFRSxHQUFHLENBQUNFO0FBQWpDLFNBQXJCO0FBQ0Q7O0FBQ0Q7O0FBQ0Y7QUFDRTNCLFNBQUcsQ0FBQ3NCLE1BQUosQ0FBVyxHQUFYLEVBQWdCRixHQUFoQjtBQUNBO0FBckNKO0FBdUNELENBeENEIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL3JlcXVlc3QudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChfcmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcclxuICBzd2l0Y2ggKF9yZXEubWV0aG9kKSB7XHJcbiAgICBjYXNlICdQT1NUJzpcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7IG1ldGhvZCwgdXJsLCBqc29uLCBoZWFkZXJzIH0gPSBfcmVxLmJvZHk7XHJcbiAgICAgICAgY29uc3QgaDogYW55ID0ge1xyXG4gICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGhlYWRlcnMuZm9yRWFjaCgoaGVhZGVyOiB7IGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIH0pID0+IHtcclxuICAgICAgICAgIGNvbnN0IHsga2V5LCB2YWx1ZSB9ID0gaGVhZGVyXHJcbiAgICAgICAgICBpZiAoa2V5Lmxlbmd0aCA+IDAgJiYgdmFsdWUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBoW2tleV0gPSB2YWx1ZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHtcclxuICAgICAgICAgIG1ldGhvZDogbWV0aG9kLFxyXG4gICAgICAgICAgaGVhZGVyczogey4uLmh9LFxyXG4gICAgICAgICAgYm9keToganNvblxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhjb25maWcpXHJcbiAgICAgICAgaWYgKG1ldGhvZCkge1xyXG4gICAgICAgICAgZGVsZXRlIGNvbmZpZy5ib2R5XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGJlZ2luID0gRGF0ZS5ub3coKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKHVybCwgY29uZmlnKVxyXG4gICAgICAgIGNvbnN0IGVuZCA9IERhdGUubm93KClcclxuICAgICAgICBjb25zdCB0aW1lID0gZW5kIC0gYmVnaW5cclxuICAgICAgICBjb25zdCB7IHN0YXR1cyB9ID0gcmVzdWx0XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXN1bHQudGV4dCgpO1xyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3RhdHVzLCByZXNwb25zZSwgdGltZSB9KVxyXG4gICAgICB9IGNhdGNoIChlcnI6IGFueSkge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgc3RhdHVzQ29kZTogNTAwLCByZXNwb25zZTogZXJyLm1lc3NhZ2UgfSlcclxuICAgICAgfVxyXG4gICAgICBicmVha1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmVzLnN0YXR1cyg0MDUpLmVuZCgpXHJcbiAgICAgIGJyZWFrXHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/request.ts\n");

/***/ })

/******/ });