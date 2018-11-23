import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'Chart.js' 
//import { Observable } from 'rxjs/Observable';
//import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';


@IonicPage()
@Component({
  selector: 'page-gerenciador-financas',
  templateUrl: 'gerenciador-financas.html',
})
export class GerenciadorFinancasPage {
  
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  @ViewChild('chart1Canvas') chart1Canvas;
  @ViewChild('chart2Canvas') chart2Canvas;
  @ViewChild('chart3Canvas') chart3Canvas;

  chart1: any;
  chart2: any;
  chart3: any;

  ionViewDidLoad() {
        this.chart1 = new Chart(this.chart1Canvas.nativeElement, {
              type: 'doughnut',
              data: {
                  labels: [ 'Aprovados', 'Em espera', 'Recusados' ],

                    datasets:[{
                      label: "Orçamentos",
                      data: [ 10, 15, 5 ],
                      /*coloquei dados ficticios para a finalidade de teste, pois não sei como vamos 
                      calcular os dados ainda
                      */
                      backgroundColor: //adicionar novas cores, caso novos campos sejam adicionados no vetor data
                      [
                        'rgba(50, 236, 165, 1)',
                        'rgba(239, 191, 87, 1)',
                        'rgba(236, 50, 96, 1)'
                      ],
                      
                    }] 
                }
          });

          this.chart2 = new Chart(this.chart2Canvas.nativeElement, {
            type: 'line',
            data: {
                labels: [ 'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dec' ],

                datasets: [
                  {
                      label: "Vendas por Mês",
                      fill: false,
                      lineTension: 0.1,
                      backgroundColor: "rgba(75,192,192,0.4)",
                      borderColor: "rgba(75,192,192,1)",
                      borderCapStyle: 'butt',
                      borderDash: [],
                      borderDashOffset: 0.0,
                      borderJoinStyle: 'miter',
                      pointBorderColor: "rgba(75,192,192,1)",
                      pointBackgroundColor: "#fff",
                      pointBorderWidth: 1,
                      pointHoverRadius: 5,
                      pointHoverBackgroundColor: "rgba(75,192,192,1)",
                      pointHoverBorderColor: "rgba(220,220,220,1)",
                      pointHoverBorderWidth: 2,
                      pointRadius: 1,
                      pointHitRadius: 10,
                      data: [65, 59, 80, 81, 56, 55, 40, 10, 5, 50, 10, 15],
                      spanGaps: false,
                  }
                ]
              }
        });
  }

}
