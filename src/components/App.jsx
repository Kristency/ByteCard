import React, { Component } from 'react';
import { IonApp } from '@ionic/react';
import { BrowserRouter, Route } from 'react-router-dom';
import SidePane from './SidePane';
import OptionsButton from './OptionsButton';
import Login from './Login';
import QrRead from './QrRead';

class App extends Component {
	render() {
		return (
			<div>
				<BrowserRouter>
					<div>
						<Route path="/" exact component={Login} />
						<Route path="/profile" component={SidePane} />
						<Route path="/profile/connections" exact component={OptionsButton} />
						<Route path="/qr-reader" exact component={QrRead} />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
