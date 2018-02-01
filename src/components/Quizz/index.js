import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import Answers from '../Answers';
import Border from '../Border';
import { clearAnswers } from '../../actions/answers';
import { pickQuestions } from '../../questions';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	question: {
		flex: 4,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
	},
	title: {
		fontSize: 32,
		fontWeight: 'bold',
		color: '#000000',
		textAlign: 'center',
		paddingLeft: 50,
		paddingRight: 50,
	},
	answers: {
		flex: 8,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
	},
	next: {
		flex: 2,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: 'white',
	},
});

class Quizz extends Component {
	constructor(props) {
		super(props);
		this.questions = pickQuestions();
	}
	nextPage = i => {
		if (i === 'Home') {
			this.props.clearAnswers();
			this.props.navigation.navigate('Home');
		} else if (i > this.questions.length) this.props.navigation.navigate('End');
		else this.props.navigation.navigate(`${i}`);
	};
	render() {
		const currentIndex = parseInt(this.props.navigation.state.routeName, 10);
		const current = this.questions[currentIndex - 1];
		return (
			<View style={styles.container}>
				<View style={styles.question}>
					<Text style={styles.title}>Tu es du genre à...</Text>
					<Text style={styles.title}>{current.question}</Text>
				</View>
				<Border />
				<View style={styles.answers}>
					<Answers question={currentIndex} />
				</View>
				<Border />
				<View style={styles.next}>
					<Button
						raised
						icon={{ name: 'chevron-left' }}
						title="Accueil"
						backgroundColor="#000000"
						onPress={() => this.nextPage('Home')}
					/>
					<Button
						raised
						iconRight={{ name: 'chevron-right' }}
						title={currentIndex === 5 ? 'Voir les résultats' : 'Question suivante'}
						backgroundColor="#000000"
						onPress={() => this.nextPage(currentIndex + 1)}
					/>
				</View>
			</View>
		);
	}
}

const mapDispatchToProps = Object.assign({ clearAnswers });

export default connect(state => state, mapDispatchToProps)(Quizz);
