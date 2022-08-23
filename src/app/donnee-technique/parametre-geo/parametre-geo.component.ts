import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ParametreService } from '../../Services/parametre/parametre-services.service';

export class ParametreGeo {
  public id:string;
    public substance:string;
    public superficie:number;
    public formationExploite:string;
    public epaisseur:number;
    public age:string;
    public densite:number;
    public couleur:string;
    public volume:number;
    public reserve:number;
    public carte:File;
}

@Component({
  selector: 'app-parametre-geo',
  templateUrl: './parametre-geo.component.html',
  styleUrls: ['./parametre-geo.component.scss']
})
export class ParametreGeoComponent implements OnInit {

  parametreGeos: ParametreGeo[];
  parametreGeo : ParametreGeo;

  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';
  i = 0;

  fileInfos: Observable<any>;
  constructor(private parametreService: ParametreService) {
    this.parametreGeo = new ParametreGeo();
   } 

   onSubmit() {
    this.parametreService.save(this.parametreGeo, this.parametreGeo.carte).subscribe();
    console.log(this.parametreGeo);
  }
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
  upload() {
    if (this.selectedFiles) {
      let file: File | null = null;
      const formData: FormData = new FormData();
   
      for (let i = 0; i < this.selectedFiles.length; i++) {
         file = this.selectedFiles.item(i);
         if (file) {
            formData.append(`file`, file);
         }
      }
      for ( var key in this.parametreGeo ) { 
        formData.append(key, this.parametreGeo[key]);
    }
      

    this.parametreService.upload(formData).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error),
    });
     this.selectedFiles = undefined;
    
  }}
  ngOnInit(): void {
  this.parametreService.findAll().subscribe(data => {
      this.parametreGeos = data;
    })
  }
}