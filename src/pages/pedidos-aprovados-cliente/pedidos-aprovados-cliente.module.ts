import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PedidosAprovadosClientePage } from './pedidos-aprovados-cliente';

@NgModule({
  declarations: [
    PedidosAprovadosClientePage,
  ],
  imports: [
    IonicPageModule.forChild(PedidosAprovadosClientePage),
  ],
})
export class PedidosAprovadosClientePageModule {}
