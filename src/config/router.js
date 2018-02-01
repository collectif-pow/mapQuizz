import { StackNavigator } from 'react-navigation';

import Home from '../components/Home';
import End from '../components/End';
import Quizz from '../components/Quizz';

export default StackNavigator(
	{
		Home: { screen: Home },
		End: { screen: End },
		1: { screen: Quizz },
		2: { screen: Quizz },
		3: { screen: Quizz },
		4: { screen: Quizz },
		5: { screen: Quizz },
	},
	{
		headerMode: 'none',
		initialRouteName: 'Home',
		transitionConfig: () => ({
			transitionSpec: {
				duration: 700,
			},
		}),
	}
);
