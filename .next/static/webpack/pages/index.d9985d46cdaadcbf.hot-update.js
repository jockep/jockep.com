"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/esm/index.js\");\n/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/system */ \"./node_modules/@mui/system/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [champion, setChampion] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [skin, setSkin] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [tries, setTries] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [championList, setChampionList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [guessList, setGuessList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [guess, setGuess] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [skinList, setSkinList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [correctAnswerChampion, setCorrectAnswerChampion] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [correctAnswerSkin, setCorrectAnswerSkin] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    async function getChampions() {\n        const championsRequest = await fetch(\"https://ddragon.leagueoflegends.com/cdn/12.23.1/data/en_GB/champion.json\");\n        const champions = await championsRequest.json();\n        const championArray = [];\n        for(const key in champions.data){\n            championArray.push({\n                id: champions.data[key].id,\n                label: champions.data[key].name\n            });\n        }\n        setChampionList(championArray);\n    }\n    async function getRandomChampion() {\n        var _championList_rand, _championList_rand1;\n        const rand = Math.floor(Math.random() * championList.length);\n        setChampion({\n            id: (_championList_rand = championList[rand]) === null || _championList_rand === void 0 ? void 0 : _championList_rand.id,\n            name: (_championList_rand1 = championList[rand]) === null || _championList_rand1 === void 0 ? void 0 : _championList_rand1.label\n        });\n    }\n    async function getRandomSkin() {\n        const championRequest = await fetch(\"https://ddragon.leagueoflegends.com/cdn/12.23.1/data/en_GB/champion/\".concat(champion === null || champion === void 0 ? void 0 : champion.id, \".json\"));\n        const skins = (await championRequest.json()).data[champion === null || champion === void 0 ? void 0 : champion.id].skins;\n        const s = [];\n        for (const skin of skins){\n            s.push({\n                id: skin === null || skin === void 0 ? void 0 : skin.num,\n                label: skin === null || skin === void 0 ? void 0 : skin.name\n            });\n        }\n        setSkinList(s);\n        const rand = Math.floor(Math.random() * skins.length);\n        setSkin({\n            id: skins[rand].num,\n            name: skins[rand].name\n        });\n        setLoading(false);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        getChampions();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (championList.length > 0 && !champion) {\n            getRandomChampion();\n        }\n    }, [\n        championList\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (champion !== undefined) {\n            getRandomSkin();\n        }\n    }, [\n        champion\n    ]);\n    function checkAnswer(e, value) {\n        if (!value || (value === null || value === void 0 ? void 0 : value.id) === undefined) return;\n        setGuess(value);\n        if ((value === null || value === void 0 ? void 0 : value.id) === (champion === null || champion === void 0 ? void 0 : champion.id)) {\n            setCorrectAnswerChampion(true);\n        } else {\n            const t = tries;\n            setTries(t + 1);\n            const champs = championList.filter((c)=>c.id !== value.id);\n            setChampionList(champs);\n            setGuess(null);\n        }\n    }\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"League Splash Quiz\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\joaci\\\\Node\\\\jockep.com\\\\pages\\\\index.tsx\",\n                        lineNumber: 116,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\joaci\\\\Node\\\\jockep.com\\\\pages\\\\index.tsx\",\n                    lineNumber: 115,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaSpinner, {\n                    className: \"spinner\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\joaci\\\\Node\\\\jockep.com\\\\pages\\\\index.tsx\",\n                    lineNumber: 118,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\joaci\\\\Node\\\\jockep.com\\\\pages\\\\index.tsx\",\n            lineNumber: 114,\n            columnNumber: 13\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"League Splash Quiz\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\joaci\\\\Node\\\\jockep.com\\\\pages\\\\index.tsx\",\n                    lineNumber: 126,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\joaci\\\\Node\\\\jockep.com\\\\pages\\\\index.tsx\",\n                lineNumber: 125,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"League Splash Quiz\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\joaci\\\\Node\\\\jockep.com\\\\pages\\\\index.tsx\",\n                lineNumber: 129,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"splash\",\n                children: champion !== undefined && skin !== undefined && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        background: \"url(https://ddragon.leagueoflegends.com/cdn/img/champion/splash/\".concat(champion.id, \"_\").concat(skin.id, \".jpg) center center\"),\n                        width: \"\".concat(correctAnswerChampion ? 1215 : 150 + tries * 25, \"px\"),\n                        height: \"\".concat(correctAnswerChampion ? 717 : 150 + tries * 25, \"px\"),\n                        maxWidth: \"1215px\",\n                        maxHeight: \"717px\",\n                        border: correctAnswerChampion !== null && correctAnswerChampion !== void 0 ? correctAnswerChampion : \"1px solid green\"\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\joaci\\\\Node\\\\jockep.com\\\\pages\\\\index.tsx\",\n                    lineNumber: 134,\n                    columnNumber: 25\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\joaci\\\\Node\\\\jockep.com\\\\pages\\\\index.tsx\",\n                lineNumber: 131,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\joaci\\\\Node\\\\jockep.com\\\\pages\\\\index.tsx\",\n                lineNumber: 149,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Autocomplete, {\n                disablePortal: true,\n                id: \"combobox-id\",\n                multiple: false,\n                groupBy: (option)=>option.label.charAt(0).toUpperCase(),\n                options: championList.sort((a, b)=>-b.label.charAt(0).toUpperCase().localeCompare(a.label.charAt(0).toUpperCase())),\n                value: guess,\n                blurOnSelect: true,\n                disabled: correctAnswerChampion,\n                ref: ref,\n                renderInput: (params)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TextField, {\n                        ...params,\n                        label: \"Champion\"\n                    }, void 0, false, void 0, void 0),\n                onChange: (e, value)=>checkAnswer(e, value),\n                style: {\n                    \"width\": \"25vw\"\n                },\n                renderOption: (props, option)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_system__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                        component: \"li\",\n                        sx: {\n                            \"& > img\": {\n                                mr: 2,\n                                flexShrink: 0\n                            }\n                        },\n                        ...props,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                width: \"50\",\n                                src: \"https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/\".concat(option.id, \".png\")\n                            }, void 0, false, void 0, void 0),\n                            option.label\n                        ]\n                    }, void 0, true, void 0, void 0)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\joaci\\\\Node\\\\jockep.com\\\\pages\\\\index.tsx\",\n                lineNumber: 151,\n                columnNumber: 13\n            }, this),\n            correctAnswerChampion && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"R\\xe4tt svar\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\joaci\\\\Node\\\\jockep.com\\\\pages\\\\index.tsx\",\n                lineNumber: 175,\n                columnNumber: 43\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\joaci\\\\Node\\\\jockep.com\\\\pages\\\\index.tsx\",\n        lineNumber: 124,\n        columnNumber: 9\n    }, this);\n}\n_s(Home, \"QxOt9bAfJl6c6pakhWQHQR88Wrs=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTt3QkFBRSxHQUFHb0YsTUFBTTt3QkFBRS9DLE9BQU07O2dCQUN0RGdELFVBQVUsQ0FBQ2xDLEdBQUdDLFFBQVVGLFlBQVlDLEdBQUdDO2dCQUN2Q1UsT0FBTztvQkFBRSxTQUFTO2dCQUFPO2dCQUN6QndCLGNBQWMsQ0FBQ0MsT0FBT2QsdUJBQ2xCLDhEQUFDeEUsNENBQUdBO3dCQUFDdUYsV0FBVTt3QkFBS0MsSUFBSTs0QkFBRSxXQUFXO2dDQUFFQyxJQUFJO2dDQUFHQyxZQUFZOzRCQUFFO3dCQUFFO3dCQUFJLEdBQUdKLEtBQUs7OzBDQUN0RSw4REFBQ0s7Z0NBQUk1QixPQUFNO2dDQUFLNkIsS0FBSyxnRUFBMEUsT0FBVnBCLE9BQU9yQyxFQUFFLEVBQUM7OzRCQUM5RnFDLE9BQU9wQyxLQUFLOzs7Ozs7OztZQVFyQmYsdUNBQTBCLDhEQUFDc0M7MEJBQUc7Ozs7Ozs7Ozs7OztBQWlCOUMsQ0FBQztHQXhLdUIxRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgRmFTcGlubmVyIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xuaW1wb3J0IHsgU3ludGhldGljRXZlbnQsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEF1dG9jb21wbGV0ZSwgVGV4dEZpZWxkLCBTZWxlY3QgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcbmltcG9ydCB7IEJveCB9IGZyb20gJ0BtdWkvc3lzdGVtJztcblxuaW50ZXJmYWNlIENoYW1waW9uIHtcbiAgICBpZDogc3RyaW5nLFxuICAgIG5hbWU6IHN0cmluZ1xufVxuXG5pbnRlcmZhY2UgU2tpbiB7XG4gICAgaWQ6IG51bWJlcixcbiAgICBuYW1lOiBzdHJpbmdcbn1cblxuaW50ZXJmYWNlIExpc3RJdGVtIHtcbiAgICBpZDogc3RyaW5nLFxuICAgIGxhYmVsOiBzdHJpbmcsXG4gICAgY29ycmVjdD86IGJvb2xlYW5cbn1cbmludGVyZmFjZSBMaXN0IGV4dGVuZHMgQXJyYXk8TGlzdEl0ZW0+IHsgfVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICAgIGNvbnN0IFtjaGFtcGlvbiwgc2V0Q2hhbXBpb25dID0gdXNlU3RhdGU8Q2hhbXBpb24gfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XG4gICAgY29uc3QgW3NraW4sIHNldFNraW5dID0gdXNlU3RhdGU8U2tpbiB8IHVuZGVmaW5lZD4oKTtcbiAgICBjb25zdCBbdHJpZXMsIHNldFRyaWVzXSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XG4gICAgY29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCk7XG4gICAgY29uc3QgW2NoYW1waW9uTGlzdCwgc2V0Q2hhbXBpb25MaXN0XSA9IHVzZVN0YXRlPExpc3Q+KFtdKTtcbiAgICBjb25zdCBbZ3Vlc3NMaXN0LCBzZXRHdWVzc0xpc3RdID0gdXNlU3RhdGU8TGlzdD4oW10pO1xuICAgIGNvbnN0IFtndWVzcywgc2V0R3Vlc3NdID0gdXNlU3RhdGU8TGlzdEl0ZW0gfCBudWxsPihudWxsKTtcbiAgICBjb25zdCBbc2tpbkxpc3QsIHNldFNraW5MaXN0XSA9IHVzZVN0YXRlPExpc3Q+KFtdKTtcbiAgICBjb25zdCBbY29ycmVjdEFuc3dlckNoYW1waW9uLCBzZXRDb3JyZWN0QW5zd2VyQ2hhbXBpb25dID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICAgIGNvbnN0IFtjb3JyZWN0QW5zd2VyU2tpbiwgc2V0Q29ycmVjdEFuc3dlclNraW5dID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICAgIGNvbnN0IHJlZiA9IHVzZVJlZigpO1xuXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0Q2hhbXBpb25zKCkge1xuICAgICAgICBjb25zdCBjaGFtcGlvbnNSZXF1ZXN0ID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vZGRyYWdvbi5sZWFndWVvZmxlZ2VuZHMuY29tL2Nkbi8xMi4yMy4xL2RhdGEvZW5fR0IvY2hhbXBpb24uanNvbicpO1xuICAgICAgICBjb25zdCBjaGFtcGlvbnMgPSBhd2FpdCBjaGFtcGlvbnNSZXF1ZXN0Lmpzb24oKTtcbiAgICAgICAgY29uc3QgY2hhbXBpb25BcnJheTogTGlzdCA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBjaGFtcGlvbnMuZGF0YSkge1xuICAgICAgICAgICAgY2hhbXBpb25BcnJheS5wdXNoKHtcbiAgICAgICAgICAgICAgICBpZDogY2hhbXBpb25zLmRhdGFba2V5XS5pZCxcbiAgICAgICAgICAgICAgICBsYWJlbDogY2hhbXBpb25zLmRhdGFba2V5XS5uYW1lXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBzZXRDaGFtcGlvbkxpc3QoY2hhbXBpb25BcnJheSk7XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0UmFuZG9tQ2hhbXBpb24oKSB7XG4gICAgICAgIGNvbnN0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaGFtcGlvbkxpc3QubGVuZ3RoKTtcbiAgICAgICAgc2V0Q2hhbXBpb24oe1xuICAgICAgICAgICAgaWQ6IGNoYW1waW9uTGlzdFtyYW5kXT8uaWQsXG4gICAgICAgICAgICBuYW1lOiBjaGFtcGlvbkxpc3RbcmFuZF0/LmxhYmVsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldFJhbmRvbVNraW4oKSB7XG4gICAgICAgIGNvbnN0IGNoYW1waW9uUmVxdWVzdCA9IGF3YWl0IGZldGNoKGBodHRwczovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9jZG4vMTIuMjMuMS9kYXRhL2VuX0dCL2NoYW1waW9uLyR7Y2hhbXBpb24/LmlkfS5qc29uYCk7XG4gICAgICAgIGNvbnN0IHNraW5zID0gKGF3YWl0IGNoYW1waW9uUmVxdWVzdC5qc29uKCkpLmRhdGFbY2hhbXBpb24/LmlkIV0uc2tpbnM7XG5cbiAgICAgICAgY29uc3QgczogTGlzdCA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IHNraW4gb2Ygc2tpbnMpIHtcbiAgICAgICAgICAgIHMucHVzaCh7XG4gICAgICAgICAgICAgICAgaWQ6IHNraW4/Lm51bSxcbiAgICAgICAgICAgICAgICBsYWJlbDogc2tpbj8ubmFtZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHNldFNraW5MaXN0KHMpO1xuXG4gICAgICAgIGNvbnN0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBza2lucy5sZW5ndGgpO1xuICAgICAgICBzZXRTa2luKHtcbiAgICAgICAgICAgIGlkOiBza2luc1tyYW5kXS5udW0sXG4gICAgICAgICAgICBuYW1lOiBza2luc1tyYW5kXS5uYW1lXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGdldENoYW1waW9ucygpO1xuICAgIH0sIFtdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChjaGFtcGlvbkxpc3QubGVuZ3RoID4gMCAmJiAhY2hhbXBpb24pIHtcbiAgICAgICAgICAgIGdldFJhbmRvbUNoYW1waW9uKCk7XG4gICAgICAgIH1cbiAgICB9LCBbY2hhbXBpb25MaXN0XSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoY2hhbXBpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZ2V0UmFuZG9tU2tpbigpO1xuICAgICAgICB9XG4gICAgfSwgW2NoYW1waW9uXSk7XG5cbiAgICBmdW5jdGlvbiBjaGVja0Fuc3dlcihlOiBTeW50aGV0aWNFdmVudDxFbGVtZW50LCBFdmVudD4sIHZhbHVlOiBMaXN0SXRlbSB8IG51bGwpIHtcbiAgICAgICAgaWYgKCF2YWx1ZSB8fCB2YWx1ZT8uaWQgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuICAgICAgICBzZXRHdWVzcyh2YWx1ZSk7XG4gICAgICAgIGlmICh2YWx1ZT8uaWQgPT09IGNoYW1waW9uPy5pZCkge1xuICAgICAgICAgICAgc2V0Q29ycmVjdEFuc3dlckNoYW1waW9uKHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgdCA9IHRyaWVzO1xuICAgICAgICAgICAgc2V0VHJpZXModCArIDEpO1xuICAgICAgICAgICAgY29uc3QgY2hhbXBzID0gY2hhbXBpb25MaXN0LmZpbHRlcihjID0+IGMuaWQgIT09IHZhbHVlLmlkKTtcbiAgICAgICAgICAgIHNldENoYW1waW9uTGlzdChjaGFtcHMpO1xuICAgICAgICAgICAgc2V0R3Vlc3MobnVsbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobG9hZGluZykge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+TGVhZ3VlIFNwbGFzaCBRdWl6PC90aXRsZT5cbiAgICAgICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICAgICAgPEZhU3Bpbm5lciBjbGFzc05hbWU9J3NwaW5uZXInIC8+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPkxlYWd1ZSBTcGxhc2ggUXVpejwvdGl0bGU+XG4gICAgICAgICAgICA8L0hlYWQ+XG5cbiAgICAgICAgICAgIDxoMT5MZWFndWUgU3BsYXNoIFF1aXo8L2gxPlxuXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3NwbGFzaCc+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjaGFtcGlvbiAhPT0gdW5kZWZpbmVkICYmIHNraW4gIT09IHVuZGVmaW5lZCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGB1cmwoaHR0cHM6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuL2ltZy9jaGFtcGlvbi9zcGxhc2gvJHtjaGFtcGlvbi5pZH1fJHtza2luLmlkfS5qcGcpIGNlbnRlciBjZW50ZXJgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYCR7Y29ycmVjdEFuc3dlckNoYW1waW9uID8gMTIxNSA6IDE1MCArICh0cmllcyAqIDI1KX1weGAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogYCR7Y29ycmVjdEFuc3dlckNoYW1waW9uID8gNzE3IDogMTUwICsgKHRyaWVzICogMjUpfXB4YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6ICcxMjE1cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6ICc3MTdweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogY29ycmVjdEFuc3dlckNoYW1waW9uID8/ICcxcHggc29saWQgZ3JlZW4nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSAvPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuXG5cbiAgICAgICAgICAgIDxiciAvPlxuXG4gICAgICAgICAgICA8QXV0b2NvbXBsZXRlXG4gICAgICAgICAgICAgICAgZGlzYWJsZVBvcnRhbFxuICAgICAgICAgICAgICAgIGlkPXsnY29tYm9ib3gtaWQnfVxuICAgICAgICAgICAgICAgIG11bHRpcGxlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICBncm91cEJ5PXtvcHRpb24gPT4gb3B0aW9uLmxhYmVsLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfVxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e2NoYW1waW9uTGlzdC5zb3J0KChhLCBiKSA9PiAtYi5sYWJlbC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKS5sb2NhbGVDb21wYXJlKGEubGFiZWwuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkpKX1cbiAgICAgICAgICAgICAgICB2YWx1ZT17Z3Vlc3N9XG4gICAgICAgICAgICAgICAgYmx1ck9uU2VsZWN0XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2NvcnJlY3RBbnN3ZXJDaGFtcGlvbn1cbiAgICAgICAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT4gPFRleHRGaWVsZCB7Li4ucGFyYW1zfSBsYWJlbD1cIkNoYW1waW9uXCIgLz59XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlLCB2YWx1ZSkgPT4gY2hlY2tBbnN3ZXIoZSwgdmFsdWUpfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7ICd3aWR0aCc6ICcyNXZ3JyB9fVxuICAgICAgICAgICAgICAgIHJlbmRlck9wdGlvbj17KHByb3BzLCBvcHRpb24pID0+IChcbiAgICAgICAgICAgICAgICAgICAgPEJveCBjb21wb25lbnQ9XCJsaVwiIHN4PXt7ICcmID4gaW1nJzogeyBtcjogMiwgZmxleFNocmluazogMCB9IH19IHsuLi5wcm9wc30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHdpZHRoPVwiNTBcIiBzcmM9e2BodHRwczovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9jZG4vMTIuMjMuMS9pbWcvY2hhbXBpb24vJHtvcHRpb24uaWR9LnBuZ2B9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7b3B0aW9uLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgLz5cblxuXG5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb3JyZWN0QW5zd2VyQ2hhbXBpb24gJiYgKDxoMT5Sw6R0dCBzdmFyPC9oMT4pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHsvKiA8cD5Ta2luPC9wPlxuICAgICAgICAgICAgPHNlbGVjdD5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXsnJ30+SW5nZW4gZ2lzc25pbmc8L29wdGlvbj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNraW5MaXN0Lm1hcCgocm93LCBpZHgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtgc2tpbiR7aWR4fWB9IHZhbHVlPXtyb3cuaWR9Pntyb3cubGFiZWx9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPGJ1dHRvbj5HaXNzYTwvYnV0dG9uPiAqL31cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIClcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiRmFTcGlubmVyIiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJBdXRvY29tcGxldGUiLCJUZXh0RmllbGQiLCJCb3giLCJIb21lIiwiY2hhbXBpb24iLCJzZXRDaGFtcGlvbiIsInVuZGVmaW5lZCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic2tpbiIsInNldFNraW4iLCJ0cmllcyIsInNldFRyaWVzIiwiaW1hZ2UiLCJzZXRJbWFnZSIsImNoYW1waW9uTGlzdCIsInNldENoYW1waW9uTGlzdCIsImd1ZXNzTGlzdCIsInNldEd1ZXNzTGlzdCIsImd1ZXNzIiwic2V0R3Vlc3MiLCJza2luTGlzdCIsInNldFNraW5MaXN0IiwiY29ycmVjdEFuc3dlckNoYW1waW9uIiwic2V0Q29ycmVjdEFuc3dlckNoYW1waW9uIiwiY29ycmVjdEFuc3dlclNraW4iLCJzZXRDb3JyZWN0QW5zd2VyU2tpbiIsInJlZiIsImdldENoYW1waW9ucyIsImNoYW1waW9uc1JlcXVlc3QiLCJmZXRjaCIsImNoYW1waW9ucyIsImpzb24iLCJjaGFtcGlvbkFycmF5Iiwia2V5IiwiZGF0YSIsInB1c2giLCJpZCIsImxhYmVsIiwibmFtZSIsImdldFJhbmRvbUNoYW1waW9uIiwicmFuZCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsImdldFJhbmRvbVNraW4iLCJjaGFtcGlvblJlcXVlc3QiLCJza2lucyIsInMiLCJudW0iLCJjaGVja0Fuc3dlciIsImUiLCJ2YWx1ZSIsInQiLCJjaGFtcHMiLCJmaWx0ZXIiLCJjIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsInRpdGxlIiwiaDEiLCJkaXYiLCJzdHlsZSIsImJhY2tncm91bmQiLCJ3aWR0aCIsImhlaWdodCIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwiYm9yZGVyIiwiYnIiLCJkaXNhYmxlUG9ydGFsIiwibXVsdGlwbGUiLCJncm91cEJ5Iiwib3B0aW9uIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJvcHRpb25zIiwic29ydCIsImEiLCJiIiwibG9jYWxlQ29tcGFyZSIsImJsdXJPblNlbGVjdCIsImRpc2FibGVkIiwicmVuZGVySW5wdXQiLCJwYXJhbXMiLCJvbkNoYW5nZSIsInJlbmRlck9wdGlvbiIsInByb3BzIiwiY29tcG9uZW50Iiwic3giLCJtciIsImZsZXhTaHJpbmsiLCJpbWciLCJzcmMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});