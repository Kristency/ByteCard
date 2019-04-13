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
					this.onAuthChange(this.auth.isSignedIn.get());
					this.auth.isSignedIn.listen(this.onAuthChange);
				});
		});
	}

	onAuthChange = (isSignedIn) => {
		if (isSignedIn) {
			this.props.signIn(this.auth.currentUser.get());
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

const mapStateToProps = (state) => {
	return {
		isSignedIn: state.auth.isSignedIn
	};
};

export default connect(mapStateToProps, { signIn })(Login);
