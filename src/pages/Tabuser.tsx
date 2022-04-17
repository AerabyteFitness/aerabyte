import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import React, { useState } from 'react';
import './Tab2.css';
import {IonButtons, IonBackButton, IonIcon, IonMenuButton, IonSearchbar, IonSegment, IonSegmentButton } from '@ionic/react';
import Tab4 from "./Tab4"




const Tabuser: React.FC = () => {
  
  console.log(Tab4);
  return (  
    
    <IonPage>
       <IonHeader>
          <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonButtons slot="secondary">
          </IonButtons>
          <IonTitle>User Info</IonTitle>
        </IonToolbar>
        </IonHeader>

     <IonContent>
     <IonButton routerLink="/login" color='primary'>Login</IonButton>
      <IonButton routerLink="/register" color='secondary'>Register</IonButton>
    </IonContent>
  </IonPage>



  );
};

export default Tabuser;
