import React from 'react';
import './AccountBalance.css';
import { IonList, IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonContent } from '@ionic/react';

export const AccountBalance: React.FC = () => (
  <IonContent id="content-account-balance">
    <IonItem lines="none">     
      <div id="account-balance">Saldo na conta</div>
      <div id="value-account-balance"> R$ 2000,00</div>
    </IonItem>
  </IonContent>
);

export default AccountBalance;