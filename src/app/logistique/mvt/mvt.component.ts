import { Component, OnInit } from '@angular/core';
import { Fournisseur } from 'src/app/achat/fournisseur/fournisseur.component';
import { Client } from 'src/app/commercial/client/client.component';
import { CommercialService } from 'src/app/Services/Commercial/commercial.service';
import { RhService } from 'src/app/Services/rh/rh.service';

export class Mouvement{
  public id_Mouvement:string;
  public num : string;
  public date : Date;
  public code : string;
  public client : string;
  public fournisseur : string;
  public type : string;
  public quantite : string;
  public cout : string;
}
@Component({
  selector: 'app-mvt',
  templateUrl: './mvt.component.html',
  styleUrls: ['./mvt.component.scss']
})
export class MvtComponent implements OnInit {

  mvt : Mouvement;
  mvts:Mouvement[];
  clients :Client[];
  fournisseurs : Fournisseur[];
  constructor(private rhService :RhService , private commercialService :CommercialService ) { 
    this.mvt = new Mouvement();
  }

  onSubmit() {
    this.rhService.saveMvt(this.mvt).subscribe( data => {
        
      console.log(data);
      this.ngOnInit();
    });
    
  }
  ngOnInit(): void {
    this.rhService.findAllMvt().subscribe(data => {
      this.mvts = data;
    })
    this.commercialService.findAll().subscribe(data => {
      this.clients = data;
    })
    this.commercialService.findAllFournisseur().subscribe(data => {
      this.fournisseurs = data;
    })
  }

}
