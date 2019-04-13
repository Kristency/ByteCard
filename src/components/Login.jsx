import React from 'react';
import { IonButton } from '@ionic/react';
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
				});
		});
	}

	onSignInClick = () => {
		this.auth.signIn().then(() => {
			const profile = this.auth.currentUser.get().getBasicProfile();
			const currentUser = {
				thumbnail: profile.getImageUrl(),
				name: profile.getName(),
				email: profile.getEmail(),
				googleId: profile.getId()
			};
			this.props.signIn(currentUser);
			this.props.history.push('/profile/connections');
		});
	};

	render() {
		return (
			<div>
				<IonButton
					onClick={this.onSignInClick}
					color="danger"
					expand="block"
					size="large"
					mode="md"
					style={{ backgroundColor: '#f44336', fontFamily: 'nunito' }}
				>
					Sign In
				</IonButton>
			</div>
		);
	}
}

export default connect(null, { signIn })(Login);
