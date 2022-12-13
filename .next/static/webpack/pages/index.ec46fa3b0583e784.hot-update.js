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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/esm/index.js\");\n/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/system */ \"./node_modules/@mui/system/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [champion, setChampion] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [skin, setSkin] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [tries, setTries] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [championList, setChampionList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [guessList, setGuessList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [guess, setGuess] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [skinList, setSkinList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [correctAnswerChampion, setCorrectAnswerChampion] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [correctAnswerSkin, setCorrectAnswerSkin] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    async function getChampions() {\n        const championsRequest = await fetch(\"https://ddragon.leagueoflegends.com/cdn/12.23.1/data/en_GB/champion.json\");\n        const champions = await championsRequest.json();\n        const championArray = [];\n        for(const key in champions.data){\n            championArray.push({\n                id: champions.data[key].id,\n                label: champions.data[key].name\n            });\n        }\n        setChampionList(championArray);\n    }\n    async function getRandomChampion() {\n        var _championList_rand, _championList_rand1;\n        const rand = Math.floor(Math.random() * championList.length);\n        setChampion({\n            id: (_championList_rand = championList[rand]) === null || _championList_rand === void 0 ? void 0 : _championList_rand.id,\n            name: (_championList_rand1 = championList[rand]) === null || _championList_rand1 === void 0 ? void 0 : _championList_rand1.label\n        });\n    }\n    async function getRandomSkin() {\n        const championRequest = await fetch(\"https://ddragon.leagueoflegends.com/cdn/12.23.1/data/en_GB/champion/\".concat(champion === null || champion === void 0 ? void 0 : champion.id, \".json\"));\n        const skins = (await championRequest.json()).data[champion === null || champion === void 0 ? void 0 : champion.id].skins;\n        const s = [];\n        for (const skin of skins){\n            s.push({\n                id: skin === null || skin === void 0 ? void 0 : skin.num,\n                label: skin === null || skin === void 0 ? void 0 : skin.name\n            });\n        }\n        setSkinList(s);\n        const rand = Math.floor(Math.random() * skins.length);\n        setSkin({\n            id: skins[rand].num,\n            name: skins[rand].name\n        });\n        setLoading(false);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        getChampions();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (championList.length > 0 && !champion) {\n            getRandomChampion();\n        }\n    }, [\n        championList\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (champion !== undefined) {\n            getRandomSkin();\n        }\n    }, [\n        champion\n    ]);\n    function checkAnswer(e, value) {\n        if (!value || (value === null || value === void 0 ? void 0 : value.id) === undefined) return;\n        setGuess(value);\n        if ((value === null || value === void 0 ? void 0 : value.id) === (champion === null || champion === void 0 ? void 0 : champion.id)) {\n            setCorrectAnswerChampion(true);\n        } else {\n            const t = tries;\n            setTries(t + 1);\n            const champs = championList.filter((c)=>c.id !== value.id);\n            setChampionList(champs);\n            setGuess(null);\n        }\n    }\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"League Splash Quiz\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\joaci\\\\Node\\\\jockep.com\\\\pages\\\\index.tsx\",\n                        lineNumber: 116,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\joaci\\\\Node\\\\jockep.com\\\\pages\\\\index.tsx\",\n                    lineNumber: 115,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaSpinner, {\n                    className: \"spinner\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\joaci\\\\Node\\\\jockep.com\\\\pages\\\\index.tsx\",\n                    lineNumber: 118,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\joaci\\\\Node\\\\jockep.com\\\\pages\\\\index.tsx\",\n            lineNumber: 114,\n            columnNumber: 13\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"League Splash Quiz\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\joaci\\\\Node\\\\jockep.com\\\\pages\\\\index.tsx\",\n                    lineNumber: 126,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\joaci\\\\Node\\\\jockep.com\\\\pages\\\\index.tsx\",\n                lineNumber: 125,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"League Splash Quiz\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\joaci\\\\Node\\\\jockep.com\\\\pages\\\\index.tsx\",\n                lineNumber: 129,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"splash\",\n                children: champion !== undefined && skin !== undefined && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        background: \"url(https://ddragon.leagueoflegends.com/cdn/img/champion/splash/\".concat(champion.id, \"_\").concat(skin.id, \".jpg) center center\"),\n                        width: \"\".concat(correctAnswerChampion ? 1215 : 150 + tries * 25, \"px\"),\n                        height: \"\".concat(correctAnswerChampion ? 717 : 150 + tries * 25, \"px\"),\n                        maxWidth: \"1215px\",\n                        maxHeight: \"717px\",\n                        border: correctAnswerChampion ? \"3px solid green\" : \"0px solid green\"\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\joaci\\\\Node\\\\jockep.com\\\\pages\\\\index.tsx\",\n                    lineNumber: 134,\n                    columnNumber: 25\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\joaci\\\\Node\\\\jockep.com\\\\pages\\\\index.tsx\",\n                lineNumber: 131,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\joaci\\\\Node\\\\jockep.com\\\\pages\\\\index.tsx\",\n                lineNumber: 149,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Autocomplete, {\n                disablePortal: true,\n                id: \"combobox-id\",\n                multiple: false,\n                groupBy: (option)=>option.label.charAt(0).toUpperCase(),\n                options: championList.sort((a, b)=>-b.label.charAt(0).toUpperCase().localeCompare(a.label.charAt(0).toUpperCase())),\n                value: guess,\n                blurOnSelect: true,\n                disabled: correctAnswerChampion,\n                ref: ref,\n                renderInput: (params)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TextField, {\n                        ...params,\n                        label: \"Champion\"\n                    }, void 0, false, void 0, void 0),\n                onChange: (e, value)=>checkAnswer(e, value),\n                style: {\n                    \"width\": \"25vw\"\n                },\n                renderOption: (props, option)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_system__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                        component: \"li\",\n                        sx: {\n                            \"& > img\": {\n                                mr: 2,\n                                flexShrink: 0\n                            }\n                        },\n                        ...props,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                width: \"50\",\n                                src: \"https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/\".concat(option.id, \".png\")\n                            }, void 0, false, void 0, void 0),\n                            option.label\n                        ]\n                    }, void 0, true, void 0, void 0)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\joaci\\\\Node\\\\jockep.com\\\\pages\\\\index.tsx\",\n                lineNumber: 151,\n                columnNumber: 13\n            }, this),\n            correctAnswerChampion && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"R\\xe4tt svar\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\joaci\\\\Node\\\\jockep.com\\\\pages\\\\index.tsx\",\n                lineNumber: 175,\n                columnNumber: 43\n            }, this),\n            correctAnswerChampion && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Select, {\n                children: skinList.map((row, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {\n                        value: row.id,\n                        children: row.label\n                    }, \"skin\".concat(idx), false, {\n                        fileName: \"C:\\\\Users\\\\joaci\\\\Node\\\\jockep.com\\\\pages\\\\index.tsx\",\n                        lineNumber: 183,\n                        columnNumber: 33\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\joaci\\\\Node\\\\jockep.com\\\\pages\\\\index.tsx\",\n                lineNumber: 180,\n                columnNumber: 21\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\joaci\\\\Node\\\\jockep.com\\\\pages\\\\index.tsx\",\n        lineNumber: 124,\n        columnNumber: 9\n    }, this);\n}\n_s(Home, \"QxOt9bAfJl6c6pakhWQHQR88Wrs=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUUsR0FBR3NGLE1BQU07d0JBQUUvQyxPQUFNOztnQkFDdERnRCxVQUFVLENBQUNsQyxHQUFHQyxRQUFVRixZQUFZQyxHQUFHQztnQkFDdkNVLE9BQU87b0JBQUUsU0FBUztnQkFBTztnQkFDekJ3QixjQUFjLENBQUNDLE9BQU9kLHVCQUNsQiw4REFBQ3hFLDRDQUFHQTt3QkFBQ3VGLFdBQVU7d0JBQUtDLElBQUk7NEJBQUUsV0FBVztnQ0FBRUMsSUFBSTtnQ0FBR0MsWUFBWTs0QkFBRTt3QkFBRTt3QkFBSSxHQUFHSixLQUFLOzswQ0FDdEUsOERBQUNLO2dDQUFJNUIsT0FBTTtnQ0FBSzZCLEtBQUssZ0VBQTBFLE9BQVZwQixPQUFPckMsRUFBRSxFQUFDOzs0QkFDOUZxQyxPQUFPcEMsS0FBSzs7Ozs7Ozs7WUFRckJmLHVDQUEwQiw4REFBQ3NDOzBCQUFHOzs7Ozs7WUFJOUJ0Qyx1Q0FDSSw4REFBQ3ZCLGlEQUFNQTswQkFFQ3FCLFNBQVMwRSxHQUFHLENBQUMsQ0FBQ0MsS0FBS0Msb0JBQ2YsOERBQUNoRyxtREFBUUE7d0JBQW9Cb0QsT0FBTzJDLElBQUkzRCxFQUFFO2tDQUFHMkQsSUFBSTFELEtBQUs7dUJBQXZDLE9BQVcsT0FBSjJEOzs7Ozs7Ozs7Ozs7Ozs7O0FBVXRELENBQUM7R0F6S3VCOUY7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IEZhU3Bpbm5lciB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcbmltcG9ydCB7IFN5bnRoZXRpY0V2ZW50LCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBdXRvY29tcGxldGUsIFRleHRGaWVsZCwgU2VsZWN0LCBNZW51SXRlbSB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgQm94IH0gZnJvbSAnQG11aS9zeXN0ZW0nO1xuXG5pbnRlcmZhY2UgQ2hhbXBpb24ge1xuICAgIGlkOiBzdHJpbmcsXG4gICAgbmFtZTogc3RyaW5nXG59XG5cbmludGVyZmFjZSBTa2luIHtcbiAgICBpZDogbnVtYmVyLFxuICAgIG5hbWU6IHN0cmluZ1xufVxuXG5pbnRlcmZhY2UgTGlzdEl0ZW0ge1xuICAgIGlkOiBzdHJpbmcsXG4gICAgbGFiZWw6IHN0cmluZyxcbiAgICBjb3JyZWN0PzogYm9vbGVhblxufVxuaW50ZXJmYWNlIExpc3QgZXh0ZW5kcyBBcnJheTxMaXN0SXRlbT4geyB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gICAgY29uc3QgW2NoYW1waW9uLCBzZXRDaGFtcGlvbl0gPSB1c2VTdGF0ZTxDaGFtcGlvbiB8IHVuZGVmaW5lZD4odW5kZWZpbmVkKTtcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKTtcbiAgICBjb25zdCBbc2tpbiwgc2V0U2tpbl0gPSB1c2VTdGF0ZTxTa2luIHwgdW5kZWZpbmVkPigpO1xuICAgIGNvbnN0IFt0cmllcywgc2V0VHJpZXNdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcbiAgICBjb25zdCBbaW1hZ2UsIHNldEltYWdlXSA9IHVzZVN0YXRlPHN0cmluZz4oKTtcbiAgICBjb25zdCBbY2hhbXBpb25MaXN0LCBzZXRDaGFtcGlvbkxpc3RdID0gdXNlU3RhdGU8TGlzdD4oW10pO1xuICAgIGNvbnN0IFtndWVzc0xpc3QsIHNldEd1ZXNzTGlzdF0gPSB1c2VTdGF0ZTxMaXN0PihbXSk7XG4gICAgY29uc3QgW2d1ZXNzLCBzZXRHdWVzc10gPSB1c2VTdGF0ZTxMaXN0SXRlbSB8IG51bGw+KG51bGwpO1xuICAgIGNvbnN0IFtza2luTGlzdCwgc2V0U2tpbkxpc3RdID0gdXNlU3RhdGU8TGlzdD4oW10pO1xuICAgIGNvbnN0IFtjb3JyZWN0QW5zd2VyQ2hhbXBpb24sIHNldENvcnJlY3RBbnN3ZXJDaGFtcGlvbl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gICAgY29uc3QgW2NvcnJlY3RBbnN3ZXJTa2luLCBzZXRDb3JyZWN0QW5zd2VyU2tpbl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gICAgY29uc3QgcmVmID0gdXNlUmVmKCk7XG5cbiAgICBhc3luYyBmdW5jdGlvbiBnZXRDaGFtcGlvbnMoKSB7XG4gICAgICAgIGNvbnN0IGNoYW1waW9uc1JlcXVlc3QgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuLzEyLjIzLjEvZGF0YS9lbl9HQi9jaGFtcGlvbi5qc29uJyk7XG4gICAgICAgIGNvbnN0IGNoYW1waW9ucyA9IGF3YWl0IGNoYW1waW9uc1JlcXVlc3QuanNvbigpO1xuICAgICAgICBjb25zdCBjaGFtcGlvbkFycmF5OiBMaXN0ID0gW107XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGNoYW1waW9ucy5kYXRhKSB7XG4gICAgICAgICAgICBjaGFtcGlvbkFycmF5LnB1c2goe1xuICAgICAgICAgICAgICAgIGlkOiBjaGFtcGlvbnMuZGF0YVtrZXldLmlkLFxuICAgICAgICAgICAgICAgIGxhYmVsOiBjaGFtcGlvbnMuZGF0YVtrZXldLm5hbWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHNldENoYW1waW9uTGlzdChjaGFtcGlvbkFycmF5KTtcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBnZXRSYW5kb21DaGFtcGlvbigpIHtcbiAgICAgICAgY29uc3QgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYW1waW9uTGlzdC5sZW5ndGgpO1xuICAgICAgICBzZXRDaGFtcGlvbih7XG4gICAgICAgICAgICBpZDogY2hhbXBpb25MaXN0W3JhbmRdPy5pZCxcbiAgICAgICAgICAgIG5hbWU6IGNoYW1waW9uTGlzdFtyYW5kXT8ubGFiZWxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0UmFuZG9tU2tpbigpIHtcbiAgICAgICAgY29uc3QgY2hhbXBpb25SZXF1ZXN0ID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vZGRyYWdvbi5sZWFndWVvZmxlZ2VuZHMuY29tL2Nkbi8xMi4yMy4xL2RhdGEvZW5fR0IvY2hhbXBpb24vJHtjaGFtcGlvbj8uaWR9Lmpzb25gKTtcbiAgICAgICAgY29uc3Qgc2tpbnMgPSAoYXdhaXQgY2hhbXBpb25SZXF1ZXN0Lmpzb24oKSkuZGF0YVtjaGFtcGlvbj8uaWQhXS5za2lucztcblxuICAgICAgICBjb25zdCBzOiBMaXN0ID0gW107XG4gICAgICAgIGZvciAoY29uc3Qgc2tpbiBvZiBza2lucykge1xuICAgICAgICAgICAgcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBpZDogc2tpbj8ubnVtLFxuICAgICAgICAgICAgICAgIGxhYmVsOiBza2luPy5uYW1lXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgc2V0U2tpbkxpc3Qocyk7XG5cbiAgICAgICAgY29uc3QgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNraW5zLmxlbmd0aCk7XG4gICAgICAgIHNldFNraW4oe1xuICAgICAgICAgICAgaWQ6IHNraW5zW3JhbmRdLm51bSxcbiAgICAgICAgICAgIG5hbWU6IHNraW5zW3JhbmRdLm5hbWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZ2V0Q2hhbXBpb25zKCk7XG4gICAgfSwgW10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGNoYW1waW9uTGlzdC5sZW5ndGggPiAwICYmICFjaGFtcGlvbikge1xuICAgICAgICAgICAgZ2V0UmFuZG9tQ2hhbXBpb24oKTtcbiAgICAgICAgfVxuICAgIH0sIFtjaGFtcGlvbkxpc3RdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChjaGFtcGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBnZXRSYW5kb21Ta2luKCk7XG4gICAgICAgIH1cbiAgICB9LCBbY2hhbXBpb25dKTtcblxuICAgIGZ1bmN0aW9uIGNoZWNrQW5zd2VyKGU6IFN5bnRoZXRpY0V2ZW50PEVsZW1lbnQsIEV2ZW50PiwgdmFsdWU6IExpc3RJdGVtIHwgbnVsbCkge1xuICAgICAgICBpZiAoIXZhbHVlIHx8IHZhbHVlPy5pZCA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG4gICAgICAgIHNldEd1ZXNzKHZhbHVlKTtcbiAgICAgICAgaWYgKHZhbHVlPy5pZCA9PT0gY2hhbXBpb24/LmlkKSB7XG4gICAgICAgICAgICBzZXRDb3JyZWN0QW5zd2VyQ2hhbXBpb24odHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB0ID0gdHJpZXM7XG4gICAgICAgICAgICBzZXRUcmllcyh0ICsgMSk7XG4gICAgICAgICAgICBjb25zdCBjaGFtcHMgPSBjaGFtcGlvbkxpc3QuZmlsdGVyKGMgPT4gYy5pZCAhPT0gdmFsdWUuaWQpO1xuICAgICAgICAgICAgc2V0Q2hhbXBpb25MaXN0KGNoYW1wcyk7XG4gICAgICAgICAgICBzZXRHdWVzcyhudWxsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChsb2FkaW5nKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT5MZWFndWUgU3BsYXNoIFF1aXo8L3RpdGxlPlxuICAgICAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgICAgICA8RmFTcGlubmVyIGNsYXNzTmFtZT0nc3Bpbm5lcicgLz5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+TGVhZ3VlIFNwbGFzaCBRdWl6PC90aXRsZT5cbiAgICAgICAgICAgIDwvSGVhZD5cblxuICAgICAgICAgICAgPGgxPkxlYWd1ZSBTcGxhc2ggUXVpejwvaDE+XG5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nc3BsYXNoJz5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNoYW1waW9uICE9PSB1bmRlZmluZWQgJiYgc2tpbiAhPT0gdW5kZWZpbmVkICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYHVybChodHRwczovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9jZG4vaW1nL2NoYW1waW9uL3NwbGFzaC8ke2NoYW1waW9uLmlkfV8ke3NraW4uaWR9LmpwZykgY2VudGVyIGNlbnRlcmAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBgJHtjb3JyZWN0QW5zd2VyQ2hhbXBpb24gPyAxMjE1IDogMTUwICsgKHRyaWVzICogMjUpfXB4YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBgJHtjb3JyZWN0QW5zd2VyQ2hhbXBpb24gPyA3MTcgOiAxNTAgKyAodHJpZXMgKiAyNSl9cHhgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzEyMTVweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogJzcxN3B4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBjb3JyZWN0QW5zd2VyQ2hhbXBpb24gPyAnM3B4IHNvbGlkIGdyZWVuJyA6ICcwcHggc29saWQgZ3JlZW4nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSAvPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuXG5cbiAgICAgICAgICAgIDxiciAvPlxuXG4gICAgICAgICAgICA8QXV0b2NvbXBsZXRlXG4gICAgICAgICAgICAgICAgZGlzYWJsZVBvcnRhbFxuICAgICAgICAgICAgICAgIGlkPXsnY29tYm9ib3gtaWQnfVxuICAgICAgICAgICAgICAgIG11bHRpcGxlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICBncm91cEJ5PXtvcHRpb24gPT4gb3B0aW9uLmxhYmVsLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfVxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e2NoYW1waW9uTGlzdC5zb3J0KChhLCBiKSA9PiAtYi5sYWJlbC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKS5sb2NhbGVDb21wYXJlKGEubGFiZWwuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkpKX1cbiAgICAgICAgICAgICAgICB2YWx1ZT17Z3Vlc3N9XG4gICAgICAgICAgICAgICAgYmx1ck9uU2VsZWN0XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2NvcnJlY3RBbnN3ZXJDaGFtcGlvbn1cbiAgICAgICAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT4gPFRleHRGaWVsZCB7Li4ucGFyYW1zfSBsYWJlbD1cIkNoYW1waW9uXCIgLz59XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlLCB2YWx1ZSkgPT4gY2hlY2tBbnN3ZXIoZSwgdmFsdWUpfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7ICd3aWR0aCc6ICcyNXZ3JyB9fVxuICAgICAgICAgICAgICAgIHJlbmRlck9wdGlvbj17KHByb3BzLCBvcHRpb24pID0+IChcbiAgICAgICAgICAgICAgICAgICAgPEJveCBjb21wb25lbnQ9XCJsaVwiIHN4PXt7ICcmID4gaW1nJzogeyBtcjogMiwgZmxleFNocmluazogMCB9IH19IHsuLi5wcm9wc30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHdpZHRoPVwiNTBcIiBzcmM9e2BodHRwczovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9jZG4vMTIuMjMuMS9pbWcvY2hhbXBpb24vJHtvcHRpb24uaWR9LnBuZ2B9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7b3B0aW9uLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgLz5cblxuXG5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb3JyZWN0QW5zd2VyQ2hhbXBpb24gJiYgKDxoMT5Sw6R0dCBzdmFyPC9oMT4pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb3JyZWN0QW5zd2VyQ2hhbXBpb24gJiYgKFxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNraW5MaXN0Lm1hcCgocm93LCBpZHgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17YHNraW4ke2lkeH1gfSB2YWx1ZT17cm93LmlkfT57cm93LmxhYmVsfTwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIClcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiRmFTcGlubmVyIiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJBdXRvY29tcGxldGUiLCJUZXh0RmllbGQiLCJTZWxlY3QiLCJNZW51SXRlbSIsIkJveCIsIkhvbWUiLCJjaGFtcGlvbiIsInNldENoYW1waW9uIiwidW5kZWZpbmVkIiwibG9hZGluZyIsInNldExvYWRpbmciLCJza2luIiwic2V0U2tpbiIsInRyaWVzIiwic2V0VHJpZXMiLCJpbWFnZSIsInNldEltYWdlIiwiY2hhbXBpb25MaXN0Iiwic2V0Q2hhbXBpb25MaXN0IiwiZ3Vlc3NMaXN0Iiwic2V0R3Vlc3NMaXN0IiwiZ3Vlc3MiLCJzZXRHdWVzcyIsInNraW5MaXN0Iiwic2V0U2tpbkxpc3QiLCJjb3JyZWN0QW5zd2VyQ2hhbXBpb24iLCJzZXRDb3JyZWN0QW5zd2VyQ2hhbXBpb24iLCJjb3JyZWN0QW5zd2VyU2tpbiIsInNldENvcnJlY3RBbnN3ZXJTa2luIiwicmVmIiwiZ2V0Q2hhbXBpb25zIiwiY2hhbXBpb25zUmVxdWVzdCIsImZldGNoIiwiY2hhbXBpb25zIiwianNvbiIsImNoYW1waW9uQXJyYXkiLCJrZXkiLCJkYXRhIiwicHVzaCIsImlkIiwibGFiZWwiLCJuYW1lIiwiZ2V0UmFuZG9tQ2hhbXBpb24iLCJyYW5kIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwiZ2V0UmFuZG9tU2tpbiIsImNoYW1waW9uUmVxdWVzdCIsInNraW5zIiwicyIsIm51bSIsImNoZWNrQW5zd2VyIiwiZSIsInZhbHVlIiwidCIsImNoYW1wcyIsImZpbHRlciIsImMiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwidGl0bGUiLCJoMSIsImRpdiIsInN0eWxlIiwiYmFja2dyb3VuZCIsIndpZHRoIiwiaGVpZ2h0IiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJib3JkZXIiLCJiciIsImRpc2FibGVQb3J0YWwiLCJtdWx0aXBsZSIsImdyb3VwQnkiLCJvcHRpb24iLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsIm9wdGlvbnMiLCJzb3J0IiwiYSIsImIiLCJsb2NhbGVDb21wYXJlIiwiYmx1ck9uU2VsZWN0IiwiZGlzYWJsZWQiLCJyZW5kZXJJbnB1dCIsInBhcmFtcyIsIm9uQ2hhbmdlIiwicmVuZGVyT3B0aW9uIiwicHJvcHMiLCJjb21wb25lbnQiLCJzeCIsIm1yIiwiZmxleFNocmluayIsImltZyIsInNyYyIsIm1hcCIsInJvdyIsImlkeCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});