import { Component, OnInit } from '@angular/core';
import { RhService } from 'src/app/Services/rh/rh.service';

export class Coordonne{
  public id_Coordonne:string;
  public matricule : string;
  public collaborateur : string;
  public telephone : string;
  public email : string;
  public adresse : string;
  public situation : string;
}
@Component({
  selector: 'app-gcoordonne',
  templateUrl: './gcoordonne.component.html',
  styleUrls: ['./gcoordonne.component.scss']
})
export class GcoordonneComponent implements OnInit {

  coordonne :Coordonne;
  coordonnes :Coordonne[];
  constructor(private rhService :RhService) {
    this.coordonne = new Coordonne();
   }

   onSubmit() {
    this.rhService.saveCoordonne(this.coordonne).subscribe( data => {
        
      console.log(data);
      this.ngOnInit();
    });
    
  }
  ngOnInit(): void {
    this.rhService.findAllCoordonne().subscribe(data => {
      this.coordonnes = data;
    })
  }

}
