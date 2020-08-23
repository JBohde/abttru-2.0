import React from 'react';
import Notification from './Notification';

export default function Notifications(notifications) {
  return notifications.map(({ type, message }) => (
    <Notification type={type} message={message} />
  ));
}
