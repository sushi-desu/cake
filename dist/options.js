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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/options/options.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/options/options.ts":
/*!********************************!*\
  !*** ./src/options/options.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst model_1 = __webpack_require__(/*! ../ts/model */ \"./src/ts/model.ts\");\r\nconst main_1 = __webpack_require__(/*! ../ts/main */ \"./src/ts/main.ts\");\r\nconst sidebar_1 = __webpack_require__(/*! ../ts/sidebar */ \"./src/ts/sidebar.ts\");\r\nconst model = new model_1.Model();\r\nmain_1.setMainEventListener(model);\r\nsidebar_1.setSidebarEventListener(model);\r\n\n\n//# sourceURL=webpack:///./src/options/options.ts?");

/***/ }),

/***/ "./src/ts/chromeApi.ts":
/*!*****************************!*\
  !*** ./src/ts/chromeApi.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.getLocalStorage = () => {\r\n    // TEST\r\n    return [\r\n        {\r\n            id: 'hogehoge',\r\n            name: '松尾ミユキ ミルクガラス皿 ねこ',\r\n            price: 600,\r\n            weight: 235,\r\n            rakuten_stock: 3,\r\n            makeshop_stock: 3,\r\n            jancode: \"4589533595659\",\r\n            descriptions: [{ title: \"松尾ミユキ ミルクガラス皿 ねこ\", body: \"名古屋生まれのイラストレーター松尾ミユキさんデザインの真っ白なお皿が登場しました。シンプルでかわいいデザインなので、どんなシーンでもお使いいただけます。\" }],\r\n            details: [{ title: \"商品名\", body: \"松尾ミユキ Milk Glass Dish Cat\" }, { title: \"サイズ\", body: \"直径 17.5cm・厚さ 17mm\" }]\r\n        }\r\n    ];\r\n};\r\nexports.lastSelectedId = () => {\r\n    return \"hogehoge\";\r\n};\r\n\n\n//# sourceURL=webpack:///./src/ts/chromeApi.ts?");

/***/ }),

/***/ "./src/ts/main.ts":
/*!************************!*\
  !*** ./src/ts/main.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.setMainEventListener = (model) => {\r\n    const form = document.getElementById('form');\r\n    model.dispatcher.addEventListener('selectChange', () => {\r\n        console.log('selectChange');\r\n        const item = model.getSelectedItem();\r\n        initForm(item);\r\n    });\r\n    form.addEventListener('submit', (e) => {\r\n        e.preventDefault();\r\n    });\r\n    document.getElementById('save').addEventListener('click', () => {\r\n        const data = new FormData(form);\r\n        model.updateItem(\"update\", data);\r\n        console.log('update');\r\n    });\r\n    document.getElementById('new').addEventListener('click', () => {\r\n        const data = new FormData(form);\r\n        model.updateItem(\"new\", data);\r\n    });\r\n    document.getElementById('delete').addEventListener('click', () => {\r\n        model.updateItem(\"delete\");\r\n    });\r\n    const initForm = (item) => {\r\n        return;\r\n    };\r\n};\r\n\n\n//# sourceURL=webpack:///./src/ts/main.ts?");

/***/ }),

/***/ "./src/ts/model.ts":
/*!*************************!*\
  !*** ./src/ts/model.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst chromeApi_1 = __webpack_require__(/*! ./chromeApi */ \"./src/ts/chromeApi.ts\");\r\nclass Model {\r\n    constructor() {\r\n        this.getTitleList = () => {\r\n            return this._itemList.map(item => ({ title: item.name, id: item.id }));\r\n        };\r\n        this.getSelectedItem = () => {\r\n            return this._itemList.find(item => item.id === this._id);\r\n        };\r\n        this.select = (id) => {\r\n            this._id = id;\r\n            this.dispatcher.dispatchEvent(this._selectchange);\r\n        };\r\n        this.updateItem = (type, form) => {\r\n            if (type === \"update\") {\r\n                const index = this._itemList.findIndex(item => item.id === this._id);\r\n                if (index === -1) {\r\n                    alert('no index');\r\n                }\r\n                this._itemList[index] = this.form_to_item(this._id, form);\r\n            }\r\n            else if (type === \"new\") {\r\n                this._itemList.push(this.form_to_item(this.uniqueId(), form));\r\n            }\r\n            else if (type === \"delete\") {\r\n                const index = this._itemList.findIndex(item => item.id === this._id);\r\n                if (index === -1) {\r\n                    alert('no index');\r\n                }\r\n                this._itemList.splice(index, 1);\r\n            }\r\n            this.dispatcher.dispatchEvent(this._datachange);\r\n            console.log(this._id);\r\n            console.log(this._itemList);\r\n        };\r\n        this.uniqueId = () => {\r\n            return Math.random().toString(34).slice(2);\r\n        };\r\n        this.form_to_item = (id, form) => {\r\n            return {\r\n                id: id,\r\n                name: form.get('name').toString(),\r\n                price: 0,\r\n                weight: 0,\r\n                rakuten_stock: 0,\r\n                makeshop_stock: 0,\r\n                jancode: '',\r\n                descriptions: [],\r\n                details: []\r\n            };\r\n        };\r\n        this._itemList = chromeApi_1.getLocalStorage();\r\n        this._id = chromeApi_1.lastSelectedId();\r\n        this.dispatcher = document.createElement('div');\r\n        this._datachange = new Event('dataChange');\r\n        this._selectchange = new Event('selectChange');\r\n    }\r\n}\r\nexports.Model = Model;\r\n\n\n//# sourceURL=webpack:///./src/ts/model.ts?");

/***/ }),

/***/ "./src/ts/sidebar.ts":
/*!***************************!*\
  !*** ./src/ts/sidebar.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.setSidebarEventListener = (model) => {\r\n    const itemlist = document.getElementById('itemlist');\r\n    model.dispatcher.addEventListener('dataChange', () => {\r\n        console.log('datachange');\r\n        renderItemlist();\r\n    });\r\n    itemlist.addEventListener('click', (e) => {\r\n        const target = e.target;\r\n        if (target && target instanceof HTMLLIElement) {\r\n            const id = target.getAttribute('itemid');\r\n            model.select(id);\r\n        }\r\n    });\r\n    const renderItemlist = () => {\r\n        empty(itemlist);\r\n        model.getTitleList().forEach(item => {\r\n            const li = document.createElement('li');\r\n            li.setAttribute('itemid', item.id);\r\n            li.innerText = item.title;\r\n            itemlist.appendChild(li);\r\n        });\r\n    };\r\n    const empty = (target) => {\r\n        while (target.firstChild) {\r\n            target.removeChild(target.firstChild);\r\n        }\r\n    };\r\n};\r\n\n\n//# sourceURL=webpack:///./src/ts/sidebar.ts?");

/***/ })

/******/ });