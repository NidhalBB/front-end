import { Component, OnInit } from '@angular/core';
import { ProduitFini } from 'src/app/gestion/produit/produitfini/produitfini.component';
import { CommercialService } from 'src/app/Services/Commercial/commercial.service';
import { GestionService } from 'src/app/Services/gestion/gestion.service';
import { Client } from '../client/client.component';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

export class CommandeClient{
  public id:string;
  public dateD : Date;
  public dateL : Date;
  public numCommande : number;
  public designation_client :string;
  public designation_produit :string;
  public quantite_article : number;
  public prix : number;
  public montantHT : number;
  public montantTTC : number;
  public tva = 0.2;
}
@Component({
  selector: 'app-commande-client',
  templateUrl: './commande-client.component.html',
  styleUrls: ['./commande-client.component.scss']
})
export class CommandeClientComponent implements OnInit {
commandeClient : CommandeClient;
commandeClients :CommandeClient[];
produits :ProduitFini[];
clients :Client[];
  constructor(private  gestionService: GestionService , private  commercialService: CommercialService) {
    this.commandeClient = new CommandeClient();
   }

   generatePdf() {
    const documentDefinition = this.getDocumentDefinition();
    
      pdfMake.createPdf(documentDefinition).open();
    
  }
  getDocumentDefinition() {
    return {
      content: [
        {
          text: "Commandes client ",
          bold: true,
          fontSize: 20,
          alignment: 'center',
          margin: [0, 0, 0, 20]
  
        },
        {
          text: 'Date de la Commande : ' +this.commandeClient.dateD ,
          style: 'header'
        },
        {
          text: 'Date de la Livrison : ' +this.commandeClient.dateL ,
          style: 'header'
        },
        {
          text: 'Designation Client : ' +this.commandeClient.designation_client,
          style: 'header'
        },
        {
          table: {
            widths: ['25%', '*', '20%', '20%','*','20%'],
            body: [
              [{
                text: 'Désignation Article',
                style: 'tableHeader'
              },
              {
                text: 'Quantité',
                style: 'tableHeader'
              },
              {
                text: 'Prix Unitaire HT',
                style: 'tableHeader'
              },
              {
                text: 'Montant HT',
                style: 'tableHeader'
              },
              {
                text: 'TVA',
                style: 'tableHeader'
              },
              {
                text: 'Montant TTC' ,
                style: 'tableHeader'
              },
            
              ],
              ...this.commandeClients.map(ed => {
          return [ed.designation_produit,ed.quantite_article,ed.prix,ed.montantHT,'20%',ed.montantTTC];
        })

            ]
          }
        },
        {
          text: 'Signature demandeur'
        },{
          text: 'Chef département',
          alignment: 'center'
        },
        {
          text: 'DAF',
          style:{
            margin: [0, 50, 0, 10],
            alignment: 'right',
            italics: true
          },
        },
        
      ]
    };
  }

   onSubmit() {
    this.commercialService.saveCommandeClient(this.commandeClient).subscribe( data => {
        
      console.log(data);
      this.ngOnInit();
    });}
  ngOnInit(): void {
    this.gestionService.findAllProduitFini().subscribe(data => {
      this.produits = data;
    })
     this.commercialService.findAll().subscribe(data => {
      this.clients = data;
    })
    this.commercialService.findAllCommandeClient().subscribe(data => {
      this.commandeClients = data;
    })
  }

}
