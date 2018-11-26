import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, Injector } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AuthProvider } from '../providers/auth/auth';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';
import { ImagePicker } from '@ionic-native/image-picker';
import { Crop } from '@ionic-native/crop';
import { StarRatingModule } from 'ionic3-star-rating';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { HttpClientModule } from '@angular/common/http';
import {ChartsModule} from 'ng2-charts';

import { HomeClientePage } from '../pages/home-cliente/home-cliente';
import { HomeVendedorPage } from '../pages/home-vendedor/home-vendedor';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { SignupClientPage } from '../pages/signup-client/signup-client';
import { SignupFreelancerPage } from '../pages/signup-freelancer/signup-freelancer';
import { LoginClientePage } from '../pages/login-cliente/login-cliente';
import { ProfileProvider } from '../providers/profile/profile';
import { AvaliacaoPage } from '../pages/avaliacao/avaliacao';
import { AvaliacaoConcluidaPage } from '../pages/avaliacao-concluida/avaliacao-concluida';
import { StoreProvider } from '../providers/store/store';
import { SideMenuContentComponent } from '../shared/side-menu-content/side-menu-content.component';
import { SideMenuClientePage } from '../pages/side-menu-cliente/side-menu-cliente';
import { AnunciosProvider } from '../providers/anuncios/anuncios';
import { SideMenuVendedorPage } from '../pages/side-menu-vendedor/side-menu-vendedor';
import { LoginVendedorPage } from '../pages/login-vendedor/login-vendedor';
import { StoreViewPage } from '../pages/store-view/store-view';
import { CadastroLojaConcluidoPage } from '../pages/cadastro-loja-concluido/cadastro-loja-concluido';
import { EndCreditPage } from '../pages/end-credit/end-credit';
import { SolicitarOrcamentoPage } from '../pages/solicitar-orcamento/solicitar-orcamento';
import { SolicitacaoConcluidaPage } from '../pages/solicitacao-concluida/solicitacao-concluida';

const firebaseConfig = {
  apiKey: "AIzaSyA33azvrweCz6awhTe7zs2WbYlYPRnIDqo",
  authDomain: "fazpramim-4bbe8.firebaseapp.com",
  databaseURL: "https://fazpramim-4bbe8.firebaseio.com",
  projectId: "fazpramim-4bbe8",
  storageBucket: "fazpramim-4bbe8.appspot.com",
  messagingSenderId: "639256908870"
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HomeClientePage,
    HomeVendedorPage,
    SignupClientPage,
    SignupFreelancerPage,
    ResetPasswordPage,
    LoginClientePage,
    LoginVendedorPage,
    CadastroLojaConcluidoPage,
    SideMenuClientePage,
    SideMenuVendedorPage,
    SideMenuContentComponent,
    StoreViewPage,
    EndCreditPage,
    SolicitacaoConcluidaPage,
    SolicitarOrcamentoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    StarRatingModule,
    AngularFireDatabaseModule,
    HttpClientModule,
    ChartsModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HomeClientePage,
    HomeVendedorPage,
    SignupClientPage,
    SignupFreelancerPage,
    CadastroLojaConcluidoPage,
    ResetPasswordPage,
    LoginClientePage,
    LoginVendedorPage,
    SideMenuClientePage,
    SideMenuVendedorPage,
    StoreViewPage,
    EndCreditPage, 
    SolicitacaoConcluidaPage,
    SolicitarOrcamentoPage
     ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    File,
    Transfer,
    Camera,
    ImagePicker,
    Crop,
    FilePath,
    ProfileProvider,
    StoreProvider,
    AnunciosProvider,
  ]
})
export class AppModule {
  static injector: Injector;

  constructor(injector: Injector) {
    AppModule.injector = injector;
  }
}
