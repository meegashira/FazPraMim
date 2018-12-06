import { Component,ViewChild,ElementRef } from '@angular/core';
import { IonicPage, NavController, Platform } from 'ionic-angular';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, LatLng, CameraPosition, MarkerOptions, Marker } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import { StoreProvider } from '../../providers/store/store';
import { ProfileProvider } from "../../providers/profile/profile"

/**
 * Generated class for the MapsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google: any;

@IonicPage(
{
  name: 'MapsPage'
})
@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
})
export class MapsPage {
  
  public endereco: Array<any> = [];
  map: any;
  markers:any;
  estabelecimentos = [ /// alterando para aparecer na apresentação
  {
    nome: 'Maria Doces',
    endereco: ' Pq Tecnológico',
    latitude: -23.1573,
    longitude: -45.7919
  },
  {
    nome: 'Rose Tortas & Salgados',
    endereco: 'Fatec',
    latitude: -23.1626,
    longitude: -45.7951
  },];

  constructor
  (public navCtrl: NavController, 
    public geolocation: Geolocation, 
    public platform:Platform, 
    public storeProvider: StoreProvider,
    public profileProvider: ProfileProvider,) {}

  ionViewWillEnter(){
    this.platform.ready().then(() => {
      this.initPage();
    });
  }

  /* 
*/
  initPage() {
    //geocoder = new google.maps.Geocoder();

    this.geolocation.getCurrentPosition().then(result => {
      this.loadMap(result.coords.latitude, result.coords.longitude);
    });
  }

  private loadMap(lat, lng) {
      let latLng = new google.maps.LatLng(lat, lng);

      let mapOptions = {
        center: latLng,
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
      };

      let element = document.getElementById('map');

      this.map = new google.maps.Map(element, mapOptions);
      let marker = new google.maps.Marker({
        position: latLng,
        title: 'Minha Localização',
        icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
      })
      let content = `
      <div id="myid"  class="item item-thumbnail-left item-text-wrap">
        <ion-item>
          <ion-row>
            <h6>`+marker.title+`</h6>
          </ion-row>
        </ion-item>
      </div>
      `
      ;
      this.addInfoWindow(marker, content);
      marker.setMap(this.map);

      this.loadPoints();
    }

    loadPoints() {
      this.markers = [];

      for (const key of Object.keys(this.estabelecimentos)) {
        console.log(this.estabelecimentos[key].nome )
        let latLng = new google.maps.LatLng(this.estabelecimentos[key].latitude, this.estabelecimentos[key].longitude);

        let marker = new google.maps.Marker({
          position: latLng,
          title: this.estabelecimentos[key].nome
        })

        let content = `
        <div id="myid"  class="item item-thumbnail-left item-text-wrap">
          <ion-item>
            <ion-row>
              <h6>`+this.estabelecimentos[key].nome+`</h6>
            </ion-row>
          </ion-item>
        </div>
        `
        ;
        this.addInfoWindow(marker, content);
        marker.setMap(this.map);
      }

      return this.markers;
    }

    addInfoWindow(marker, content) {
      let infoWindow = new google.maps.InfoWindow({
        content: content
      });

      google.maps.event.addListener(marker, 'click', () => {
        infoWindow.open(this.map, marker);

        google.maps.event.addListenerOnce(infoWindow, 'domready', () => {
          document.getElementById('myid').addEventListener('click', () => {
            this.goToEmpresa(marker)
          });
        });
      })
    }

    goToEmpresa(empresa) {
      alert('Click');
    }

  
   function converteEndereco(endereco, avaliacao) {
        geocoder.geocode( { 'Rua G': endereco}, function(resultado, status) {
          if (status == google.maps.GeocoderStatus.OK) {
            var marcador = {
                  latitude: resultado[0].geometry.location.k
              , longitude: resultado[0].geometry.location.D	
              , titulo: 'Novo marcador'
              , imagem: avaliacao
            }
             criaMarcador(marcador, map)
          } else {
            alert('Erro ao converter endereço: ' + status);
          }
        });
      }

    private GetDistanc(origin,destination)// recebe objeto com latitude e longitude
    {
      let distance= this.GetDistanc(origin,destination);
    }
    

    
    ionViewDidLoad(): void {
      this.profileProvider.getUserProfile().on('value', itemSnapshot => {
        this.endereco = [];
        itemSnapshot.forEach( itemSnap => {
           this.endereco.push({ 
            uid: itemSnap.key,
           :string, neighborhood:string, city:string, state:string, cep:number,
              adress: itemSnap.val().adress,
              complement: itemSnap.val(). complement,
              neighborhood: itemSnap.val().neighborhood,
              city: itemSnap.val().city,
              state: itemSnap.val().state,
              seller: itemSnap.val().seller,
              cep: itemSnap.val().cep
          });
          return false;
        });
      });

    }
    

    private GetAllDistances(origin,destination)
    {
     this.geolocation.getCurrentPosition().then(resp=>
        {
          for(let i=0; i<Array.length;i++)
          {
            Array[i];
          }

        })
    }

}
