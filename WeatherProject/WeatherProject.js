var React = require('react-native');
var {
	StyleSheet,
	Text,
	View,
	Image,
	TextInput
} = React;

import Forecast from './Forecast'

export default class WeatherProject extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			zip: '',
			forecast: null
		};
	}

	_handleTextChange(event) {
		console.log("recv:", event.nativeEvent.text);
		var zip = event.nativeEvent.text;
		this.setState({zip: zip});
		fetch('http://api.openweathermap.org/data/2.5/weather?zip='+zip+'&appid=6369a127c8df10732ee06598e529add4')
						.then((response) => response.json())
						.then((responseJSON) => {
							console.log(responseJSON);
							this.setState({
								forecast: {
									main: responseJSON.weather[0].main,
									description: responseJSON.weather[0].description,
									temp: responseJSON.main.temp
								}
							});
						})
					.catch((error) => {
						console.warn(error);
					});
	}

	render() {
		var content = null;
		if (this.state.forecast !== null) {
			content =	<Forecast
									main={this.state.forecast.main}
									description={this.state.forecast.description}
									temp={this.state.forecast.temp}/>;
			console.log(content)
		}
		return (
			 <View style={styles.container}>
        <Image source={require('image!flowers')}
               resizeMode='cover'
               style={styles.backdrop}>
          <View style={styles.overlay}>
           <View style={styles.row}>
             <Text style={styles.mainText}>
               Current weather for
             </Text>
             <View style={styles.zipContainer}>
               <TextInput
                 style={[styles.zipCode, styles.mainText]}
                 onSubmitEditing={this._handleTextChange.bind(this)}/>
             </View>
           </View>
           {content}
         </View>
        </Image>
      </View>
    );
	}
}

var baseFontSize = 16;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 30
  },
  backdrop: {
    flex: 1,
    flexDirection: 'column'
  },
  overlay: {
    paddingTop: 5,
    backgroundColor: '#000000',
    opacity: 0.5,
    flexDirection: 'column',
    alignItems: 'center'
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'flex-start',
    padding: 30
  },
  zipContainer: {
    flex: 1,
    borderBottomColor: '#DDDDDD',
    borderBottomWidth: 1,
    marginLeft: 5,
    marginTop: 3
  },
  zipCode: {
    width: 50,
    height: baseFontSize,
  },
  mainText: {
    flex: 1,
    fontSize: baseFontSize,
    color: '#FFFFFF'
  }
});