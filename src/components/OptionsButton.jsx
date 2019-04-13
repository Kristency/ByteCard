import React from 'react';
import { IonContent, IonFab, IonFabButton, IonIcon, IonFabList } from '@ionic/react';
import {
	IonItemGroup,
	IonItemDivider,
	IonLabel,
	IonItem,
	IonItemSliding,
	IonItemOptions,
	IonItemOption
} from '@ionic/react';

const OptionsButton = () => {
	return (
		<div>
			<IonItemGroup>
				<IonItemDivider>
					<IonLabel>A</IonLabel>
				</IonItemDivider>

				<IonItem>
					<IonLabel>Angola</IonLabel>
				</IonItem>
				<IonItem>
					<IonLabel>Argentina</IonLabel>
				</IonItem>
				<IonItem>
					<IonLabel>Armenia</IonLabel>
				</IonItem>
			</IonItemGroup>

			<IonItemGroup>
				<IonItemDivider>
					<IonLabel>B</IonLabel>
				</IonItemDivider>

				<IonItem>
					<IonLabel>Bangladesh</IonLabel>
				</IonItem>
				<IonItem>
					<IonLabel>Belarus</IonLabel>
				</IonItem>
				<IonItem>
					<IonLabel>Belgium</IonLabel>
				</IonItem>
			</IonItemGroup>
			<IonContent>
				<IonFab slot="fixed" vertical="bottom" horizontal="end">
					<IonFabButton>
						<IonIcon name="share" />
					</IonFabButton>
				</IonFab>
			</IonContent>
		</div>
	);
};

export default OptionsButton;
