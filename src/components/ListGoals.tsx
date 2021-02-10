import React from 'react';
import  './ListGoals.css';
import { IonList, IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonContent } from '@ionic/react';

export const ListGoals: React.FC = () => (
  <IonContent>
    <IonItem>
      <div id="goals">Metas</div>
    </IonItem>
    {/*-- List of Text Items --*/}
    <IonList>
       <IonItem>
        <IonLabel id="title">MERCADO</IonLabel>
        <IonLabel id="value">50%</IonLabel>
      </IonItem>
      <br/>
      <IonItem>
        <IonLabel id="title">TRANSPORTE</IonLabel>
        <IonLabel id="value">30%</IonLabel>
      </IonItem>
      <br/>
      <IonItem>
        <IonLabel id="title">ESSENCIAL</IonLabel>
        <IonLabel id="value">60%</IonLabel>
      </IonItem>
      
    </IonList>

  </IonContent>
);

export default ListGoals;