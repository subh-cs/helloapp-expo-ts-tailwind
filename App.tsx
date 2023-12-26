import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import Dashboard from './src/screens/Dashboard';
import LoginScreen from './src/screens/LoginScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [loggedin, setLoggedin] = useState(false);

  const handleLogin = () => {
    setLoggedin(true);
  }

  const handleLogout = () => {
    setLoggedin(false);
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {loggedin ? (
          <Stack.Screen name="DASHBOARD" options={{ animationTypeForReplace: 'pop' }}
            children={() => <Dashboard handleLogout={handleLogout} />}
          />
        ) : (
          <Stack.Screen name="LOGIN" options={{ animationTypeForReplace: 'push' }}
            children={() => <LoginScreen handleLogin={handleLogin} />}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}


