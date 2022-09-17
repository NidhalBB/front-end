import { Component, OnInit } from '@angular/core';
import { Equipement } from 'src/app/machines/equipements/equipements.component';
import { EquipementsService } from 'src/app/Services/equipements/equipements.service';
import { MinierService } from 'src/app/Services/Minier/minier.service';
import { Operation } from '../operation/operation.component';

export class Process{
  public id_Process:string;
  public designation : string;
  public num : string;
  public operation : string;
}
@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss']
})
export class ProcessComponent implements OnInit {

  process : Process;
  proc : Process[];
  operations : Operation[];
  constructor(private minierService :MinierService) {
    this.process = new Process();
   }

   onSubmit() {
    this.minierService.saveP(this.process).subscribe( data => {
        
      console.log(data);
      this.ngOnInit();
    });
    
  }
  ngOnInit(): void {
    this.minierService.findAllP().subscribe(data => {
      this.proc = data;
    })
    
    this.minierService.findAllO().subscribe(data => {
      this.operations = data;
    })
  }

}
