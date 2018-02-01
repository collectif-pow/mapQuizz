import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import Border from '../Border';

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	header: {
		flex: 5,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#FFFFFF',
	},
	title: {
		fontFamily: 'Archer-Book',
		fontSize: 40,
		color: '#000000',
		textAlign: 'center',
		marginTop: 30,
		paddingLeft: 50,
		paddingRight: 50,
	},
	start: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#FFFFFF',
	},
});

class Home extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<Image source={require('./logo.png')} />
					<Text style={styles.title}>Bienvenue sur le quizz des Autres Possibles !</Text>
				</View>
				<Border />
				<View style={styles.start}>
					<Button
						raised
						iconRight={{ name: 'chevron-right' }}
						title="Démarrer le quizz"
						backgroundColor="#000000"
						onPress={() => this.props.navigation.navigate('1')}
					/>
				</View>
			</View>
		);
	}
}

export default Home;
