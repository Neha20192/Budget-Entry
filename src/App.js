import React from 'react';
import Home from './screens/Home';
import ShowDetails from './screens/ShowDetails';
import {Provider} from 'react-redux';
import budgetstore, {persistor} from './store';
import {PersistGate} from 'redux-persist/integration/react';
//Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const stack = createNativeStackNavigator();
function App() {
  return (
    <Provider store={budgetstore}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <stack.Navigator initialRouteName="Home">
            <stack.Screen name="Home" component={Home} />
            <stack.Screen name="ShowDetails" component={ShowDetails} />
          </stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
export default App;
