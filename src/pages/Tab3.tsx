import { IonContent, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import React from 'react';
import {IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonIcon,IonButton,IonBackButton } from '@ionic/react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import {IonButtons, IonMenuButton} from '@ionic/react';
import {IonReorder, IonReorderGroup} from '@ionic/react';
import { pizza } from 'ionicons/icons';
import Tab1 from './Tab1';
const Tab3: React.FC = () => {
  return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonButtons slot="secondary">
          </IonButtons>
          <IonTitle>History</IonTitle>
        </IonToolbar>
        </IonHeader>
        <IonContent>
        <IonReorderGroup disabled={true}>
        <IonReorder>

        <IonItem>
          <IonLabel>Today</IonLabel>
          <IonText >b</IonText>
        </IonItem>
      </IonReorder>

      <IonReorder>
        <IonItem>
          <IonLabel>Yesterday</IonLabel>
          <IonText >a</IonText>
        </IonItem>
      </IonReorder>
      </IonReorderGroup>
      </IonContent>
      </IonPage>
  );
};

export default Tab3;
