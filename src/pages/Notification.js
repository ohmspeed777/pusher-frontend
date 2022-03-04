import React, { useEffect, useState } from 'react';
import { Button, IconButton, ButtonGroup, ButtonToolbar } from 'rsuite';
import * as PusherPushNotifications from '@pusher/push-notifications-web';

const Notification = () => {
 

  const [beamsToken, setBeamsToken] = useState('');
  useEffect(() => {
    //
    // beamsClient
    //   .start()
    //   .then((beamsClient) => beamsClient.getDeviceId())
    //   .then((deviceId) =>
    //     console.log('Successfully registered with Beams. Device ID:', deviceId)
    //   )
    //   .then(() => beamsClient.addDeviceInterest('hello'))
    //   .then(() => beamsClient.getDeviceInterests())
    //   .then((interests) => console.log('Current interests:', interests))
    //   .catch(console.error);
  }, []);

  const handleOnClick = (e) => {
    const beamsTokenProvider = new PusherPushNotifications.TokenProvider({
      url: 'http://localhost:8080/auth',
      queryParams: {
        someQueryParam: 'parameter-content', // URL query params your auth endpoint needs
      },
      headers: {
        Authorization: `user-001`, // Headers your auth endpoint needs
      },
    });

    const beamsClient = new PusherPushNotifications.Client({
      instanceId: '1038202c-9ec2-498d-b25b-a0b3d71c4c52',
    });

    beamsClient
      .start()
      .then(() => beamsClient.setUserId('user-001', beamsTokenProvider))
      .then(() => console.log('User ID has been set'))
      .catch(console.error);
  };
  return (
    <div>
      Notification
      <br />
      <Button appearance="primary" onClick={handleOnClick}>
        Login Beams
      </Button>
    </div>
  );
};

export default Notification;
