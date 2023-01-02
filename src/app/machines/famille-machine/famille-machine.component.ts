import { Component, OnInit } from '@angular/core';
import { EquipementsService } from 'src/app/Services/equipements/equipements.service';


export class FamillMachine{
  public id:string; 
    public designation:string;
}
@Component({
  selector: 'app-famille-machine',
  templateUrl: './famille-machine.component.html',
  styleUrls: ['./famille-machine.component.scss']
})
export class FamilleMachineComponent implements OnInit {
  familles : FamillMachine[];
  famille:FamillMachine;
    constructor(private equipementsService :EquipementsService) {
      this.famille = new FamillMachine()
     }
     onSubmit() {
      this.equipementsService.saveFamille(this.famille).subscribe( data => {
          
        console.log(data);
        this.ngOnInit();
      });
      
    }
    onDelete(id : string) {
      this.equipementsService.deleteFam(id).subscribe( data => {
          
        console.log(id);
        this.ngOnInit();
      });
      
    }
    ngOnInit(): void {
      this.equipementsService.findAllFamille().subscribe(data => {
        this.familles = data;
      })
    }

}
