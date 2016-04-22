'use strict';

import React from 'react-native';
import LoadingViewAndroid from '../components/LoadingView';
import {ToastShort} from '../utils/ToastUtils';

const {
	StyleSheet,
	Navigator,
	StatusBar,
	BackAndroid,
	View,
} = React;

class App extends React.Component {
	constructor(props) {
		super(props);
	}
}

let styles = StyleSheet.create({
	navigator: {
		flex: 1
	}
});

export default App;