import { Component, OnInit } from '@angular/core';
import { MatiereAcquise } from 'src/app/gestion/produit/matiereacquise/matiereacquise.component';
import { ProduitSemiFini } from 'src/app/gestion/produit/produit-semifini/produit-semifini.component';
import { ProduitFini } from 'src/app/gestion/produit/produitfini/produitfini.component';
import { GestionService } from 'src/app/Services/gestion/gestion.service';

export class Stock {
  type : string;
  produit: string;
  designationProduit :string;
  magasin:string;
}
@Component({
  selector: 'app-base-produit',
  templateUrl: './base-produit.component.html',
  styleUrls: ['./base-produit.component.scss']
})
export class BaseProduitComponent implements OnInit {


  stock : Stock;
  stocks : Stock[];
  produitsSemiFini : ProduitSemiFini[];
  produitsFini:ProduitFini[];
  matieresAcquise : MatiereAcquise[];
  constructor( private gestionService : GestionService) { 
    this.stock = new Stock();
  }

  myFunction() {
    var table = document.getElementById("myTable") as HTMLTableElement;
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = `<select name ="produit" {{stock.type}} (change)="test()"><option  >Entree</option> <option >Sortie</option> </select>`;
    if(this.stock.type == 'Sortie'){
      
      cell2.innerHTML = '<select name ="produit" ><option >List des Produit</option> </select>';
    }else{
      
      cell2.innerHTML ='<select name ="produit" [(ngModel)]="stock.produit"><option >test</option> <option >test2</option> <option >yup</option> </select>';
    }
  }
  test(){
    console.log(this.stock.type);
  }
  ngOnInit(): void {
    this.gestionService.findAllProduitSemi().subscribe(data => {
      this.produitsSemiFini = data;
    })
    this.gestionService.findAllProduitFini().subscribe(data => {
      this.produitsFini = data;
    })
    this.gestionService.findAllMatiere().subscribe(data => {
      this.matieresAcquise = data;
    });
  }

}
