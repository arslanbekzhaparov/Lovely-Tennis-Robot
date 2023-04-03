import React, { useState, useEffect } from 'react';

const WebSocketExample: React.FC = () => {
  const [webSocket, setWebSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    const ws = new WebSocket('ws://192.168.1.100'); // replace with the IP address of your ESP32 WebSocket server

    ws.addEventListener('open', () => {
      console.log('WebSocket connection opened');
      setWebSocket(ws);
      ws.send('Hello, ESP32!');
    });

    ws.addEventListener('message', (event) => {
      console.log(`Received message: ${event.data}`);
    });

    return () => {
      ws.close();
    };
  }, []);

  const handleClick = () => {
    if (webSocket) {
      webSocket.send('Button clicked!');
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Send message to ESP32</button>
    </div>
  );
};

export default WebSocketExample;