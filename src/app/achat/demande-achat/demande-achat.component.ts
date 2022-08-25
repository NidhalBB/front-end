import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/gestion/produit/creation-produit/creation-produit.component';
import { CommercialService } from 'src/app/Services/Commercial/commercial.service';
import { GestionService } from 'src/app/Services/gestion/gestion.service';
import { Fournisseur } from '../fournisseur/fournisseur.component';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { BonCommande } from '../commande-fournisseur/commande-fournisseur.component';
import { Router } from '@angular/router';
import { ProduitFini } from 'src/app/gestion/produit/produitfini/produitfini.component';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

export class BonAchat{
  public id:string;
  public dateD : Date;
  public demandeur:string;
  public departement : string;
  public nomFournisseur :string;
  public designation_produit :string;
  public quantite_article : number;
  public prix : number;
  public montantHT : number;
  public montantTTC : number;
  public tva = 0.2;
}
@Component({
  selector: 'app-demande-achat',
  templateUrl: './demande-achat.component.html',
  styleUrls: ['./demande-achat.component.scss']
})
export class DemandeAchatComponent implements OnInit {
  
  bonachat : BonAchat;
  bonAchats : BonAchat[];
  boncommande : BonCommande;
  bonCommandes : BonCommande[];
  fournisseurs : Fournisseur[];
  produits :ProduitFini[];
  constructor(private commercialService :CommercialService ,private  gestionService: GestionService , private router: Router) {
    this.bonachat = new BonAchat();
    this.boncommande = new BonCommande();
   }
   valueUpdated(event) {
  this.bonachat.montantHT = 100 + +event.target.value;
}
 show(param_div_id) {
    
    document.getElementById('main_place').innerHTML = document.getElementById(param_div_id).innerHTML;
  }
  gotocommande(){
    this.router.navigate(['/achat/commandeFournisseur']);  
}
    
   generatePdf() {
    const documentDefinition = this.getDocumentDefinition();
    
      pdfMake.createPdf(documentDefinition).open();
    
  }
  getDocumentDefinition() {
    return {
      content: [
        {
          text: "Bon d'Achat",
          bold: true,
          fontSize: 20,
          alignment: 'center',
          margin: [0, 0, 0, 20]
  
        },
        {
          text: 'Date de la demande : ' +this.bonachat.dateD ,
          style: 'header'
        },
        {
          text: 'Identité du Demandeur : ' +this.bonachat.demandeur,
          style: 'header'
        },
        {
          text: 'Département : ' +this.bonachat.departement ,
          style: 'header'
        },
        {
          text: 'Nom de Fournisseur : ' + this.bonachat.nomFournisseur ,
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
              ...this.bonAchats.map(ed => {
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
    this.commercialService.saveBonAchat(this.bonachat).subscribe( data => {
        
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
    this.gestionService.findAllProduitFini().subscribe(data => {
      this.produits = data;
    })
  }

}
