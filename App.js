import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeTab from './src/navigation/customTabNavi';
import {RecoilRoot} from 'recoil';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const Stack = createStackNavigator();
const queryClient = new QueryClient();

const App = () => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              tabBarActiveTintColor: '#FF6666',
              tabBarShowLabel: false,
            }}>
            <Stack.Screen
              name="MainHome"
              component={HomeTab}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export default App;
