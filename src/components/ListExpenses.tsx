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
        <IonLabel class="title">Super Mario World</IonLabel>
        <IonLabel class="value">300</IonLabel>


      </IonItem>
    </IonList>

  </IonContent>
);

export default ListExpenses;