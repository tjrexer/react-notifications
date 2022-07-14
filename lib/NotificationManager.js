"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _events = require("events");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

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
  _inherits(NotificationManager, _EventEmitter);

  var _super = _createSuper(NotificationManager);

  function NotificationManager() {
    var _this;

    _classCallCheck(this, NotificationManager);

    _this = _super.call(this);
    _this.listNotify = [];
    return _this;
  }

  _createClass(NotificationManager, [{
    key: "create",
    value: function create(notify) {
      var _notify$tags = notify.tags,
          tags = _notify$tags === void 0 ? [] : _notify$tags;

      if (typeof tags === 'string') {
        tags = [tags];
      }

      var notification = _objectSpread({
        id: createUUID(),
        type: 'info',
        title: null,
        message: null,
        tags: tags,
        timeOut: 5000
      }, notify);

      if (notification.priority) {
        this.listNotify.unshift(notification);
      } else {
        this.listNotify.push(notification);
      }

      this.emitChange();
      return notification;
    }
  }, {
    key: "info",
    value: function info(message, title, timeOut, onClick, priority, tags) {
      return this.create({
        type: Constants.INFO,
        message: message,
        title: title,
        timeOut: timeOut,
        onClick: onClick,
        priority: priority,
        tags: tags
      });
    }
  }, {
    key: "success",
    value: function success(message, title, timeOut, onClick, priority, tags) {
      return this.create({
        type: Constants.SUCCESS,
        message: message,
        title: title,
        timeOut: timeOut,
        onClick: onClick,
        priority: priority,
        tags: tags
      });
    }
  }, {
    key: "warning",
    value: function warning(message, title, timeOut, onClick, priority, tags) {
      return this.create({
        type: Constants.WARNING,
        message: message,
        title: title,
        timeOut: timeOut,
        onClick: onClick,
        priority: priority,
        tags: tags
      });
    }
  }, {
    key: "error",
    value: function error(message, title, timeOut, onClick, priority, tags) {
      return this.create({
        type: Constants.ERROR,
        message: message,
        title: title,
        timeOut: timeOut,
        onClick: onClick,
        priority: priority,
        tags: tags
      });
    }
  }, {
    key: "removeByTag",
    value: function removeByTag(tag) {
      this.listNotify = this.listNotify.filter(function (n) {
        return !n.tags.includes(tag);
      });
      this.emitChange();
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
    key: "removeAll",
    value: function removeAll() {
      this.listNotify.length = 0;
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
}(_events.EventEmitter);

var _default = new NotificationManager();

exports.default = _default;