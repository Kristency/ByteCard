import React, { Component } from 'react';
import { IonModal, IonButton } from '@ionic/react';

class Modal extends Component {
	state = {
		showModal: this.props.show
	};

	render() {
		return (
			<IonModal>
				<p>This is modal content</p>
				<IonButton onClick={() => this.setState(() => ({ showModal: false }))}>Close Modal</IonButton>
			</IonModal>
		);
	}
}

export default Modal;
