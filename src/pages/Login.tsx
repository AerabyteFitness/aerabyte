import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { loginUser } from '../firebase';
import { Toast } from '../Toast'

const Login: React.FC = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function login () {
        const res = await loginUser(username, password)
        if(!res) {
        Toast('test') 
        } else {
          Toast('test')
        }
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
            <IonButton onClick={login}>Login</IonButton>
            <p>New Here? <Link to="/Register">Register</Link></p>
      </IonContent>
    </IonPage>
  );
};

export default Login;