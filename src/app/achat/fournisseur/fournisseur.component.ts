import { Component, OnInit } from '@angular/core';
import { CommercialService } from 'src/app/Services/Commercial/commercial.service';

export class Fournisseur{
  public idFournisseur:string;
    public designation:string;
    public adresse:string;
    public tele:number;
}

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.scss']
})
export class FournisseurComponent implements OnInit {
  fournisseur : Fournisseur;
  fournisseurs : Fournisseur[];
  constructor(private commercialService :CommercialService) {
    this.fournisseur = new Fournisseur();
   }
   onSubmit() {
    this.commercialService.saveFournisseur(this.fournisseur).subscribe( data => {
        
      console.log(data);
      this.ngOnInit();
    });
    
  }
  ngOnInit(): void {
    this.commercialService.findAllFournisseur().subscribe(data => {
      this.fournisseurs = data;
    })
  }
}
