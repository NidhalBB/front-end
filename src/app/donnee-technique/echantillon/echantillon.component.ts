import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Labo } from 'src/app/gestion/labo/labo.component';
import { GestionService } from 'src/app/Services/gestion/gestion.service';
import { EchantillonService } from '../../echantillon-services.service';

export class Echantillon {
  public id:string;
    public numEchantillon:number;
    public tauxSi:number;
    public tauxFe:number;
    public quantite:number;
    public dateP:Date;
    public dateE:Date;
    public ag:File;
    public designationlabo:string
}

@Component({
  selector: 'app-echantillon',
  templateUrl: './echantillon.component.html',
  styleUrls: ['./echantillon.component.scss']
})
export class EchantillonComponent implements OnInit {

  echantillons: Echantillon[];
  echantillon : Echantillon;
  Editechantillon : Echantillon;
  labos:Labo[];
  constructor(private echantillonService: EchantillonService , private gestionService:GestionService) {
    this.echantillon = new Echantillon();
    this.Editechantillon = new Echantillon();
   }
   selectedFiles: FileList;
   currentFile: File;
   progress = 0;
   message = '';
   i = 0;
 
   fileInfos: Observable<any>;
   selectFile(event) {
     this.selectedFiles = event.target.files;
   }
   show(param_div_id , id : string) {
    this.Editechantillon = new Echantillon();
    this.Editechantillon.id = id;
    this.echantillonService.find(this.Editechantillon.id).subscribe(data => {
      this.Editechantillon = data;
      console.log(this.Editechantillon);
    });
    document.getElementById('main_place').innerHTML = document.getElementById(param_div_id).innerHTML;
  }
   onEdit(id : string ){

    if (this.selectedFiles) {
      let file: File | null = null;
      const formData: FormData = new FormData();
   
      for (let i = 0; i < this.selectedFiles.length; i++) {
         file = this.selectedFiles.item(i);
         if (file) {
            formData.append(`file`, file);
         }
      }
      for ( var key in this.echantillon ) {
        formData.append(key, this.echantillon[key]);
    }
      

    this.echantillonService.upload(formData, id).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error),
    });
     this.selectedFiles = undefined;
    
  } 
   }
   onSubmit() {
    this.echantillonService.save(this.echantillon).subscribe(data => {
        
      console.log(data);
      this.ngOnInit();
    });
  }
  onShow(id:string){
    
    
  }
  
  ngOnInit(): void {
    this.echantillonService.findAll().subscribe(data => {
      this.echantillons = data;
    })
    this.gestionService.findAll().subscribe(data => {
      this.labos = data;
    })
  }
}