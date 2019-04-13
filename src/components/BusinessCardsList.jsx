import React, { Component } from 'react';
import { IonAvatar, IonChip, IonModal, IonImg } from '@ionic/react';
import {
	IonItem,
	IonLabel,
	IonList,
	IonText,
	IonThumbnail,
	IonButton,
	IonIcon,
	IonSelect,
	IonSelectOption,
	IonDatetime,
	IonToggle,
	IonInput,
	IonCheckbox,
	IonRange
} from '@ionic/react';

import { IonCard } from '@ionic/react';

import { IonItemSliding, IonItemOption, IonItemOptions } from '@ionic/react';

class BusinessCardsList extends Component {
	state = {
		showModal: false,
		modalData: {}
	};
	data = [
		{
			name: 'Nandi',
			phone: '56789086755',
			linkedIn: 'linkedIn/nandi',
			thumbnail: 'https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383__340.jpg',
			role: 'assistant'
		},
		{
			name: 'Akshat',
			phone: '7654656789',
			linkedIn: 'linkedIn/akshat',
			role: 'boss',
			thumbnail: 'https://cdn.pixabay.com/photo/2017/03/04/12/15/programming-2115930__340.jpg'
		},
		{
			name: 'Abhimanyu',
			phone: '76563456789',
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
					<IonButton fill="outline" slot="end" style={{ paddingLeft: '30px' }}>
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
						<IonLabel style={{ marginLeft: '40%', marginTop: '10%' }}>{this.state.modalData.name}</IonLabel>
					</IonCard>
					<IonButton onClick={() => this.setState(() => ({ showModal: false }))}>Close Modal</IonButton>
				</IonModal>

				<IonList>{this.listItems}</IonList>
			</div>
		);
	}
}

export default BusinessCardsList;
