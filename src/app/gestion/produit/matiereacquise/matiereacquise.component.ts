import { Component, OnInit } from '@angular/core';
import { GestionService } from 'src/app/Services/gestion/gestion.service';
import { FamillProduit } from '../famille-produit/famille-produit.component';
import { SousFamille } from '../sous-famille/sous-famille.component';

export class MatiereAcquise{
  private id:string;
  private designation:string;
  private prix:number;
  private quantite:number;
  private famille:FamillProduit;
  private souFamille:SousFamille;
}
@Component({
  selector: 'app-matiereacquise',
  templateUrl: './matiereacquise.component.html',
  styleUrls: ['./matiereacquise.component.scss']
})
export class MatiereacquiseComponent implements OnInit {
  matiereAcquise :MatiereAcquise;
  matieresAcquise : MatiereAcquise[];
  sousFamilles:SousFamille[];
  famille : FamillProduit[];
  constructor(private gestionService :GestionService) {
    this.matiereAcquise = new MatiereAcquise()
   }
   onSubmit() {
    this.gestionService.saveMatiere(this.matiereAcquise).subscribe(
      data => {
        
        console.log(data);
        this.ngOnInit();
      },
      error => {
        alert("Error Adding");
        console.log(error);
      }
    );
  }
  ngOnInit(): void {
    this.gestionService.findAllMatiere().subscribe(data => {
      this.matieresAcquise = data;
    });
     this.gestionService.findAllSouFam().subscribe(data => {
      this.sousFamilles = data;
    })
    this.gestionService.findAllFamille().subscribe(data => {
      this.famille = data;
    })
  }

}
