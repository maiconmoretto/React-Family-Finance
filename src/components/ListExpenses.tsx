import React from 'react';
import  './ListExpenses.css';
import { IonList, IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonContent } from '@ionic/react';

export const ListExpenses: React.FC = () => (
  <IonContent>
    <IonItem>
      <div id="last-releases">Ultimos lançamentos</div>
    </IonItem>
    {/*-- List of Text Items --*/}
    <IonList>
         <IonItem>
        <IonLabel id="title">shopping bouboun</IonLabel>
        <IonLabel id="value">300</IonLabel>
        <IonLabel id="author">joao em vendas</IonLabel>
      </IonItem>
    </IonList>

  </IonContent>
);

export default ListExpenses;