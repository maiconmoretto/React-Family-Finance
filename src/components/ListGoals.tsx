import React from 'react';
import  './ListGoals.css';
import { IonList, IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonContent } from '@ionic/react';

export const ListGoals: React.FC = () => (
  <IonContent>
    <IonItem lines="none">
      <div id="goals">Metas</div>
    </IonItem>
    {/*-- List of Text Items --*/}
    <IonList>
       <IonItem lines="none">
       <img className="img-fluid-goals"
          src={`${process.env.PUBLIC_URL}/assets/icon/dolar.png`}
          alt="logo" />
        <IonLabel id="title-goal">Mercado</IonLabel>
        <IonLabel id="value-goal">50%</IonLabel>
      </IonItem>

      <IonItem lines="none">
      <img className="img-fluid-goals"
          src={`${process.env.PUBLIC_URL}/assets/icon/cart.png`}
          alt="logo" />
        <IonLabel id="title-goal">Transporte</IonLabel>
        <IonLabel id="value-goal">30%</IonLabel>
      </IonItem>

      <IonItem lines="none">
      <img className="img-fluid-goals"
          src={`${process.env.PUBLIC_URL}/assets/icon/dolar.png`}
          alt="logo" />
        <IonLabel id="title-goal">Essencial</IonLabel>
        <IonLabel id="value-goal">60%</IonLabel>
      </IonItem>
      
    </IonList>

  </IonContent>
);

export default ListGoals;