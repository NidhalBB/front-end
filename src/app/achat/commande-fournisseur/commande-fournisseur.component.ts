import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/gestion/produit/creation-produit/creation-produit.component';
import { CommercialService } from 'src/app/Services/Commercial/commercial.service';
import { GestionService } from 'src/app/Services/gestion/gestion.service';
import { Fournisseur } from '../fournisseur/fournisseur.component';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { BonAchat } from '../demande-achat/demande-achat.component';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

export class BonCommande{
  public id:string;
  public destinataire:string;
  public adresse:string;
  public matricule:string;
  public dateC:Date;
  public dateL:Date;
}
@Component({
  selector: 'app-commande-fournisseur',
  templateUrl: './commande-fournisseur.component.html',
  styleUrls: ['./commande-fournisseur.component.scss']
})
export class CommandeFournisseurComponent implements OnInit {
boncommande : BonCommande;
bonCommandes : BonCommande[];
bonAchats : BonAchat[];
fournisseurs : Fournisseur[];
produits :Produit[];
constructor(private commercialService :CommercialService ,private  gestionService: GestionService) {
  this.boncommande = new BonCommande();
 }
 generatePdfFournisseur() {
  const documentDefinition = this.getDocumentDef();
  
    pdfMake.createPdf(documentDefinition).open();
  
}
getDocumentDef() {
  return {
    content: [
      {
        text: 'Bon De Commande',
        bold: true,
        fontSize: 20,
        alignment: 'center',
        margin: [0, 0, 0, 20]

      },
      {
        text: 'Destinataire : ' +this.boncommande.destinataire ,
        alignment: 'right'
      },
      {
        text: 'Matricule fiscale : ' +this.boncommande.matricule,
        alignment: 'right'
      },
      {
        text: 'Adresse : ' +this.boncommande.adresse ,
        alignment: 'right'
      },
      {
        text: 'Date de la commande : ' + this.boncommande.dateC,
        style: 'left'
      },
      {
        text: 'Date de livraison : ' + this.boncommande.dateL,
        style: 'left'
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
            ...this.bonAchats.map(ed => {
        return [ed.designation_produit,ed.quantite_article,ed.prix,ed.montantHT,'20%',ed.montantTTC];
      })
          ]
        }
      },
    ]
  };
}

 onSubmit() {
  this.commercialService.saveBonCommande(this.boncommande).subscribe( data => {
      
    console.log(data);
    this.ngOnInit();
  });
  
}
ngOnInit(): void {
  this.commercialService.findAllFournisseur().subscribe(data => {
    this.fournisseurs = data;
  })
  this.commercialService.findAllBonAchat().subscribe(data => {
    this.bonAchats = data;
    
  })
  this.gestionService.findAllProduit().subscribe(data => {
    this.produits = data;
  })
}
}
