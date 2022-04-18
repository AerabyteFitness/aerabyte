import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab3.css";
import React, { useState } from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonIcon,
  IonButton,
  IonBackButton,
} from "@ionic/react";
import {
  pin,
  wifi,
  wine,
  warning,
  walk,
  personCircle,
  bicycleOutline,
  accessibilitySharp,
} from "ionicons/icons";
import { IonButtons, IonMenuButton } from "@ionic/react";
import { IonReorder, IonReorderGroup } from "@ionic/react";
import { pizza } from "ionicons/icons";
import Tab1 from "./Tab1";
import { useHistory } from "react-router-dom";

const Tab3: React.FC = () => {
  //Variables
  const [displayScore, setDisplayScore] = useState(0);
  const [displayDuration, setDuration] = useState(0);
  const [displayDate, setDate] = useState(0);

  // this is to handle the userlogo button to redirect to login/logout page
  const history = useHistory();
  const handleLoginButtonPress = () => {
    history.push("/Tabuser");
    //Variables
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
          <IonTitle>History</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent  className ="ion-padding" fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonCard>
                  <IonCardHeader>
                    <IonCardSubtitle>
                      Time Duration {displayDuration}
                    </IonCardSubtitle>
                    <IonCardTitle>Today</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <h1>
                      {" "}
                      <IonIcon
                        slot="start"
                        size="large"
                        icon={accessibilitySharp}
                      />{" "}
                      Aerabyte Points Scored {displayScore}
                    </h1>
                    <h3>Duration {displayDuration}</h3>
                  </IonCardContent>
                </IonCard>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonCard>
                  <IonCardHeader>
                    <IonCardSubtitle>
                      Time {displayDuration}
                    </IonCardSubtitle>
                    <IonCardTitle>Yesterday</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <h1>
                      {" "}
                      <IonIcon
                        slot="start"
                        size="large"
                        icon={accessibilitySharp}
                      />{" "}
                      Aerabyte Points Scored {displayScore}
                    </h1>
                    <h3>duration {displayDuration}</h3>
                  </IonCardContent>
                </IonCard>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonCard>
                  <IonCardHeader>
                    <IonCardSubtitle>
                      Time {displayDuration}
                    </IonCardSubtitle>
                    <IonCardTitle>Thu, Apr 14</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <h1>
                      {" "}
                      <IonIcon
                        slot="start"
                        size="large"
                        icon={accessibilitySharp}
                      />{" "}
                      Aerabyte Points Scored {displayScore}
                    </h1>
                    <h3>Duration {displayDuration}</h3>
                  </IonCardContent>
                </IonCard>
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
