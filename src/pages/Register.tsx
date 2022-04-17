import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
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
          <IonTitle>User Info</IonTitle>
        </IonToolbar>
        </IonHeader>
      <IonContent fullscreen>
            <IonInput placeholder="username" onIonChange={(e: any) => setUsername(e.target.value)} />
            <IonInput type="password" placeholder="password" onIonChange={(e: any) => setPassword(e.target.value)} />
            <IonInput type="password" placeholder="Confirm Password?" onIonChange={(e: any) => setCPassword(e.target.value)} />
            <IonButton onClick={register}>Login</IonButton>

            <p>Already have an account? <Link to="/login">Login</Link></p>
      </IonContent>
    </IonPage>
  );
};

export default Register;

