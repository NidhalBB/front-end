import { Component, OnInit } from '@angular/core';
import { GestionService } from 'src/app/Services/gestion/gestion.service';

export class Labo{
  public id_labo:string;
    public designation:string;
    public address:string;
    public prix:number;
    public tele:number;
} 

@Component({
  selector: 'app-labo',
  templateUrl: './labo.component.html',
  styleUrls: ['./labo.component.scss']
})
export class LaboComponent implements OnInit {
  labos: Labo[];
  labo : Labo;
  constructor(private gestionService :GestionService) {
    this.labo = new Labo();
   }
   onSubmit() {
    this.gestionService.save(this.labo).subscribe( data => {
        
      console.log(data);
      this.ngOnInit();
    });
    
  }
  ngOnInit(): void {
    this.gestionService.findAll().subscribe(data => {
      this.labos = data;
    })
  }

}
