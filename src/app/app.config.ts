import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"dabubble-d94e6","appId":"1:712842666390:web:587cee3ab22f1e9304fdb7","storageBucket":"dabubble-d94e6.appspot.com","apiKey":"AIzaSyAtkmZXlpCb4Qxie1ERtjx6GAs2WSQeujE","authDomain":"dabubble-d94e6.firebaseapp.com","messagingSenderId":"712842666390"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideDatabase(() => getDatabase())), importProvidersFrom(provideStorage(() => getStorage())), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"dabubble-d94e6","appId":"1:712842666390:web:587cee3ab22f1e9304fdb7","storageBucket":"dabubble-d94e6.appspot.com","apiKey":"AIzaSyAtkmZXlpCb4Qxie1ERtjx6GAs2WSQeujE","authDomain":"dabubble-d94e6.firebaseapp.com","messagingSenderId":"712842666390"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
