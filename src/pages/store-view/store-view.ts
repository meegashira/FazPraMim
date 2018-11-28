import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StoreProvider } from '../../providers/store/store';
import { AnunciosProvider } from '../../providers/anuncios/anuncios';
import { Events } from 'ionic-angular'
import { SolicitarOrcamentoPage } from '../solicitar-orcamento/solicitar-orcamento';
import firebase, { User }  from 'firebase';

@IonicPage({
  segment: "store-view/:storeId"
})

@Component({
  selector: 'page-store-view',
  templateUrl: 'store-view.html',
})
export class StoreViewPage {
  public currentStore: any = {};
  public currentAnuncio: any = {};
  public anuncioList:Array<any> = [];
  public totalPedido: number = 0;
  public shoppingCart: Array<any> = [];
  public user: User;
  data = { seller:'', buyer:'', store:'' };
  chatroomRef = firebase.database().ref('chatroom/');
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public storeProvider: StoreProvider,
    public anuncioProvider: AnunciosProvider,
    public events: Events){ 
      events.subscribe('star-rating:changed', (starRating) => {console.log(starRating)});
      firebase.auth().onAuthStateChanged( user => {
        if(user){
          this.user = user;
        }
        }); 
    }
  
  addToShoppingCart(anuncioId: string): void{
    this.currentAnuncio = this.anuncioProvider.getAnuncioDetail(anuncioId);
    this.shoppingCart.push(this.currentAnuncio);
    this.totalPedido = this.totalPedido + this.currentAnuncio.price;
  }

  removeFromShoppingCart(anuncioId: string): void{
    if(this.totalPedido > 0){
      this.currentAnuncio = this.anuncioProvider.getAnuncioDetail(anuncioId);
      this.shoppingCart.pop();
      this.totalPedido = this.totalPedido - this.currentAnuncio.price;
    }
      
  }

  goToSolicitarOrcamento(shoppingCart: Array<any>){
    this.navCtrl.push(SolicitarOrcamentoPage,{shoppingCart:shoppingCart});
  }

  returnTotal(): number{
    return Number(this.totalPedido);
  }

  goToChat(): void{
    this.data.seller = this.currentStore.seller;
    this.data.buyer = this.user.uid;
    this.data.store = this.navParams.get("storeId");
    let newData = this.chatroomRef.push();
    newData.set({
      seller:this.data.seller,
      buyer:this.data.buyer,
      store:this.data.store,
    });
    this.navCtrl.push('ChatroomPage', {
      key:'uid',
      userUid:this.user.uid
    });
  }

  ionViewDidLoad() {
    this.storeProvider
      .getStoreDetail(this.navParams.get("storeId"))
      .on("value", storeSnapshot => {
        this.currentStore = storeSnapshot.val();
        this.currentStore.id = storeSnapshot.key;
        this.currentStore.store;
        console.log(this.currentStore,this.currentStore.id);
      });
    this.anuncioProvider
      .getAnuncio()
      .orderByChild("store")
      .equalTo(this.currentStore.id)
      .on("value", anuncioSnapshot => {
        this.anuncioList = [];
        anuncioSnapshot.forEach(itemSnap => {
          this.anuncioList.push({
            uid: itemSnap.key,
            name: itemSnap.val().name,
            description: itemSnap.val().description,
            category: itemSnap.val().category,
            price: itemSnap.val().price,
            unidade: itemSnap.val().unidade,
            store: itemSnap.val().store,
            type: itemSnap.val().type,
          });
          return false;
        });
      });
  }
}
