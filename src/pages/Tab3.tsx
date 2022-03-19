import { IonContent, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>History</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonItem>
          <IonLabel position='floating'>hello
          </IonLabel>
          <IonInput></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position='floating'>hello2
          </IonLabel>
          <IonInput></IonInput>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
