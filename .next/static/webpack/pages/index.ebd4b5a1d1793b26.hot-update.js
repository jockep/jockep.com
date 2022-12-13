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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/esm/index.js\");\n/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/system */ \"./node_modules/@mui/system/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [champion, setChampion] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [skin, setSkin] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [tries, setTries] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [championList, setChampionList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [guessList, setGuessList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [guess, setGuess] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [skinList, setSkinList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [correctAnswerChampion, setCorrectAnswerChampion] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [correctAnswerSkin, setCorrectAnswerSkin] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    async function getChampions() {\n        const championsRequest = await fetch(\"https://ddragon.leagueoflegends.com/cdn/12.23.1/data/en_GB/champion.json\");\n        const champions = await championsRequest.json();\n        const championArray = [];\n        for(const key in champions.data){\n            championArray.push({\n                id: champions.data[key].id,\n                label: champions.data[key].name\n            });\n        }\n        setChampionList(championArray);\n    }\n    async function getRandomChampion() {\n        var _championList_rand, _championList_rand1;\n        const rand = Math.floor(Math.random() * championList.length);\n        setChampion({\n            id: (_championList_rand = championList[rand]) === null || _championList_rand === void 0 ? void 0 : _championList_rand.id,\n            name: (_championList_rand1 = championList[rand]) === null || _championList_rand1 === void 0 ? void 0 : _championList_rand1.label\n        });\n    }\n    async function getRandomSkin() {\n        const championRequest = await fetch(\"https://ddragon.leagueoflegends.com/cdn/12.23.1/data/en_GB/champion/\".concat(champion === null || champion === void 0 ? void 0 : champion.id, \".json\"));\n        const skins = (await championRequest.json()).data[champion === null || champion === void 0 ? void 0 : champion.id].skins;\n        const s = [];\n        for (const skin of skins){\n            s.push({\n                id: skin === null || skin === void 0 ? void 0 : skin.num,\n                label: skin === null || skin === void 0 ? void 0 : skin.name\n            });\n        }\n        setSkinList(s);\n        const rand = Math.floor(Math.random() * skins.length);\n        setSkin({\n            id: skins[rand].num,\n            name: skins[rand].name\n        });\n        setLoading(false);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        getChampions();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (championList.length > 0 && !champion) {\n            getRandomChampion();\n        }\n    }, [\n        championList\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (champion !== undefined) {\n            getRandomSkin();\n        }\n    }, [\n        champion\n    ]);\n    function checkAnswer(e, value) {\n        if (!value || (value === null || value === void 0 ? void 0 : value.id) === undefined) return;\n        setGuess(value);\n        if ((value === null || value === void 0 ? void 0 : value.id) === (champion === null || champion === void 0 ? void 0 : champion.id)) {\n            setCorrectAnswerChampion(true);\n        } else {\n            const t = tries;\n            setTries(t + 1);\n            const champs = championList.filter((c)=>c.id !== value.id);\n            const guesses = guessList.push({\n                ...value,\n                correct: false\n            });\n            setGuessList(guesses);\n            setChampionList(champs);\n            setGuess(null);\n        }\n    }\n    function checkSkinAnswer(event, child) {\n        if (event.target.value === (skin === null || skin === void 0 ? void 0 : skin.id)) {\n            setCorrectAnswerSkin(true);\n        } else {\n            const skins = skinList.filter((c)=>c.id !== event.target.value);\n            setSkinList(skins);\n        }\n    }\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"League Splash Quiz\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\joaci\\\\Node\\\\jockep.com\\\\pages\\\\index.tsx\",\n                        lineNumber: 131,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\joaci\\\\Node\\\\jockep.com\\\\pages\\\\index.tsx\",\n                    lineNumber: 130,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaSpinner, {\n                    className: \"spinner\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\joaci\\\\Node\\\\jockep.com\\\\pages\\\\index.tsx\",\n                    lineNumber: 133,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\joaci\\\\Node\\\\jockep.com\\\\pages\\\\index.tsx\",\n            lineNumber: 129,\n            columnNumber: 13\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"League Splash Quiz\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\joaci\\\\Node\\\\jockep.com\\\\pages\\\\index.tsx\",\n                    lineNumber: 141,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\joaci\\\\Node\\\\jockep.com\\\\pages\\\\index.tsx\",\n                lineNumber: 140,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"League Splash Quiz\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\joaci\\\\Node\\\\jockep.com\\\\pages\\\\index.tsx\",\n                lineNumber: 144,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"splash\",\n                children: champion !== undefined && skin !== undefined && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        background: \"url(https://ddragon.leagueoflegends.com/cdn/img/champion/splash/\".concat(champion.id, \"_\").concat(skin.id, \".jpg) center center\"),\n                        width: \"\".concat(correctAnswerChampion ? 1215 : 150 + tries * 25, \"px\"),\n                        height: \"\".concat(correctAnswerChampion ? 717 : 150 + tries * 25, \"px\"),\n                        maxWidth: \"1215px\",\n                        maxHeight: \"717px\",\n                        border: correctAnswerChampion ? \"3px solid green\" : \"0px solid green\"\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\joaci\\\\Node\\\\jockep.com\\\\pages\\\\index.tsx\",\n                    lineNumber: 149,\n                    columnNumber: 25\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\joaci\\\\Node\\\\jockep.com\\\\pages\\\\index.tsx\",\n                lineNumber: 146,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\joaci\\\\Node\\\\jockep.com\\\\pages\\\\index.tsx\",\n                lineNumber: 164,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Autocomplete, {\n                disablePortal: true,\n                id: \"combobox-id\",\n                multiple: false,\n                groupBy: (option)=>option.label.charAt(0).toUpperCase(),\n                options: championList.sort((a, b)=>-b.label.charAt(0).toUpperCase().localeCompare(a.label.charAt(0).toUpperCase())),\n                value: guess,\n                blurOnSelect: true,\n                disabled: correctAnswerChampion,\n                ref: ref,\n                renderInput: (params)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TextField, {\n                        ...params,\n                        label: \"Champion\"\n                    }, void 0, false, void 0, void 0),\n                onChange: (e, value)=>checkAnswer(e, value),\n                style: {\n                    \"width\": \"25vw\"\n                },\n                renderOption: (props, option)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_system__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                        component: \"li\",\n                        sx: {\n                            \"& > img\": {\n                                mr: 2,\n                                flexShrink: 0\n                            }\n                        },\n                        ...props,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                width: \"50\",\n                                src: \"https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/\".concat(option.id, \".png\")\n                            }, void 0, false, void 0, void 0),\n                            option.label\n                        ]\n                    }, void 0, true, void 0, void 0)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\joaci\\\\Node\\\\jockep.com\\\\pages\\\\index.tsx\",\n                lineNumber: 166,\n                columnNumber: 13\n            }, this),\n            correctAnswerChampion && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Select, {\n                style: {\n                    \"width\": \"25vw\"\n                },\n                onChange: (e, child)=>checkSkinAnswer(e, child),\n                id: \"select-skin-id\",\n                label: \"Skin\",\n                disabled: correctAnswerSkin,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {\n                        value: \"\",\n                        children: \"None\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\joaci\\\\Node\\\\jockep.com\\\\pages\\\\index.tsx\",\n                        lineNumber: 197,\n                        columnNumber: 25\n                    }, this),\n                    skinList.map((row, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {\n                            value: row.id,\n                            children: row.label\n                        }, \"skin\".concat(idx), false, {\n                            fileName: \"C:\\\\Users\\\\joaci\\\\Node\\\\jockep.com\\\\pages\\\\index.tsx\",\n                            lineNumber: 200,\n                            columnNumber: 33\n                        }, this))\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\joaci\\\\Node\\\\jockep.com\\\\pages\\\\index.tsx\",\n                lineNumber: 190,\n                columnNumber: 21\n            }, this),\n            correctAnswerSkin && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Correct Answer!\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\joaci\\\\Node\\\\jockep.com\\\\pages\\\\index.tsx\",\n                        lineNumber: 210,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                        onClick: ()=>window.location.reload(),\n                        children: \"New game\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\joaci\\\\Node\\\\jockep.com\\\\pages\\\\index.tsx\",\n                        lineNumber: 211,\n                        columnNumber: 25\n                    }, this)\n                ]\n            }, void 0, true),\n            guessList\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\joaci\\\\Node\\\\jockep.com\\\\pages\\\\index.tsx\",\n        lineNumber: 139,\n        columnNumber: 9\n    }, this);\n}\n_s(Home, \"OSpXqpp2KWQ/kMn3FZ5qFZg9Qfk=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUE2QjtBQUNjO0FBQ29DO0FBQ3NCO0FBQ25FO0FBbUJuQixTQUFTVyxPQUFPOztJQUMzQixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1QsK0NBQVFBLENBQXVCVTtJQUMvRCxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR1osK0NBQVFBLENBQVUsSUFBSTtJQUNwRCxNQUFNLENBQUNhLE1BQU1DLFFBQVEsR0FBR2QsK0NBQVFBO0lBQ2hDLE1BQU0sQ0FBQ2UsT0FBT0MsU0FBUyxHQUFHaEIsK0NBQVFBLENBQVM7SUFDM0MsTUFBTSxDQUFDaUIsY0FBY0MsZ0JBQWdCLEdBQUdsQiwrQ0FBUUEsQ0FBTyxFQUFFO0lBQ3pELE1BQU0sQ0FBQ21CLFdBQVdDLGFBQWEsR0FBR3BCLCtDQUFRQSxDQUFPLEVBQUU7SUFDbkQsTUFBTSxDQUFDcUIsT0FBT0MsU0FBUyxHQUFHdEIsK0NBQVFBLENBQWtCLElBQUk7SUFDeEQsTUFBTSxDQUFDdUIsVUFBVUMsWUFBWSxHQUFHeEIsK0NBQVFBLENBQU8sRUFBRTtJQUNqRCxNQUFNLENBQUN5Qix1QkFBdUJDLHlCQUF5QixHQUFHMUIsK0NBQVFBLENBQVUsS0FBSztJQUNqRixNQUFNLENBQUMyQixtQkFBbUJDLHFCQUFxQixHQUFHNUIsK0NBQVFBLENBQVUsS0FBSztJQUN6RSxNQUFNNkIsTUFBTTlCLDZDQUFNQTtJQUVsQixlQUFlK0IsZUFBZTtRQUMxQixNQUFNQyxtQkFBbUIsTUFBTUMsTUFBTTtRQUNyQyxNQUFNQyxZQUFZLE1BQU1GLGlCQUFpQkcsSUFBSTtRQUM3QyxNQUFNQyxnQkFBc0IsRUFBRTtRQUM5QixJQUFLLE1BQU1DLE9BQU9ILFVBQVVJLElBQUksQ0FBRTtZQUM5QkYsY0FBY0csSUFBSSxDQUFDO2dCQUNmQyxJQUFJTixVQUFVSSxJQUFJLENBQUNELElBQUksQ0FBQ0csRUFBRTtnQkFDMUJDLE9BQU9QLFVBQVVJLElBQUksQ0FBQ0QsSUFBSSxDQUFDSyxJQUFJO1lBQ25DO1FBQ0o7UUFDQXZCLGdCQUFnQmlCO0lBQ3BCO0lBRUEsZUFBZU8sb0JBQW9CO1lBR3ZCekIsb0JBQ0VBO1FBSFYsTUFBTTBCLE9BQU9DLEtBQUtDLEtBQUssQ0FBQ0QsS0FBS0UsTUFBTSxLQUFLN0IsYUFBYThCLE1BQU07UUFDM0R0QyxZQUFZO1lBQ1I4QixJQUFJdEIsQ0FBQUEscUJBQUFBLFlBQVksQ0FBQzBCLEtBQUssY0FBbEIxQixnQ0FBQUEsS0FBQUEsSUFBQUEsbUJBQW9Cc0IsRUFBRTtZQUMxQkUsTUFBTXhCLENBQUFBLHNCQUFBQSxZQUFZLENBQUMwQixLQUFLLGNBQWxCMUIsaUNBQUFBLEtBQUFBLElBQUFBLG9CQUFvQnVCLEtBQUs7UUFDbkM7SUFDSjtJQUVBLGVBQWVRLGdCQUFnQjtRQUMzQixNQUFNQyxrQkFBa0IsTUFBTWpCLE1BQU0sdUVBQW9GLE9BQWJ4QixxQkFBQUEsc0JBQUFBLEtBQUFBLElBQUFBLFNBQVUrQixFQUFFLEVBQUM7UUFDeEgsTUFBTVcsUUFBUSxDQUFDLE1BQU1ELGdCQUFnQmYsSUFBSSxFQUFDLEVBQUdHLElBQUksQ0FBQzdCLHFCQUFBQSxzQkFBQUEsS0FBQUEsSUFBQUEsU0FBVStCLEVBQUUsQ0FBRSxDQUFDVyxLQUFLO1FBRXRFLE1BQU1DLElBQVUsRUFBRTtRQUNsQixLQUFLLE1BQU10QyxRQUFRcUMsTUFBTztZQUN0QkMsRUFBRWIsSUFBSSxDQUFDO2dCQUNIQyxJQUFJMUIsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNdUMsR0FBRztnQkFDYlosT0FBTzNCLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsS0FBTTRCLElBQUk7WUFDckI7UUFDSjtRQUVBakIsWUFBWTJCO1FBRVosTUFBTVIsT0FBT0MsS0FBS0MsS0FBSyxDQUFDRCxLQUFLRSxNQUFNLEtBQUtJLE1BQU1ILE1BQU07UUFDcERqQyxRQUFRO1lBQ0p5QixJQUFJVyxLQUFLLENBQUNQLEtBQUssQ0FBQ1MsR0FBRztZQUNuQlgsTUFBTVMsS0FBSyxDQUFDUCxLQUFLLENBQUNGLElBQUk7UUFDMUI7UUFFQTdCLFdBQVcsS0FBSztJQUNwQjtJQUVBZCxnREFBU0EsQ0FBQyxJQUFNO1FBQ1pnQztJQUNKLEdBQUcsRUFBRTtJQUVMaEMsZ0RBQVNBLENBQUMsSUFBTTtRQUNaLElBQUltQixhQUFhOEIsTUFBTSxHQUFHLEtBQUssQ0FBQ3ZDLFVBQVU7WUFDdENrQztRQUNKLENBQUM7SUFDTCxHQUFHO1FBQUN6QjtLQUFhO0lBRWpCbkIsZ0RBQVNBLENBQUMsSUFBTTtRQUNaLElBQUlVLGFBQWFFLFdBQVc7WUFDeEJzQztRQUNKLENBQUM7SUFDTCxHQUFHO1FBQUN4QztLQUFTO0lBRWIsU0FBUzZDLFlBQVlDLENBQWlDLEVBQUVDLEtBQXNCLEVBQUU7UUFDNUUsSUFBSSxDQUFDQSxTQUFTQSxDQUFBQSxrQkFBQUEsbUJBQUFBLEtBQUFBLElBQUFBLE1BQU9oQixFQUFFLE1BQUs3QixXQUFXO1FBQ3ZDWSxTQUFTaUM7UUFDVCxJQUFJQSxDQUFBQSxrQkFBQUEsbUJBQUFBLEtBQUFBLElBQUFBLE1BQU9oQixFQUFFLE1BQUsvQixDQUFBQSxxQkFBQUEsc0JBQUFBLEtBQUFBLElBQUFBLFNBQVUrQixFQUFFLEdBQUU7WUFDNUJiLHlCQUF5QixJQUFJO1FBQ2pDLE9BQU87WUFDSCxNQUFNOEIsSUFBSXpDO1lBQ1ZDLFNBQVN3QyxJQUFJO1lBQ2IsTUFBTUMsU0FBU3hDLGFBQWF5QyxNQUFNLENBQUNDLENBQUFBLElBQUtBLEVBQUVwQixFQUFFLEtBQUtnQixNQUFNaEIsRUFBRTtZQUV6RCxNQUFNcUIsVUFBVXpDLFVBQVVtQixJQUFJLENBQUM7Z0JBQzNCLEdBQUdpQixLQUFLO2dCQUNSTSxTQUFTLEtBQUs7WUFDbEI7WUFFQXpDLGFBQWF3QztZQUNiMUMsZ0JBQWdCdUM7WUFDaEJuQyxTQUFTLElBQUk7UUFDakIsQ0FBQztJQUNMO0lBRUEsU0FBU3dDLGdCQUFnQkMsS0FBZ0MsRUFBRUMsS0FBZ0IsRUFBRTtRQUN6RSxJQUFJRCxNQUFNRSxNQUFNLENBQUNWLEtBQUssS0FBSzFDLENBQUFBLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsS0FBTTBCLEVBQUUsR0FBRTtZQUNqQ1gscUJBQXFCLElBQUk7UUFDN0IsT0FBTztZQUNILE1BQU1zQixRQUFRM0IsU0FBU21DLE1BQU0sQ0FBQ0MsQ0FBQUEsSUFBS0EsRUFBRXBCLEVBQUUsS0FBS3dCLE1BQU1FLE1BQU0sQ0FBQ1YsS0FBSztZQUM5RC9CLFlBQVkwQjtRQUNoQixDQUFDO0lBQ0w7SUFFQSxJQUFJdkMsU0FBUztRQUNULHFCQUNJLDhEQUFDdUQ7WUFBUUMsV0FBVTs7OEJBQ2YsOERBQUN2RSxrREFBSUE7OEJBQ0QsNEVBQUN3RTtrQ0FBTTs7Ozs7Ozs7Ozs7OEJBRVgsOERBQUN2RSxxREFBU0E7b0JBQUNzRSxXQUFVOzs7Ozs7Ozs7Ozs7SUFHakMsQ0FBQztJQUVELHFCQUNJLDhEQUFDRDtRQUFRQyxXQUFVOzswQkFDZiw4REFBQ3ZFLGtEQUFJQTswQkFDRCw0RUFBQ3dFOzhCQUFNOzs7Ozs7Ozs7OzswQkFHWCw4REFBQ0M7MEJBQUc7Ozs7OzswQkFFSiw4REFBQ0g7Z0JBQVFDLFdBQVU7MEJBRVgzRCxhQUFhRSxhQUFhRyxTQUFTSCwyQkFDL0IsOERBQUM0RDtvQkFBSUMsT0FDRDt3QkFDSUMsWUFBWSxtRUFBa0YzRCxPQUFmTCxTQUFTK0IsRUFBRSxFQUFDLEtBQVcsT0FBUjFCLEtBQUswQixFQUFFLEVBQUM7d0JBQ3RHa0MsT0FBTyxHQUFxRCxPQUFsRGhELHdCQUF3QixPQUFPLE1BQU9WLFFBQVEsRUFBRyxFQUFDO3dCQUM1RDJELFFBQVEsR0FBb0QsT0FBakRqRCx3QkFBd0IsTUFBTSxNQUFPVixRQUFRLEVBQUcsRUFBQzt3QkFDNUQ0RCxVQUFVO3dCQUNWQyxXQUFXO3dCQUNYQyxRQUFRcEQsd0JBQXdCLG9CQUFvQixpQkFBaUI7b0JBQ3pFOzs7Ozs7Ozs7OzswQkFPaEIsOERBQUNxRDs7Ozs7MEJBRUQsOERBQUM3RSx1REFBWUE7Z0JBQ1Q4RSxhQUFhO2dCQUNieEMsSUFBSTtnQkFDSnlDLFVBQVUsS0FBSztnQkFDZkMsU0FBU0MsQ0FBQUEsU0FBVUEsT0FBTzFDLEtBQUssQ0FBQzJDLE1BQU0sQ0FBQyxHQUFHQyxXQUFXO2dCQUNyREMsU0FBU3BFLGFBQWFxRSxJQUFJLENBQUMsQ0FBQ0MsR0FBR0MsSUFBTSxDQUFDQSxFQUFFaEQsS0FBSyxDQUFDMkMsTUFBTSxDQUFDLEdBQUdDLFdBQVcsR0FBR0ssYUFBYSxDQUFDRixFQUFFL0MsS0FBSyxDQUFDMkMsTUFBTSxDQUFDLEdBQUdDLFdBQVc7Z0JBQ2pIN0IsT0FBT2xDO2dCQUNQcUUsWUFBWTtnQkFDWkMsVUFBVWxFO2dCQUNWSSxLQUFLQTtnQkFDTCtELGFBQWEsQ0FBQ0MsdUJBQVcsOERBQUMzRixvREFBU0E7d0JBQUUsR0FBRzJGLE1BQU07d0JBQUVyRCxPQUFNOztnQkFDdERzRCxVQUFVLENBQUN4QyxHQUFHQyxRQUFVRixZQUFZQyxHQUFHQztnQkFDdkNnQixPQUFPO29CQUFFLFNBQVM7Z0JBQU87Z0JBQ3pCd0IsY0FBYyxDQUFDQyxPQUFPZCx1QkFDbEIsOERBQUM1RSw0Q0FBR0E7d0JBQUMyRixXQUFVO3dCQUFLQyxJQUFJOzRCQUFFLFdBQVc7Z0NBQUVDLElBQUk7Z0NBQUdDLFlBQVk7NEJBQUU7d0JBQUU7d0JBQUksR0FBR0osS0FBSzs7MENBQ3RFLDhEQUFDSztnQ0FBSTVCLE9BQU07Z0NBQUs2QixLQUFLLGdFQUEwRSxPQUFWcEIsT0FBTzNDLEVBQUUsRUFBQzs7NEJBQzlGMkMsT0FBTzFDLEtBQUs7Ozs7Ozs7O1lBT3JCZix1Q0FDSSw4REFBQ3RCLGlEQUFNQTtnQkFDSG9FLE9BQU87b0JBQUUsU0FBUztnQkFBTztnQkFDekJ1QixVQUFVLENBQUN4QyxHQUFHVSxRQUFVRixnQkFBZ0JSLEdBQWdDVTtnQkFDeEV6QixJQUFHO2dCQUNIQyxPQUFNO2dCQUNObUQsVUFBVWhFOztrQ0FFViw4REFBQ3ZCLG1EQUFRQTt3QkFBQ21ELE9BQU07a0NBQUc7Ozs7OztvQkFFZmhDLFNBQVNnRixHQUFHLENBQUMsQ0FBQ0MsS0FBS0Msb0JBQ2YsOERBQUNyRyxtREFBUUE7NEJBQW9CbUQsT0FBT2lELElBQUlqRSxFQUFFO3NDQUFHaUUsSUFBSWhFLEtBQUs7MkJBQXZDLE9BQVcsT0FBSmlFOzs7Ozs7Ozs7OztZQVF0QzlFLG1DQUNJOztrQ0FDSSw4REFBQzBDO2tDQUFHOzs7Ozs7a0NBQ0osOERBQUNoRSxpREFBTUE7d0JBQUNxRyxTQUFTLElBQU1DLE9BQU9DLFFBQVEsQ0FBQ0MsTUFBTTtrQ0FBSTs7Ozs7Ozs7WUFNekQxRjs7Ozs7OztBQU1oQixDQUFDO0dBdk11Qlo7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IEZhU3Bpbm5lciB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcbmltcG9ydCB7IFJlYWN0Tm9kZSwgU3ludGhldGljRXZlbnQsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEF1dG9jb21wbGV0ZSwgVGV4dEZpZWxkLCBTZWxlY3QsIE1lbnVJdGVtLCBTZWxlY3RDaGFuZ2VFdmVudCwgQnV0dG9uIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XG5pbXBvcnQgeyBCb3ggfSBmcm9tICdAbXVpL3N5c3RlbSc7XG5cbmludGVyZmFjZSBDaGFtcGlvbiB7XG4gICAgaWQ6IHN0cmluZyxcbiAgICBuYW1lOiBzdHJpbmdcbn1cblxuaW50ZXJmYWNlIFNraW4ge1xuICAgIGlkOiBudW1iZXIsXG4gICAgbmFtZTogc3RyaW5nXG59XG5cbmludGVyZmFjZSBMaXN0SXRlbSB7XG4gICAgaWQ6IHN0cmluZyxcbiAgICBsYWJlbDogc3RyaW5nLFxuICAgIGNvcnJlY3Q/OiBib29sZWFuXG59XG5pbnRlcmZhY2UgTGlzdCBleHRlbmRzIEFycmF5PExpc3RJdGVtPiB7IH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgICBjb25zdCBbY2hhbXBpb24sIHNldENoYW1waW9uXSA9IHVzZVN0YXRlPENoYW1waW9uIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpO1xuICAgIGNvbnN0IFtza2luLCBzZXRTa2luXSA9IHVzZVN0YXRlPFNraW4gfCB1bmRlZmluZWQ+KCk7XG4gICAgY29uc3QgW3RyaWVzLCBzZXRUcmllc10gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xuICAgIGNvbnN0IFtjaGFtcGlvbkxpc3QsIHNldENoYW1waW9uTGlzdF0gPSB1c2VTdGF0ZTxMaXN0PihbXSk7XG4gICAgY29uc3QgW2d1ZXNzTGlzdCwgc2V0R3Vlc3NMaXN0XSA9IHVzZVN0YXRlPExpc3Q+KFtdKTtcbiAgICBjb25zdCBbZ3Vlc3MsIHNldEd1ZXNzXSA9IHVzZVN0YXRlPExpc3RJdGVtIHwgbnVsbD4obnVsbCk7XG4gICAgY29uc3QgW3NraW5MaXN0LCBzZXRTa2luTGlzdF0gPSB1c2VTdGF0ZTxMaXN0PihbXSk7XG4gICAgY29uc3QgW2NvcnJlY3RBbnN3ZXJDaGFtcGlvbiwgc2V0Q29ycmVjdEFuc3dlckNoYW1waW9uXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgICBjb25zdCBbY29ycmVjdEFuc3dlclNraW4sIHNldENvcnJlY3RBbnN3ZXJTa2luXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgICBjb25zdCByZWYgPSB1c2VSZWYoKTtcblxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldENoYW1waW9ucygpIHtcbiAgICAgICAgY29uc3QgY2hhbXBpb25zUmVxdWVzdCA9IGF3YWl0IGZldGNoKCdodHRwczovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9jZG4vMTIuMjMuMS9kYXRhL2VuX0dCL2NoYW1waW9uLmpzb24nKTtcbiAgICAgICAgY29uc3QgY2hhbXBpb25zID0gYXdhaXQgY2hhbXBpb25zUmVxdWVzdC5qc29uKCk7XG4gICAgICAgIGNvbnN0IGNoYW1waW9uQXJyYXk6IExpc3QgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gY2hhbXBpb25zLmRhdGEpIHtcbiAgICAgICAgICAgIGNoYW1waW9uQXJyYXkucHVzaCh7XG4gICAgICAgICAgICAgICAgaWQ6IGNoYW1waW9ucy5kYXRhW2tleV0uaWQsXG4gICAgICAgICAgICAgICAgbGFiZWw6IGNoYW1waW9ucy5kYXRhW2tleV0ubmFtZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgc2V0Q2hhbXBpb25MaXN0KGNoYW1waW9uQXJyYXkpO1xuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldFJhbmRvbUNoYW1waW9uKCkge1xuICAgICAgICBjb25zdCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhbXBpb25MaXN0Lmxlbmd0aCk7XG4gICAgICAgIHNldENoYW1waW9uKHtcbiAgICAgICAgICAgIGlkOiBjaGFtcGlvbkxpc3RbcmFuZF0/LmlkLFxuICAgICAgICAgICAgbmFtZTogY2hhbXBpb25MaXN0W3JhbmRdPy5sYWJlbFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBnZXRSYW5kb21Ta2luKCkge1xuICAgICAgICBjb25zdCBjaGFtcGlvblJlcXVlc3QgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuLzEyLjIzLjEvZGF0YS9lbl9HQi9jaGFtcGlvbi8ke2NoYW1waW9uPy5pZH0uanNvbmApO1xuICAgICAgICBjb25zdCBza2lucyA9IChhd2FpdCBjaGFtcGlvblJlcXVlc3QuanNvbigpKS5kYXRhW2NoYW1waW9uPy5pZCFdLnNraW5zO1xuXG4gICAgICAgIGNvbnN0IHM6IExpc3QgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBza2luIG9mIHNraW5zKSB7XG4gICAgICAgICAgICBzLnB1c2goe1xuICAgICAgICAgICAgICAgIGlkOiBza2luPy5udW0sXG4gICAgICAgICAgICAgICAgbGFiZWw6IHNraW4/Lm5hbWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBzZXRTa2luTGlzdChzKTtcblxuICAgICAgICBjb25zdCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc2tpbnMubGVuZ3RoKTtcbiAgICAgICAgc2V0U2tpbih7XG4gICAgICAgICAgICBpZDogc2tpbnNbcmFuZF0ubnVtLFxuICAgICAgICAgICAgbmFtZTogc2tpbnNbcmFuZF0ubmFtZVxuICAgICAgICB9KTtcblxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBnZXRDaGFtcGlvbnMoKTtcbiAgICB9LCBbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoY2hhbXBpb25MaXN0Lmxlbmd0aCA+IDAgJiYgIWNoYW1waW9uKSB7XG4gICAgICAgICAgICBnZXRSYW5kb21DaGFtcGlvbigpO1xuICAgICAgICB9XG4gICAgfSwgW2NoYW1waW9uTGlzdF0pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGNoYW1waW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGdldFJhbmRvbVNraW4oKTtcbiAgICAgICAgfVxuICAgIH0sIFtjaGFtcGlvbl0pO1xuXG4gICAgZnVuY3Rpb24gY2hlY2tBbnN3ZXIoZTogU3ludGhldGljRXZlbnQ8RWxlbWVudCwgRXZlbnQ+LCB2YWx1ZTogTGlzdEl0ZW0gfCBudWxsKSB7XG4gICAgICAgIGlmICghdmFsdWUgfHwgdmFsdWU/LmlkID09PSB1bmRlZmluZWQpIHJldHVybjtcbiAgICAgICAgc2V0R3Vlc3ModmFsdWUpO1xuICAgICAgICBpZiAodmFsdWU/LmlkID09PSBjaGFtcGlvbj8uaWQpIHtcbiAgICAgICAgICAgIHNldENvcnJlY3RBbnN3ZXJDaGFtcGlvbih0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHQgPSB0cmllcztcbiAgICAgICAgICAgIHNldFRyaWVzKHQgKyAxKTtcbiAgICAgICAgICAgIGNvbnN0IGNoYW1wcyA9IGNoYW1waW9uTGlzdC5maWx0ZXIoYyA9PiBjLmlkICE9PSB2YWx1ZS5pZCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGd1ZXNzZXMgPSBndWVzc0xpc3QucHVzaCh7XG4gICAgICAgICAgICAgICAgLi4udmFsdWUsXG4gICAgICAgICAgICAgICAgY29ycmVjdDogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBzZXRHdWVzc0xpc3QoZ3Vlc3Nlcyk7XG4gICAgICAgICAgICBzZXRDaGFtcGlvbkxpc3QoY2hhbXBzKTtcbiAgICAgICAgICAgIHNldEd1ZXNzKG51bGwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tTa2luQW5zd2VyKGV2ZW50OiBTZWxlY3RDaGFuZ2VFdmVudDxudW1iZXI+LCBjaGlsZDogUmVhY3ROb2RlKSB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQudmFsdWUgPT09IHNraW4/LmlkKSB7XG4gICAgICAgICAgICBzZXRDb3JyZWN0QW5zd2VyU2tpbih0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHNraW5zID0gc2tpbkxpc3QuZmlsdGVyKGMgPT4gYy5pZCAhPT0gZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgIHNldFNraW5MaXN0KHNraW5zKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChsb2FkaW5nKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT5MZWFndWUgU3BsYXNoIFF1aXo8L3RpdGxlPlxuICAgICAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgICAgICA8RmFTcGlubmVyIGNsYXNzTmFtZT0nc3Bpbm5lcicgLz5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+TGVhZ3VlIFNwbGFzaCBRdWl6PC90aXRsZT5cbiAgICAgICAgICAgIDwvSGVhZD5cblxuICAgICAgICAgICAgPGgxPkxlYWd1ZSBTcGxhc2ggUXVpejwvaDE+XG5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nc3BsYXNoJz5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNoYW1waW9uICE9PSB1bmRlZmluZWQgJiYgc2tpbiAhPT0gdW5kZWZpbmVkICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYHVybChodHRwczovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9jZG4vaW1nL2NoYW1waW9uL3NwbGFzaC8ke2NoYW1waW9uLmlkfV8ke3NraW4uaWR9LmpwZykgY2VudGVyIGNlbnRlcmAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBgJHtjb3JyZWN0QW5zd2VyQ2hhbXBpb24gPyAxMjE1IDogMTUwICsgKHRyaWVzICogMjUpfXB4YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBgJHtjb3JyZWN0QW5zd2VyQ2hhbXBpb24gPyA3MTcgOiAxNTAgKyAodHJpZXMgKiAyNSl9cHhgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzEyMTVweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogJzcxN3B4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBjb3JyZWN0QW5zd2VyQ2hhbXBpb24gPyAnM3B4IHNvbGlkIGdyZWVuJyA6ICcwcHggc29saWQgZ3JlZW4nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSAvPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuXG5cbiAgICAgICAgICAgIDxiciAvPlxuXG4gICAgICAgICAgICA8QXV0b2NvbXBsZXRlXG4gICAgICAgICAgICAgICAgZGlzYWJsZVBvcnRhbFxuICAgICAgICAgICAgICAgIGlkPXsnY29tYm9ib3gtaWQnfVxuICAgICAgICAgICAgICAgIG11bHRpcGxlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICBncm91cEJ5PXtvcHRpb24gPT4gb3B0aW9uLmxhYmVsLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfVxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e2NoYW1waW9uTGlzdC5zb3J0KChhLCBiKSA9PiAtYi5sYWJlbC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKS5sb2NhbGVDb21wYXJlKGEubGFiZWwuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkpKX1cbiAgICAgICAgICAgICAgICB2YWx1ZT17Z3Vlc3N9XG4gICAgICAgICAgICAgICAgYmx1ck9uU2VsZWN0XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2NvcnJlY3RBbnN3ZXJDaGFtcGlvbn1cbiAgICAgICAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT4gPFRleHRGaWVsZCB7Li4ucGFyYW1zfSBsYWJlbD1cIkNoYW1waW9uXCIgLz59XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlLCB2YWx1ZSkgPT4gY2hlY2tBbnN3ZXIoZSwgdmFsdWUpfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7ICd3aWR0aCc6ICcyNXZ3JyB9fVxuICAgICAgICAgICAgICAgIHJlbmRlck9wdGlvbj17KHByb3BzLCBvcHRpb24pID0+IChcbiAgICAgICAgICAgICAgICAgICAgPEJveCBjb21wb25lbnQ9XCJsaVwiIHN4PXt7ICcmID4gaW1nJzogeyBtcjogMiwgZmxleFNocmluazogMCB9IH19IHsuLi5wcm9wc30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHdpZHRoPVwiNTBcIiBzcmM9e2BodHRwczovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9jZG4vMTIuMjMuMS9pbWcvY2hhbXBpb24vJHtvcHRpb24uaWR9LnBuZ2B9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7b3B0aW9uLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgLz5cblxuXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29ycmVjdEFuc3dlckNoYW1waW9uICYmIChcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgJ3dpZHRoJzogJzI1dncnIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUsIGNoaWxkKSA9PiBjaGVja1NraW5BbnN3ZXIoZSBhcyBTZWxlY3RDaGFuZ2VFdmVudDxudW1iZXI+LCBjaGlsZCl9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZD0nc2VsZWN0LXNraW4taWQnXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNraW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2NvcnJlY3RBbnN3ZXJTa2lufVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJcIj5Ob25lPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBza2luTGlzdC5tYXAoKHJvdywgaWR4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9e2Bza2luJHtpZHh9YH0gdmFsdWU9e3Jvdy5pZH0+e3Jvdy5sYWJlbH08L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvcnJlY3RBbnN3ZXJTa2luICYmIChcbiAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5Db3JyZWN0IEFuc3dlciE8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCl9Pk5ldyBnYW1lPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGd1ZXNzTGlzdFxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgPC9zZWN0aW9uID5cbiAgICApXG59XG4iXSwibmFtZXMiOlsiSGVhZCIsIkZhU3Bpbm5lciIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiQXV0b2NvbXBsZXRlIiwiVGV4dEZpZWxkIiwiU2VsZWN0IiwiTWVudUl0ZW0iLCJCdXR0b24iLCJCb3giLCJIb21lIiwiY2hhbXBpb24iLCJzZXRDaGFtcGlvbiIsInVuZGVmaW5lZCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic2tpbiIsInNldFNraW4iLCJ0cmllcyIsInNldFRyaWVzIiwiY2hhbXBpb25MaXN0Iiwic2V0Q2hhbXBpb25MaXN0IiwiZ3Vlc3NMaXN0Iiwic2V0R3Vlc3NMaXN0IiwiZ3Vlc3MiLCJzZXRHdWVzcyIsInNraW5MaXN0Iiwic2V0U2tpbkxpc3QiLCJjb3JyZWN0QW5zd2VyQ2hhbXBpb24iLCJzZXRDb3JyZWN0QW5zd2VyQ2hhbXBpb24iLCJjb3JyZWN0QW5zd2VyU2tpbiIsInNldENvcnJlY3RBbnN3ZXJTa2luIiwicmVmIiwiZ2V0Q2hhbXBpb25zIiwiY2hhbXBpb25zUmVxdWVzdCIsImZldGNoIiwiY2hhbXBpb25zIiwianNvbiIsImNoYW1waW9uQXJyYXkiLCJrZXkiLCJkYXRhIiwicHVzaCIsImlkIiwibGFiZWwiLCJuYW1lIiwiZ2V0UmFuZG9tQ2hhbXBpb24iLCJyYW5kIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwiZ2V0UmFuZG9tU2tpbiIsImNoYW1waW9uUmVxdWVzdCIsInNraW5zIiwicyIsIm51bSIsImNoZWNrQW5zd2VyIiwiZSIsInZhbHVlIiwidCIsImNoYW1wcyIsImZpbHRlciIsImMiLCJndWVzc2VzIiwiY29ycmVjdCIsImNoZWNrU2tpbkFuc3dlciIsImV2ZW50IiwiY2hpbGQiLCJ0YXJnZXQiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwidGl0bGUiLCJoMSIsImRpdiIsInN0eWxlIiwiYmFja2dyb3VuZCIsIndpZHRoIiwiaGVpZ2h0IiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJib3JkZXIiLCJiciIsImRpc2FibGVQb3J0YWwiLCJtdWx0aXBsZSIsImdyb3VwQnkiLCJvcHRpb24iLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsIm9wdGlvbnMiLCJzb3J0IiwiYSIsImIiLCJsb2NhbGVDb21wYXJlIiwiYmx1ck9uU2VsZWN0IiwiZGlzYWJsZWQiLCJyZW5kZXJJbnB1dCIsInBhcmFtcyIsIm9uQ2hhbmdlIiwicmVuZGVyT3B0aW9uIiwicHJvcHMiLCJjb21wb25lbnQiLCJzeCIsIm1yIiwiZmxleFNocmluayIsImltZyIsInNyYyIsIm1hcCIsInJvdyIsImlkeCIsIm9uQ2xpY2siLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});