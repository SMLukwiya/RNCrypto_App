/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import SplashScreen from 'react-native-splash-screen';

import Entry from './src';
import { store, persistor } from './src/store';

const App = () => {
  React.useEffect(() => SplashScreen.hide(), []);
  return (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Entry />
        </PersistGate>
    </Provider>
  );
};

export default App;
