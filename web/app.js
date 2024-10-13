import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const App = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/hello');
        setMessage(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{message}</Text>
    </View>
  );
};

export default App;
