# React Notifications

[<img src="./screenshot.png" style="width: 100%;" />](http://minhtranite.github.io/react-notifications)

## Installation

```
npm install --save react-notifications
```

## Usage

### Note

**Use only one 'NotificationContainer' component in the app.**

### CSS

#### Webpack:
```js
import 'react-notifications/lib/notifications.css';
```

#### Other
```html
<link rel="stylesheet" type="text/css" href="path/to/notifications.css">
```

### JS

```js
import React from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';

class Example extends React.Component {
  createNotification = (type) => {
    return () => {
      switch (type) {
        case 'info':
          NotificationManager.info('Info message');
          break;
        case 'success':
          NotificationManager.success('Success message', 'Title here');
          break;
        case 'warning':
          NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
          break;
        case 'error':
          NotificationManager.error('Error message', 'Click me!', 5000, () => {
            alert('callback');
          });
          break;
      }
    };
  };

  render() {
    return (
      <div>
        <button className='btn btn-info'
          onClick={this.createNotification('info')}>Info
        </button>
        <hr/>
        <button className='btn btn-success'
          onClick={this.createNotification('success')}>Success
        </button>
        <hr/>
        <button className='btn btn-warning'
          onClick={this.createNotification('warning')}>Warning
        </button>
        <hr/>
        <button className='btn btn-danger'
          onClick={this.createNotification('error')}>Error
        </button>

        <NotificationContainer/>
      </div>
    );
  }
}

export default Example;
```

### UMD

```html
<link rel="stylesheet" type="text/css" href="path/to/react-notifications/dist/react-notifications.css">
<script src="path/to/react-notifications/dist/react-notifications.js"></script>
```

```js
const NotificationContainer = window.ReactNotifications.NotificationContainer;
const NotificationManager = window.ReactNotifications.NotificationManager;
```

## NotificationContainer Props

| Name | Type | Default | Required |
|------|------|---------|----------|
| enterTimeout | number | 400 | false |
| leaveTimeout | number | 400 | false |

## NotificationManager API

- NotificationManager.info(message, title, timeOut, callback, priority);
- NotificationManager.success(message, title, timeOut, callback, priority);
- NotificationManager.warning(message, title, timeOut, callback, priority);
- NotificationManager.error(message, title, timeOut, callback, priority);

| Name | Type | Description |
|------|------|-------------|
| message | string | The message string |
| title | string | The title string |
| timeOut | integer | The popup timeout in milliseconds |
| callback | function | A function that gets fired when the popup is clicked |
| priority | boolean | If true, the message gets inserted at the top |

## Example
View [demo](http://minhtranite.github.io/react-notifications) or example folder.

## Contributing

When contributing to this reposity, please first open an issue and discuss intended changes with maintainers.  If there is already an issue open for the feature you are looking to develop, please just coordinate with maintainers before assigning issue to yourself.

### Branches

`master` is the main branch from which we publish packages.  `next` is the branch from which we will publish the next release.  All `issue` branches should be branched from `master`, unless specifically told by the maintainers to use a different branch.  All pull requests should be submitted to merge with `next` in order to make the next release.

### Workflow

- Fork repo
- Create an issue branch
- Commit your changes
- Open a PR against `next`.
- Link the Issue to your PR.

### Pull Request Guidelines

- PRs should be submitted to merge with `next`.
- PRs should be small in scope, work on 1 issue in a single PR.
- Link the Issue you are working to your PR.

You can add as many commits to your PR as you would like.  All commits will be squashed into a single commit when merging PR.