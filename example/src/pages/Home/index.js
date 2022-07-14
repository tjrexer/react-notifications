import React from 'react';
import Document from '../../components/Document';
import { NotificationContainer, NotificationManager } from '../../../../dist/react-notifications';

class HomePage extends React.Component {
  createNotification = (type) => () => {
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
      case 'tag':
        NotificationManager.error('With tag', 'With tag', 10000, undefined, false, 'tag');
        break;
      default:
        break;
    }
  };

  removeByTag = () => {
    NotificationManager.removeByTag('tag');
  };

  render() {
    return (
      <Document title="Home | React notifications" className="page-home">
        <div>
          <div className="page-header">
            <h1>Simple sample</h1>
          </div>
          <button type="button" className="btn btn-info" onClick={this.createNotification('info')}>
            Info
          </button>
          <hr/>
          <button type="button" className="btn btn-success" onClick={this.createNotification('success')}>
            Success
          </button>
          <hr/>
          <button type="button" className="btn btn-warning" onClick={this.createNotification('warning')}>
            Warning
          </button>
          <hr/>
          <button type="button" className="btn btn-danger" onClick={this.createNotification('error')}>
            Error
          </button>
          <hr/>
          <button type="button" className="btn btn-default" onClick={this.createNotification('tag')}>
            Tag
          </button>
          <hr/>
          <button type="button" className="btn btn-default" onClick={this.removeByTag}>
            Clear all with tag
          </button>

          <NotificationContainer/>
        </div>
      </Document>
    );
  }
}

export default HomePage;
