import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/gestion/produit/creation-produit/creation-produit.component';
import { CommercialService } from 'src/app/Services/Commercial/commercial.service';
import { GestionService } from 'src/app/Services/gestion/gestion.service';
import { Fournisseur } from '../fournisseur/fournisseur.component';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

export class BonCommande{
  public id:string;
  public nomFournisseur:string;
  public dateC:Date;
  public dateL:Date;
  public designation_produit:string;
  public quantite_article:number;
}
@Component({
  selector: 'app-commande-fournisseur',
  templateUrl: './commande-fournisseur.component.html',
  styleUrls: ['./commande-fournisseur.component.scss']
})
export class CommandeFournisseurComponent implements OnInit {
boncommande : BonCommande;
bonCommandes : BonCommande[];
fournisseurs : Fournisseur[];
produits :Produit[];
constructor(private commercialService :CommercialService ,private  gestionService: GestionService) {
  this.boncommande = new BonCommande();
 }
 generatePdf() {
  const documentDefinition = this.getDocumentDefinition();
  
    pdfMake.createPdf(documentDefinition).open();
  
}
getDocumentDefinition() {
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
        text: 'Skills',
        style: 'header'
      },
      {
        table: {
          widths: ['*', '*', '*', '*'],
          body: [
            [{
              text: 'Degree',
              style: 'tableHeader'
            },
            {
              text: 'College',
              style: 'tableHeader'
            },
            {
              text: 'Passing Year',
              style: 'tableHeader'
            },
            {
              text: 'Result',
              style: 'tableHeader'
            },
            ]
          ]
        }
      },
      
      {
        text: this.boncommande.dateL,
        style: 'sign'
      },
        [],
      
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
  this.gestionService.findAllProduit().subscribe(data => {
    this.produits = data;
  })
}
}
