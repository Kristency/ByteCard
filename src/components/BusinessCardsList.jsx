import React, { Component } from 'react';
import { IonAvatar, IonModal } from '@ionic/react';
import { IonItem, IonLabel, IonList, IonButton } from '@ionic/react';
import { IonCard } from '@ionic/react';
import { IonItemSliding, IonItemOption, IonItemOptions } from '@ionic/react';
import { connect } from 'react-redux';
import { fetchConnections } from '../actions';

class BusinessCardsList extends Component {
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

	state = {
		showModal: false,
		modalData: {}
	};

	data = [
		{
			name: 'Nandi',
			phoneNo: '56789086755',
			linkedIn: 'linkedIn/nandi',
			thumbnail: 'https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383__340.jpg',
			role: 'assistant'
		},
		{
			name: 'Akshat',
			phoneNo: '7654656789',
			linkedIn: 'linkedIn/akshat',
			role: 'boss',
			thumbnail: 'https://cdn.pixabay.com/photo/2017/03/04/12/15/programming-2115930__340.jpg'
		},
		{
			name: 'Abhimanyu',
			phoneNo: '76563456789',
			linkedIn: 'linkedIn/abhimanyu',
			role: 'partner',
			thumbnail: 'https://cdn.pixabay.com/photo/2017/08/31/09/01/woman-2699801__340.jpg'
		}
	];

	onCardClick = (d) => {
		console.log(d);
		this.setState({
			showModal: true,
			modalData: d
		});
	};

	listItems = this.data.map((d) => (
		<IonItemSliding>
			<IonCard onClick={() => this.onCardClick(d)}>
				<IonItem>
					<IonAvatar>
						<img src={d.thumbnail} />
					</IonAvatar>
					<IonItem>
						<IonLabel>{d.name}</IonLabel>
					</IonItem>
					<IonButton fill="outline" slot="end">
						{d.role}
					</IonButton>
				</IonItem>
				<IonItemOptions side="end">
					<IonItemOption onClick={() => {}}>Unread</IonItemOption>
				</IonItemOptions>
			</IonCard>
		</IonItemSliding>
	));

	render() {
		return (
			<div>
				<IonModal
					isOpen={this.state.showModal}
					onDidDismiss={() => this.setState(() => ({ showModal: false }))}
				>
					<IonCard>
						<IonAvatar
							style={{
								marginLeft: '40%'
							}}
						>
							<img src={this.state.modalData.thumbnail} />
						</IonAvatar>
						<IonItem>
							<IonLabel style={{ marginLeft: '5%' }}>
								<b>{this.state.modalData.name}</b>
							</IonLabel>
						</IonItem>
						<IonItem>
							<IonLabel style={{ marginLeft: '10%' }}>{this.state.modalData.linkedIn}</IonLabel>
							<IonLabel>{this.state.modalData.phoneNo}</IonLabel>
						</IonItem>
					</IonCard>
					<IonButton
						style={{ marginLeft: '37%' }}
						onClick={() => this.setState(() => ({ showModal: false }))}
					>
						Close
					</IonButton>
				</IonModal>

				<IonList>{this.listItems}</IonList>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		connections: state.connections
	};
};

export default connect(mapStateToProps, { fetchConnections })(BusinessCardsList);
