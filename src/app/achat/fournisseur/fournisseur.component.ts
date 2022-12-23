import { Component, OnInit } from '@angular/core';
import { CommercialService } from 'src/app/Services/Commercial/commercial.service';

export class Fournisseur{
  public id:string;
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
  saveSuccess: boolean;
  constructor(private commercialService :CommercialService) {
    this.fournisseur = new Fournisseur();
   }
   onSubmit() {
    this.commercialService.saveFournisseur(this.fournisseur).subscribe( data => {
        
      console.log(data);
       if (data){
            this.saveSuccess = true;
        }
        else{
            this.saveSuccess = false;
        }
      this.ngOnInit();
    });
    
  }
  onDelete(id : string) {
    console.log(id);
    this.commercialService.deleteFournisseur(id).subscribe( data => {
        
      console.log(id);
      this.ngOnInit();
    });}
  ngOnInit(): void {
    this.commercialService.findAllFournisseur().subscribe(data => {
      this.fournisseurs = data;
    })
  }
}
