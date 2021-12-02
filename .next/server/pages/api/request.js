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
eval("__webpack_require__.r(__webpack_exports__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (_req, res) => {\n  switch (_req.method) {\n    case 'POST':\n      const begin = Date.now();\n\n      try {\n        const {\n          method,\n          url,\n          json,\n          headers\n        } = _req.body;\n        const h = {\n          'Accept': 'application/json',\n          'Content-Type': 'application/json'\n        };\n        headers.forEach(header => {\n          const {\n            key,\n            value\n          } = header;\n\n          if (key.length > 0 && value.length > 0) {\n            h[key] = value;\n          }\n        });\n        const config = {\n          method: method,\n          headers: _objectSpread({}, h),\n          timeout: 3000,\n          body: JSON.stringify(json)\n        };\n        console.log(config);\n\n        if (method === \"GET\") {\n          delete config.body;\n        }\n\n        const result = await fetch(url, config);\n        const time = Date.now() - begin;\n        const {\n          status\n        } = result;\n        const response = await result.text();\n        res.status(200).json({\n          status,\n          response,\n          time\n        });\n      } catch (err) {\n        const time = Date.now() - begin;\n        res.status(500).json({\n          status: 500,\n          response: err.message,\n          time\n        });\n      }\n\n      break;\n\n    default:\n      res.status(405).end();\n      break;\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvcmVxdWVzdC50cz9lYmNjIl0sIm5hbWVzIjpbIl9yZXEiLCJyZXMiLCJtZXRob2QiLCJiZWdpbiIsIkRhdGUiLCJub3ciLCJ1cmwiLCJqc29uIiwiaGVhZGVycyIsImJvZHkiLCJoIiwiZm9yRWFjaCIsImhlYWRlciIsImtleSIsInZhbHVlIiwibGVuZ3RoIiwiY29uZmlnIiwidGltZW91dCIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb25zb2xlIiwibG9nIiwicmVzdWx0IiwiZmV0Y2giLCJ0aW1lIiwic3RhdHVzIiwicmVzcG9uc2UiLCJ0ZXh0IiwiZXJyIiwibWVzc2FnZSIsImVuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVlLHNFQUFPQSxJQUFQLEVBQTZCQyxHQUE3QixLQUFzRDtBQUNuRSxVQUFRRCxJQUFJLENBQUNFLE1BQWI7QUFDRSxTQUFLLE1BQUw7QUFDRSxZQUFNQyxLQUFLLEdBQUdDLElBQUksQ0FBQ0MsR0FBTCxFQUFkOztBQUNBLFVBQUk7QUFDRixjQUFNO0FBQUVILGdCQUFGO0FBQVVJLGFBQVY7QUFBZUMsY0FBZjtBQUFxQkM7QUFBckIsWUFBaUNSLElBQUksQ0FBQ1MsSUFBNUM7QUFDQSxjQUFNQyxDQUFNLEdBQUc7QUFDYixvQkFBVSxrQkFERztBQUViLDBCQUFnQjtBQUZILFNBQWY7QUFJQUYsZUFBTyxDQUFDRyxPQUFSLENBQWlCQyxNQUFELElBQTRDO0FBQzFELGdCQUFNO0FBQUVDLGVBQUY7QUFBT0M7QUFBUCxjQUFpQkYsTUFBdkI7O0FBQ0EsY0FBSUMsR0FBRyxDQUFDRSxNQUFKLEdBQWEsQ0FBYixJQUFrQkQsS0FBSyxDQUFDQyxNQUFOLEdBQWUsQ0FBckMsRUFBd0M7QUFDdENMLGFBQUMsQ0FBQ0csR0FBRCxDQUFELEdBQVNDLEtBQVQ7QUFDRDtBQUNGLFNBTEQ7QUFPQSxjQUFNRSxNQUFNLEdBQUc7QUFDYmQsZ0JBQU0sRUFBRUEsTUFESztBQUViTSxpQkFBTyxvQkFBT0UsQ0FBUCxDQUZNO0FBR2JPLGlCQUFPLEVBQUUsSUFISTtBQUliUixjQUFJLEVBQUVTLElBQUksQ0FBQ0MsU0FBTCxDQUFlWixJQUFmO0FBSk8sU0FBZjtBQU9BYSxlQUFPLENBQUNDLEdBQVIsQ0FBWUwsTUFBWjs7QUFDQSxZQUFJZCxNQUFNLEtBQUssS0FBZixFQUFzQjtBQUNwQixpQkFBT2MsTUFBTSxDQUFDUCxJQUFkO0FBQ0Q7O0FBR0QsY0FBTWEsTUFBTSxHQUFHLE1BQU1DLEtBQUssQ0FBQ2pCLEdBQUQsRUFBTVUsTUFBTixDQUExQjtBQUNBLGNBQU1RLElBQUksR0FBR3BCLElBQUksQ0FBQ0MsR0FBTCxLQUFhRixLQUExQjtBQUNBLGNBQU07QUFBRXNCO0FBQUYsWUFBYUgsTUFBbkI7QUFDQSxjQUFNSSxRQUFRLEdBQUcsTUFBTUosTUFBTSxDQUFDSyxJQUFQLEVBQXZCO0FBQ0ExQixXQUFHLENBQUN3QixNQUFKLENBQVcsR0FBWCxFQUFnQmxCLElBQWhCLENBQXFCO0FBQUVrQixnQkFBRjtBQUFVQyxrQkFBVjtBQUFvQkY7QUFBcEIsU0FBckI7QUFDRCxPQS9CRCxDQStCRSxPQUFPSSxHQUFQLEVBQWlCO0FBQ2pCLGNBQU1KLElBQUksR0FBR3BCLElBQUksQ0FBQ0MsR0FBTCxLQUFhRixLQUExQjtBQUNBRixXQUFHLENBQUN3QixNQUFKLENBQVcsR0FBWCxFQUFnQmxCLElBQWhCLENBQXFCO0FBQUVrQixnQkFBTSxFQUFFLEdBQVY7QUFBZUMsa0JBQVEsRUFBRUUsR0FBRyxDQUFDQyxPQUE3QjtBQUFzQ0w7QUFBdEMsU0FBckI7QUFDRDs7QUFDRDs7QUFDRjtBQUNFdkIsU0FBRyxDQUFDd0IsTUFBSixDQUFXLEdBQVgsRUFBZ0JLLEdBQWhCO0FBQ0E7QUF6Q0o7QUEyQ0QsQ0E1Q0QiLCJmaWxlIjoiLi9wYWdlcy9hcGkvcmVxdWVzdC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKF9yZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xyXG4gIHN3aXRjaCAoX3JlcS5tZXRob2QpIHtcclxuICAgIGNhc2UgJ1BPU1QnOlxyXG4gICAgICBjb25zdCBiZWdpbiA9IERhdGUubm93KClcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7IG1ldGhvZCwgdXJsLCBqc29uLCBoZWFkZXJzIH0gPSBfcmVxLmJvZHk7XHJcbiAgICAgICAgY29uc3QgaDogYW55ID0ge1xyXG4gICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGhlYWRlcnMuZm9yRWFjaCgoaGVhZGVyOiB7IGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIH0pID0+IHtcclxuICAgICAgICAgIGNvbnN0IHsga2V5LCB2YWx1ZSB9ID0gaGVhZGVyXHJcbiAgICAgICAgICBpZiAoa2V5Lmxlbmd0aCA+IDAgJiYgdmFsdWUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBoW2tleV0gPSB2YWx1ZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBjb25maWcgPSB7XHJcbiAgICAgICAgICBtZXRob2Q6IG1ldGhvZCxcclxuICAgICAgICAgIGhlYWRlcnM6IHsgLi4uaCB9LFxyXG4gICAgICAgICAgdGltZW91dDogMzAwMCxcclxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGpzb24pIGFzIGFueVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coY29uZmlnKVxyXG4gICAgICAgIGlmIChtZXRob2QgPT09IFwiR0VUXCIpIHtcclxuICAgICAgICAgIGRlbGV0ZSBjb25maWcuYm9keVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKHVybCwgY29uZmlnKVxyXG4gICAgICAgIGNvbnN0IHRpbWUgPSBEYXRlLm5vdygpIC0gYmVnaW5cclxuICAgICAgICBjb25zdCB7IHN0YXR1cyB9ID0gcmVzdWx0XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXN1bHQudGV4dCgpO1xyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3RhdHVzLCByZXNwb25zZSwgdGltZSB9KVxyXG4gICAgICB9IGNhdGNoIChlcnI6IGFueSkge1xyXG4gICAgICAgIGNvbnN0IHRpbWUgPSBEYXRlLm5vdygpIC0gYmVnaW5cclxuICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IHN0YXR1czogNTAwLCByZXNwb25zZTogZXJyLm1lc3NhZ2UsIHRpbWUgfSlcclxuICAgICAgfVxyXG4gICAgICBicmVha1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmVzLnN0YXR1cyg0MDUpLmVuZCgpXHJcbiAgICAgIGJyZWFrXHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/request.ts\n");

/***/ })

/******/ });