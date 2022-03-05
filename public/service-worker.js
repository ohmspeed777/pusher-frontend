importScripts('https://js.pusher.com/beams/service-worker.js');

PusherPushNotifications.onNotificationReceived = ({
  pushEvent,
  payload,
  handleNotification,
}) => {
  pushEvent.waitUntil(
    // console.log(payload)
    self.registration.showNotification(payload.notification.title, {
      body: payload.data.some,
      icon: 'https://images.unsplash.com/photo-1646343588889-07753bb55abf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      // vibrate: [200, 100, 200, 100, 200, 100, 200],
      // tag: 'vibration-sample',
      actions: [
        {
          action: `<h3>Test action</h3>`,
          title: `<h1>Test title</h1>`,
          icon: `https://images.unsplash.com/photo-1646295673708-9f90af37a7ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60`,
        },
      ],
      badge: `https://images.unsplash.com/photo-1646389950944-7fc4e53254ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60`,
      data: {
        doge: {
          wow: 'such amaze notification data',
        },
      },
      dir: 'auto',
    })
  );
};
