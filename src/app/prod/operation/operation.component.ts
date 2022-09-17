import { Component, OnInit } from '@angular/core';
import { Equipement } from 'src/app/machines/equipements/equipements.component';
import { Poste } from 'src/app/rh/gpostes/gpostes.component';
import { EquipementsService } from 'src/app/Services/equipements/equipements.service';
import { MinierService } from 'src/app/Services/Minier/minier.service';
import { RhService } from 'src/app/Services/rh/rh.service';

export class Operation{
  public id_Operation:string;
  public designation : string;
  public machine : string;
  public temps : string;
  public type : string;
  public poste : string;
}
@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.scss']
})
export class OperationComponent implements OnInit {

  operation : Operation;
  operations : Operation[];
  equipements : Equipement[];
  postes :Poste[];
  constructor(private minierService :MinierService  , private equipementsService: EquipementsService , private rhService :RhService) {
    this.operation = new Operation();
   }
  show(param_div_id) {
    
    document.getElementById('main_place').innerHTML = document.getElementById(param_div_id).innerHTML;
  }
  onSubmit() {
    this.minierService.saveO(this.operation).subscribe( data => {
        
      console.log(data);
      this.ngOnInit();
    });
    
  }
  ngOnInit(): void {
    this.minierService.findAllO().subscribe(data => {
      this.operations = data;
    })
    this.equipementsService.findAll().subscribe(data => {
      this.equipements = data;
    })
    this.rhService.findAllPoste().subscribe(data => {
      this.postes = data;
    })
  }

}
