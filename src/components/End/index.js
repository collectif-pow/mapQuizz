import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import Border from '../Border';
import { clearAnswers } from '../../actions/answers';

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
	back: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#FFFFFF',
	},
});

class End extends Component {
	constructor(props) {
		super(props);
		this.message = this.computeAnswers();
	}
	computeAnswers = () => {
		switch (this.props.answers.length) {
			case 5:
			case 4:
			case 3:
				this.result = 0;
				this.props.answers.forEach(current => {
					if (current.answer === 0) this.result += 1;
				});
				if (this.result >= 4)
					return "Tu es un serial mapper ! Les Autres Possibles et toi : une histoire d'amour qui roule, une fusion des âmes !";
				else if (this.result > 1)
					return "Les Autres Possibles et toi : une histoire d'amour faite de communions intellectuelles et de grands débats ! Rien de mieux pour ne pas s'ennuyer !";
				else
					return '?? Tu ne connais pas encore Les Autres Possibles ? Tu pourrais en lire un pour voir ?';
				break;
			default:
				return '?? Tu ne connais pas encore Les Autres Possibles ? Tu pourrais en lire un pour voir ?';
		}
	};
	componentDidMount() {
		fetch('http://192.168.43.44:3000/api/print');
	}
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<Text style={styles.title}>{this.message}</Text>
					<Text style={styles.title}>{"N'oublie pas ton ticket de tombola !"}</Text>
				</View>
				<Border />
				<View style={styles.back}>
					<Button
						raised
						iconRight={{ name: 'chevron-right' }}
						title="Redémarrer le quizz"
						backgroundColor="#000000"
						onPress={() => {
							this.props.navigation.navigate('Home');
							this.props.clearAnswers();
						}}
					/>
				</View>
			</View>
		);
	}
}

const mapDispatchToProps = Object.assign({ clearAnswers });

export default connect(state => state, mapDispatchToProps)(End);
