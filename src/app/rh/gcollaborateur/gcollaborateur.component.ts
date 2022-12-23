import { Component, OnInit } from '@angular/core';
import { RhService } from 'src/app/Services/rh/rh.service';

export class Collaborateur{
  public id_collaborateur:string;
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
  cola :Collaborateur;
  collaborateurs :Collaborateur[];
  constructor(private rhService :RhService) {
    this.collaborateur = new Collaborateur();
    
   }
   onSubmit() {
    this.rhService.save(this.collaborateur).subscribe( data => {
      
      console.log(this.cola);
      this.ngOnInit();
    });
    
  }
  go(id : string){
    document.getElementById('main').innerHTML = document.getElementById('operation1').innerHTML;
    this.cola = new Collaborateur();
    this.rhService.find(id).subscribe( data => {
      
      this.cola = data;
      console.log(data);
      this.ngOnInit();
    });
    console.log(id);
    return this.cola;
  }
  onDelete(id : string) {
    console.log(id);
    this.rhService.delete(id).subscribe( data => {
        
      console.log(id);
      this.ngOnInit();
    });}
  ngOnInit(): void {
    this.rhService.findAll().subscribe(data => {
      this.collaborateurs = data;
    })
  }

}
