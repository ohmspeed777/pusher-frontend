import React, { useEffect, useState } from 'react';
import { Button, CustomProvider } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import Chat from './pages/Chat';
import Notification from './pages/Notification';

const App = () => {
  useEffect(() => {}, []);

  return (
    <CustomProvider theme="dark">
      <div>
        App
        <br />
        {/* <Chat /> */}
        <Notification />
      </div>
    </CustomProvider>
  );
};

export default App;
