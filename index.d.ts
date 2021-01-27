declare module 'react-notifications' {
    import { ReactNode, } from 'react'
    import { EventEmitter, } from 'events'

    enum NotificationType {
        INFO	= 'info',
        SUCCESS	= 'success',
        WARNING	= 'warning',
        ERROR	= 'error'
    }

    enum EventType {
        CHANGE	= 'change',
        INFO	= 'info',
        SUCCESS	= 'success',
        WARNING	= 'warning',
        ERROR	= 'error'
    }

    interface NotificationProps {
        type: NotificationType,
        title?: ReactNode,
        message: ReactNode,
        timeOut?: number,
        onClick: () => any,
        onRequestHide: () => any,
        tags: []
    }

    interface NotificationsProps {
        notifications: Notification[];
        onRequestHide?: (notification: Notification) => any;
        enterTimeout?: number;
        leaveTimeout?: number;
    }

    interface NotificationContainerProps {
        enterTimeout?: number;
        leaveTimeout?: number;
    }

    interface INotificationManagerCreate {
        type: EventType,
        title?: NotificationProps['title']
        message?: NotificationProps['message']
        timeout?: number,
        onClick?: () => any,
        priority?: boolean,
        tag?: []|string
    }

    class Notification extends React.Component<NotificationProps, {}> {}

    class Notifications extends React.Component<NotificationsProps, {}> {}

    class NotificationContainer extends React.Component<NotificationContainerProps, {}> {}

    class NotificationManager extends EventEmitter {
        static create (INotificationManagerCreate) : void
        static info (message?: INotificationManagerCreate['message'], title?: INotificationManagerCreate['title'], timeOut?: INotificationManagerCreate['timeout'], onClick?: INotificationManagerCreate['onClick'], priority?: INotificationManagerCreate['priority'], tag?: INotificationManagerCreate['tag']) : void
        static success (message?: INotificationManagerCreate['message'], title?: INotificationManagerCreate['title'], timeOut?: INotificationManagerCreate['timeout'], onClick?: INotificationManagerCreate['onClick'], priority?: INotificationManagerCreate['priority'], tag?: INotificationManagerCreate['tag']) : void
        static warning (message?: INotificationManagerCreate['message'], title?: INotificationManagerCreate['title'], timeOut?: INotificationManagerCreate['timeout'], onClick?: INotificationManagerCreate['onClick'], priority?: INotificationManagerCreate['priority'], tag?: INotificationManagerCreate['tag']) : void
        static error (message?: INotificationManagerCreate['message'], title?: INotificationManagerCreate['title'], timeOut?: INotificationManagerCreate['timeout'], onClick?: INotificationManagerCreate['onClick'], priority?: INotificationManagerCreate['priority'], tag?: INotificationManagerCreate['tag']) : void
        static remove (notification: Notification) : void
        static removeByTag (tag: string) : void
    }
}
