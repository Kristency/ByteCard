import React from 'react';
import { IonTabs, IonTabButton, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonPage } from '@ionic/react';
import { Route, Redirect } from 'react-router';
import Login from './Login';
class TopPane extends React.Component {
	render() {
		return (
			<IonPage>
				<IonTabs>
					<IonRouterOutlet>
						<Route path="/:tab(profile)" component={Login} exact={true} />
						<Route path="/:tab(connections)" component={Login} exact={true} />
					</IonRouterOutlet>
					<IonTabBar slot="top">
						<IonTabButton tab="profile" href="/profile">
							<IonIcon name="contact" />
							<IonLabel>Profile</IonLabel>
						</IonTabButton>
						<IonTabButton tab="connections" href="/connections">
							<IonIcon name="contacts" />
							<IonLabel>Connections</IonLabel>
						</IonTabButton>
					</IonTabBar>
				</IonTabs>
			</IonPage>
		);
	}
}

export default TopPane;

// import React from 'react';
// import QrGenerate from './QrGenerate';
// import {
// 	IonTabs,
// 	IonTabBar,
// 	IonRouterOutlet,
// 	IonTabButton,
// 	IonIcon,
// 	IonLabel,
// 	IonBadge,
// 	IonItem,
// 	IonSegment
// } from '@ionic/react';
// import { Route } from 'react-router-dom';
// import QrRead from './QrRead';
// import Login from './Login';

// const TopPane = () => (
// 	<div>
// 		<IonItem>
// 			<IonTabs>
// 				<IonRouterOutlet>
// 					<Route path="/:tab(contact)" component={QrRead} exact={true} />
// 					<Route path="/:tab(contacts)" component={Login} exact={true} />
// 				</IonRouterOutlet>
// 				<IonTabBar slot="top">
// 					<IonTabButton tab="contact">
// 						<IonIcon name="contact" />
// 						<IonLabel>Profile</IonLabel>
// 					</IonTabButton>
// 					<IonTabButton tab="contacts">
// 						<IonIcon name="contacts" />
// 						<IonLabel>Connections</IonLabel>
// 					</IonTabButton>
// 				</IonTabBar>
// 			</IonTabs>
// 		</IonItem>
// 		<IonSegment>
// 			<QrGenerate />
// 		</IonSegment>
// 	</div>
// );

// export default TopPane;
