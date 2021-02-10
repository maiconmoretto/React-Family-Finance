import React from 'react';
import './ListExpenses.css';
import { IonList, IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonContent } from '@ionic/react';

export const ListExpenses: React.FC = () => (
  <IonContent>
    <IonItem>
      <div id="last-releases">Ultimos lançamentos</div>
    </IonItem>
    {/*-- List of Text Items --*/}
    <IonList>
      <IonItem>
        <img className="img-fluid"
          src={`${process.env.PUBLIC_URL}/assets/icon/gift.png`}
          alt="logo" />
        <IonLabel id="title">
          shopping bouboun</IonLabel>
        <IonLabel id="value">300,00</IonLabel>
        <IonLabel id="author">joao em vendas</IonLabel>
      </IonItem>
      <br />
      <IonItem>
      <img className="img-fluid"
          src={`${process.env.PUBLIC_URL}/assets/icon/dolar.png`}
          alt="logo" />
        <IonLabel id="title">lancheria</IonLabel>
        <IonLabel id="value">150,00</IonLabel>
        <IonLabel id="author">maria em livre</IonLabel>
      </IonItem>
      <br />
      <IonItem>
      <img className="img-fluid"
          src={`${process.env.PUBLIC_URL}/assets/icon/faces.png`}
          alt="logo" />
        <IonLabel id="title">uber</IonLabel>
        <IonLabel id="value">100,00</IonLabel>
        <IonLabel id="author">joao em transporte</IonLabel>
      </IonItem>

    </IonList>

  </IonContent>
);

export default ListExpenses;