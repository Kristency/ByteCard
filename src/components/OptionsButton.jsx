import React from 'react';
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
	// expand() {
	// 	console.log('expanded');
	// }
	render() {
		return (
			<div>
				<IonList>
					<IonItem>
						<IonLabel>Pokémon Yellow</IonLabel>
					</IonItem>
					<IonItem>
						<IonLabel>Mega Man X</IonLabel>
					</IonItem>
					<IonItem>
						<IonLabel>The Legend of Zelda</IonLabel>
					</IonItem>
					<IonItem>
						<IonLabel>Pac-Man</IonLabel>
					</IonItem>
					<IonItem>
						<IonLabel>Super Mario World</IonLabel>
					</IonItem>
				</IonList>

				{/*-- List of Input Items --*/}
				<IonList>
					<IonItem>
						<IonLabel>Input</IonLabel>
						<IonInput />
					</IonItem>
					<IonItem>
						<IonLabel>Toggle</IonLabel>
						<IonToggle slot="end" />
					</IonItem>
					<IonItem>
						<IonLabel>Radio</IonLabel>
						<IonRadio slot="end" />
					</IonItem>
					<IonItem>
						<IonLabel>Checkbox</IonLabel>
						<IonCheckbox slot="start" />
					</IonItem>
				</IonList>

				{/*-- List of Sliding Items --*/}
				<IonList>
					<IonItemSliding>
						<IonItem>
							<IonLabel>Item</IonLabel>
						</IonItem>
						<IonItemOptions side="end">
							<IonItemOption onClick={() => {}}>Unread</IonItemOption>
						</IonItemOptions>
					</IonItemSliding>

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
							<IonIcon name="expand" />
						</IonFabButton>
						<IonFabButton color="twitter">
							<IonIcon name="add" />
						</IonFabButton>
					</IonFabList>
				</IonFab>
			</div>
		);
	}
}

export default OptionsButton;
