import { IonButton, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonItemDivider, IonLabel, IonList, IonPage, IonText, IonTitle, IonToolbar, useIonPicker } from '@ionic/react';
import App from '../App';
import './Tab4.css';
import { saveAs } from 'file-saver';
import { useState, useEffect,useRef  } from "react";
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
      <IonContent>
        <IonList>
          <IonItemDivider>Default Input with Placeholder</IonItemDivider>
          <IonItem>
            <IonInput value={text} placeholder="Enter Input" onIonChange={e => setText(e.detail.value!)}></IonInput>
          </IonItem>

          <IonItemDivider>Input with clear button when there is a value</IonItemDivider>
          <IonItem>
            <IonInput value={text} placeholder="Enter Input" onIonChange={e => setText(e.detail.value!)} clearInput></IonInput>
          </IonItem>

          <IonItemDivider>Number type input</IonItemDivider>
          <IonItem>
            <IonInput type="number" value={number} placeholder="Enter Number" onIonChange={e => setNumber(parseInt(e.detail.value!, 10))}></IonInput>
          </IonItem>

          <IonItemDivider>Disabled input</IonItemDivider>
          <IonItem>
            <IonInput value={text} disabled></IonInput>
          </IonItem>

          <IonItemDivider>Readonly input</IonItemDivider>
          <IonItem>
            <IonInput value={text} readonly></IonInput>
          </IonItem>

          <IonItemDivider>Inputs with labels</IonItemDivider>

          <IonItem>
            <IonLabel>Default Label</IonLabel>
            <IonInput></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="floating">Floating Label</IonLabel>
            <IonInput value={text}></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="fixed">Fixed Label</IonLabel>
            <IonInput value={text}></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Stacked Label</IonLabel>
            <IonInput value={text}> </IonInput>
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
