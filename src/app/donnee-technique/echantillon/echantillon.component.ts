import { Component, OnInit } from '@angular/core';
import { Labo } from 'src/app/gestion/labo/labo.component';
import { GestionService } from 'src/app/Services/gestion/gestion.service';
import { EchantillonService } from '../../echantillon-services.service';

export class Echantillon {
  public id:string;
    public numEchantillon:number;
    public tauxSi:number;
    public tauxFe:number;
    public quantite:number;
    public dateP:Date;
    public dateE:Date;
    public ag:File;
    public labo:Labo
}

@Component({
  selector: 'app-echantillon',
  templateUrl: './echantillon.component.html',
  styleUrls: ['./echantillon.component.scss']
})
export class EchantillonComponent implements OnInit {

  echantillons: Echantillon[];
  echantillon : Echantillon;
  labos:Labo[];
  constructor(private echantillonService: EchantillonService , private gestionService:GestionService) {
    this.echantillon = new Echantillon();
   }
   onSubmit() {
    this.echantillonService.save(this.echantillon).subscribe();
  }
  ngOnInit(): void {
    this.echantillonService.findAll().subscribe(data => {
      this.echantillons = data;
    })
    this.gestionService.findAll().subscribe(data => {
      this.labos = data;
    })
  }
}