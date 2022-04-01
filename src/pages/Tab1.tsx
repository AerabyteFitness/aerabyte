import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { saveAs } from 'file-saver';
import { useState, useEffect } from "react";
import { Storage } from '@capacitor/storage';
import React from 'react';
import { IonMenu, IonList, IonItem, IonRouterOutlet } from '@ionic/react';
import { IonButtons, IonBackButton, IonButton, IonIcon, IonMenuButton, IonSearchbar, IonSegment, IonSegmentButton } from '@ionic/react';
import { personCircle, search, helpCircle, star, create, ellipsisHorizontal, ellipsisVertical } from 'ionicons/icons';
const Tab1: React.FC = () => {
  const [output, setoutput] = useState("");
  const [score, setscore] = useState(0);

  var FileSaver = require('file-saver');

  const get_html =()=>{
    const access_token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzg4WDIiLCJzdWIiOiI5V0pWVk4iLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJ3aHIgd251dCB3cHJvIHdzbGUgd3dlaSB3c29jIHdhY3Qgd3NldCB3bG9jIiwiZXhwIjoxNjc4NTkxNDA0LCJpYXQiOjE2NDcwNTU0MDR9._JrdjrgkVdce1KifTNpm4IBuGemERh2ArXYnDFIPiRo"
    fetch("https://api.fitbit.com/1/user/-/activities/heart/date/2022-03-11/1d/1min.json",{
      method:"GET",
      headers:{"Authorization":"Bearer " + access_token}
  })
  .then(response => response.json())
  .then(data => {
    //console.log(data);
    let activities_heart_intraday = data["activities-heart-intraday"];
    let allData = activities_heart_intraday["dataset"];
    //let heart_intraday = a.activities-heart-intraday;
    //console.log(activities-heart-intraday);
    console.log(allData.length);
    setoutput(allData.length);
  
  
  
    for(var i = 0 ; i<allData.length; i++){
  
  
      let currentValue = allData[i]["value"];
      if(currentValue>=100){
  
        setscore(score+10);
  
      }
  
    }

  
    //console.log()
    var blob = new Blob([JSON.stringify(allData)], {type: "text/plain;charset=utf-8"});
    FileSaver.saveAs(blob, "heart_rate.txt");
  
  
  });
  }

  return (
    <IonPage>
      <IonHeader>
      <IonToolbar>
    <IonButtons slot="start">
      <IonMenuButton autoHide={false} />
    </IonButtons>
    <IonTitle>Your Aerabyte</IonTitle>
  </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 4</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Setting3" />
        <button onClick={()=> get_html()}>
            CLick
        </button>
        <p>{output}</p>
        <p>{score}</p>
      </IonContent>
    </IonPage>
  );
};


export default Tab1;
