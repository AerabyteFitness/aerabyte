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
  const [weight, setWeight] = useState<number>();
  const [number, setNumber] = useState<number>();
  const [age, setAge] = useState<number>();
  

  return (
    <IonPage>
      <IonHeader>
          <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton defaultHref="/" />
        </IonButtons>
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
          <IonItemDivider>Your Height</IonItemDivider>
          <IonItem>
            <IonInput type="number" value={number}   id="number"  onIonChange={ (e) => setNumber( parseInt(e.detail.value!) ) } placeholder="Enter Height"></IonInput>
          </IonItem>
          <IonItemDivider>Your Weight</IonItemDivider>
          <IonItem>
            <IonInput type="number" value={weight}   id="number"  onIonChange={ (e) => setWeight( parseInt(e.detail.value!) ) } placeholder="Enter Weight(KG)"></IonInput>
          </IonItem>
          <IonItemDivider>Your Age</IonItemDivider>
          <IonItem>
            <IonInput type="number" value={age}   id="number"  onIonChange={ (e) => setAge( parseInt(e.detail.value!) ) } placeholder="Your Age"></IonInput>
          </IonItem>
        </IonList>
        {/*-- <IonDatetime presentation="date"></IonDatetime>
          --*/}
      </IonContent>
    </IonPage>
    
  );
  const text_public = text;
};

export default Tab4;
