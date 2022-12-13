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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/esm/index.js\");\n/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/system */ \"./node_modules/@mui/system/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [champion, setChampion] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [skin, setSkin] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [tries, setTries] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [championList, setChampionList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [guessList, setGuessList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [guess, setGuess] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [skinList, setSkinList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [correctAnswerChampion, setCorrectAnswerChampion] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [correctAnswerSkin, setCorrectAnswerSkin] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    async function getChampions() {\n        const championsRequest = await fetch(\"https://ddragon.leagueoflegends.com/cdn/12.23.1/data/en_GB/champion.json\");\n        const champions = await championsRequest.json();\n        const championArray = [];\n        for(const key in champions.data){\n            championArray.push({\n                id: champions.data[key].id,\n                label: champions.data[key].name\n            });\n        }\n        setChampionList(championArray);\n    }\n    async function getRandomChampion() {\n        var _championList_rand, _championList_rand1;\n        const rand = Math.floor(Math.random() * championList.length);\n        setChampion({\n            id: (_championList_rand = championList[rand]) === null || _championList_rand === void 0 ? void 0 : _championList_rand.id,\n            name: (_championList_rand1 = championList[rand]) === null || _championList_rand1 === void 0 ? void 0 : _championList_rand1.label\n        });\n    }\n    async function getRandomSkin() {\n        const championRequest = await fetch(\"https://ddragon.leagueoflegends.com/cdn/12.23.1/data/en_GB/champion/\".concat(champion === null || champion === void 0 ? void 0 : champion.id, \".json\"));\n        const skins = (await championRequest.json()).data[champion === null || champion === void 0 ? void 0 : champion.id].skins;\n        const s = [];\n        for (const skin of skins){\n            s.push({\n                id: skin === null || skin === void 0 ? void 0 : skin.num,\n                label: skin === null || skin === void 0 ? void 0 : skin.name\n            });\n        }\n        setSkinList(s);\n        const rand = Math.floor(Math.random() * skins.length);\n        setSkin({\n            id: skins[rand].num,\n            name: skins[rand].name\n        });\n        setLoading(false);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        getChampions();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (championList.length > 0 && !champion) {\n            getRandomChampion();\n        }\n    }, [\n        championList\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (champion !== undefined) {\n            getRandomSkin();\n        }\n    }, [\n        champion\n    ]);\n    function checkAnswer(e, value) {\n        if (!value || (value === null || value === void 0 ? void 0 : value.id) === undefined) return;\n        setGuess(value);\n        if ((value === null || value === void 0 ? void 0 : value.id) === (champion === null || champion === void 0 ? void 0 : champion.id)) {\n            setCorrectAnswerChampion(true);\n        } else {\n            const t = tries;\n            setTries(t + 1);\n            const champs = championList.filter((c)=>c.id !== value.id);\n            setChampionList(champs);\n            setGuess(null);\n        }\n    }\n    function checkSkinAnswer(event, child) {\n        console.log(event.target.value);\n    }\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"League Splash Quiz\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\joaci\\\\Node\\\\jockep.com\\\\pages\\\\index.tsx\",\n                        lineNumber: 120,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\joaci\\\\Node\\\\jockep.com\\\\pages\\\\index.tsx\",\n                    lineNumber: 119,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaSpinner, {\n                    className: \"spinner\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\joaci\\\\Node\\\\jockep.com\\\\pages\\\\index.tsx\",\n                    lineNumber: 122,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\joaci\\\\Node\\\\jockep.com\\\\pages\\\\index.tsx\",\n            lineNumber: 118,\n            columnNumber: 13\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"League Splash Quiz\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\joaci\\\\Node\\\\jockep.com\\\\pages\\\\index.tsx\",\n                    lineNumber: 130,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\joaci\\\\Node\\\\jockep.com\\\\pages\\\\index.tsx\",\n                lineNumber: 129,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"League Splash Quiz\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\joaci\\\\Node\\\\jockep.com\\\\pages\\\\index.tsx\",\n                lineNumber: 133,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"splash\",\n                children: champion !== undefined && skin !== undefined && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        background: \"url(https://ddragon.leagueoflegends.com/cdn/img/champion/splash/\".concat(champion.id, \"_\").concat(skin.id, \".jpg) center center\"),\n                        width: \"\".concat(correctAnswerChampion ? 1215 : 150 + tries * 25, \"px\"),\n                        height: \"\".concat(correctAnswerChampion ? 717 : 150 + tries * 25, \"px\"),\n                        maxWidth: \"1215px\",\n                        maxHeight: \"717px\",\n                        border: correctAnswerChampion ? \"3px solid green\" : \"0px solid green\"\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\joaci\\\\Node\\\\jockep.com\\\\pages\\\\index.tsx\",\n                    lineNumber: 138,\n                    columnNumber: 25\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\joaci\\\\Node\\\\jockep.com\\\\pages\\\\index.tsx\",\n                lineNumber: 135,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\joaci\\\\Node\\\\jockep.com\\\\pages\\\\index.tsx\",\n                lineNumber: 153,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Autocomplete, {\n                disablePortal: true,\n                id: \"combobox-id\",\n                multiple: false,\n                groupBy: (option)=>option.label.charAt(0).toUpperCase(),\n                options: championList.sort((a, b)=>-b.label.charAt(0).toUpperCase().localeCompare(a.label.charAt(0).toUpperCase())),\n                value: guess,\n                blurOnSelect: true,\n                disabled: correctAnswerChampion,\n                ref: ref,\n                renderInput: (params)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TextField, {\n                        ...params,\n                        label: \"Champion\"\n                    }, void 0, false, void 0, void 0),\n                onChange: (e, value)=>checkAnswer(e, value),\n                style: {\n                    \"width\": \"25vw\"\n                },\n                renderOption: (props, option)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_system__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                        component: \"li\",\n                        sx: {\n                            \"& > img\": {\n                                mr: 2,\n                                flexShrink: 0\n                            }\n                        },\n                        ...props,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                width: \"50\",\n                                src: \"https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/\".concat(option.id, \".png\")\n                            }, void 0, false, void 0, void 0),\n                            option.label\n                        ]\n                    }, void 0, true, void 0, void 0)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\joaci\\\\Node\\\\jockep.com\\\\pages\\\\index.tsx\",\n                lineNumber: 155,\n                columnNumber: 13\n            }, this),\n            correctAnswerChampion && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Select, {\n                style: {\n                    \"width\": \"25vw\"\n                },\n                onChange: (e, child)=>checkSkinAnswer(e, child),\n                id: \"select-skin-id\",\n                label: \"Skin\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {\n                        value: \"\",\n                        children: \"None\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\joaci\\\\Node\\\\jockep.com\\\\pages\\\\index.tsx\",\n                        lineNumber: 185,\n                        columnNumber: 25\n                    }, this),\n                    skinList.map((row, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {\n                            value: row.id,\n                            children: row.label\n                        }, \"skin\".concat(idx), false, {\n                            fileName: \"C:\\\\Users\\\\joaci\\\\Node\\\\jockep.com\\\\pages\\\\index.tsx\",\n                            lineNumber: 188,\n                            columnNumber: 33\n                        }, this))\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\joaci\\\\Node\\\\jockep.com\\\\pages\\\\index.tsx\",\n                lineNumber: 179,\n                columnNumber: 21\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\joaci\\\\Node\\\\jockep.com\\\\pages\\\\index.tsx\",\n        lineNumber: 128,\n        columnNumber: 9\n    }, this);\n}\n_s(Home, \"OSpXqpp2KWQ/kMn3FZ5qFZg9Qfk=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1ZJLEtBQUtBO2dCQUNMK0QsYUFBYSxDQUFDQyx1QkFBVyw4REFBQzFGLG9EQUFTQTt3QkFBRSxHQUFHMEYsTUFBTTt3QkFBRXJELE9BQU07O2dCQUN0RHNELFVBQVUsQ0FBQ3hDLEdBQUdDLFFBQVVGLFlBQVlDLEdBQUdDO2dCQUN2Q2dCLE9BQU87b0JBQUUsU0FBUztnQkFBTztnQkFDekJ3QixjQUFjLENBQUNDLE9BQU9kLHVCQUNsQiw4REFBQzVFLDRDQUFHQTt3QkFBQzJGLFdBQVU7d0JBQUtDLElBQUk7NEJBQUUsV0FBVztnQ0FBRUMsSUFBSTtnQ0FBR0MsWUFBWTs0QkFBRTt3QkFBRTt3QkFBSSxHQUFHSixLQUFLOzswQ0FDdEUsOERBQUNLO2dDQUFJNUIsT0FBTTtnQ0FBSzZCLEtBQUssZ0VBQTBFLE9BQVZwQixPQUFPM0MsRUFBRSxFQUFDOzs0QkFDOUYyQyxPQUFPMUMsS0FBSzs7Ozs7Ozs7WUFPckJmLHVDQUNJLDhEQUFDckIsaURBQU1BO2dCQUNIbUUsT0FBTztvQkFBRSxTQUFTO2dCQUFPO2dCQUN6QnVCLFVBQVUsQ0FBQ3hDLEdBQUdRLFFBQVVGLGdCQUFnQk4sR0FBR1E7Z0JBQzNDdkIsSUFBRztnQkFDSEMsT0FBTTs7a0NBRU4sOERBQUNuQyxtREFBUUE7d0JBQUNrRCxPQUFNO2tDQUFHOzs7Ozs7b0JBRWZoQyxTQUFTZ0YsR0FBRyxDQUFDLENBQUNDLEtBQUtDLG9CQUNmLDhEQUFDcEcsbURBQVFBOzRCQUFvQmtELE9BQU9pRCxJQUFJakUsRUFBRTtzQ0FBR2lFLElBQUloRSxLQUFLOzJCQUF2QyxPQUFXLE9BQUppRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVdEQsQ0FBQztHQTlLdUJsRztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgRmFTcGlubmVyIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xuaW1wb3J0IHsgUmVhY3ROb2RlLCBTeW50aGV0aWNFdmVudCwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQXV0b2NvbXBsZXRlLCBUZXh0RmllbGQsIFNlbGVjdCwgTWVudUl0ZW0sIFNlbGVjdENoYW5nZUV2ZW50IH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XG5pbXBvcnQgeyBCb3ggfSBmcm9tICdAbXVpL3N5c3RlbSc7XG5cbmludGVyZmFjZSBDaGFtcGlvbiB7XG4gICAgaWQ6IHN0cmluZyxcbiAgICBuYW1lOiBzdHJpbmdcbn1cblxuaW50ZXJmYWNlIFNraW4ge1xuICAgIGlkOiBudW1iZXIsXG4gICAgbmFtZTogc3RyaW5nXG59XG5cbmludGVyZmFjZSBMaXN0SXRlbSB7XG4gICAgaWQ6IHN0cmluZyxcbiAgICBsYWJlbDogc3RyaW5nLFxuICAgIGNvcnJlY3Q/OiBib29sZWFuXG59XG5pbnRlcmZhY2UgTGlzdCBleHRlbmRzIEFycmF5PExpc3RJdGVtPiB7IH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgICBjb25zdCBbY2hhbXBpb24sIHNldENoYW1waW9uXSA9IHVzZVN0YXRlPENoYW1waW9uIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpO1xuICAgIGNvbnN0IFtza2luLCBzZXRTa2luXSA9IHVzZVN0YXRlPFNraW4gfCB1bmRlZmluZWQ+KCk7XG4gICAgY29uc3QgW3RyaWVzLCBzZXRUcmllc10gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xuICAgIGNvbnN0IFtjaGFtcGlvbkxpc3QsIHNldENoYW1waW9uTGlzdF0gPSB1c2VTdGF0ZTxMaXN0PihbXSk7XG4gICAgY29uc3QgW2d1ZXNzTGlzdCwgc2V0R3Vlc3NMaXN0XSA9IHVzZVN0YXRlPExpc3Q+KFtdKTtcbiAgICBjb25zdCBbZ3Vlc3MsIHNldEd1ZXNzXSA9IHVzZVN0YXRlPExpc3RJdGVtIHwgbnVsbD4obnVsbCk7XG4gICAgY29uc3QgW3NraW5MaXN0LCBzZXRTa2luTGlzdF0gPSB1c2VTdGF0ZTxMaXN0PihbXSk7XG4gICAgY29uc3QgW2NvcnJlY3RBbnN3ZXJDaGFtcGlvbiwgc2V0Q29ycmVjdEFuc3dlckNoYW1waW9uXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgICBjb25zdCBbY29ycmVjdEFuc3dlclNraW4sIHNldENvcnJlY3RBbnN3ZXJTa2luXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgICBjb25zdCByZWYgPSB1c2VSZWYoKTtcblxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldENoYW1waW9ucygpIHtcbiAgICAgICAgY29uc3QgY2hhbXBpb25zUmVxdWVzdCA9IGF3YWl0IGZldGNoKCdodHRwczovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9jZG4vMTIuMjMuMS9kYXRhL2VuX0dCL2NoYW1waW9uLmpzb24nKTtcbiAgICAgICAgY29uc3QgY2hhbXBpb25zID0gYXdhaXQgY2hhbXBpb25zUmVxdWVzdC5qc29uKCk7XG4gICAgICAgIGNvbnN0IGNoYW1waW9uQXJyYXk6IExpc3QgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gY2hhbXBpb25zLmRhdGEpIHtcbiAgICAgICAgICAgIGNoYW1waW9uQXJyYXkucHVzaCh7XG4gICAgICAgICAgICAgICAgaWQ6IGNoYW1waW9ucy5kYXRhW2tleV0uaWQsXG4gICAgICAgICAgICAgICAgbGFiZWw6IGNoYW1waW9ucy5kYXRhW2tleV0ubmFtZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgc2V0Q2hhbXBpb25MaXN0KGNoYW1waW9uQXJyYXkpO1xuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldFJhbmRvbUNoYW1waW9uKCkge1xuICAgICAgICBjb25zdCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhbXBpb25MaXN0Lmxlbmd0aCk7XG4gICAgICAgIHNldENoYW1waW9uKHtcbiAgICAgICAgICAgIGlkOiBjaGFtcGlvbkxpc3RbcmFuZF0/LmlkLFxuICAgICAgICAgICAgbmFtZTogY2hhbXBpb25MaXN0W3JhbmRdPy5sYWJlbFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBnZXRSYW5kb21Ta2luKCkge1xuICAgICAgICBjb25zdCBjaGFtcGlvblJlcXVlc3QgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuLzEyLjIzLjEvZGF0YS9lbl9HQi9jaGFtcGlvbi8ke2NoYW1waW9uPy5pZH0uanNvbmApO1xuICAgICAgICBjb25zdCBza2lucyA9IChhd2FpdCBjaGFtcGlvblJlcXVlc3QuanNvbigpKS5kYXRhW2NoYW1waW9uPy5pZCFdLnNraW5zO1xuXG4gICAgICAgIGNvbnN0IHM6IExpc3QgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBza2luIG9mIHNraW5zKSB7XG4gICAgICAgICAgICBzLnB1c2goe1xuICAgICAgICAgICAgICAgIGlkOiBza2luPy5udW0sXG4gICAgICAgICAgICAgICAgbGFiZWw6IHNraW4/Lm5hbWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBzZXRTa2luTGlzdChzKTtcblxuICAgICAgICBjb25zdCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc2tpbnMubGVuZ3RoKTtcbiAgICAgICAgc2V0U2tpbih7XG4gICAgICAgICAgICBpZDogc2tpbnNbcmFuZF0ubnVtLFxuICAgICAgICAgICAgbmFtZTogc2tpbnNbcmFuZF0ubmFtZVxuICAgICAgICB9KTtcblxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBnZXRDaGFtcGlvbnMoKTtcbiAgICB9LCBbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoY2hhbXBpb25MaXN0Lmxlbmd0aCA+IDAgJiYgIWNoYW1waW9uKSB7XG4gICAgICAgICAgICBnZXRSYW5kb21DaGFtcGlvbigpO1xuICAgICAgICB9XG4gICAgfSwgW2NoYW1waW9uTGlzdF0pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGNoYW1waW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGdldFJhbmRvbVNraW4oKTtcbiAgICAgICAgfVxuICAgIH0sIFtjaGFtcGlvbl0pO1xuXG4gICAgZnVuY3Rpb24gY2hlY2tBbnN3ZXIoZTogU3ludGhldGljRXZlbnQ8RWxlbWVudCwgRXZlbnQ+LCB2YWx1ZTogTGlzdEl0ZW0gfCBudWxsKSB7XG4gICAgICAgIGlmICghdmFsdWUgfHwgdmFsdWU/LmlkID09PSB1bmRlZmluZWQpIHJldHVybjtcbiAgICAgICAgc2V0R3Vlc3ModmFsdWUpO1xuICAgICAgICBpZiAodmFsdWU/LmlkID09PSBjaGFtcGlvbj8uaWQpIHtcbiAgICAgICAgICAgIHNldENvcnJlY3RBbnN3ZXJDaGFtcGlvbih0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHQgPSB0cmllcztcbiAgICAgICAgICAgIHNldFRyaWVzKHQgKyAxKTtcbiAgICAgICAgICAgIGNvbnN0IGNoYW1wcyA9IGNoYW1waW9uTGlzdC5maWx0ZXIoYyA9PiBjLmlkICE9PSB2YWx1ZS5pZCk7XG4gICAgICAgICAgICBzZXRDaGFtcGlvbkxpc3QoY2hhbXBzKTtcbiAgICAgICAgICAgIHNldEd1ZXNzKG51bGwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tTa2luQW5zd2VyKGV2ZW50OiBTZWxlY3RDaGFuZ2VFdmVudDxzdHJpbmc+LCBjaGlsZDogUmVhY3ROb2RlKSB7XG5cbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAobG9hZGluZykge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+TGVhZ3VlIFNwbGFzaCBRdWl6PC90aXRsZT5cbiAgICAgICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICAgICAgPEZhU3Bpbm5lciBjbGFzc05hbWU9J3NwaW5uZXInIC8+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPkxlYWd1ZSBTcGxhc2ggUXVpejwvdGl0bGU+XG4gICAgICAgICAgICA8L0hlYWQ+XG5cbiAgICAgICAgICAgIDxoMT5MZWFndWUgU3BsYXNoIFF1aXo8L2gxPlxuXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3NwbGFzaCc+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjaGFtcGlvbiAhPT0gdW5kZWZpbmVkICYmIHNraW4gIT09IHVuZGVmaW5lZCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGB1cmwoaHR0cHM6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuL2ltZy9jaGFtcGlvbi9zcGxhc2gvJHtjaGFtcGlvbi5pZH1fJHtza2luLmlkfS5qcGcpIGNlbnRlciBjZW50ZXJgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYCR7Y29ycmVjdEFuc3dlckNoYW1waW9uID8gMTIxNSA6IDE1MCArICh0cmllcyAqIDI1KX1weGAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogYCR7Y29ycmVjdEFuc3dlckNoYW1waW9uID8gNzE3IDogMTUwICsgKHRyaWVzICogMjUpfXB4YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6ICcxMjE1cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6ICc3MTdweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogY29ycmVjdEFuc3dlckNoYW1waW9uID8gJzNweCBzb2xpZCBncmVlbicgOiAnMHB4IHNvbGlkIGdyZWVuJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gLz5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cblxuXG4gICAgICAgICAgICA8YnIgLz5cblxuICAgICAgICAgICAgPEF1dG9jb21wbGV0ZVxuICAgICAgICAgICAgICAgIGRpc2FibGVQb3J0YWxcbiAgICAgICAgICAgICAgICBpZD17J2NvbWJvYm94LWlkJ31cbiAgICAgICAgICAgICAgICBtdWx0aXBsZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgZ3JvdXBCeT17b3B0aW9uID0+IG9wdGlvbi5sYWJlbC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX1cbiAgICAgICAgICAgICAgICBvcHRpb25zPXtjaGFtcGlvbkxpc3Quc29ydCgoYSwgYikgPT4gLWIubGFiZWwuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkubG9jYWxlQ29tcGFyZShhLmxhYmVsLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpKSl9XG4gICAgICAgICAgICAgICAgdmFsdWU9e2d1ZXNzfVxuICAgICAgICAgICAgICAgIGJsdXJPblNlbGVjdFxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtjb3JyZWN0QW5zd2VyQ2hhbXBpb259XG4gICAgICAgICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgICAgICAgcmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+IDxUZXh0RmllbGQgey4uLnBhcmFtc30gbGFiZWw9XCJDaGFtcGlvblwiIC8+fVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSwgdmFsdWUpID0+IGNoZWNrQW5zd2VyKGUsIHZhbHVlKX1cbiAgICAgICAgICAgICAgICBzdHlsZT17eyAnd2lkdGgnOiAnMjV2dycgfX1cbiAgICAgICAgICAgICAgICByZW5kZXJPcHRpb249eyhwcm9wcywgb3B0aW9uKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxCb3ggY29tcG9uZW50PVwibGlcIiBzeD17eyAnJiA+IGltZyc6IHsgbXI6IDIsIGZsZXhTaHJpbms6IDAgfSB9fSB7Li4ucHJvcHN9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyB3aWR0aD1cIjUwXCIgc3JjPXtgaHR0cHM6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuLzEyLjIzLjEvaW1nL2NoYW1waW9uLyR7b3B0aW9uLmlkfS5wbmdgfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAge29wdGlvbi5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIC8+XG5cblxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvcnJlY3RBbnN3ZXJDaGFtcGlvbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7ICd3aWR0aCc6ICcyNXZ3JyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlLCBjaGlsZCkgPT4gY2hlY2tTa2luQW5zd2VyKGUsIGNoaWxkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdzZWxlY3Qtc2tpbi1pZCdcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU2tpblwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIlwiPk5vbmU8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNraW5MaXN0Lm1hcCgocm93LCBpZHgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17YHNraW4ke2lkeH1gfSB2YWx1ZT17cm93LmlkfT57cm93LmxhYmVsfTwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgPC9zZWN0aW9uID5cbiAgICApXG59XG4iXSwibmFtZXMiOlsiSGVhZCIsIkZhU3Bpbm5lciIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiQXV0b2NvbXBsZXRlIiwiVGV4dEZpZWxkIiwiU2VsZWN0IiwiTWVudUl0ZW0iLCJCb3giLCJIb21lIiwiY2hhbXBpb24iLCJzZXRDaGFtcGlvbiIsInVuZGVmaW5lZCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic2tpbiIsInNldFNraW4iLCJ0cmllcyIsInNldFRyaWVzIiwiY2hhbXBpb25MaXN0Iiwic2V0Q2hhbXBpb25MaXN0IiwiZ3Vlc3NMaXN0Iiwic2V0R3Vlc3NMaXN0IiwiZ3Vlc3MiLCJzZXRHdWVzcyIsInNraW5MaXN0Iiwic2V0U2tpbkxpc3QiLCJjb3JyZWN0QW5zd2VyQ2hhbXBpb24iLCJzZXRDb3JyZWN0QW5zd2VyQ2hhbXBpb24iLCJjb3JyZWN0QW5zd2VyU2tpbiIsInNldENvcnJlY3RBbnN3ZXJTa2luIiwicmVmIiwiZ2V0Q2hhbXBpb25zIiwiY2hhbXBpb25zUmVxdWVzdCIsImZldGNoIiwiY2hhbXBpb25zIiwianNvbiIsImNoYW1waW9uQXJyYXkiLCJrZXkiLCJkYXRhIiwicHVzaCIsImlkIiwibGFiZWwiLCJuYW1lIiwiZ2V0UmFuZG9tQ2hhbXBpb24iLCJyYW5kIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwiZ2V0UmFuZG9tU2tpbiIsImNoYW1waW9uUmVxdWVzdCIsInNraW5zIiwicyIsIm51bSIsImNoZWNrQW5zd2VyIiwiZSIsInZhbHVlIiwidCIsImNoYW1wcyIsImZpbHRlciIsImMiLCJjaGVja1NraW5BbnN3ZXIiLCJldmVudCIsImNoaWxkIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJ0aXRsZSIsImgxIiwiZGl2Iiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwid2lkdGgiLCJoZWlnaHQiLCJtYXhXaWR0aCIsIm1heEhlaWdodCIsImJvcmRlciIsImJyIiwiZGlzYWJsZVBvcnRhbCIsIm11bHRpcGxlIiwiZ3JvdXBCeSIsIm9wdGlvbiIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwib3B0aW9ucyIsInNvcnQiLCJhIiwiYiIsImxvY2FsZUNvbXBhcmUiLCJibHVyT25TZWxlY3QiLCJkaXNhYmxlZCIsInJlbmRlcklucHV0IiwicGFyYW1zIiwib25DaGFuZ2UiLCJyZW5kZXJPcHRpb24iLCJwcm9wcyIsImNvbXBvbmVudCIsInN4IiwibXIiLCJmbGV4U2hyaW5rIiwiaW1nIiwic3JjIiwibWFwIiwicm93IiwiaWR4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});