import { Component, OnInit } from '@angular/core';
import { EchantillonService } from '../../echantillon-services.service';

export class Labo{
  public id_labo:string;
    public nom:string;
    public address:string;
    public echantillon:Echantillon;
}

export class Echantillon {
  public id:string;
    public numEchantillon:number;
    public tauxSi:number;
    public tauxFe:number;
    public quantite:number;
    public date:Date;
    public ag:File;
    public labo:Labo;

    public SetLabo (labo :Labo):void{
        this.labo = labo;
      }
      public SetAg (ag :File):void{
        this.ag = ag;
      }
}



@Component({
  selector: 'app-echantillon',
  templateUrl: './echantillon.component.html',
  styleUrls: ['./echantillon.component.scss']
})
export class EchantillonComponent implements OnInit {

  echantillons: Echantillon[];
  echantillon : Echantillon;
  labo:Labo;
  constructor(private echantillonService: EchantillonService) {
    this.echantillon = new Echantillon();
    this.labo = new Labo();
   }

   onSubmit() {
    this.echantillonService.save(this.echantillon,this.labo).subscribe();
    
  }

  ngOnInit(): void {
  }

}
