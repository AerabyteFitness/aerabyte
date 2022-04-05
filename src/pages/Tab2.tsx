import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import React, { useState } from 'react';
import './Tab2.css';
import { IonMenu, IonList, IonItem, IonRouterOutlet, IonMenuToggle, IonButton, IonSplitPane} from '@ionic/react';
import {IonButtons, IonBackButton, IonIcon, IonMenuButton, IonSearchbar, IonSegment, IonSegmentButton } from '@ionic/react';
import { personCircle, search, helpCircle, star, create, ellipsisHorizontal, ellipsisVertical } from 'ionicons/icons';
import { IonPopover, IonLabel} from '@ionic/react';
import {IonListHeader, IonSelect, IonSelectOption, IonItemDivider } from '@ionic/react';
import {useIonToast } from '@ionic/react';
import {IonThumbnail, IonImg} from '@ionic/react';
import Tab4 from "./Tab4"




const Tab2: React.FC = () => {
  
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
          <IonTitle>Statistics</IonTitle>
        </IonToolbar>
        </IonHeader>

     <IonContent>

            <IonImg src={'http://www.aerabyte.com/wp-content/uploads/2021/10/Aerabyte_points_calculation_-5_year_age_brackets_12-10-21.jpg'} />
    </IonContent>
  </IonPage>



  );
};

export default Tab2;
