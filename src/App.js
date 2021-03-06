import React from 'react';
import Navigator from './config/router';
import { addNavigationHelpers } from 'react-navigation';
import { Provider, connect } from 'react-redux';

import store from './config/store';

const App = ({ dispatch, nav }) => (
	<Navigator
		navigation={addNavigationHelpers({
			dispatch,
			state: nav,
		})}
	/>
);

const mapStateToProps = state => ({
	nav: state.nav,
});

const AppWithNavigation = connect(mapStateToProps)(App);

export default () => (
	<Provider store={store}>
		<AppWithNavigation />
	</Provider>
);
