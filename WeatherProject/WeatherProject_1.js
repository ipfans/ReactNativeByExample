var React = require('react-native');
var {
	StyleSheet,
	Text,
	View,
	TextInput
} = React;


export default class WeatherProject extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			zip: '',
			forecast: {
				main: 'Clouds',
				description: 'few clouds',
				temp: 45.7,
			}
		};
	}

	_handleTextChange(event) {
		console.log("recv:", event.nativeEvent.text)
		this.setState({
			zip: event.nativeEvent.text
		});
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>
					You input {this.state.zip};
				</Text>
				<TextInput
					style={styles.input}
					returnKeyType="go"
					onSubmitEditing={this._handleTextChange.bind(this)}
					/>
			</View>
		)
	}
}

var styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	input: {
		fontSize: 20,
		borderWidth: 2,
		height: 40
		}
});
