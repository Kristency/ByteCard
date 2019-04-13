import React from 'react';
import { Route, Redirect, Link } from 'react-router-dom';
import { IonContent, IonFab, IonFabButton, IonIcon, IonFabList } from '@ionic/react';

import {
	IonList,
	IonItem,
	IonLabel,
	IonInput,
	IonToggle,
	IonRadio,
	IonCheckbox,
	IonItemSliding,
	IonItemOption,
	IonItemOptions
} from '@ionic/react';

class OptionsButton extends React.Component {
	handleOnSubmit = () => {
		this.props.history.push(`/qr-reader`);
	};
	render() {
		return (
			<div>
				<IonList>
					<IonItemSliding>
						<IonItem>
							<IonLabel>Item</IonLabel>
						</IonItem>
						<IonItemOptions side="end">
							<IonItemOption onClick={() => {}}>Unread</IonItemOption>
						</IonItemOptions>
					</IonItemSliding>
				</IonList>
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
			</div>
		);
	}
}

export default OptionsButton;
