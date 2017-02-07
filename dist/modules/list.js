/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(91)
	var __weex_template__ = __webpack_require__(92)
	var __weex_style__ = __webpack_require__(93)
	var __weex_script__ = __webpack_require__(94)
	
	__weex_define__('@weex-component/1a276c34e9e7659485f0d84b0768fd15', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})
	
	__weex_bootstrap__('@weex-component/1a276c34e9e7659485f0d84b0768fd15',undefined,undefined)

/***/ },

/***/ 91:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(91)
	var __weex_template__ = __webpack_require__(92)
	var __weex_style__ = __webpack_require__(93)
	var __weex_script__ = __webpack_require__(94)
	
	__weex_define__('@weex-component/list', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})


/***/ },

/***/ 92:
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "children": [
	    {
	      "type": "list",
	      "classList": [
	        "list"
	      ],
	      "children": [
	        {
	          "type": "refresh",
	          "classList": [
	            "refresh-view"
	          ],
	          "attr": {
	            "display": function () {return this.refresh_display}
	          },
	          "events": {
	            "refresh": "onrefresh"
	          },
	          "children": [
	            {
	              "type": "text",
	              "shown": function () {return (this.refresh_display==='hide')},
	              "attr": {
	                "value": "↓ pull to refresh"
	              }
	            },
	            {
	              "type": "loading-indicator",
	              "classList": [
	                "indicator"
	              ]
	            }
	          ]
	        },
	        {
	          "type": "cell",
	          "append": "tree",
	          "events": {
	            "appear": "onappear",
	            "disappear": "ondisappear"
	          },
	          "classList": [
	            "row"
	          ],
	          "repeat": function () {return this.rows},
	          "attr": {
	            "index": function () {return this.$index}
	          },
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "item"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "item-title"
	                  ],
	                  "attr": {
	                    "value": function () {return 'row ' + (this.id)}
	                  }
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "loading",
	          "classList": [
	            "loading-view"
	          ],
	          "attr": {
	            "display": function () {return this.loading_display}
	          },
	          "events": {
	            "loading": "onloading"
	          },
	          "children": [
	            {
	              "type": "text",
	              "shown": function () {return (this.loading_display==='hide')},
	              "attr": {
	                "value": "↑ Loadmore"
	              }
	            },
	            {
	              "type": "loading-indicator",
	              "classList": [
	                "indicator"
	              ]
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "text",
	      "classList": [
	        "count"
	      ],
	      "attr": {
	        "value": function () {return 'Appear items:' + (this.appearMin) + ' - ' + (this.appearMax)}
	      }
	    }
	  ]
	}

/***/ },

/***/ 93:
/***/ function(module, exports) {

	module.exports = {
	  "list": {
	    "height": 850
	  },
	  "count": {
	    "fontSize": 48,
	    "margin": 10
	  },
	  "indicator": {
	    "height": 60,
	    "width": 60,
	    "color": "#889967"
	  },
	  "refresh-arrow": {
	    "fontSize": 30,
	    "color": "#45b5f0"
	  },
	  "row": {
	    "width": 750
	  },
	  "item": {
	    "justifyContent": "center",
	    "borderBottomWidth": 2,
	    "borderBottomColor": "#c0c0c0",
	    "height": 100,
	    "padding": 20
	  },
	  "refresh-view": {
	    "width": 750,
	    "height": 100,
	    "display": "flex",
	    "MsFlexAlign": "center",
	    "WebkitAlignItems": "center",
	    "WebkitBoxAlign": "center",
	    "alignItems": "center"
	  },
	  "loading-view": {
	    "width": 750,
	    "height": 100,
	    "display": "flex",
	    "MsFlexAlign": "center",
	    "WebkitAlignItems": "center",
	    "WebkitBoxAlign": "center",
	    "alignItems": "center"
	  }
	}

/***/ },

/***/ 94:
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	module.exports = {
	    methods: {
	        onappear: function onappear(e) {
	            var appearId = this.rows[e.target.attr.index].id;
	            nativeLog('+++++', appearId);
	            var appearIds = this.appearIds;
	            appearIds.push(appearId);
	            this.getMinAndMaxIds(appearIds);
	        },
	        ondisappear: function ondisappear(e) {
	            var disAppearId = this.rows[e.target.attr.index].id;
	            nativeLog('+++++', disAppearId);
	            var appearIds = this.appearIds;
	            var index = appearIds.indexOf(disAppearId);
	            if (index > -1) {
	                appearIds.splice(index, 1);
	            }
	            this.getMinAndMaxIds(appearIds);
	        },
	        getMinAndMaxIds: function getMinAndMaxIds(appearIds) {
	            appearIds.sort(function (a, b) {
	                return a - b;
	            });
	            this.appearIds = appearIds;
	            this.appearMax = appearIds[appearIds.length - 1];
	            this.appearMin = appearIds[0];
	        },
	        onrefresh: function onrefresh(e) {
	            var self = this;
	            self.refresh_display = 'show';
	            self.$call('modal', 'toast', {
	                'message': 'onrefresh'
	            });
	
	            this.$call('timer', 'setTimeout', function () {
	                self.refresh_display = 'hide';
	            }, 3000);
	        },
	
	        onloading: function onloading() {
	            var self = this;
	            self.loading_display = 'show';
	            self.$call('modal', 'toast', {
	                'message': 'onloading'
	            });
	
	            this.$call('timer', 'setTimeout', function () {
	                if (self.rows.length <= 33) {
	                    self.rows.push(self.moreRows[self.rows.length - 29]);
	                }
	                self.loading_display = 'hide';
	            }, 3000);
	        }
	    },
	    data: function () {return {
	        refresh_display: 'hide',
	        loading_display: 'hide',
	        appearMin: 1,
	        appearMax: 1,
	        appearIds: [],
	        rows: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 }, { id: 11 }, { id: 12 }, { id: 13 }, { id: 14 }, { id: 15 }, { id: 16 }, { id: 17 }, { id: 18 }, { id: 19 }, { id: 20 }, { id: 21 }, { id: 22 }, { id: 23 }, { id: 24 }, { id: 25 }, { id: 26 }, { id: 27 }, { id: 28 }, { id: 29 }],
	        moreRows: [{ id: 30 }, { id: 31 }, { id: 32 }, { id: 33 }]
	    }}
	};}
	/* generated by weex-loader */


/***/ }

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjZhNzUxYmNjODEzYzg1MzJjNDI/NjhhZioqKioqIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2xpc3Qud2U/YTgwOCIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9saXN0LndlPzY0NDEqIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2xpc3Qud2U/MzlkMSoiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvbGlzdC53ZT8wMmQwKiIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9saXN0LndlP2E0NTUqIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxFQUFDOztBQUVELDJGOzs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLEVBQUM7Ozs7Ozs7O0FDaEJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFvQztBQUNwQyxZQUFXO0FBQ1g7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxxQ0FBb0MsdUNBQXVDO0FBQzNFO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0Esa0NBQWlDLGlCQUFpQjtBQUNsRDtBQUNBLG1DQUFrQztBQUNsQyxZQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBb0M7QUFDcEMsWUFBVztBQUNYO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EscUNBQW9DLHVDQUF1QztBQUMzRTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7O0FDN0dBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7O0FDc0NBOzt3Q0FHQTsyREFDQTtnQ0FDQTtrQ0FDQTs0QkFDQTtrQ0FDQTtBQUNBOzhDQUNBOzhEQUNBO2dDQUNBO2tDQUNBOzJDQUNBOzZCQUNBO3lDQUNBO0FBQ0E7a0NBQ0E7QUFDQTs4REFDQTs0Q0FDQTs0QkFDQTtBQUNBOzhCQUNBOzJEQUNBO3dDQUNBO0FBQ0E7MENBQ0E7d0JBQ0E7b0NBQ0E7OzRCQUlBO0FBSEE7OzJEQUlBO3dDQUNBO2dCQUNBO0FBRUE7O3lDQUNBO3dCQUNBO29DQUNBOzs0QkFJQTtBQUhBOzsyREFJQTs2Q0FDQTtxRUFDQTtBQUNBO3dDQUNBO2dCQUNBO0FBRUE7QUFwREE7OzBCQXNEQTswQkFDQTtvQkFDQTtvQkFDQTtvQkFDQTtlQUNBLE9BQ0EsV0FDQSxXQUNBLFdBQ0EsV0FDQSxXQUNBLFdBQ0EsV0FDQSxXQUNBLFdBQ0EsWUFDQSxZQUNBLFlBQ0EsWUFDQSxZQUNBLFlBQ0EsWUFDQSxZQUNBLFlBQ0EsWUFDQSxZQUNBLFlBQ0EsWUFDQSxZQUNBLFlBQ0EsWUFDQSxZQUNBLFlBQ0EsWUFFQTttQkFDQSxPQUNBLFlBQ0EsWUFDQSxZQUdBO0FBM0NBO0FBdERBIiwiZmlsZSI6Im1vZHVsZXNcXGxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA2NmE3NTFiY2M4MTNjODUzMmM0MiIsInJlcXVpcmUoXCIuL2xpc3Qud2VcIilcbnZhciBfX3dlZXhfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vbGlzdC53ZVwiKVxudmFyIF9fd2VleF9zdHlsZV9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi9saXN0LndlXCIpXG52YXIgX193ZWV4X3NjcmlwdF9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL3NjcmlwdC5qcyFiYWJlbC1sb2FkZXI/cHJlc2V0c1tdPUU6XFxcXHdlZXhcXFxcc3ZuXFxcXGxianBcXFxcdHJ1bmtcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcHJlc2V0cz1FOlxcXFx3ZWV4XFxcXHN2blxcXFxsYmpwXFxcXHRydW5rXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnBsdWdpbnNbXT1FOlxcXFx3ZWV4XFxcXHN2blxcXFxsYmpwXFxcXHRydW5rXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmcGx1Z2lucz1FOlxcXFx3ZWV4XFxcXHN2blxcXFxsYmpwXFxcXHRydW5rXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmY29tbWVudHM9ZmFsc2UhLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi9saXN0LndlXCIpXG5cbl9fd2VleF9kZWZpbmVfXygnQHdlZXgtY29tcG9uZW50LzFhMjc2YzM0ZTllNzY1OTQ4NWYwZDg0YjA3NjhmZDE1JywgW10sIGZ1bmN0aW9uKF9fd2VleF9yZXF1aXJlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9tb2R1bGVfXykge1xuXG4gICAgX193ZWV4X3NjcmlwdF9fKF9fd2VleF9tb2R1bGVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X3JlcXVpcmVfXylcbiAgICBpZiAoX193ZWV4X2V4cG9ydHNfXy5fX2VzTW9kdWxlICYmIF9fd2VleF9leHBvcnRzX18uZGVmYXVsdCkge1xuICAgICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMgPSBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHRcbiAgICB9XG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy50ZW1wbGF0ZSA9IF9fd2VleF90ZW1wbGF0ZV9fXG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy5zdHlsZSA9IF9fd2VleF9zdHlsZV9fXG5cbn0pXG5cbl9fd2VleF9ib290c3RyYXBfXygnQHdlZXgtY29tcG9uZW50LzFhMjc2YzM0ZTllNzY1OTQ4NWYwZDg0YjA3NjhmZDE1Jyx1bmRlZmluZWQsdW5kZWZpbmVkKVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21vZHVsZXMvbGlzdC53ZT9lbnRyeT10cnVlXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsInJlcXVpcmUoXCIuL2xpc3Qud2VcIilcbnZhciBfX3dlZXhfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vbGlzdC53ZVwiKVxudmFyIF9fd2VleF9zdHlsZV9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi9saXN0LndlXCIpXG52YXIgX193ZWV4X3NjcmlwdF9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL3NjcmlwdC5qcyFiYWJlbC1sb2FkZXI/cHJlc2V0c1tdPUU6XFxcXHdlZXhcXFxcc3ZuXFxcXGxianBcXFxcdHJ1bmtcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcHJlc2V0cz1FOlxcXFx3ZWV4XFxcXHN2blxcXFxsYmpwXFxcXHRydW5rXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnBsdWdpbnNbXT1FOlxcXFx3ZWV4XFxcXHN2blxcXFxsYmpwXFxcXHRydW5rXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmcGx1Z2lucz1FOlxcXFx3ZWV4XFxcXHN2blxcXFxsYmpwXFxcXHRydW5rXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmY29tbWVudHM9ZmFsc2UhLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi9saXN0LndlXCIpXG5cbl9fd2VleF9kZWZpbmVfXygnQHdlZXgtY29tcG9uZW50L2xpc3QnLCBbXSwgZnVuY3Rpb24oX193ZWV4X3JlcXVpcmVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X21vZHVsZV9fKSB7XG5cbiAgICBfX3dlZXhfc2NyaXB0X18oX193ZWV4X21vZHVsZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfcmVxdWlyZV9fKVxuICAgIGlmIChfX3dlZXhfZXhwb3J0c19fLl9fZXNNb2R1bGUgJiYgX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0KSB7XG4gICAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cyA9IF9fd2VleF9leHBvcnRzX18uZGVmYXVsdFxuICAgIH1cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnRlbXBsYXRlID0gX193ZWV4X3RlbXBsYXRlX19cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnN0eWxlID0gX193ZWV4X3N0eWxlX19cblxufSlcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21vZHVsZXMvbGlzdC53ZVxuLy8gbW9kdWxlIGlkID0gOTFcbi8vIG1vZHVsZSBjaHVua3MgPSAzIDUgNiA3IDExIDEzIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJsaXN0XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwibGlzdFwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJyZWZyZXNoXCIsXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJyZWZyZXNoLXZpZXdcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwiZGlzcGxheVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucmVmcmVzaF9kaXNwbGF5fVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgXCJyZWZyZXNoXCI6IFwib25yZWZyZXNoXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwic2hvd25cIjogZnVuY3Rpb24gKCkge3JldHVybiAodGhpcy5yZWZyZXNoX2Rpc3BsYXk9PT0naGlkZScpfSxcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi4oaTIHB1bGwgdG8gcmVmcmVzaFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImxvYWRpbmctaW5kaWNhdG9yXCIsXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcImluZGljYXRvclwiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJjZWxsXCIsXG4gICAgICAgICAgXCJhcHBlbmRcIjogXCJ0cmVlXCIsXG4gICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgXCJhcHBlYXJcIjogXCJvbmFwcGVhclwiLFxuICAgICAgICAgICAgXCJkaXNhcHBlYXJcIjogXCJvbmRpc2FwcGVhclwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInJvd1wiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcInJlcGVhdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucm93c30sXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwiaW5kZXhcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiRpbmRleH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiaXRlbVwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJpdGVtLXRpdGxlXCJcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gJ3JvdyAnICsgKHRoaXMuaWQpfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImxvYWRpbmdcIixcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImxvYWRpbmctdmlld1wiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJkaXNwbGF5XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5sb2FkaW5nX2Rpc3BsYXl9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICBcImxvYWRpbmdcIjogXCJvbmxvYWRpbmdcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJzaG93blwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICh0aGlzLmxvYWRpbmdfZGlzcGxheT09PSdoaWRlJyl9LFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLihpEgTG9hZG1vcmVcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJsb2FkaW5nLWluZGljYXRvclwiLFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJpbmRpY2F0b3JcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiY291bnRcIlxuICAgICAgXSxcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiAnQXBwZWFyIGl0ZW1zOicgKyAodGhpcy5hcHBlYXJNaW4pICsgJyAtICcgKyAodGhpcy5hcHBlYXJNYXgpfVxuICAgICAgfVxuICAgIH1cbiAgXVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vc3JjL21vZHVsZXMvbGlzdC53ZVxuLy8gbW9kdWxlIGlkID0gOTJcbi8vIG1vZHVsZSBjaHVua3MgPSAzIDUgNiA3IDExIDEzIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwibGlzdFwiOiB7XG4gICAgXCJoZWlnaHRcIjogODUwXG4gIH0sXG4gIFwiY291bnRcIjoge1xuICAgIFwiZm9udFNpemVcIjogNDgsXG4gICAgXCJtYXJnaW5cIjogMTBcbiAgfSxcbiAgXCJpbmRpY2F0b3JcIjoge1xuICAgIFwiaGVpZ2h0XCI6IDYwLFxuICAgIFwid2lkdGhcIjogNjAsXG4gICAgXCJjb2xvclwiOiBcIiM4ODk5NjdcIlxuICB9LFxuICBcInJlZnJlc2gtYXJyb3dcIjoge1xuICAgIFwiZm9udFNpemVcIjogMzAsXG4gICAgXCJjb2xvclwiOiBcIiM0NWI1ZjBcIlxuICB9LFxuICBcInJvd1wiOiB7XG4gICAgXCJ3aWR0aFwiOiA3NTBcbiAgfSxcbiAgXCJpdGVtXCI6IHtcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJib3JkZXJCb3R0b21XaWR0aFwiOiAyLFxuICAgIFwiYm9yZGVyQm90dG9tQ29sb3JcIjogXCIjYzBjMGMwXCIsXG4gICAgXCJoZWlnaHRcIjogMTAwLFxuICAgIFwicGFkZGluZ1wiOiAyMFxuICB9LFxuICBcInJlZnJlc2gtdmlld1wiOiB7XG4gICAgXCJ3aWR0aFwiOiA3NTAsXG4gICAgXCJoZWlnaHRcIjogMTAwLFxuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcIk1zRmxleEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJXZWJraXRBbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJXZWJraXRCb3hBbGlnblwiOiBcImNlbnRlclwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwibG9hZGluZy12aWV3XCI6IHtcbiAgICBcIndpZHRoXCI6IDc1MCxcbiAgICBcImhlaWdodFwiOiAxMDAsXG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiTXNGbGV4QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcIldlYmtpdEFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcIldlYmtpdEJveEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vc3JjL21vZHVsZXMvbGlzdC53ZVxuLy8gbW9kdWxlIGlkID0gOTNcbi8vIG1vZHVsZSBjaHVua3MgPSAzIDUgNiA3IDExIDEzIiwiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxsaXN0IGNsYXNzPVwibGlzdFwiPlxuICAgICAgICAgICAgPHJlZnJlc2ggIGNsYXNzID0gXCJyZWZyZXNoLXZpZXdcIiBkaXNwbGF5PVwie3tyZWZyZXNoX2Rpc3BsYXl9fVwiIG9ucmVmcmVzaD1cIm9ucmVmcmVzaFwiPlxuICAgICAgICAgICAgICAgIDx0ZXh0IGlmPVwie3socmVmcmVzaF9kaXNwbGF5PT09J2hpZGUnKX19XCI+IOKGkyBwdWxsIHRvIHJlZnJlc2ggPC90ZXh0PlxuICAgICAgICAgICAgICAgIDxsb2FkaW5nLWluZGljYXRvciBjbGFzcz1cImluZGljYXRvclwiPjwvbG9hZGluZy1pbmRpY2F0b3I+XG4gICAgICAgICAgICA8L3JlZnJlc2g+XG4gICAgICAgICAgICA8Y2VsbCBvbmFwcGVhcj1cIm9uYXBwZWFyXCIgb25kaXNhcHBlYXI9XCJvbmRpc2FwcGVhclwiIGNsYXNzPVwicm93XCIgcmVwZWF0PVwie3tyb3dzfX1cIiBpbmRleD1cInt7JGluZGV4fX1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cIml0ZW0tdGl0bGVcIj5yb3cge3tpZH19PC90ZXh0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9jZWxsPlxuICAgICAgICAgICAgPGxvYWRpbmcgY2xhc3M9XCJsb2FkaW5nLXZpZXdcIiBkaXNwbGF5PVwie3tsb2FkaW5nX2Rpc3BsYXl9fVwiIG9ubG9hZGluZz1cIm9ubG9hZGluZ1wiPlxuICAgICAgICAgICAgICAgIDx0ZXh0IGlmPVwie3sobG9hZGluZ19kaXNwbGF5PT09J2hpZGUnKX19XCI+4oaRIExvYWRtb3JlIDwvdGV4dD5cbiAgICAgICAgICAgICAgICA8bG9hZGluZy1pbmRpY2F0b3IgY2xhc3M9XCJpbmRpY2F0b3JcIj48L2xvYWRpbmctaW5kaWNhdG9yPlxuICAgICAgICAgICAgPC9sb2FkaW5nPlxuICAgICAgICA8L2xpc3Q+XG4gICAgICAgIDx0ZXh0IGNsYXNzPVwiY291bnRcIj5BcHBlYXIgaXRlbXM6e3thcHBlYXJNaW59fSAtIHt7YXBwZWFyTWF4fX08L3RleHQ+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c3R5bGU+XG4gICAgLmxpc3Qge1xuICAgICAgICBoZWlnaHQ6ODUwXG4gICAgfVxuICAgIC5jb3VudCB7XG4gICAgICAgIGZvbnQtc2l6ZTogNDg7XG4gICAgICAgIG1hcmdpbjoxMDtcbiAgICB9XG4gICAgLmluZGljYXRvciB7XG4gICAgICAgIGhlaWdodDogNDA7XG4gICAgICAgIHdpZHRoOiA0MDtcbiAgICAgICAgY29sb3I6IzQ1YjVmMDtcbiAgICB9XG5cbiAgICAucmVmcmVzaC1hcnJvdyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgY29sb3I6ICM0NWI1ZjA7XG4gICAgfVxuXG4gICAgLnJvdyB7XG4gICAgICAgIHdpZHRoOiA3NTA7XG4gICAgfVxuXG4gICAgLml0ZW0ge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMjtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2MwYzBjMDtcbiAgICAgICAgaGVpZ2h0OiAxMDA7XG4gICAgICAgIHBhZGRpbmc6MjA7XG4gICAgfVxuICAgIC5pdGVtLXRpdGxlIHtcbiAgICB9XG4gICAgLnJlZnJlc2gtdmlldyB7XG4gICAgICAgIHdpZHRoOiA3NTA7XG4gICAgICAgIGhlaWdodDogMTAwO1xuICAgICAgICBkaXNwbGF5OiAtbXMtZmxleDtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICAgIC5sb2FkaW5nLXZpZXcge1xuICAgICAgICB3aWR0aDogNzUwO1xuICAgICAgICBoZWlnaHQ6IDEwMDtcbiAgICAgICAgZGlzcGxheTogLW1zLWZsZXg7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgICAuaW5kaWNhdG9yIHtcbiAgICAgICAgaGVpZ2h0OiA2MDtcbiAgICAgICAgd2lkdGg6IDYwO1xuICAgICAgICBjb2xvcjogIzg4OTk2NztcbiAgICB9XG48L3N0eWxlPlxuXG48c2NyaXB0PlxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIG9uYXBwZWFyOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHZhciBhcHBlYXJJZCA9IHRoaXMucm93c1tlLnRhcmdldC5hdHRyLmluZGV4XS5pZDtcbiAgICAgICAgICAgICAgICBuYXRpdmVMb2coJysrKysrJywgYXBwZWFySWQpO1xuICAgICAgICAgICAgICAgIHZhciBhcHBlYXJJZHMgPSB0aGlzLmFwcGVhcklkcztcbiAgICAgICAgICAgICAgICBhcHBlYXJJZHMucHVzaChhcHBlYXJJZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRNaW5BbmRNYXhJZHMoYXBwZWFySWRzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbmRpc2FwcGVhcjpmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHZhciBkaXNBcHBlYXJJZCA9IHRoaXMucm93c1tlLnRhcmdldC5hdHRyLmluZGV4XS5pZDtcbiAgICAgICAgICAgICAgICBuYXRpdmVMb2coJysrKysrJywgZGlzQXBwZWFySWQpO1xuICAgICAgICAgICAgICAgIHZhciBhcHBlYXJJZHMgPSB0aGlzLmFwcGVhcklkcztcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBhcHBlYXJJZHMuaW5kZXhPZihkaXNBcHBlYXJJZCk7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgYXBwZWFySWRzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0TWluQW5kTWF4SWRzKGFwcGVhcklkcyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0TWluQW5kTWF4SWRzOmZ1bmN0aW9uIChhcHBlYXJJZHMpIHtcbiAgICAgICAgICAgICAgICBhcHBlYXJJZHMuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhIC0gYjtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGVhcklkcyA9IGFwcGVhcklkcztcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGVhck1heCA9IGFwcGVhcklkc1thcHBlYXJJZHMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICAgICAgdGhpcy5hcHBlYXJNaW4gPSBhcHBlYXJJZHNbMF07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25yZWZyZXNoOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgICAgIHNlbGYucmVmcmVzaF9kaXNwbGF5ID0gJ3Nob3cnO1xuICAgICAgICAgICAgICAgIHNlbGYuJGNhbGwoJ21vZGFsJywgJ3RvYXN0Jywge1xuICAgICAgICAgICAgICAgICAgICAnbWVzc2FnZSc6ICdvbnJlZnJlc2gnXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLiRjYWxsKCd0aW1lcicsICdzZXRUaW1lb3V0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnJlZnJlc2hfZGlzcGxheSA9ICdoaWRlJztcbiAgICAgICAgICAgICAgICB9LCAzMDAwKTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIG9ubG9hZGluZzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgICAgIHNlbGYubG9hZGluZ19kaXNwbGF5ID0gJ3Nob3cnO1xuICAgICAgICAgICAgICAgIHNlbGYuJGNhbGwoJ21vZGFsJywgJ3RvYXN0Jywge1xuICAgICAgICAgICAgICAgICAgICAnbWVzc2FnZSc6ICdvbmxvYWRpbmcnXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLiRjYWxsKCd0aW1lcicsICdzZXRUaW1lb3V0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5yb3dzLmxlbmd0aCA8PSAzMykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5yb3dzLnB1c2goc2VsZi5tb3JlUm93c1tzZWxmLnJvd3MubGVuZ3RoIC0gMjldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzZWxmLmxvYWRpbmdfZGlzcGxheSA9ICdoaWRlJztcbiAgICAgICAgICAgICAgICB9LCAzMDAwKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHJlZnJlc2hfZGlzcGxheTogJ2hpZGUnLFxuICAgICAgICAgICAgbG9hZGluZ19kaXNwbGF5OiAnaGlkZScsXG4gICAgICAgICAgICBhcHBlYXJNaW46MSxcbiAgICAgICAgICAgIGFwcGVhck1heDoxLFxuICAgICAgICAgICAgYXBwZWFySWRzOltdLFxuICAgICAgICAgICAgcm93czpbXG4gICAgICAgICAgICAgICAge2lkOiAxfSxcbiAgICAgICAgICAgICAgICB7aWQ6IDJ9LFxuICAgICAgICAgICAgICAgIHtpZDogM30sXG4gICAgICAgICAgICAgICAge2lkOiA0fSxcbiAgICAgICAgICAgICAgICB7aWQ6IDV9LFxuICAgICAgICAgICAgICAgIHtpZDogNn0sXG4gICAgICAgICAgICAgICAge2lkOiA3fSxcbiAgICAgICAgICAgICAgICB7aWQ6IDh9LFxuICAgICAgICAgICAgICAgIHtpZDogOX0sXG4gICAgICAgICAgICAgICAge2lkOiAxMH0sXG4gICAgICAgICAgICAgICAge2lkOiAxMX0sXG4gICAgICAgICAgICAgICAge2lkOiAxMn0sXG4gICAgICAgICAgICAgICAge2lkOiAxM30sXG4gICAgICAgICAgICAgICAge2lkOiAxNH0sXG4gICAgICAgICAgICAgICAge2lkOiAxNX0sXG4gICAgICAgICAgICAgICAge2lkOiAxNn0sXG4gICAgICAgICAgICAgICAge2lkOiAxN30sXG4gICAgICAgICAgICAgICAge2lkOiAxOH0sXG4gICAgICAgICAgICAgICAge2lkOiAxOX0sXG4gICAgICAgICAgICAgICAge2lkOiAyMH0sXG4gICAgICAgICAgICAgICAge2lkOiAyMX0sXG4gICAgICAgICAgICAgICAge2lkOiAyMn0sXG4gICAgICAgICAgICAgICAge2lkOiAyM30sXG4gICAgICAgICAgICAgICAge2lkOiAyNH0sXG4gICAgICAgICAgICAgICAge2lkOiAyNX0sXG4gICAgICAgICAgICAgICAge2lkOiAyNn0sXG4gICAgICAgICAgICAgICAge2lkOiAyN30sXG4gICAgICAgICAgICAgICAge2lkOiAyOH0sXG4gICAgICAgICAgICAgICAge2lkOiAyOX1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBtb3JlUm93czogW1xuICAgICAgICAgICAgICAgIHtpZDogMzB9LFxuICAgICAgICAgICAgICAgIHtpZDogMzF9LFxuICAgICAgICAgICAgICAgIHtpZDogMzJ9LFxuICAgICAgICAgICAgICAgIHtpZDogMzN9XG4gICAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2R1bGVzL2xpc3Qud2U/YzNiNzBhZDYiXSwic291cmNlUm9vdCI6IiJ9