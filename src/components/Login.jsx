import React from 'react';
import { IonButton, IonIcon } from '@ionic/react';
import { connect } from 'react-redux';
import { signIn } from '../actions';

class Login extends React.Component {
	componentDidMount() {
		window.gapi.load('client:auth2', () => {
			window.gapi.client
				.init({
					clientId: '152828476993-vokbnvor86nsrku3b36bhkm8fsi25n02.apps.googleusercontent.com',
					scope: 'profile'
				})
				.then(() => {
					this.auth = window.gapi.auth2.getAuthInstance();
					this.auth.isSignedIn.listen(this.onAuthChange);
				});
		});
	}

	onAuthChange = (isSignedIn) => {
		if (isSignedIn) {
			this.props.signIn();
		} else {
			this.props.signOut();
		}
	};

	onSignInClick = () => {
		this.auth.signIn();
	};

	render() {
		return (
			<div>
				<IonButton onClick={this.onSignInClick} color="warning" size="large">
					Log In
				</IonButton>
			</div>
		);
	}
}

export default connect(null, { signIn })(Login);
