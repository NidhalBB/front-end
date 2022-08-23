import { Component, OnInit } from '@angular/core';
import { GestionService } from 'src/app/Services/gestion/gestion.service';
import { FamillProduit } from '../famille-produit/famille-produit.component';
import { SousFamille } from '../sous-famille/sous-famille.component';

export class ProduitSemiFini{
  public id:string;
  public designation:string;
  public famille:string;
  public souFamille:string;
}
@Component({
  selector: 'app-produit-semifini',
  templateUrl: './produit-semifini.component.html',
  styleUrls: ['./produit-semifini.component.scss']
})
export class ProduitSemifiniComponent implements OnInit {

  produitSemiFini :ProduitSemiFini;
  produitsSemiFini : ProduitSemiFini[];
  sousFamilles:SousFamille[];
  familles : FamillProduit[];
  constructor(private gestionService :GestionService) {
    this.produitSemiFini = new ProduitSemiFini()
   }
   onSubmit() {
    this.gestionService.saveProduitSemi(this.produitSemiFini).subscribe( data => {
        
        console.log(data);
        this.ngOnInit();
      });
  }
  ngOnInit(): void {
    this.gestionService.findAllProduitSemi().subscribe(data => {
      this.produitsSemiFini = data;
    })
     this.gestionService.findAllSouFam().subscribe(data => {
      this.sousFamilles = data;
    })
    this.gestionService.findAllFamille().subscribe(data => {
      this.familles = data;
    })
  }
}
