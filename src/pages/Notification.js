import React, { useEffect, useState } from 'react';
import { Button, IconButton, ButtonGroup, ButtonToolbar } from 'rsuite';
import * as PusherPushNotifications from '@pusher/push-notifications-web';

const Notification = () => {
  const beamsClient = new PusherPushNotifications.Client({
    instanceId: '1038202c-9ec2-498d-b25b-a0b3d71c4c52',
  });

  useEffect(() => {
   
  }, []);

  const handleLogin = async (e) => {
    const beamsTokenProvider = new PusherPushNotifications.TokenProvider({
      url: 'http://localhost:8080/auth',
      queryParams: {
        someQueryParam: 'parameter-content', // URL query params your auth endpoint needs
      },
      headers: {
        Authorization: `user-001`, // Headers your auth endpoint needs
      },
    });

    try {
      const client = await beamsClient.start();
      // console.log(client);
      await beamsClient.setUserId('user-001', beamsTokenProvider);
      console.log('User ID has been set');
    } catch (err) {
      console.log(err);
    }

    // beamsClient.start()
    // .then(() => beamsClient.setUserId('user-001', beamsTokenProvider))
    // .then(() => console.log('User ID has been set'))
    // .catch(console.error);
  };

  const handleLogout = (e) => {
    beamsClient.stop().catch(console.error);
  };
  return (
    <div>
      Notification
      <br />
      <Button appearance="primary" onClick={handleLogin}>
        Login Beams
      </Button>
      <Button
        color="red"
        appearance="primary"
        style={{ marginLeft: '20px' }}
        onClick={handleLogout}
      >
        Logout Beams
      </Button>
    </div>
  );
};

export default Notification;
