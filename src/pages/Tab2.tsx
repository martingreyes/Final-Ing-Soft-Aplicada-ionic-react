import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

import React from 'react';

import {
  IonButton,
  IonCol,
  IonGrid,
  IonRow,
  IonText,
} from "@ionic/react"

interface Editor {
  id: string
  name: string

}

const Tab2: React.FC = () => {

  const [editores, setEditores] = React.useState<Editor[]>([])

  const getPosts = async (url: string) => {
    try {
      const requestOptions = {
        method: 'GET',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyIiwiYXV0aCI6IlJPTEVfVVNFUiIsImV4cCI6MTcwNDU1MjA5M30.PWIn549iMy9FMf8WrQeJcLD6zLvRlQdecTd5C0WKwle2iKPQooKiWe97pstwu2OXlvAU6ASwqK4z3mc1BgIxiQ'
        }
    };
  
      const response = await fetch(url, requestOptions)
      
      if (!response.ok) {
        throw Error(response.statusText)
      }
      const data = await response.json()
      console.log(data)
  
      setEditores(data)
    } catch (error) {
      console.error("Failed to fetch editores: ", error)
    }
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic React Rest Example.</IonTitle>
        </IonToolbar>
      </IonHeader>
      <div className="ion-padding">
        <h1>Editores</h1>
      </div>
      <div className="ion-padding">
        <IonButton onClick={() => getPosts("http://localhost:8080/api/publishers")}>Obtener Editores</IonButton>
      </div>
      <IonGrid className="ion-margin">
        <IonRow>
          <IonCol sizeMd="4" className="col-border bgcolor ion-text-center">
            <IonText color="primary">ID</IonText>
          </IonCol>
          <IonCol sizeMd="4" className="col-border bgcolor ion-text-center">
            <IonText color="primary">Nombre</IonText>
          </IonCol>
        </IonRow>
        {editores.map((editor) => (
          <IonRow key={editor.id}>
            <IonCol sizeMd="4" className="col-border ion-text-center">
              {editor.id}
            </IonCol>
            <IonCol sizeMd="4" className="col-border ion-text-center">
              {editor.name}
            </IonCol>
          </IonRow>
        ))}
      </IonGrid>
    </IonPage>
  );
};

export default Tab2;
