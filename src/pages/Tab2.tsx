import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useState } from "react";
import "./Tab2.css";
import {
  IonMenu,
  IonList,
  IonItem,
  IonRouterOutlet,
  IonMenuToggle,
  IonButton,
  IonSplitPane,
} from "@ionic/react";
import {
  IonButtons,
  IonBackButton,
  IonIcon,
  IonMenuButton,
  IonSearchbar,
  IonSegment,
  IonSegmentButton,
} from "@ionic/react";
import {
  personCircle,
  search,
  helpCircle,
  star,
  create,
  ellipsisHorizontal,
  ellipsisVertical,
} from "ionicons/icons";
import { IonPopover, IonLabel } from "@ionic/react";
import {
  IonListHeader,
  IonSelect,
  IonSelectOption,
  IonItemDivider,
} from "@ionic/react";
import { useIonToast } from "@ionic/react";
import { IonThumbnail, IonImg } from "@ionic/react";
import Tab4 from "./Tab4";
import { useHistory } from "react-router-dom";

const Tab2: React.FC = () => {
  // this is to handle the userlogo button to redirect to login/logout page
  const history = useHistory();
  const handleLoginButtonPress = () => {
    history.push("/Tabuser");
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonButtons slot="secondary">
            <IonButton onClick={handleLoginButtonPress}>
              <IonIcon slot="icon-only" icon={personCircle} />
            </IonButton>
          </IonButtons>
          <IonTitle>Statistics</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonImg
                  src={
                    "http://www.aerabyte.com/wp-content/uploads/2020/05/aerabyte__time_x_effort.jpg"
                  }
                />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <p>
                  My translation of ‘moderate’ is for heart rates in the 60% and
                  70% zone of estimated maximum heart rate. Once you reach 60%
                  you start earning points as per the table below. Our greatest
                  encouragement is for people to aim to get to 60% when working
                  out and reap the benefits of moderate exercise. Maximum heart
                  rate (MHR) is said to be around 220 minus age, though there is
                  conjectured about this. Certainly the distribution of MHR
                  scores is spread; older people who have been long term
                  vigorous exercisers may have higher maximum heart rates.
                  During parts of a run or cycle they may be spending some time
                  in the zone above the estimated heart rate for someone else
                  their age. If you’re fit and can do this, no problem. If
                  you’re unfit don’t try it. You could ‘blow a gasket’. For
                  people over 50, it’s probably best that maximum heart rate be
                  measured under strict medical supervision. Here’s the
                  shortened version of the Aerabyte points score table. You’ll
                  be able to see the heart rate zones for ‘light’, ‘moderate’,
                  ‘vigorous’, ‘hard’, ‘very hard’ and ‘ultra’, based on
                  percentages of estimated maximum heart rate. In the Aerabyte
                  app, every age from 20 to 90 is automatically taken into
                  account.
                </p>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonImg
                  src={
                    "http://www.aerabyte.com/wp-content/uploads/2021/10/Aerabyte_points_calculation_-5_year_age_brackets_12-10-21.jpg"
                  }
                />
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
