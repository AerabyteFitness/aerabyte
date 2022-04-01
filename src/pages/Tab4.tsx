import { IonButton, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonItemDivider, IonLabel, IonList, IonPage, IonText, IonTitle, IonToolbar, useIonPicker } from '@ionic/react';
import App from '../App';
import './Tab4.css';
import { saveAs } from 'file-saver';
import { useState, useEffect,useRef  } from "react";
import ExploreContainer from '../components/ExploreContainer';
import './Tab4.css';
import React from 'react';
import { IonBackButton, IonMenuButton, IonSearchbar, IonSegment, IonSegmentButton } from '@ionic/react';
import { personCircle, search, helpCircle, star, create, ellipsisHorizontal, ellipsisVertical } from 'ionicons/icons';
import {
  IonButtons,
  IonDatetime,
  IonModal,
  IonPopover
} from '@ionic/react';
import { format, parseISO } from 'date-fns';
export const Tab4: React.FC = () => {


  const [text, setText] = useState<string>();
  const [number, setNumber] = useState<number>();



  const [selectedDate, setSelectedDate] = useState('2012-12-15T13:47:20.789');

  const dateFromIonDatetime = '2021-06-04T14:23:00-04:00';
  const formattedString = format(parseISO(dateFromIonDatetime), 'MMM d, yyyy');
  
  console.log(formattedString); // Jun 4, 2021


  return (
    <IonPage>
      <IonHeader>
          <IonToolbar>
        <IonButtons slot="secondary">
          <IonButton>
            <IonIcon slot="icon-only" icon={personCircle} />
          </IonButton>
        </IonButtons>
        <IonTitle>Your Info</IonTitle>
      </IonToolbar>
      </IonHeader>

      <IonContent >
      
        <IonList>
          <IonItemDivider>Please Enter your name</IonItemDivider>
          <IonItem>
            <IonInput value={text} placeholder="Name" onIonChange={e => setText(e.detail.value!)} clearInput></IonInput>
          </IonItem>

          <IonItemDivider>Your Weight(KG)</IonItemDivider>
          <IonItem>
            <IonInput type="number" value={number} placeholder="Enter Weight"></IonInput>
          </IonItem>
          <IonItemDivider>Your Height(CM)</IonItemDivider>
          <IonItem>
            <IonInput type="number" value={number} placeholder="Enter Height"></IonInput>
          </IonItem>

        </IonList>
        <IonDatetime presentation="date"></IonDatetime>
        <IonButton expand="block">Confirm</IonButton>

      </IonContent>
    </IonPage>
    
  );

};

export default Tab4;
