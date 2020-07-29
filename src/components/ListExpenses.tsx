import React from 'react';
import  './ListExpenses.css';
import { IonList, IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonContent } from '@ionic/react';

export const ListExpenses: React.FC = () => (
  <IonContent>
    <IonItem>
      <div id="ultimos-lancamentos">Ultimos lançamentos</div>
    </IonItem>
    {/*-- List of Text Items --*/}
    <IonList>
         <IonItem>
        <IonLabel>Super Mario World</IonLabel>
      </IonItem>
    </IonList>

  </IonContent>
);

export default ListExpenses;