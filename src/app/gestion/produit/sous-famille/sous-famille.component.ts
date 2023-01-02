import { Component, OnInit } from '@angular/core';
import { GestionService } from 'src/app/Services/gestion/gestion.service';
import { FamillProduit } from '../famille-produit/famille-produit.component';

export class SousFamille{
  public id_SousFamille:string;
  public designation:string;
  public sousFamille	:FamillProduit;
}
@Component({
  selector: 'app-sous-famille',
  templateUrl: './sous-famille.component.html',
  styleUrls: ['./sous-famille.component.scss']
})
export class SousFamilleComponent implements OnInit {

  sousFamille :SousFamille;
  sousFamilles:SousFamille[];
  famille : FamillProduit[];
  constructor(private gestionService :GestionService) {
    this.sousFamille = new SousFamille()
   }
   onSubmit() {
    this.gestionService.saveSousFam(this.sousFamille).subscribe( data => {
        
        console.log(data);
        this.ngOnInit();
      });
  }
   onDelete(id : string) {
    this.gestionService.deleteSous(id).subscribe( data => {
        
      console.log(id);
      this.ngOnInit();
    },
    error => {
      alert("Error in delete");
      console.log(error);
    });
    
  }
  ngOnInit(): void {
    this.gestionService.findAllSouFam().subscribe(data => {
      this.sousFamilles = data;
    })
    this.gestionService.findAllFamille().subscribe(data => {
      this.famille = data;
    })
  }
}
