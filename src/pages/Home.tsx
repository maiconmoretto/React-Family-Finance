  import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import AccountBalance from '../components/AccountBalance';
import ListExpenses from '../components/ListExpenses';
import ListGoals from '../components/ListGoals';

import './Home.css';




const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <AccountBalance />
        <ListExpenses  />
        <ListGoals  />
      </IonContent>
    </IonPage>
  );
};

export default Home;
