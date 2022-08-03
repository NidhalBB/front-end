import { Component, OnInit } from '@angular/core';
import { ParametreService } from '../../Services/parametre/parametre-services.service';

export class ParametreGeo {
  public id:string;
    public substance:string;
    public superficie:number;
    public formationExploite:string;
    public epaisseur:number;
    public age:string;
    public densite:number;
    public couleur:string;
    public volume:number;
    public reserve:number;
    public carte:File;
}

@Component({
  selector: 'app-parametre-geo',
  templateUrl: './parametre-geo.component.html',
  styleUrls: ['./parametre-geo.component.scss']
})
export class ParametreGeoComponent implements OnInit {

  parametreGeos: ParametreGeo[];
  parametreGeo : ParametreGeo;
  constructor(private parametreService: ParametreService) {
    this.parametreGeo = new ParametreGeo();
   }

   onSubmit() {
    this.parametreService.save(this.parametreGeo, this.parametreGeo.carte).subscribe();
    console.log(this.parametreGeo);
  }
  ngOnInit(): void {
  }

}
