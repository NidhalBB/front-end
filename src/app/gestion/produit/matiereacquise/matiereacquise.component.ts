import { Component, OnInit } from '@angular/core';
import { Fournisseur } from 'src/app/achat/fournisseur/fournisseur.component';
import { CommercialService } from 'src/app/Services/Commercial/commercial.service';
import { GestionService } from 'src/app/Services/gestion/gestion.service';
import { FamillProduit } from '../famille-produit/famille-produit.component';
import { SousFamille } from '../sous-famille/sous-famille.component';

export class MatiereAcquise{
  public id_Matiere:string;
  public designation:string;
  public prix:number;
  public quantite:number;
  public fournisseur:Fournisseur;
  public matiereAcquise:FamillProduit;
  public mAcquise:SousFamille;
}
@Component({
  selector: 'app-matiereacquise',
  templateUrl: './matiereacquise.component.html',
  styleUrls: ['./matiereacquise.component.scss']
})
export class MatiereacquiseComponent implements OnInit {
  matiereAcquise :MatiereAcquise;
  matieresAcquise : MatiereAcquise[];
  fournisseurs : Fournisseur[];
  sousFamilles:SousFamille[];
  famille : FamillProduit[];
  constructor(private gestionService :GestionService , private commercialService :CommercialService) {
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
   onDelete(id : string) {
    this.gestionService.deleteMatiere(id).subscribe( data => {
        
      console.log(id);
      this.ngOnInit();
    },
    error => {
      alert("Error in delete");
      console.log(error);
    });
    
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
    this.commercialService.findAllFournisseur().subscribe(data => {
      this.fournisseurs = data;
    })
  }

}
