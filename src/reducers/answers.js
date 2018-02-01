const initialState = [];

export default (state = initialState, action) => {
	switch (action.type) {
		case 'NEW_ANSWER':
			return state.filter(e => e.question !== action.answer.question).concat([action.answer]);
		case 'CLEAR':
			return initialState;
		default:
			return state;
	}
};
