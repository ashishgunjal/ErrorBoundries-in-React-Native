/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import AppContainer from './src/Containers/AppContainer';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppContainer);
