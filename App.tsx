import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// all of this is amplify stuff
import Amplify from 'aws-amplify'
import config from './src/aws-exports'
Amplify.configure(config)
import {withAuthenticator} from 'aws-amplify-react-native'

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import VideoScreen from './screens/VideoScreen';

function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={'dark'} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

// this is a different type of export to get the authenticator working
export default withAuthenticator(App);
