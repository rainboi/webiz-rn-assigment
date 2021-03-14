import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/Home';
import TransactionScreen from './src/screens/Transaction';
import {
  TransactionsContext,
  TransactionsProvider,
} from './src/contexts/TransactionsContext';
import COLORS from './src/constants/colors';

const Stack = createStackNavigator();

function App() {
  return (
    <TransactionsProvider>
      <TransactionsContext.Consumer>
        {() => (
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen
                name="Transaction"
                component={TransactionScreen}
                options={{
                  headerShown: true,
                  headerStyle: {
                    backgroundColor: COLORS.ONYX,
                    elevation: 0,
                    shadowOpacity: 0,
                  },
                  headerTintColor: COLORS.WHITE,
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        )}
      </TransactionsContext.Consumer>
    </TransactionsProvider>
  );
}

export default App;
