import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SongListScreen from './src/screens/SongListScreen';
import SongDetailsScreen from './src/screens/SongDetailsScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SongList"
        screenOptions={{ headerShown: false }} // Header is managed by our custom component
      >
        <Stack.Screen name="SongList" component={SongListScreen} />
        <Stack.Screen name="SongDetails" component={SongDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
