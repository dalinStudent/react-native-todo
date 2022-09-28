import React from 'react';
import {AppRegistry} from 'react-native';
import { name as appName } from './app.json';
import {NativeBaseProvider} from 'native-base';
import Routes from './src/routes';
import { NavigationContainer } from '@react-navigation/native';

const MyApp = () => {
    return (
        <NativeBaseProvider>
            <NavigationContainer>
                <Routes />
            </NavigationContainer>
        </NativeBaseProvider>
    )
}

AppRegistry.registerComponent(appName, () => MyApp);
