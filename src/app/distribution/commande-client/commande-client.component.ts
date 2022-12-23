import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/commercial/client/client.component';
import { CommandeClient } from 'src/app/commercial/commande-client/commande-client.component';
import { ProduitFini } from 'src/app/gestion/produit/produitfini/produitfini.component';
import { Collaborateur } from 'src/app/rh/gcollaborateur/gcollaborateur.component';
import { CommercialService } from 'src/app/Services/Commercial/commercial.service';
import { GestionService } from 'src/app/Services/gestion/gestion.service';
import { RhService } from 'src/app/Services/rh/rh.service';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;


export class PrepCommande{
  public id_prep : string;
  public numB : string;
  public numC : string;
  public client : string;
  public designationProduit :string;
  public quantite: string;
  public date : Date ;
  public operateur : string ;

}
@Component({
  selector: 'app-commande-client',
  templateUrl: './commande-client.component.html',
  styleUrls: ['./commande-client.component.scss']
})
export class CommandeClientComponent implements OnInit {

  prepCommande : PrepCommande ;
  prepCommandes : PrepCommande[];
  commandeClients :CommandeClient[];
produits :ProduitFini[];
clients :Client[];

  collaborateurs :Collaborateur[];
  constructor(private  gestionService: GestionService , private  commercialService: CommercialService,private rhService :RhService) {
    this.prepCommande = new PrepCommande();
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
          text: 'Date de la Commande : ' +this.prepCommande.date ,
          style: 'header'
        },
        {
          text: 'Designation Client : ' +this.prepCommande.client,
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
            
              ],
              ...this.prepCommandes.map(ed => {
          return [ed.designationProduit,ed.quantite];
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
    }
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
    this.rhService.findAll().subscribe(data => {
      this.collaborateurs = data;
    })
  }

}
