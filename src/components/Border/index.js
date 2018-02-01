import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

const styles = {
	border: {
		height: 6,
		borderBottomColor: 'black',
		borderBottomWidth: 2,
		borderTopColor: 'black',
		borderTopWidth: 2,
	},
};

const Border = () => {
	return <View style={styles.border} />;
};

export default Border;
