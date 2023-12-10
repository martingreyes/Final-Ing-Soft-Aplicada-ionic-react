import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import getPosts from '../components/ExploreContainer';

import React from 'react';

import {
  IonButton,
  IonCol,
  IonGrid,
  IonRow,
  IonText,
} from "@ionic/react"

interface Autor {
  id: string
  firstName: string
  lastName: string
}

const Tab1: React.FC = () => {

  const [autores, setAutores] = React.useState<Autor[]>([])

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
  
      setAutores(data)
    } catch (error) {
      console.error("Failed to fetch posts: ", error)
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
        <h1>Autores</h1>
      </div>
      <div className="ion-padding">
        <IonButton onClick={() => getPosts("http://localhost:8080/api/authors")}>Obtener Autores</IonButton>
      </div>
      <IonGrid className="ion-margin">
        <IonRow>
          <IonCol sizeMd="4" className="col-border bgcolor ion-text-center">
            <IonText color="primary">ID</IonText>
          </IonCol>
          <IonCol sizeMd="4" className="col-border bgcolor ion-text-center">
            <IonText color="primary">Nombre</IonText>
          </IonCol>
          <IonCol sizeMd="4" className="col-border bgcolor ion-text-center">
            <IonText color="primary">Apellido</IonText>
          </IonCol>
        </IonRow>
        {autores.map((autor) => (
          <IonRow key={autor.id}>
            <IonCol sizeMd="4" className="col-border ion-text-center">
              {autor.id}
            </IonCol>
            <IonCol sizeMd="4" className="col-border ion-text-center">
              {autor.firstName}
            </IonCol>
            <IonCol sizeMd="4" className="col-border ion-text-center">
              {autor.lastName}
            </IonCol>
          </IonRow>
        ))}
      </IonGrid>
    </IonPage>
  );
};

export default Tab1;
