import React, { Component } from 'react';
import OptionsButton from './components/OptionsButton';
import './App.css';
// import { IonApp } from '@ionic/react';

class App extends Component {
	render() {
		return (
			<div>
				{/* <IonApp> */}
				<OptionsButton />
				{/* </IonApp> */}
			</div>
		);
	}
}

export default App;
