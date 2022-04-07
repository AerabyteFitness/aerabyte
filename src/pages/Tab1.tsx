import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { saveAs } from 'file-saver';
import { useState, useEffect } from "react";
import { Storage } from '@capacitor/storage';
import React from 'react';
import { IonMenu, IonList, IonItem, IonRouterOutlet } from '@ionic/react';
import { IonButtons, IonBackButton, IonButton, IonIcon, IonMenuButton, IonInput, IonSearchbar, IonSegment, IonSegmentButton } from '@ionic/react';
import { syncSharp } from 'ionicons/icons';
import { IonBadge, IonLabel} from '@ionic/react';
const Tab1: React.FC = () => {
  const [output, setoutput] = useState("");
  const [outputdata, setoutputdata] = useState("");
  const [score, setscore] = useState(0);
  var FileSaver = require('file-saver');
  var  b_scord = 0;
  var  age = 22;
  var  aerabytenum = 220;
  var  aerabytenum1 = 0.55;
  var  aerabytenum2 = 0.6;
  var  aerabytenum3 = 0.65;
  var  aerabytenum4 = 0.70;
  var  aerabytenum5 = 0.75;
  var  aerabytenum6 = 0.80;
  var  aerabytenum7 = 0.85;
  var  aerabytenum8 = 0.90;
  var  aerabytenum9 = 0.95;
  var  aerabytenum10 = 1;
  var  aerabytetotal = 0;
  const get_html =()=>{
    const myArr = [];
    const access_token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzg4WDIiLCJzdWIiOiI5V0pWVk4iLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJ3aHIgd251dCB3cHJvIHdzbGUgd3dlaSB3c29jIHdhY3Qgd3NldCB3bG9jIiwiZXhwIjoxNjc4NTkxNDA0LCJpYXQiOjE2NDcwNTU0MDR9._JrdjrgkVdce1KifTNpm4IBuGemERh2ArXYnDFIPiRo"
    fetch("https://api.fitbit.com/1/user/-/activities/heart/date/2022-03-12/1d/1min.json",{
      method:"GET",
      headers:{"Authorization":"Bearer " + access_token}
  })
  .then(response => response.json())
  .then(data => {
    //console.log(data);
    let activities_heart_intraday = data["activities-heart-intraday"];
    let allData = activities_heart_intraday["dataset"];
    let test = allData["0"]["value"];
    //let heart_intraday = a.activities-heart-intraday;
    //console.log(allData);
    setoutput(allData.length);
    setoutputdata(allData);
    
    for(var i = 0 ; i<allData.length; i++){

   
      let currentValue = allData[i]["value"];
      if(age < 25 && age >= 20){
        b_scord = currentValue/(aerabytenum- age);
      }
      if(age < 30 && age >= 25){
        b_scord = currentValue/(aerabytenum- age);
      }
      if(age < 35 && age >= 30){
        b_scord = currentValue/(aerabytenum- age);
      }
      if(age < 40 && age >= 35){
        b_scord = currentValue/(aerabytenum- age);
      }
      if(age < 45 && age >= 40){
        b_scord = currentValue/(aerabytenum- age);
      }
      if(age < 50 && age >= 45){
        b_scord = currentValue/(aerabytenum- age);
      }
      if(age < 55 && age >= 50){
        b_scord = currentValue/(aerabytenum- age);
      }
      if(age < 60 && age >= 55){
        b_scord = currentValue/(aerabytenum- age);
      }
      if(age < 65 && age >= 60){
        b_scord = currentValue/(aerabytenum- age);
      }
      if(age < 70 && age >= 65){
        b_scord = currentValue/(aerabytenum- age);
      }
      if(age < 75 && age >= 70){
        b_scord = currentValue/(aerabytenum- age);
      }
      if(age < 80 && age >= 75){
        b_scord = currentValue/(aerabytenum- age);
      }
      if(age < 85 && age >= 80){
        b_scord = currentValue/(aerabytenum- age);
      }
      if(age < 90 && age >= 85){
        b_scord = currentValue/(aerabytenum- age);
      }
      if(age >= 90){
        b_scord = currentValue/(aerabytenum- age);
      }
      if(b_scord < aerabytenum1){
        aerabytetotal = aerabytetotal + 0;
      }
      if(b_scord >= aerabytenum1 && b_scord < aerabytenum2){
        aerabytetotal = aerabytetotal + 1;
      }
      if(b_scord >= aerabytenum2 && b_scord < aerabytenum3){
        aerabytetotal = aerabytetotal + 2;
      }
      if(b_scord >= aerabytenum3 && b_scord < aerabytenum4){
        aerabytetotal = aerabytetotal + 3;
      }
      if(b_scord >= aerabytenum4 && b_scord < aerabytenum5){
        aerabytetotal = aerabytetotal + 4;
      }
      if(b_scord >= aerabytenum5 && b_scord < aerabytenum6){
        aerabytetotal = aerabytetotal + 5;
      }
      if(b_scord >= aerabytenum6 && b_scord < aerabytenum7){
        aerabytetotal = aerabytetotal + 6;
      }
      if(b_scord >= aerabytenum7 && b_scord < aerabytenum8){
        aerabytetotal = aerabytetotal + 7;
      }
      if(b_scord >= aerabytenum8 && b_scord < aerabytenum9){
        aerabytetotal = aerabytetotal + 8;
      }
      if(b_scord >= aerabytenum9 && b_scord < aerabytenum10){
        aerabytetotal = aerabytetotal + 9;
      }
      if(b_scord >= aerabytenum10){
        aerabytetotal = aerabytetotal + 10;
      }
      


      
      console.log(aerabytetotal);
    }
    
    
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
        <p>{output}</p>
        <IonButton expand="block" onClick={()=> 
            get_html()
          }>
          Click to get Aerabyte
        </IonButton>
        <IonItem>
          <IonLabel>Your Aerabyte for the Day</IonLabel>
          <IonBadge slot="end">{b_scord}</IonBadge>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};


export default Tab1;
