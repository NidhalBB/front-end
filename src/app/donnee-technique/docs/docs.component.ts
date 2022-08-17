import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

export class Docs{
  public id : string;
  public note :File;
  public planSituation :File;
  public engagement :File;
  public permisRecherche :File;
  public date : Date ;
  public etat:string;
} 
@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss']
})
export class DocsComponent implements OnInit {
  selectedFiles: FileList;
  currentFile: File;
  fileInfos: Observable<any>;
  doc : Docs;
  docs: Docs[];
  i=0;
  constructor() {
    this.doc = new Docs();
   }
  onSubmit() {
  }
  selectFile(event) {
    this.selectedFiles = event.target.files[this.i];
    this.i++;
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
    console.log(formData.getAll('file'));
     this.selectedFiles = undefined;
    
  }}

  ngOnInit(): void {
  }

}
