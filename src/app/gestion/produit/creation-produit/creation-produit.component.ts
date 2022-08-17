import { Component, OnInit } from '@angular/core';
import { GestionService } from 'src/app/Services/gestion/gestion.service';

export class Produit{
  public id_produit :string;
  public designation :string;
  public quantite:number;
  public prix : number;
  public etat:string;
}
@Component({
  selector: 'app-creation-produit',
  templateUrl: './creation-produit.component.html',
  styleUrls: ['./creation-produit.component.scss']
})
export class CreationProduitComponent implements OnInit {
  produit : Produit;
  produits : Produit[];
  constructor(private gestionService :GestionService) {
    this.produit = new Produit();
   }
   onSubmit() {
    this.gestionService.saveProduit(this.produit).subscribe( data => {
        
      console.log(data);
      this.ngOnInit();
    });
    
  }
  ngOnInit(): void {
    this.gestionService.findAllProduit().subscribe(data => {
      this.produits = data;
    })
  }

}
