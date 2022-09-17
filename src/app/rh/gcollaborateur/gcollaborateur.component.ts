import { Component, OnInit } from '@angular/core';
import { RhService } from 'src/app/Services/rh/rh.service';

export class Collaborateur{
  public id_Collaborateur:string;
  public num : string;
  public date : Date;
  public nom : string;
  public prenom : string;
  public cnss : string;
  public lieu : string;
  public active : string;
  public genre : string;
}
@Component({
  selector: 'app-gcollaborateur',
  templateUrl: './gcollaborateur.component.html',
  styleUrls: ['./gcollaborateur.component.scss']
})
export class GcollaborateurComponent implements OnInit {

  collaborateur :Collaborateur;
  collaborateurs :Collaborateur[];
  constructor(private rhService :RhService) {
    this.collaborateur = new Collaborateur();
   }
   onSubmit() {
    this.rhService.save(this.collaborateur).subscribe( data => {
        
      console.log(data);
      this.ngOnInit();
    });
    
  }
  ngOnInit(): void {
    this.rhService.findAll().subscribe(data => {
      this.collaborateurs = data;
    })
  }

}
