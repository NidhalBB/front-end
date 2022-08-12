import { Component, OnInit } from '@angular/core';
import { GestionService } from 'src/app/Services/gestion/gestion.service';
import { FamillProduit } from '../famille-produit/famille-produit.component';
import { SousFamille } from '../sous-famille/sous-famille.component';

export class ProduitSemiFini{
  private id:string;
  private designation:string;
  private famille:FamillProduit;
  private souFamille:SousFamille;
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
  famille : FamillProduit[];
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
      this.famille = data;
    })
  }
}
