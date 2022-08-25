import { Component, OnInit } from '@angular/core';
import { GestionService } from 'src/app/Services/gestion/gestion.service';
import { FamillProduit } from '../famille-produit/famille-produit.component';
import { SousFamille } from '../sous-famille/sous-famille.component';

export class ProduitFini{
  public id:string;
  public designation : string;
  public famille:string;
  public sousfamille:string;
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
