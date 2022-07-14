import { EventEmitter } from 'events';

const createUUID = () => {
  const pattern = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
  return pattern.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : ((r & 0x3) | 0x8);
    return v.toString(16);
  });
};

const Constants = {
  CHANGE: 'change',
  INFO: 'info',
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error'
};

class NotificationManager extends EventEmitter {
  constructor() {
    super();
    this.listNotify = [];
  }

  create(notify) {
    let { tags = [] } = notify;
    if (typeof tags === 'string') {
      tags = [tags];
    }
    const notification = {
      id: createUUID(),
      type: 'info',
      title: null,
      message: null,
      tags,
      timeOut: 5000,
      ...notify
    };
    if (notification.priority) {
      this.listNotify.unshift(notification);
    } else {
      this.listNotify.push(notification);
    }
    this.emitChange();
    return notification;
  }

  info(message, title, timeOut, onClick, priority, tags) {
    return this.create({
      type: Constants.INFO,
      message,
      title,
      timeOut,
      onClick,
      priority,
      tags
    });
  }

  success(message, title, timeOut, onClick, priority, tags) {
    return this.create({
      type: Constants.SUCCESS,
      message,
      title,
      timeOut,
      onClick,
      priority,
      tags
    });
  }

  warning(message, title, timeOut, onClick, priority, tags) {
    return this.create({
      type: Constants.WARNING,
      message,
      title,
      timeOut,
      onClick,
      priority,
      tags
    });
  }

  error(message, title, timeOut, onClick, priority, tags) {
    return this.create({
      type: Constants.ERROR,
      message,
      title,
      timeOut,
      onClick,
      priority,
      tags
    });
  }

  removeByTag(tag) {
    this.listNotify = this.listNotify.filter((n) => !n.tags.includes(tag));
    this.emitChange();
  }

  remove(notification) {
    this.listNotify = this.listNotify.filter((n) => notification.id !== n.id);
    this.emitChange();
  }

  removeAll() {
    this.listNotify.length = 0;
    this.emitChange();
  }

  emitChange() {
    this.emit(Constants.CHANGE, this.listNotify);
  }

  addChangeListener(callback) {
    this.addListener(Constants.CHANGE, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(Constants.CHANGE, callback);
  }
}

export default new NotificationManager();
