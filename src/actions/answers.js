export const updateAnswers = answer => {
	return (dispatch, getState) => {
		dispatch({
			type: 'NEW_ANSWER',
			answer,
		});
	};
};

export const clearAnswers = answer => {
	return (dispatch, getState) => {
		dispatch({
			type: 'CLEAR',
			answer,
		});
	};
};
