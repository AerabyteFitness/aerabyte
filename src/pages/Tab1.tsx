import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";
import { saveAs } from "file-saver";
import { useState, useEffect } from "react";
import { Storage } from "@capacitor/storage";
import React from "react";
import { IonMenu, IonList, IonItem, IonRouterOutlet } from "@ionic/react";
import {
  IonButtons,
  IonBackButton,
  IonButton,
  IonIcon,
  IonMenuButton,
  IonInput,
  IonSearchbar,
  IonSegment,
  IonSegmentButton,
} from "@ionic/react";
import { syncSharp, bicycleOutline, personCircle, walk, walkOutline } from "ionicons/icons";
import { IonBadge, IonLabel } from "@ionic/react";
import { useHistory } from "react-router-dom";

const Tab1: React.FC = () => {
  const [output, setoutput] = useState("");
  const [outputdata, setoutputdata] = useState("");
  const [score, setscore] = useState(0);

  const [displayScore, setDisplayScore] = useState(0);

  //Variables declared
  var FileSaver = require("file-saver");
  var heartbeatRatio = 0;
  var age = 22;
  var aerabyteMaxHb = 220;
  var aerabyteRatio1 = 0.55;
  var aerabyteRatio2 = 0.6;
  var aerabyteRatio3 = 0.65;
  var aerabyteRatio4 = 0.7;
  var aerabyteRatio5 = 0.75;
  var aerabyteRatio6 = 0.8;
  var aerabyteRatio7 = 0.85;
  var aerabyteRatio8 = 0.9;
  var aerabyteRatio9 = 0.95;
  var aerabyteRatioMax = 1;
  var aerabyteTotal = 0;

  // this is to handle the userlogo button to redirect to login/logout page
  const history = useHistory();
  const handleLoginButtonPress = () => {
    history.push("/Tabuser");
  };

  //Code below is related to connecting to FitBit and getting data from it
  const get_html = () => {
    const myArr = [];
    const access_token =
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzg4WDIiLCJzdWIiOiI5V0pWVk4iLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJ3aHIgd251dCB3cHJvIHdzbGUgd3dlaSB3c29jIHdhY3Qgd3NldCB3bG9jIiwiZXhwIjoxNjc4NTkxNDA0LCJpYXQiOjE2NDcwNTU0MDR9._JrdjrgkVdce1KifTNpm4IBuGemERh2ArXYnDFIPiRo";
    fetch(
      "https://api.fitbit.com/1/user/-/activities/heart/date/2022-04-13/1d/1min.json",
      {
        method: "GET",
        headers: { Authorization: "Bearer " + access_token },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        let activities_heart_intraday = data["activities-heart-intraday"];
        let allData = activities_heart_intraday["dataset"];
        let test = allData["0"]["value"];
        //let heart_intraday = a.activities-heart-intraday;
        //console.log(allData);
        setoutput(allData.length);
        setoutputdata(allData);

        // Code below is to calculate Aerabyte Points
        for (var i = 0; i < allData.length; i++) {
          let currentHeartbeat = allData[i]["value"];
          heartbeatRatio = currentHeartbeat / (aerabyteMaxHb - age);

          if (heartbeatRatio < aerabyteRatio1) {
            aerabyteTotal = aerabyteTotal + 0;
          }
          if (
            heartbeatRatio >= aerabyteRatio1 &&
            heartbeatRatio < aerabyteRatio2
          ) {
            aerabyteTotal = aerabyteTotal + 1;
          }
          if (
            heartbeatRatio >= aerabyteRatio2 &&
            heartbeatRatio < aerabyteRatio3
          ) {
            aerabyteTotal = aerabyteTotal + 2;
          }
          if (
            heartbeatRatio >= aerabyteRatio3 &&
            heartbeatRatio < aerabyteRatio4
          ) {
            aerabyteTotal = aerabyteTotal + 3;
          }
          if (
            heartbeatRatio >= aerabyteRatio4 &&
            heartbeatRatio < aerabyteRatio5
          ) {
            aerabyteTotal = aerabyteTotal + 4;
          }
          if (
            heartbeatRatio >= aerabyteRatio5 &&
            heartbeatRatio < aerabyteRatio6
          ) {
            aerabyteTotal = aerabyteTotal + 5;
          }
          if (
            heartbeatRatio >= aerabyteRatio6 &&
            heartbeatRatio < aerabyteRatio7
          ) {
            aerabyteTotal = aerabyteTotal + 6;
          }
          if (
            heartbeatRatio >= aerabyteRatio7 &&
            heartbeatRatio < aerabyteRatio8
          ) {
            aerabyteTotal = aerabyteTotal + 7;
          }
          if (
            heartbeatRatio >= aerabyteRatio8 &&
            heartbeatRatio < aerabyteRatio9
          ) {
            aerabyteTotal = aerabyteTotal + 8;
          }
          if (
            heartbeatRatio >= aerabyteRatio9 &&
            heartbeatRatio < aerabyteRatioMax
          ) {
            aerabyteTotal = aerabyteTotal + 9;
          }
          if (heartbeatRatio >= aerabyteRatioMax) {
            aerabyteTotal = aerabyteTotal + 10;
          }

          //console.log(allData[i]["value"]);
          // console.log(aerabyteTotal);
          setDisplayScore(aerabyteTotal);
        }

        //

        var blob = new Blob([JSON.stringify(allData)], {
          type: "text/plain;charset=utf-8",
        });
        FileSaver.saveAs(blob, "heart_rate.txt");
      });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start"></IonButtons>
          <IonButtons slot="secondary">  
            <IonButton onClick={handleLoginButtonPress}>
              <IonIcon slot="icon-only" icon={personCircle} />
            </IonButton>
          </IonButtons>

          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding" fullscreen>
        <IonGrid>
          <IonCol>
            <IonItem>
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Aerabyte Points <IonIcon slot="start" size="large" icon={bicycleOutline} /> </IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <h1> Aerabyte Points Scored Today {displayScore}</h1>
                </IonCardContent>
              </IonCard>
            </IonItem>
          </IonCol>
          <IonCol className="ion-text-center">
            <IonButton onClick={() => get_html()}>
              <IonIcon slot="start" icon={walkOutline} />
              Click to get Aerabyte
            </IonButton>
          </IonCol>
        </IonGrid>
      </IonContent>

      {/* <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 4</IonTitle>
          </IonToolbar>
        </IonHeader>
        // <p>{output}</p> // comment this one out 
        <IonButton expand="block" onClick={() => get_html()}>
          Click to get Aerabyte
        </IonButton>
        <IonItem>
          <IonLabel>Your Aerabyte for the Day</IonLabel>
          <IonBadge slot="end">{displayScore}</IonBadge>
        </IonItem>
      </IonContent> */}
    </IonPage>
  );
};

export default Tab1;
