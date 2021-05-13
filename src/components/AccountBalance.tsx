import React from 'react';
import './AccountBalance.css';
import { IonList, IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonContent } from '@ionic/react';

export const AccountBalance: React.FC = () => (
  <IonContent id="content-account-balance">
    <IonItem lines="none">     
      <div id="title">Saldo na conta</div>
    </IonItem>
    <IonItem lines="none">     
      <div id="value-account-balance"> R$ 2000,00</div>
    </IonItem>
  </IonContent>
);

export default AccountBalance;