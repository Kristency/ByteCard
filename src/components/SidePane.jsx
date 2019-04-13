import React from 'react';
import QrGenerate from './QrGenerate';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonRouterOutlet } from '@ionic/react';

const SidePane = () => (
	<div>
		<QrGenerate />
	</div>
);

export default SidePane;
