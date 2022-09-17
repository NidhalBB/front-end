import { Component, OnInit } from '@angular/core';
import { RhService } from 'src/app/Services/rh/rh.service';

export class Poste{
  public id_Postes:string;
  public poste : string;
  public description : string;
}
@Component({
  selector: 'app-gpostes',
  templateUrl: './gpostes.component.html',
  styleUrls: ['./gpostes.component.scss']
})
export class GpostesComponent implements OnInit {

  poste :Poste;
  postes :Poste[];
  constructor(private rhService :RhService) {
    this.poste = new Poste();
   }

   onSubmit() {
    this.rhService.savePoste(this.poste).subscribe( data => {
        
      console.log(data);
      this.ngOnInit();
    });
    
  }
  ngOnInit(): void {
    this.rhService.findAllPoste().subscribe(data => {
      this.postes = data;
    })
  }
}
