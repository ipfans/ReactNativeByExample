import React from 'react-native';
import {Provider} from 'react-redux';
import configStore from './store/config';

import App from './containers/app';

const sotre = configStore();

class Root extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<App />
			</Provider>
		)
	}
}

export default Root;