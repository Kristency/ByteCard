import React, { Component } from 'react';
import { IonApp } from '@ionic/react';

import OptionsButton from './OptionsButton';
import Login from './Login';

class App extends Component {
	render() {
		return (
			<div>
				<IonApp>
					<OptionsButton />
					<Login />
				</IonApp>
			</div>
		);
	}
}

export default App;
