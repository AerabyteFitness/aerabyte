import {
  IonButton,
  IonCol,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonText,
  IonTitle,
  IonToolbar,
  useIonPicker,
} from "@ionic/react";
import App from "../App";
import "./Tab4.css";
import { saveAs } from "file-saver";
import { useState, useEffect, useRef } from "react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab4.css";
import React from "react";
import {
  IonBackButton,
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
import { IonButtons, IonDatetime, IonModal, IonPopover } from "@ionic/react";
import { format, parseISO } from "date-fns";
import { link } from "fs";
import Tabuser from "./Tabuser";
import { useHistory } from "react-router-dom";

//this is user input for personal data
export const Tab4: React.FC = () => {
  const [firstName, setfirstName] = useState<string>();
  const [lastName, setlastName] = useState<string>();
  const [weight, setWeight] = useState<number>();
  const [height, setHeight] = useState<number>();
  const [age, setAge] = useState<number>();
  const [gender, setGender] = useState<number>();
  // this is to handle the userlogo button to redirect to login/logout page
  const history = useHistory();
  const handleLoginButtonPress = () => {
    history.push("/Tabuser");
  };
  //Making reference so data can be shared to other pages
  const firstNameInputRef = useRef<HTMLIonInputElement>(null);
  const lastNameInputRef = useRef<HTMLIonInputElement>(null);
  const heightInputRef = useRef<HTMLIonInputElement>(null);
  const weightInputRef = useRef<HTMLIonInputElement>(null);
  const ageInputRef = useRef<HTMLIonInputElement>(null);
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
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonRow>
          <IonCol>
            <IonItem>
              <IonText>
                <h1>Your Info</h1>
              </IonText>
            </IonItem>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonItem>
              <IonLabel position="floating">First Name</IonLabel>
              <IonInput type="text" ref={firstNameInputRef}  value = {firstName} onIonChange={e => setfirstName(e.detail.value!)} clearInput>
                {" "}
              </IonInput>
            </IonItem>
          </IonCol>
          <IonCol>
            <IonItem>
              <IonLabel position="floating">Last Name</IonLabel>
              <IonInput type="text" ref={lastNameInputRef} value ={lastName} onIonChange={e => setlastName(e.detail.value!)} clearInput>
                {" "}
              </IonInput>
            </IonItem>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonItem>
              <IonLabel position="floating">Gender</IonLabel>
              <IonSelect
                value={gender}
                onIonChange={(e) => setGender(e.detail.value)}
              >
                <IonSelectOption value="female">Female</IonSelectOption>
                <IonSelectOption value="male">Male</IonSelectOption>
                <IonSelectOption value="unspecified">
                  I rather not say
                </IonSelectOption>
              </IonSelect>
            </IonItem>
          </IonCol>
          <IonCol>
            <IonItem>
              <IonLabel position="floating">Age</IonLabel>
              <IonInput type="number" ref={ageInputRef} >
                {" "}
              </IonInput>
            </IonItem>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonItem>
              <IonLabel position="floating">Your Weight (kg)</IonLabel>
              <IonInput type="number" ref={weightInputRef}>
                {" "}
              </IonInput>
            </IonItem>
          </IonCol>
          <IonCol>
            <IonItem>
              <IonLabel position="floating">Your Height (cm)</IonLabel>
              <IonInput type="number" ref={heightInputRef}>
                {" "}
              </IonInput>
            </IonItem>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
