import { Component } from '@angular/core';
import { IonicPage,
  NavController,
  Loading,
  LoadingController,
  AlertController } from 'ionic-angular';

@IonicPage({
  name: 'BoletoPage'
})
@Component({
  selector: 'page-boleto',
  templateUrl: 'boleto.html',
})
export class BoletoPage {
 
   CriaPDF(): void {
    var minhaTabela = document.getElementById('tabela').innerHTML;
    var style = "<style>";
    style = style + "table {width: 100%;font: 20px Calibri;}";
    style = style + "table, th, td {border: solid 1px #DDD; border-collapse: collapse;";
    style = style + "padding: 2px 3px;text-align: center;}";
    style = style + "</style>";

    
    var win = window.open('', '', 'height=1000,width=1000');
    win.document.write('<html><head>');
    win.document.write('<title>Boleto</title>');  
    win.document.write(style);                                   
    win.document.write('</head>');
    win.document.write('<body>');
    win.document.write(minhaTabela);                         
    win.document.write('</body></html>');
    win.document.close(); 	                                        
    win.print();                                                            
}
  
 

}
