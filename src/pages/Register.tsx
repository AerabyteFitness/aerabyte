import { IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ExploreContainer from '../components/ExploreContainer';
import { register } from '../serviceWorkerRegistration';
import { registerUser } from '../firebase'
const Register: React.FC = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCPassword] = useState('')

    async function register () {
        console.log(username, password, cpassword)

        const res = await registerUser(username, password)
    }




  return (
    <IonPage>
      <IonHeader>
          <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonButtons slot="secondary">
          </IonButtons>
          <IonTitle>Account</IonTitle>
        </IonToolbar>
        </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol>
            <IonInput placeholder="Username" onIonChange={(e: any) => setUsername(e.target.value)} />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
            <IonInput type="password" placeholder="Password" onIonChange={(e: any) => setPassword(e.target.value)} />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
            <IonInput type="password" placeholder="Confirm Password?" onIonChange={(e: any) => setCPassword(e.target.value)} />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
            <IonButton onClick={register}>Register</IonButton>
            </IonCol>
          </IonRow>

            {/* <IonInput placeholder="username" onIonChange={(e: any) => setUsername(e.target.value)} />
            <IonInput type="password" placeholder="password" onIonChange={(e: any) => setPassword(e.target.value)} />
            <IonInput type="password" placeholder="Confirm Password?" onIonChange={(e: any) => setCPassword(e.target.value)} />
            <IonButton onClick={register}>Register</IonButton> */}

            <p>Already have an account? <Link to="/login">Login</Link></p>
            </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Register;

