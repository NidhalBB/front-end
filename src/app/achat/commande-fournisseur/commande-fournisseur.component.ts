import { Component, OnInit } from '@angular/core';
import { CommercialService } from 'src/app/Services/Commercial/commercial.service';

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
constructor(private commercialService :CommercialService) {
  this.boncommande = new BonCommande();
 }
 onSubmit() {
  this.commercialService.saveBonCommande(this.boncommande).subscribe( data => {
      
    console.log(data);
    this.ngOnInit();
  });
  
}
ngOnInit(): void {
  this.commercialService.findAllBonCommande().subscribe(data => {
    this.bonCommandes = data;
  })
}
}
