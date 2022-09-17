import { Component, OnInit } from '@angular/core';
import { MinierService } from 'src/app/Services/Minier/minier.service';

export class Donnee{
  public id_Donnee:string;
  public substance : string;
  public methode : string;
  public duree : string;
  public periode : string;
  public quantite : string;
}
@Component({
  selector: 'app-donnees-extraction',
  templateUrl: './donnees-extraction.component.html',
  styleUrls: ['./donnees-extraction.component.scss']
})
export class DonneesExtractionComponent implements OnInit {

  donnee :Donnee;
  donnees :Donnee[];
  constructor(private minierService :MinierService) { 
    this.donnee = new Donnee();
  }

  onSubmit() {
    this.minierService.save(this.donnee).subscribe( data => {
        
      console.log(data);
      this.ngOnInit();
    });
    
  }
  ngOnInit(): void {
    this.minierService.findAll().subscribe(data => {
      this.donnees = data;
    })
  }
}
