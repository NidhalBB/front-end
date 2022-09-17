import { Component, OnInit } from '@angular/core';
import { RhService } from 'src/app/Services/rh/rh.service';
import { Collaborateur } from '../gcollaborateur/gcollaborateur.component';

export class Competance{
  public id_Competance:string;
  public matricule : string;
  public collaborateur : string;
  public description : string;
  public type : string;
}
@Component({
  selector: 'app-gcompetance',
  templateUrl: './gcompetance.component.html',
  styleUrls: ['./gcompetance.component.scss']
})
export class GcompetanceComponent implements OnInit {
  competance :Competance;
  competances :Competance[];
  collaborateurs :Collaborateur[];
  constructor(private rhService :RhService) {
    this.competance = new Competance();
   }

   onSubmit() {
    this.rhService.saveCompetance(this.competance).subscribe( data => {
        
      console.log(data);
      this.ngOnInit();
    });
    
  }
  ngOnInit(): void {
    this.rhService.findAllCompetance().subscribe(data => {
      this.competances = data;
    })
    this.rhService.findAll().subscribe(data => {
      this.collaborateurs = data;
    })
  }

}
