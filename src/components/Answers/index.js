import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { updateAnswers } from '../../actions/answers';

const styles = StyleSheet.create({
	checkbox: {
		width: 300,
		backgroundColor: '#FFFFFF',
		borderColor: '#FFFFFF',
		borderWidth: 0,
	},
	text: {
		fontFamily: 'Archer-Book',
		fontSize: 30,
		fontWeight: '100',
		color: '#000000',
	},
});

class Answers extends Component {
	constructor(props) {
		super(props);
		this.choices = ['Oui', 'Non', "Non, mais ça m'intéresse"];
		const allFalse = this.choices.map(() => {
			return false;
		});
		this.state = { checked: allFalse };
	}
	updateCheckBoxes = current => {
		const updated = this.state.checked.map((check, i) => {
			return i === current ? !this.state.checked[current] : false;
		});
		this.props.updateAnswers({
			question: this.props.question,
			answer: current,
		});
		this.setState({ checked: updated });
	};
	render() {
		const renderedAnswers = this.choices.map((answer, i) => {
			return (
				<CheckBox
					key={i}
					title={answer}
					size={30}
					containerStyle={styles.checkbox}
					textStyle={styles.text}
					checkedIcon="dot-circle-o"
					uncheckedColor="#3e3e3e"
					uncheckedIcon="circle-o"
					checked={this.state.checked[i] || false}
					onPress={() => {
						this.updateCheckBoxes(i);
					}}
				/>
			);
		});
		return <View>{renderedAnswers}</View>;
	}
}

const mapDispatchToProps = Object.assign({ updateAnswers });

export default connect(state => state, mapDispatchToProps)(Answers);
