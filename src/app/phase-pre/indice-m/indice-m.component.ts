import { Component, OnInit } from '@angular/core';
import { EchantillonService } from 'src/app/echantillon-services.service';
import { Echantillon ,Labo} from '../echantillon/echantillon.component';

@Component({
  selector: 'app-indice-m',
  templateUrl: './indice-m.component.html',
  styleUrls: ['./indice-m.component.scss']
})
export class IndiceMComponent implements OnInit {

  echantillons: Echantillon[];
  echantillon : Echantillon;
  labo : Labo;
  labos : Labo[];
  constructor(private echantillonService: EchantillonService) {
    this.echantillon = new Echantillon();
    this.labo = new Labo();
   }
   
  Edit(id: string) {
  }
  ngOnInit() {
this.echantillonService.findAll().subscribe(data => {
  this.echantillons = data;
});
console.log(this.echantillon);
}
}
