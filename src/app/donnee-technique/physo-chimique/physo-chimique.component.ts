import { Component, OnInit } from '@angular/core';
import { ParametreService } from 'src/app/Services/parametre/parametre-services.service';

export class Chimique {
  public id : string;
  public ph:number;
  public si:number;
  public al:number;
  public autres:number;
  public drx:File;
  public sable:number;
  public ag:File;
}

@Component({
  selector: 'app-physo-chimique',
  templateUrl: './physo-chimique.component.html',
  styleUrls: ['./physo-chimique.component.scss']
})
export class PhysoChimiqueComponent implements OnInit {
chimique: Chimique;
chimiques : Chimique[];
  constructor(private parametreService: ParametreService) { 
    this.chimique = new Chimique();
  }
  show(param_div_id) {
    document.getElementById('main_place').innerHTML = document.getElementById(param_div_id).innerHTML;
  }
  show1(param_div_id) {
    document.getElementById('main_place').innerHTML = document.getElementById(param_div_id).innerHTML;
  }
   show2(param_div_id) {
    document.getElementById('main_place').innerHTML = document.getElementById(param_div_id).innerHTML;
  }
  ngOnInit(): void {
  }

}
