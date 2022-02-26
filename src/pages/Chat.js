import React, { useEffect, useState } from 'react';
import { Button, CustomProvider } from 'rsuite';
import Pusher from 'pusher-js';
import axios from 'axios';

const Chat = () => {
  useEffect(() => {
    Pusher.logToConsole = true;

    const pusher = new Pusher('caf06d53f3267feb766a', {
      cluster: 'ap1',
    });

    const channel = pusher.subscribe('chat');
    channel.bind('test', function (data) {
      console.log(data);
    });
  }, []);

  return (
    <div>
      Chat
      <Button
        onClick={async (e) => await axios.get('http://localhost:8080/chat')}
      >
        Click to connect pusher
      </Button>
    </div>
  );
};

export default Chat;
