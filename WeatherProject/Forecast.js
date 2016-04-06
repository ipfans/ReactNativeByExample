var React = require('react-native');
var {
	StyleSheet,
	Text,
	View
} = React;

export default class Forecast extends React.Component {
	constructor(props, context) {
		super(props, context);
	}

	render() {
		return (
			<View>
				<Text style={styles.bigText}>
					{this.props.main}
				</Text>
				<Text style={styles.mainText}>
					Current conditions: {this.props.description}
				</Text>
				<Text style={styles.bigText}>
					{this.props.temp}°F
        </Text>
			</View>
		)
	}
}

var styles = StyleSheet.create({
	bigText: {
		flex: 2,
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
		color: '#FFFFFF'
	},
	mainText: {
		flex: 1,
		fontSize: 16,
		textAlign: 'center',
		color: '#FFFFFF'
	}
});
