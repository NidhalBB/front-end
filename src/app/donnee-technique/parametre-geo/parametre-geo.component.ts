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
    this.progress = 0;
    
    this.currentFile = this.selectedFiles.item(1);
    this.parametreService.upload(this.currentFile, this.parametreGeo).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.message = event.body.message;
        }
      },
      err => {
        this.progress = 0;
        this.message = 'Could not upload the file!';
        this.currentFile = undefined;
      });

    this.selectedFiles = undefined;
  }
  ngOnInit(): void {
  }

}
