import { Component, OnInit } from '@angular/core';
import { GestionService } from 'src/app/Services/gestion/gestion.service';
import { FamillProduit } from '../produit/famille-produit/famille-produit.component';

export class Magasins{
  public id_Magasins:string;
    public designation:string;
    public hauteur:number;
    public largeur:number;
    public longueur:number;
    public familleProduit:FamillProduit;
}

@Component({
  selector: 'app-magasins',
  templateUrl: './magasins.component.html',
  styleUrls: ['./magasins.component.scss']
})
export class MagasinsComponent implements OnInit {
  magasins : Magasins[];
  magasin : Magasins;
  familleProduits : FamillProduit[];
  familleProduit : FamillProduit;
  constructor(private gestionService :GestionService) {
    this.magasin = new Magasins();
   }
  onSubmit() {
    console.log(this.familleProduit);
    this.gestionService.saveMagasins(this.magasin).subscribe( data => {
        
      console.log(data);
      this.ngOnInit();
    },
    error => {
      alert("Error Adding");
      console.log(error);
    });
  }
  onDelete(id : string) {
    this.gestionService.deleteMagasin(id).subscribe( data => {
        
      console.log(id);
      this.ngOnInit();
    },
    error => {
      alert("Error in delete");
      console.log(error);
    });
    
  }
  ngOnInit(): void {
    this.gestionService.findAllMagasins().subscribe(data => {
      this.magasins = data;
    })
    this.gestionService.findAllFamille().subscribe(data => {
      this.familleProduits = data;
    })
  }

}
