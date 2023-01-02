import { Component, OnInit } from '@angular/core';
import { GestionService } from 'src/app/Services/gestion/gestion.service';
import { FamillProduit } from '../famille-produit/famille-produit.component';
import { SousFamille } from '../sous-famille/sous-famille.component';

export class ProduitFini{
  public id_Produit_Ouvrage:string;
  public designation : string;
  public produitOuvrage:FamillProduit;
  public pOuvrage:SousFamille;
  public quantite :number;
  public prix : number;
}
@Component({
  selector: 'app-produitfini',
  templateUrl: './produitfini.component.html',
  styleUrls: ['./produitfini.component.scss']
})
export class ProduitfiniComponent implements OnInit {

  produitFini :ProduitFini;
  produitsFini:ProduitFini[];
  famille : FamillProduit[];
  sousfamilles:SousFamille[];
  constructor(private gestionService :GestionService) {
    this.produitFini = new ProduitFini()
   }
   onSubmit() {
    this.gestionService.saveProduitFini(this.produitFini).subscribe( data => {
        
      console.log(data);
      this.ngOnInit();
    });
  }
  onDelete(id : string) {
    this.gestionService.deleteFini(id).subscribe( data => {
        
      console.log(id);
      this.ngOnInit();
    },
    error => {
      alert("Error in delete");
      console.log(error);
    });
    
  }
  ngOnInit(): void {
    this.gestionService.findAllProduitFini().subscribe(data => {
      this.produitsFini = data;
    })
    this.gestionService.findAllFamille().subscribe(data => {
      this.famille = data;
    })
    this.gestionService.findAllSouFam().subscribe(data => {
      this.sousfamilles = data;
    })
  }

}
