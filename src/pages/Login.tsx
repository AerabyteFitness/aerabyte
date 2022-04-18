import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonInput,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../firebase";
import { Toast } from "../Toast";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function login() {
    const res = await loginUser(username, password);
    if (!res) {
      Toast("test");
    } else {
      Toast("test");
    }
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonButtons slot="secondary"></IonButtons>
          <IonTitle>Account</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol>
            <IonInput
              placeholder="Username"
              onIonChange={(e: any) => setUsername(e.target.value)}
            />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
          <IonInput
            type="password"
            placeholder="Password"
            onIonChange={(e: any) => setPassword(e.target.value)}
          />
          </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
          <IonButton onClick={login}>Login</IonButton>
          </IonCol>
          </IonRow>
          <p>
            New Here? <Link to="/Register">Register</Link>
          </p>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Login;
