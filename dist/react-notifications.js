(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("prop-types"), require("react-transition-group"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "prop-types", "react-transition-group"], factory);
	else if(typeof exports === 'object')
		exports["ReactNotifications"] = factory(require("react"), require("prop-types"), require("react-transition-group"));
	else
		root["ReactNotifications"] = factory(root["React"], root["PropTypes"], root["ReactTransitionGroup"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__3__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__3__;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function eventListener() {
      if (errorListener !== undefined) {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };
    var errorListener;

    // Adding an error listener is not optional because
    // if an error is thrown on an event emitter we cannot
    // guarantee that the actual event we are waiting will
    // be fired. The result could be a silent way to create
    // memory or file descriptor leaks, which is something
    // we should avoid.
    if (name !== 'error') {
      errorListener = function errorListener(err) {
        emitter.removeListener(name, eventListener);
        reject(err);
      };

      emitter.once('error', errorListener);
    }

    emitter.once(name, eventListener);
  });
}


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "Notifications", function() { return /* reexport */ src_Notifications; });
__webpack_require__.d(__webpack_exports__, "NotificationContainer", function() { return /* reexport */ src_NotificationContainer; });
__webpack_require__.d(__webpack_exports__, "NotificationManager", function() { return /* reexport */ src_NotificationManager; });

// EXTERNAL MODULE: external {"root":"React","commonjs":"react","commonjs2":"react","amd":"react"}
var external_root_React_commonjs_react_commonjs2_react_amd_react_ = __webpack_require__(0);
var external_root_React_commonjs_react_commonjs2_react_amd_react_default = /*#__PURE__*/__webpack_require__.n(external_root_React_commonjs_react_commonjs2_react_amd_react_);

// EXTERNAL MODULE: external {"root":"PropTypes","commonjs":"prop-types","commonjs2":"prop-types","amd":"prop-types"}
var external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_ = __webpack_require__(1);
var external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_);

// EXTERNAL MODULE: external {"root":["ReactTransitionGroup"],"commonjs":"react-transition-group","commonjs2":"react-transition-group","amd":"react-transition-group"}
var external_root_ReactTransitionGroup_commonjs_react_transition_group_commonjs2_react_transition_group_amd_react_transition_group_ = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(2);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// CONCATENATED MODULE: ./src/Notification.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Notification_Notification = /*#__PURE__*/function (_React$Component) {
  _inherits(Notification, _React$Component);

  var _super = _createSuper(Notification);

  function Notification() {
    var _this;

    _classCallCheck(this, Notification);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
      var timeOut = _this.props.timeOut;

      if (timeOut !== 0) {
        _this.timer = setTimeout(_this.requestHide, timeOut);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "componentWillUnmount", function () {
      if (_this.timer) {
        clearTimeout(_this.timer);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function () {
      var onClick = _this.props.onClick;

      if (onClick) {
        onClick();
      }

      _this.requestHide();
    });

    _defineProperty(_assertThisInitialized(_this), "requestHide", function () {
      var onRequestHide = _this.props.onRequestHide;

      if (onRequestHide) {
        onRequestHide();
      }
    });

    return _this;
  }

  _createClass(Notification, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          type = _this$props.type,
          message = _this$props.message;
      var title = this.props.title;
      var className = classnames_default()(['notification', "notification-".concat(type)]);
      title = title ? /*#__PURE__*/external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("h4", {
        className: "title"
      }, title) : null;
      return /*#__PURE__*/external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: className,
        onClick: this.handleClick
      }, /*#__PURE__*/external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "notification-message",
        role: "alert"
      }, title, /*#__PURE__*/external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "message"
      }, message)));
    }
  }]);

  return Notification;
}(external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.Component);

_defineProperty(Notification_Notification, "propTypes", {
  type: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.oneOf(['info', 'success', 'warning', 'error']),
  title: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.node,
  message: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.node,
  timeOut: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.number,
  onClick: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.func,
  onRequestHide: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.func
});

_defineProperty(Notification_Notification, "defaultProps", {
  type: 'info',
  title: null,
  message: null,
  timeOut: 5000,
  onClick: function onClick() {},
  onRequestHide: function onRequestHide() {}
});

/* harmony default export */ var src_Notification = (Notification_Notification);
// CONCATENATED MODULE: ./src/Notifications.js
function Notifications_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Notifications_typeof = function _typeof(obj) { return typeof obj; }; } else { Notifications_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Notifications_typeof(obj); }

function Notifications_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Notifications_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Notifications_createClass(Constructor, protoProps, staticProps) { if (protoProps) Notifications_defineProperties(Constructor.prototype, protoProps); if (staticProps) Notifications_defineProperties(Constructor, staticProps); return Constructor; }

function Notifications_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Notifications_setPrototypeOf(subClass, superClass); }

function Notifications_setPrototypeOf(o, p) { Notifications_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Notifications_setPrototypeOf(o, p); }

function Notifications_createSuper(Derived) { var hasNativeReflectConstruct = Notifications_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Notifications_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Notifications_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Notifications_possibleConstructorReturn(this, result); }; }

function Notifications_possibleConstructorReturn(self, call) { if (call && (Notifications_typeof(call) === "object" || typeof call === "function")) { return call; } return Notifications_assertThisInitialized(self); }

function Notifications_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Notifications_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function Notifications_getPrototypeOf(o) { Notifications_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Notifications_getPrototypeOf(o); }

function Notifications_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var Notifications_Notifications = /*#__PURE__*/function (_React$Component) {
  Notifications_inherits(Notifications, _React$Component);

  var _super = Notifications_createSuper(Notifications);

  function Notifications() {
    var _this;

    Notifications_classCallCheck(this, Notifications);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Notifications_defineProperty(Notifications_assertThisInitialized(_this), "handleRequestHide", function (notification) {
      return function () {
        var onRequestHide = _this.props.onRequestHide;

        if (onRequestHide) {
          onRequestHide(notification);
        }
      };
    });

    return _this;
  }

  Notifications_createClass(Notifications, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          notifications = _this$props.notifications,
          enterTimeout = _this$props.enterTimeout,
          leaveTimeout = _this$props.leaveTimeout;
      var className = classnames_default()('notification-container', {
        'notification-container-empty': notifications.length === 0
      });
      var items = notifications.map(function (notification, i) {
        var key = notification.id || new Date().getTime();
        return /*#__PURE__*/external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(external_root_ReactTransitionGroup_commonjs_react_transition_group_commonjs2_react_transition_group_amd_react_transition_group_["CSSTransition"], {
          key: i,
          classNames: "notification",
          timeout: {
            enter: enterTimeout,
            exit: leaveTimeout
          }
        }, /*#__PURE__*/external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(src_Notification, {
          key: key,
          type: notification.type,
          title: notification.title,
          message: notification.message,
          timeOut: notification.timeOut,
          onClick: notification.onClick,
          onRequestHide: _this2.handleRequestHide(notification)
        }));
      });
      return /*#__PURE__*/external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: className
      }, /*#__PURE__*/external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(external_root_ReactTransitionGroup_commonjs_react_transition_group_commonjs2_react_transition_group_amd_react_transition_group_["TransitionGroup"], null, items));
    }
  }]);

  return Notifications;
}(external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.Component);

Notifications_defineProperty(Notifications_Notifications, "propTypes", {
  notifications: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.array,
  onRequestHide: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.func,
  enterTimeout: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.number,
  leaveTimeout: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.number
});

Notifications_defineProperty(Notifications_Notifications, "defaultProps", {
  notifications: [],
  onRequestHide: function onRequestHide() {},
  enterTimeout: 400,
  leaveTimeout: 400
});

/* harmony default export */ var src_Notifications = (Notifications_Notifications);
// EXTERNAL MODULE: ./node_modules/events/events.js
var events = __webpack_require__(4);

// CONCATENATED MODULE: ./src/NotificationManager.js
function NotificationManager_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { NotificationManager_typeof = function _typeof(obj) { return typeof obj; }; } else { NotificationManager_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return NotificationManager_typeof(obj); }

function NotificationManager_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function NotificationManager_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function NotificationManager_createClass(Constructor, protoProps, staticProps) { if (protoProps) NotificationManager_defineProperties(Constructor.prototype, protoProps); if (staticProps) NotificationManager_defineProperties(Constructor, staticProps); return Constructor; }

function NotificationManager_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) NotificationManager_setPrototypeOf(subClass, superClass); }

function NotificationManager_setPrototypeOf(o, p) { NotificationManager_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return NotificationManager_setPrototypeOf(o, p); }

function NotificationManager_createSuper(Derived) { var hasNativeReflectConstruct = NotificationManager_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = NotificationManager_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = NotificationManager_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return NotificationManager_possibleConstructorReturn(this, result); }; }

function NotificationManager_possibleConstructorReturn(self, call) { if (call && (NotificationManager_typeof(call) === "object" || typeof call === "function")) { return call; } return NotificationManager_assertThisInitialized(self); }

function NotificationManager_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function NotificationManager_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function NotificationManager_getPrototypeOf(o) { NotificationManager_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return NotificationManager_getPrototypeOf(o); }



var createUUID = function createUUID() {
  var pattern = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
  return pattern.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0;
    var v = c === 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
};

var Constants = {
  CHANGE: 'change',
  INFO: 'info',
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error'
};

var NotificationManager = /*#__PURE__*/function (_EventEmitter) {
  NotificationManager_inherits(NotificationManager, _EventEmitter);

  var _super = NotificationManager_createSuper(NotificationManager);

  function NotificationManager() {
    var _this;

    NotificationManager_classCallCheck(this, NotificationManager);

    _this = _super.call(this);
    _this.listNotify = [];
    return _this;
  }

  NotificationManager_createClass(NotificationManager, [{
    key: "create",
    value: function create(notify) {
      var defaultNotify = {
        id: createUUID(),
        type: 'info',
        title: null,
        message: null,
        timeOut: 5000
      };

      if (notify.priority) {
        this.listNotify.unshift(Object.assign(defaultNotify, notify));
      } else {
        this.listNotify.push(Object.assign(defaultNotify, notify));
      }

      this.emitChange();
    }
  }, {
    key: "info",
    value: function info(message, title, timeOut, onClick, priority) {
      this.create({
        type: Constants.INFO,
        message: message,
        title: title,
        timeOut: timeOut,
        onClick: onClick,
        priority: priority
      });
    }
  }, {
    key: "success",
    value: function success(message, title, timeOut, onClick, priority) {
      this.create({
        type: Constants.SUCCESS,
        message: message,
        title: title,
        timeOut: timeOut,
        onClick: onClick,
        priority: priority
      });
    }
  }, {
    key: "warning",
    value: function warning(message, title, timeOut, onClick, priority) {
      this.create({
        type: Constants.WARNING,
        message: message,
        title: title,
        timeOut: timeOut,
        onClick: onClick,
        priority: priority
      });
    }
  }, {
    key: "error",
    value: function error(message, title, timeOut, onClick, priority) {
      this.create({
        type: Constants.ERROR,
        message: message,
        title: title,
        timeOut: timeOut,
        onClick: onClick,
        priority: priority
      });
    }
  }, {
    key: "remove",
    value: function remove(notification) {
      this.listNotify = this.listNotify.filter(function (n) {
        return notification.id !== n.id;
      });
      this.emitChange();
    }
  }, {
    key: "emitChange",
    value: function emitChange() {
      this.emit(Constants.CHANGE, this.listNotify);
    }
  }, {
    key: "addChangeListener",
    value: function addChangeListener(callback) {
      this.addListener(Constants.CHANGE, callback);
    }
  }, {
    key: "removeChangeListener",
    value: function removeChangeListener(callback) {
      this.removeListener(Constants.CHANGE, callback);
    }
  }]);

  return NotificationManager;
}(events["EventEmitter"]);

/* harmony default export */ var src_NotificationManager = (new NotificationManager());
// CONCATENATED MODULE: ./src/NotificationContainer.js
function NotificationContainer_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { NotificationContainer_typeof = function _typeof(obj) { return typeof obj; }; } else { NotificationContainer_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return NotificationContainer_typeof(obj); }

function NotificationContainer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function NotificationContainer_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function NotificationContainer_createClass(Constructor, protoProps, staticProps) { if (protoProps) NotificationContainer_defineProperties(Constructor.prototype, protoProps); if (staticProps) NotificationContainer_defineProperties(Constructor, staticProps); return Constructor; }

function NotificationContainer_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) NotificationContainer_setPrototypeOf(subClass, superClass); }

function NotificationContainer_setPrototypeOf(o, p) { NotificationContainer_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return NotificationContainer_setPrototypeOf(o, p); }

function NotificationContainer_createSuper(Derived) { var hasNativeReflectConstruct = NotificationContainer_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = NotificationContainer_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = NotificationContainer_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return NotificationContainer_possibleConstructorReturn(this, result); }; }

function NotificationContainer_possibleConstructorReturn(self, call) { if (call && (NotificationContainer_typeof(call) === "object" || typeof call === "function")) { return call; } return NotificationContainer_assertThisInitialized(self); }

function NotificationContainer_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function NotificationContainer_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function NotificationContainer_getPrototypeOf(o) { NotificationContainer_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return NotificationContainer_getPrototypeOf(o); }

function NotificationContainer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var NotificationContainer_NotificationContainer = /*#__PURE__*/function (_React$Component) {
  NotificationContainer_inherits(NotificationContainer, _React$Component);

  var _super = NotificationContainer_createSuper(NotificationContainer);

  function NotificationContainer() {
    var _this;

    NotificationContainer_classCallCheck(this, NotificationContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    NotificationContainer_defineProperty(NotificationContainer_assertThisInitialized(_this), "state", {
      notifications: []
    });

    NotificationContainer_defineProperty(NotificationContainer_assertThisInitialized(_this), "componentDidMount", function () {
      src_NotificationManager.addChangeListener(_this.handleStoreChange);
    });

    NotificationContainer_defineProperty(NotificationContainer_assertThisInitialized(_this), "componentWillUnmount", function () {
      src_NotificationManager.removeChangeListener(_this.handleStoreChange);
    });

    NotificationContainer_defineProperty(NotificationContainer_assertThisInitialized(_this), "handleStoreChange", function (notifications) {
      _this.setState({
        notifications: notifications
      });
    });

    NotificationContainer_defineProperty(NotificationContainer_assertThisInitialized(_this), "handleRequestHide", function (notification) {
      src_NotificationManager.remove(notification);
    });

    return _this;
  }

  NotificationContainer_createClass(NotificationContainer, [{
    key: "render",
    value: function render() {
      var notifications = this.state.notifications;
      var _this$props = this.props,
          enterTimeout = _this$props.enterTimeout,
          leaveTimeout = _this$props.leaveTimeout;
      return /*#__PURE__*/external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(src_Notifications, {
        enterTimeout: enterTimeout,
        leaveTimeout: leaveTimeout,
        notifications: notifications,
        onRequestHide: this.handleRequestHide
      });
    }
  }]);

  return NotificationContainer;
}(external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.Component);

NotificationContainer_defineProperty(NotificationContainer_NotificationContainer, "propTypes", {
  enterTimeout: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.number,
  leaveTimeout: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.number
});

NotificationContainer_defineProperty(NotificationContainer_NotificationContainer, "defaultProps", {
  enterTimeout: 400,
  leaveTimeout: 400
});

/* harmony default export */ var src_NotificationContainer = (NotificationContainer_NotificationContainer);
// CONCATENATED MODULE: ./src/index.js




/* harmony default export */ var src = __webpack_exports__["default"] = (src_Notifications);

/***/ })
/******/ ]);
});