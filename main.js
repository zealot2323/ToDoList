/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n    color:azure;\n    font-family: 'Space Grotesk', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    margin: 0px;\n}\n\nbody {\n    display: flex;\n    background-color: rgb(22, 29, 29);\n}\n\nheader {\n    width: 300px;\n    flex-shrink: 0;\n    background-color: rgb(22, 29, 29);\n    padding: 50px;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    gap: 25px;\n\n}\n\nbutton {\n    border-radius: 50px;\n    border: 1px solid greenyellow;\n    padding: 15px;\n    background-color: rgb(38, 49, 49);\n}\n\nbutton:hover {\n    background-color: rgb(22, 29, 29);\n}\n\n.task > button {\n    border: none;\n    background-color: transparent;\n}\n\n.task > button:hover {\n    background-color: rgb(208, 237, 212);\n}\n\n.project {\n    display: flex;\n    gap: 5px;\n    margin: 5px;\n    align-items: center;\n    justify-content: space-between;\n    cursor: pointer;\n}\n\n.project .size {\n    background-color: rgb(102, 152, 26);\n    border-radius: 50%;\n    padding: 5px;\n    width: 20px;\n    height: 20px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n\n#taskContainer {\n    background-color: rgb(38, 49, 49);\n    flex-grow: 1;\n    transition: flex 0.8s ease-in-out;\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n    gap: 30px;\n    padding: 40px;\n}\n\n.project.active {\n    font-weight: bold;\n    background-color: rgb(38, 49, 49);\n    padding: 2px;\n    border-radius: 15px;\n}\n\n#projectAdd {\n    display: none; \n}\n\n#projectAdd.open {\n    display: block;\n}\n\n#taskDetail {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 25px;\n    background-color: rgb(22, 29, 29);\n    height: 100vh;\n    display: none; \n    padding: 40px;\n    border: 1px solid transparent;\n    transition: width 400ms;\n}\n\n#taskDetail.open {\n    display: flex;\n    width: 20rem;\n    animation: 550ms ease 0s fade-in;\n}\n\n@keyframes fade-in {\n    from {\n        transform: translateX(50vh);\n        opacity: 25;\n        background-color: rgb(22, 29, 29);\n    }\n\n    to {\n        transform: translateX(0);\n        opacity: 100;\n        background-color: rgb(22, 29, 29);\n    }\n}\n\n#taskForm {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 10px;\n    \n}\n\ninput, textarea {\n    width: 200px;\n    border-radius: 25px;\n    background-color: rgb(208, 237, 212);\n    padding: 7px;\n    color: black;\n}\n\ntextarea {\n    height: 175px;\n    padding: 10px;\n}\n\n#projectForm > input {\n    width: 175px;\n}\n\n.task, .taskHeader {\n    display: grid;\n    grid-template-columns: repeat(6, 1fr);\n    gap: 25px;\n    justify-content: space-between;\n    align-items: center;\n    justify-items: center;\n    margin: 5px 15px;\n}\n\n.task {\n    cursor: pointer;\n}\n\n.task.active {\n    font-weight: bold;\n    background-color: rgb(23, 29, 29);\n    padding: 2px;\n    border-radius: 15px;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _pageBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageBuilder */ \"./src/pageBuilder.js\");\n\n\n\nconst ui = new _pageBuilder__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ProjectManager)\n/* harmony export */ });\nclass ProjectManager {\n    constructor() {\n        this.projects = this.loadProjects();\n    }\n\n    saveProjects() {\n        localStorage.setItem(\"projects\", JSON.stringify(this.projects.map(p => ({ name: p.name }))));\n    }\n\n    loadProjects() {\n        const savedProjects = JSON.parse(localStorage.getItem(\"projects\")) || [];\n        return savedProjects.map(p => new Project(p.name));\n    }\n\n    createProject(name) {\n        const project = new Project(name);\n        const lengthProj = this.projects.push(project) - 1;\n        this.saveProjects();\n        return lengthProj\n    }\n    \n    deleteProject(i) {\n         this.projects.splice(i, i);\n         this.saveProjects;\n    }\n\n    getProject(i)  {\n        return this.projects[i];\n    }\n};\n\nclass Project {\n    constructor(name) {\n        this.name = name, \n        this.tasks = new TaskManager(name);\n    }\n\n    getTasks() {\n        return this.tasks.tasks;\n    }\n\n    update(updates) {\n        Object.assign(this, updates);\n    }\n};\n\nclass TaskManager {\n\n    constructor(projectName) {\n        this.projectName = projectName;\n        this.tasks = this.loadTasks();\n    }\n\n    saveTasks() {\n        localStorage.setItem(`tasks_${this.projectName}`, JSON.stringify(this.tasks));\n    }\n\n    loadTasks() {\n        const savedTasks = JSON.parse(localStorage.getItem(`tasks_${this.projectName}`)) || [];\n        return savedTasks.map(t => new Task(t));\n    }\n\n    createTask({title, desc, dueDate, priority, completed}) {\n        const task = new Task ({title, desc, dueDate, priority, completed});\n        this.tasks.push(task);\n        this.saveTasks();\n    }\n\n    deleteTask(i) {\n        this.tasks.splice(i, 1);\n        this.saveTasks();\n    }\n\n    getTask(i) {\n        return this.tasks[i];\n    }\n};\n\nclass Task {\n    constructor({title, desc, dueDate, priority, completed = false}) {\n        Object.assign(this, {title, desc, dueDate, priority, completed});\n    }\n\n    update(updates) {\n        Object.assign(this, updates);\n    }\n\n    complete() {\n        this.completed = true;\n    }\n};\n\n//testing\n\n\n//# sourceURL=webpack:///./src/logic.js?");

/***/ }),

/***/ "./src/pageBuilder.js":
/*!****************************!*\
  !*** ./src/pageBuilder.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UI)\n/* harmony export */ });\n/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ \"./src/logic.js\");\n\n\nclass UI {\n    constructor(projectManager) {\n        this.projectManager = new _logic__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n        this.taskList = document.querySelector('#taskList');\n        this.projectList = document.querySelector('#projectList');\n        this.taskForm = document.querySelector(\"#taskDetail\");\n        this.projectForm = document.querySelector(\"#projectAdd\");\n        if (this.projectManager.projects.length === 0) {\n            this.projectManager.createProject(\"Default Project\");\n        }\n        this.renderProjects();\n        this.renderTasks();\n        this.eventListeners();\n\n    }\n\n    eventListeners() {\n \n    //open dialogue to create project\n    document.querySelector(\"#addProject\").addEventListener(\"click\", (event) => {\n        this.projectForm.classList.add('open');\n    });\n\n    //open dialogue to create task\n    document.querySelector(\"#addTask\").addEventListener(\"click\", (event) => {\n        this.taskForm.classList.add('open');\n    });\n\n    //handle creation of project when submit pressed in project dialogue\n    document.querySelector(\"#submitProject\").addEventListener(\"click\", (event) => {\n        event.preventDefault(); \n        let field = document.getElementById(\"name\").value;\n        if (field) {\n            const id = this.projectManager.createProject(field);\n            setTimeout(() => {\n                document.getElementById(\"name\").value = \"\";\n                this.projectForm.classList.remove('open');\n            }, 0);\n            this.renderProjects(id);\n        };\n    });\n\n    //handle creation or update of task when submit pressed in task dialogue\n    document.querySelector(\"#submitTask\").addEventListener(\"click\", (event) => {\n        event.preventDefault(); \n        const active = document.querySelector(\".project.active\");\n        const activeId = active.getAttribute('data-index');\n        \n        const newTask = {\n            title: document.getElementById(\"title\").value,\n            desc: document.getElementById(\"desc\").value,\n            dueDate: document.getElementById(\"dueDate\").value,\n            priority: document.getElementById(\"priority\").value,\n            completed: document.getElementById(\"completed\").checked\n        };\n        const taskActive = document.querySelector(\".task.active\");\n        if (taskActive) {\n            const taskId = taskActive.getAttribute('data-index');\n            console.log(\"update\")\n            this.projectManager.getProject(activeId).tasks.getTask(taskId).update(newTask);\n        } else {\n            console.log(\"new\");\n            this.projectManager.getProject(activeId).tasks.createTask(newTask);\n        }\n        \n        setTimeout(() => {\n            this.taskForm.classList.remove('open');\n            document.querySelector(\"#taskForm\").reset();\n        }, 0);\n        this.renderTasks(activeId);\n    });\n\n    //events for completed and deleted\n    document.addEventListener(\"click\", (e) => {\n        const active = document.querySelector(\".project.active\");\n        const activeId = active.getAttribute('data-index');\n        if (e.target.classList.contains(\"complete\")) {\n            const index = e.target.dataset.index;\n            this.projectManager.getProject(activeId).tasks.getTask(index).complete()\n            this.renderTasks(activeId);\n        } else if (e.target.classList.contains(\"remove\")) {\n            const index = e.target.dataset.index;\n            this.projectManager.getProject(activeId).tasks.deleteTask(index);\n            this.renderTasks(activeId);\n        }\n    });\n\n    //close events\n    document.querySelector('#closeTask').addEventListener(\"click\", () => {\n        const form = document.querySelector('#taskDetail');\n        setTimeout(() => {\n            form.classList.remove('open');\n        }, 0);\n    });\n\n    document.querySelector('#closeProject').addEventListener(\"click\", () => {\n        const form = document.querySelector('#projectAdd');\n        setTimeout(() => {\n            form.classList.remove('open');\n        }, 0);\n        \n    });\n\n    }\n\n    renderTasks(i = 0) {\n        this.taskList.innerHTML = \"\";\n        const header = document.createElement('div');\n        header.classList.add('taskHeader');\n        header.innerHTML = `\n                <h4>Title</h4>\n                <h4>Due Date</h4>\n                <h4>Priority</h4>\n                <h4>Status</h4>\n                <h4>Complete</h4>\n                <h4>Delete</h4>`\n        this.taskList.appendChild(header);\n        const tasks = this.projectManager.getProject(i).getTasks();\n        tasks.forEach((task, index) => {\n            const item = document.createElement('div');\n            item.classList.add('task');\n            item.setAttribute(\"data-index\", index);\n            item.innerHTML = `\n                <h4>${task.title}</h4>\n                <p>${task.dueDate}</p>\n                <p>${task.priority}</p>\n                <p>${task.completed ? \"Done\" : \"To Do\"}</p>\n                <button class=\"complete\" data-index=\"${index}\">✅</button>\n                <button class=\"remove\" data-index=\"${index}\">❌</button>\n            `\n            item.addEventListener(\"click\", (event) => {\n                const clickedTask = event.currentTarget;\n                document.querySelectorAll(\".task\").forEach(project => {\n                    project.classList.remove(\"active\");\n                });\n                clickedTask.classList.add('active');\n                const taskId = clickedTask.getAttribute('data-index');\n                const task = this.projectManager.getProject(i).tasks.getTask(taskId);\n                this.taskForm.classList.add('open');\n                document.querySelector('#title').value = task.title;\n                document.querySelector('#desc').value = task.desc;\n                document.querySelector('#dueDate').value = task.dueDate;\n                document.querySelector('#priority').value = task.priority;\n                document.querySelector('#completed').checked = task.completed;\n            });\n            this.taskList.appendChild(item);\n        });\n        const taskSize = this.projectManager.getProject(i).getTasks().length;\n        const sizeCounter = document.querySelector(`.project[data-index=\"${i}\"] .size`);\n        sizeCounter.textContent = taskSize;\n    }\n   \n    renderProjects(i = 0) {\n        this.projectList.innerHTML = \"\";\n        this.projectManager.projects.forEach((project, index) => {\n            const proj = document.createElement('div');\n            proj.classList.add('project');\n            proj.setAttribute(\"data-index\", index);\n            proj.innerHTML = `\n                <p>${project.name}</p>\n                <p class=size>${project.tasks.tasks.length}</p>\n            `\n            proj.addEventListener(\"click\", (event) => {\n                const clickedProject = event.currentTarget;\n                document.querySelectorAll(\".project\").forEach(project => {\n                    project.classList.remove(\"active\");\n                });\n                clickedProject.classList.add('active');\n                const activeId = clickedProject.getAttribute('data-index');\n                this.renderTasks(activeId);\n            });\n            this.projectList.appendChild(proj);\n        });\n        const activeProject = document.querySelector(`[data-index=\"${i}\"]`);\n        activeProject.classList.add('active');\n        this.renderTasks(i);\n    }\n}\n\n//# sourceURL=webpack:///./src/pageBuilder.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/styles.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;