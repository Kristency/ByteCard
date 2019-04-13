import React from 'react';
import { IonFab, IonFabButton, IonIcon, IonFabList } from '@ionic/react';
import { connect } from 'react-redux';
import { signOut, fetchConnections } from '../actions';

import { IonButton, IonList, IonItem, IonLabel, IonItemSliding, IonItemOption, IonItemOptions } from '@ionic/react';

class OptionsButton extends React.Component {
	componentDidMount() {
		window.gapi.load('client:auth2', () => {
			window.gapi.client
				.init({
					clientId: '152828476993-vokbnvor86nsrku3b36bhkm8fsi25n02.apps.googleusercontent.com',
					scope: 'profile'
				})
				.then(() => {
					this.auth = window.gapi.auth2.getAuthInstance();
					this.props.fetchConnections(this.auth.currentUser.get().getId());
				});
		});
	}

	handleOnSubmit = () => {
		this.props.history.push('/qr-reader');
	};

	onSignOutClick = () => {
		this.auth.signOut().then(() => {
			this.props.signOut();
			this.props.history.push('/');
		});
	};

	render() {
		return (
			<div>
				<IonFab slot="fixed" vertical="bottom" horizontal="end">
					<IonFabButton>
						<IonIcon name="add" />
					</IonFabButton>
					<IonFabList side="top">
						<IonFabButton color="vimeo">
							{/* <Link to="/qr-reader"> */}
							<IonIcon name="expand" onClick={this.handleOnSubmit} />
							{/* </Link> */}
						</IonFabButton>
						<IonFabButton ion-text color="danger">
							<IonIcon name="add" />
						</IonFabButton>
					</IonFabList>
				</IonFab>
				<IonButton
					onClick={this.onSignOutClick}
					color="danger"
					expand="block"
					size="large"
					mode="md"
					style={{ backgroundColor: '#f44336', fontFamily: 'nunito' }}
				>
					Sign Out
				</IonButton>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		connections: state.connections
	};
};

export default connect(mapStateToProps, { signOut, fetchConnections })(OptionsButton);
