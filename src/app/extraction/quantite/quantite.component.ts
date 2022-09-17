import { Component, OnInit } from '@angular/core';
import { MinierService } from 'src/app/Services/Minier/minier.service';

export class Quantite{
  public id_Donnee:string;
  public substance : string;
  public nom : string;
  public valeur : string;
  public droit : string;
  public quantite : string;
}
@Component({
  selector: 'app-quantite',
  templateUrl: './quantite.component.html',
  styleUrls: ['./quantite.component.scss']
})
export class QuantiteComponent implements OnInit {

  quantite :Quantite ;
  quantites :Quantite[] ;
  constructor(private minierService :MinierService) { 
    this.quantite = new Quantite();
  }

  onSubmit() {
    this.minierService.saveQ(this.quantite).subscribe( data => {
        
      console.log(data);
      this.ngOnInit();
    });
    
  }
  ngOnInit(): void {
    this.minierService.findAllQ().subscribe(data => {
      this.quantites = data;
    })
  }

}
