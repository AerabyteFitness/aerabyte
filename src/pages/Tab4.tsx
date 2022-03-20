import { IonButton, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonItemDivider, IonLabel, IonList, IonPage, IonText, IonTitle, IonToolbar, useIonPicker } from '@ionic/react';
import App from '../App';
import './Tab4.css';
import { saveAs } from 'file-saver';
import { useState, useEffect,useRef  } from "react";
import ExploreContainer from '../components/ExploreContainer';
import './Tab4.css';

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
      <IonToolbar color='primary'>
         <IonTitle >Setting</IonTitle>
        </IonToolbar>
      </IonHeader>
      <div className='Header'>
        <p>Your personal Info</p>
      </div>
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
        <IonDatetime size="cover"presentation="date" value={selectedDate} onIonChange={e => setSelectedDate(e.detail.value!)}>
        <div slot="title">Please select your birthday</div>
        <IonButtons slot="buttons">
        </IonButtons>
        </IonDatetime>
      </IonContent>
    </IonPage>
    
  );

};

export default Tab4;
