"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var Notification = /*#__PURE__*/function (_React$Component) {
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
      var className = (0, _classnames.default)(['notification', "notification-".concat(type)]);
      title = title ? /*#__PURE__*/_react.default.createElement("h4", {
        className: "title"
      }, title) : null;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: className,
        onClick: this.handleClick
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "notification-message",
        role: "alert"
      }, title, /*#__PURE__*/_react.default.createElement("div", {
        className: "message"
      }, message)));
    }
  }]);

  return Notification;
}(_react.default.Component);

_defineProperty(Notification, "propTypes", {
  type: _propTypes.default.oneOf(['info', 'success', 'warning', 'error']),
  title: _propTypes.default.node,
  message: _propTypes.default.node,
  timeOut: _propTypes.default.number,
  onClick: _propTypes.default.func,
  onRequestHide: _propTypes.default.func
});

_defineProperty(Notification, "defaultProps", {
  type: 'info',
  title: null,
  message: null,
  timeOut: 5000,
  onClick: function onClick() {},
  onRequestHide: function onRequestHide() {}
});

var _default = Notification;
exports.default = _default;