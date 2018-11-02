import { Injectable } from '@angular/core';
import firebase, { User } from 'firebase/app';
import 'firebase/database';

/*
  Generated class for the StoreProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()

export class StoreProvider {
  public StoreSeller: User;
  public store: firebase.database.Reference;
  public avaliacao: firebase.database.Reference;

  constructor() {
    firebase.auth().onAuthStateChanged( user => {
      if(user){
        this.StoreSeller = user;
        this.store = firebase.database().ref(`/store`);
        }
    });
  }

  createStore(name: string, categoria: string, descricao: string, avaliacao: number): firebase.database.ThenableReference {    
    return this.store.push({name: name, category: categoria, description: descricao , seller: this.StoreSeller.uid, avaliacao: avaliacao})
  }

  getAvaliacao(): firebase.database.Reference {
    return this.avaliacao;
  }


  updateAvaliacao(avaliacao: number): Promise<any> {
    return this.store.update({ avaliacao });
  }






//Codigo antigo para referencias


/*
  PARTE DEFINIDA PARA CRUD DE LOJA 

  signupStore(name: string, categoria: string, descricao: string) {    
     return  firebase.auth().onAuthStateChanged( user => {
      if(user){
        this.currentUser = user;
        this.StoreSeller = firebase.database().ref(`/userProfile/Seller/${user.uid}`);
      }
    //var StoreRef= firebase.database().ref('userProfile/Seller/Store ');
    //var UserStoreRef=StoreRef.child(user.uid);
    var Store = firebase.database().ref('userProfile/Seller/Store').child(user.uid);  
    Store.set({name: name, categoria: categoria, descricao: descricao });
  })
  }



  /*
    PARTE DEFINIDA PARA CRUD DE SERVICOS PRESTADOS 
  

 signupProduct(nameProduto: string, valorProduto: string, tipoUnidadeProduto: string,descricaoProduto: string, CategoriaProduto:string) {    
  return  firebase.auth().onAuthStateChanged( user => {
   if(user){
     this.currentUser = user;
     this.StoreSeller = firebase.database().ref(`/userProfile/Seller/${user.uid}`);
   }
 //var StoreRef= firebase.database().ref('userProfile/Seller/Store ');
 //var UserStoreRef=StoreRef.child(user.uid);
 var Product = firebase.database().ref('userProfile/Seller/Product').child(user.uid);  
 Product.set({nameProduto: nameProduto,valorProduto: valorProduto, tipoUnidadeProduto:tipoUnidadeProduto, descricaoProduto: descricaoProduto,CategoriaProduto: CategoriaProduto });
  })

}





  
  /*
    PARTE DEFINIDA PARA CRUD DE PRODUTOS OFERECIDOS  



 signupService(nameService: string, valorService: string, tipoUnidadeService: string,descricaoService: string, CategoriaService:string) {    
  return  firebase.auth().onAuthStateChanged( user => {
   if(user){
     this.currentUser = user;
     this.StoreSeller = firebase.database().ref(`/userProfile/Seller/${user.uid}`);
   }
 //var StoreRef= firebase.database().ref('userProfile/Seller/Store ');
 //var UserStoreRef=StoreRef.child(user.uid);
 var Service = firebase.database().ref('userProfile/Seller/Service').child(user.uid);  
 Service.set({nameService: nameService,valorService: valorService, tipoUnidadeService:tipoUnidadeService, descricaoProduto: descricaoService,CategoriaService: CategoriaService});
  })

}


*/



signupProduct(nameProduto: string, valorProduto: string, tipoUnidadeProduto: string,descricaoProduto: string, CategoriaProduto:string) {    

}
}
