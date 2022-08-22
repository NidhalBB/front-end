import { Component, OnInit } from '@angular/core';
import { GestionService } from 'src/app/Services/gestion/gestion.service';
import { SousFamille } from '../sous-famille/sous-famille.component';

export class FamillProduit{
  public id_famille:string;
    public designation_famille:string;
    public sousfamille: Array<SousFamille>;
}
@Component({
  selector: 'app-famille-produit',
  templateUrl: './famille-produit.component.html',
  styleUrls: ['./famille-produit.component.scss']
})
export class FamilleProduitComponent implements OnInit {
familles : FamillProduit[];
famille:FamillProduit;
  constructor(private gestionService :GestionService) {
    this.famille = new FamillProduit()
   }
   onSubmit() {
    this.gestionService.saveFamille(this.famille).subscribe( data => {
        
      console.log(data);
      this.ngOnInit();
    });
    
  }
  ngOnInit(): void {
    this.gestionService.findAllFamille().subscribe(data => {
      this.familles = data;
    })
  }

}
