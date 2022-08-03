import { Component, OnInit } from '@angular/core';
import { EquipementsService } from 'src/app/Services/equipements/equipements.service';
import { ActivatedRoute, Router } from '@angular/router';

export class Equipement {
  public id:string;
    public nom:string;
    public longueur:number;
    public largeur:number;
    public hauteur:number;
    public capacite:number;
    public puissanceElectrique:number;
    public vitess:number;
    public epaisseur:number;
    public debit:number;
    public inclinaison:number;
    public pression:number;
    public profondeur:number;
    public diametre:number;
    public granulometrie:number;
}

@Component({
  selector: 'app-equipements',
  templateUrl: './equipements.component.html',
  styleUrls: ['./equipements.component.scss']
})
export class EquipementsComponent implements OnInit {

  showMsg: boolean = false;
  equipements: Equipement[];
  equipement : Equipement;
  constructor(private equipementsService: EquipementsService , private router:Router) {
    this.equipement = new Equipement();
   }

   onSubmit() {
    this.equipementsService.save(this.equipement).subscribe(data => {
        
        this.showMsg= true;
        this.router.navigate(['/dashboard'])
     .then(() => {
    window.location.reload(); })
     }
    );}
add(){
    let row = document.createElement('div');  
      row.className = 'row';
      row.innerHTML = `
      <div class="form-group">
              <label for="exampleInputName1">Substance</label>
              <input type="text" [(ngModel)]="parametreGeo.substance" class="form-control" id="substance" name="substance" >
            </div>`;
      document.querySelector('.showInputField').appendChild(row);
  }
  ngOnInit(): void {
    this.equipementsService.findAll().subscribe(data => {
      this.equipements = data;
    });
    
  }

}
