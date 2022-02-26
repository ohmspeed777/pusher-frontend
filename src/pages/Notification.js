import React, { useEffect } from 'react';
import * as PusherPushNotifications from '@pusher/push-notifications-web';

const Notification = () => {
  useEffect(() => {
    const beamsClient = new PusherPushNotifications.Client({
      instanceId: '1038202c-9ec2-498d-b25b-a0b3d71c4c52',
    });

    beamsClient
      .start()
      .then((beamsClient) => beamsClient.getDeviceId())
      .then((deviceId) =>
        console.log('Successfully registered with Beams. Device ID:', deviceId)
      )
      .then(() => beamsClient.addDeviceInterest('hello'))
      .then(() => beamsClient.getDeviceInterests())
      .then((interests) => console.log('Current interests:', interests))
      .catch(console.error);
  }, []);
  return <div>Notification</div>;
};

export default Notification;
